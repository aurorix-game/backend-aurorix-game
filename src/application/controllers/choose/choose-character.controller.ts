import { AppError } from '@application/middlewares/errors';
import {
  ChooseCharactersService,
  makeChooseCharactersService,
} from '@application/services/choose/choose-character.service';
import { ControllerContract } from '@domain/contracts';
import { Http } from '@main/interfaces';

export class ChooseCharacterController implements ControllerContract {
  constructor(
    private readonly chooseCharactersService: ChooseCharactersService,
  ) {}

  async handle(request: Http.Request): Promise<Http.Response> {
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
