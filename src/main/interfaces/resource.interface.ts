import {
  ControllerContract,
  MiddlewareContract,
  ValidatorContract,
} from '@domain/contracts';
import { Http } from '@main/interfaces';

export type ResourceMapper = {
  endPoint: string;
  method: Http.Methods;
  controller: ControllerContract;
  middlewares?: MiddlewareContract[];
  validators?: ValidatorContract[];
};
