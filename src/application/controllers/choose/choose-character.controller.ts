import { AppError } from '@application/middlewares/errors';
import { ControllerContract } from '@domain/contracts';
import { Http } from '@main/interfaces';

export class ChooseCharacterController implements ControllerContract {
  constructor() {}

  async handle(): Promise<Http.Response> {
    try {
      return {
        statusCode: Http.StatusCode.OK,
      };
    } catch (e: any) {
      throw new AppError({
        message: 'Failed in get initial character',
        category: 'FAILED_IN_GET_INITIAL_CHARACTER',
        status: Http.StatusCode.BAD_REQUEST,
        messages: e.message,
      });
    }
  }
}

/* istanbul ignore next */
export const makeChooseCharacterController = (): ChooseCharacterController => {
  return new ChooseCharacterController();
};
