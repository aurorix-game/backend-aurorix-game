import {
  makeChooseCharacterController,
  makeChooseMopyController,
} from '@application/controllers/choose';
import {
  makeAuthMiddleware,
  makeContextUserMiddleware,
} from '@application/middlewares';
import { Http, ResourceMapper } from '@main/interfaces';

const chooseRoutes: ResourceMapper[] = [
  {
    endPoint: '/choose/character/initial',
    method: Http.Methods.get,
    controller: makeChooseCharacterController(),
    middlewares: [makeAuthMiddleware(), makeContextUserMiddleware()],
  },
  {
    endPoint: '/choose/mopy/initial',
    method: Http.Methods.get,
    controller: makeChooseMopyController(),
    middlewares: [makeAuthMiddleware(), makeContextUserMiddleware()],
  },
];

export { chooseRoutes };
