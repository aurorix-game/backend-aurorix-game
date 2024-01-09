import { AppError } from '@application/middlewares/errors';
import {
  GetUserMopysService,
  makeGetUserMopysService,
} from '@application/services/mopy';
import { ControllerContract } from '@domain/contracts';
import { Http } from '@main/interfaces';
import { UserMopy } from 'aurorix-core';

export class GetUserMopyController implements ControllerContract {
  constructor(private readonly getUserMopysService: GetUserMopysService) {}

  async handle(request: Http.Request): Promise<Http.Response<UserMopy[]>> {
    try {
      const userMopys = await this.getUserMopysService.perform(request.user.id);

      return {
        statusCode: Http.StatusCode.OK,
        data: userMopys,
      };
    } catch (e: any) {
      throw new AppError({
        message: 'Failed in get user mopys',
        category: 'FAILED_IN_GET_USER_MOPYS',
        status: Http.StatusCode.BAD_REQUEST,
        messages: e.message,
      });
    }
  }
}

/* istanbul ignore next */
export const makeGetUserMopyController = (): GetUserMopyController => {
  return new GetUserMopyController(makeGetUserMopysService());
};
