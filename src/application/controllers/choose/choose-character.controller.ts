import { AppError } from '@application/middlewares/errors';
import {
  ChooseCharactersService,
  makeChooseCharactersService,
} from '@application/services/choose';
import { ControllerContract } from '@domain/contracts';
import { Http } from '@main/interfaces';
import { UserCharacter } from 'aurorix-core';

export class ChooseCharacterController implements ControllerContract {
  constructor(
    private readonly chooseCharactersService: ChooseCharactersService,
  ) {}

  async handle(request: Http.Request): Promise<Http.Response<UserCharacter>> {
    try {
      const userCharacter = await this.chooseCharactersService.perform({
        user_id: request.user.id,
        alias_name_blueprint: request.body.alias_name_blueprint,
      });

      return {
        statusCode: Http.StatusCode.CREATED,
        data: userCharacter,
      };
    } catch (e: any) {
      throw new AppError({
        message: 'Failed in choose character',
        category: 'FAILED_IN_GET_CHOOSE_CHARACTER',
        status: Http.StatusCode.BAD_REQUEST,
        messages: e.message,
      });
    }
  }
}

/* istanbul ignore next */
export const makeChooseCharacterController = (): ChooseCharacterController => {
  return new ChooseCharacterController(makeChooseCharactersService());
};
