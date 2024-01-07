import { AppError } from '@application/middlewares/errors';
import {
  ChooseMopysService,
  makeChooseMopyService,
} from '@application/services/choose';
import { ControllerContract } from '@domain/contracts';
import { Http } from '@main/interfaces';

export class ChooseMopyController implements ControllerContract {
  constructor(private readonly chooseMopysService: ChooseMopysService) {}

  async handle(request: Http.Request): Promise<Http.Response> {
    try {
      const userMopy = await this.chooseMopysService.perform({
        user_id: request.user.id,
        alias_name_blueprint: request.body.alias_name_blueprint,
      });

      return {
        statusCode: Http.StatusCode.CREATED,
        data: userMopy,
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
  return new ChooseMopyController(makeChooseMopyService());
};
