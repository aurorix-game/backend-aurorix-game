import {
  makeChooseCharacterController,
  makeChooseMopyController,
} from '@application/controllers/choose';
import { Http, ResourceMapper } from '@main/interfaces';

const chooseRoutes: ResourceMapper[] = [
  {
    endPoint: '/choose/character/initial',
    method: Http.Methods.get,
    controller: makeChooseCharacterController(),
  },
  {
    endPoint: '/choose/mopy/initial',
    method: Http.Methods.get,
    controller: makeChooseMopyController(),
  },
];

export { chooseRoutes };
