import { AppError } from '@application/middlewares/errors';
import {
  GetInicialCharactersService,
  makeGetInicialCharactersService,
} from '@application/services/choose';
import { ControllerContract } from '@domain/contracts';
import { Http } from '@main/interfaces';

export class ChooseCharacterController implements ControllerContract {
  constructor(
    private readonly getInicialCharacterService: GetInicialCharactersService,
  ) {}

  async handle(): Promise<Http.Response> {
    try {
      const characters = this.getInicialCharacterService.perform();
      return {
        statusCode: Http.StatusCode.OK,
        data: characters,
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
  return new ChooseCharacterController(makeGetInicialCharactersService());
};
