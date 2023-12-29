import { makeGetUserCharacterController } from '@application/controllers/character';
import {
  makeAuthMiddleware,
  makeContextUserMiddleware,
} from '@application/middlewares';
import { Http, ResourceMapper } from '@main/interfaces';

const characterRoutes: ResourceMapper[] = [
  {
    endPoint: '/character',
    method: Http.Methods.get,
    controller: makeGetUserCharacterController(),
    middlewares: [makeAuthMiddleware(), makeContextUserMiddleware()],
  },
];

export { characterRoutes };
