import { AppError } from '@application/middlewares/errors';
import {
  GetInicialMopysService,
  makeGetInicialMopysService,
} from '@application/services/choose';
import { ControllerContract } from '@domain/contracts';
import { Http } from '@main/interfaces';
import { Mopy } from 'aurorix-core';

export class GetInitialMopyController implements ControllerContract {
  constructor(
    private readonly getInicialMopysService: GetInicialMopysService,
  ) {}

  async handle(): Promise<Http.Response<Mopy.Model[]>> {
    try {
      const mopys = await this.getInicialMopysService.perform({});

      return {
        statusCode: Http.StatusCode.OK,
        data: mopys,
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
export const makeGetInitialMopyController = (): GetInitialMopyController => {
  return new GetInitialMopyController(makeGetInicialMopysService());
};
