import {
  makeChooseCharacterController,
  makeChooseMopyController,
  makeGetInitialCharacterController,
  makeGetInitialMopyController,
} from '@application/controllers/choose';
import { chooseCharacterValidator } from '@application/controllers/choose/validators';
import {
  makeAuthMiddleware,
  makeContextUserMiddleware,
} from '@application/middlewares';
import { Http, ResourceMapper } from '@main/interfaces';

const chooseRoutes: ResourceMapper[] = [
  {
    endPoint: '/choose/character/initial',
    method: Http.Methods.get,
    controller: makeGetInitialCharacterController(),
    middlewares: [makeAuthMiddleware(), makeContextUserMiddleware()],
  },
  {
    endPoint: '/choose/character/initial',
    method: Http.Methods.post,
    controller: makeChooseCharacterController(),
    validators: [chooseCharacterValidator],
    middlewares: [makeAuthMiddleware(), makeContextUserMiddleware()],
  },
  {
    endPoint: '/choose/mopy/initial',
    method: Http.Methods.get,
    controller: makeGetInitialMopyController(),
    middlewares: [makeAuthMiddleware(), makeContextUserMiddleware()],
  },
  {
    endPoint: '/choose/mopy/initial',
    method: Http.Methods.post,
    controller: makeChooseMopyController(),
    middlewares: [makeAuthMiddleware(), makeContextUserMiddleware()],
  },
];

export { chooseRoutes };
