import { expressAdapter } from '@infra/adapters';
import { logger } from '@main/config/logger';
import { ResourceMapper } from '@main/interfaces';
import { authRoutes } from '@main/routes/auth.routes';
import { characterRoutes } from '@main/routes/character.routes';
import { chooseRoutes } from '@main/routes/choose.routes';
import { healthCheckRoutes } from '@main/routes/health-check.routes';
import { mopyRoutes } from '@main/routes/mopy.routes';
import Table from 'cli-table';
import { Express, Router } from 'express';

function logRequest(req: { id: string; method: string; path: string }) {
  logger.info(
    `ID: [${req.id}]`.blue +
      ' | ' +
      `${req.method.toLocaleUpperCase()}`.yellow +
      ' | ' +
      `${req.path}`.green,
  );
}

export const mappingRoutes = (app: Express): void => {
  const resources: ResourceMapper[] = [
    ...authRoutes,
    ...chooseRoutes,
    ...characterRoutes,
    ...mopyRoutes,
    ...healthCheckRoutes,
  ];
  const router = Router();

  const table = new Table({
    head: ['METHOD'.blue, 'END-POINT'.blue],
    colWidths: [10, 50],
    style: { compact: true, border: ['red'] },
  });

  resources.forEach((item) => {
    table.push([item.method.toLocaleUpperCase().yellow, item.endPoint]);
  });

  // eslint-disable-next-line no-console
  console.log(table.toString());

  resources.forEach((resource) => {
    const { method, endPoint } = resource;
    router[`${method}`](endPoint, (req, res, next) => {
      logRequest(req);
      expressAdapter.adapt(resource, req, res, next);
    });
  });

  app.use(router);
};
