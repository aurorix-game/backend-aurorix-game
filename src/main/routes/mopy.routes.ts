import { makeGetUserMopyController } from '@application/controllers/mopy';
import {
  makeAuthMiddleware,
  makeContextUserMiddleware,
} from '@application/middlewares';
import { Http, ResourceMapper } from '@main/interfaces';

const mopyRoutes: ResourceMapper[] = [
  {
    endPoint: '/mopy',
    method: Http.Methods.get,
    controller: makeGetUserMopyController(),
    middlewares: [makeAuthMiddleware(), makeContextUserMiddleware()],
  },
];

export { mopyRoutes };
