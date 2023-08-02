import { AppError } from '@application/middlewares/errors';
import { ControllerContract } from '@domain/contracts';
import { Http } from '@main/interfaces';

export class ChooseMopyController implements ControllerContract {
  constructor() {}

  async handle(): Promise<Http.Response> {
    try {
      return {
        statusCode: Http.StatusCode.OK,
      };
    } catch (e: any) {
      throw new AppError({
        message: 'Failed in get initial mopy',
        category: 'FAILED_IN_GET_INITIAL_MOPY',
        status: Http.StatusCode.BAD_REQUEST,
        messages: e.message,
      });
    }
  }
}

/* istanbul ignore next */
export const makeChooseMopyController = (): ChooseMopyController => {
  return new ChooseMopyController();
};
