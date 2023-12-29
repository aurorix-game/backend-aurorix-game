import { AppError } from '@application/middlewares/errors';
import {
  GetUserCharactersService,
  makeGetUserCharactersService,
} from '@application/services/character';
import { ControllerContract } from '@domain/contracts';
import { Http } from '@main/interfaces';
import { UserCharacter } from 'aurorix-core';

export class GetUserCharacterController implements ControllerContract {
  constructor(
    private readonly getUserCharactersService: GetUserCharactersService,
  ) {}

  async handle(request: Http.Request): Promise<Http.Response<UserCharacter[]>> {
    try {
      const userCharacter = await this.getUserCharactersService.perform(
        request.user.id,
      );

      return {
        statusCode: Http.StatusCode.OK,
        data: userCharacter,
      };
    } catch (e: any) {
      throw new AppError({
        message: 'Failed in get user characters',
        category: 'FAILED_IN_GET_USER_CHARACTERS',
        status: Http.StatusCode.BAD_REQUEST,
        messages: e.message,
      });
    }
  }
}

/* istanbul ignore next */
export const makeGetUserCharacterController =
  (): GetUserCharacterController => {
    return new GetUserCharacterController(makeGetUserCharactersService());
  };
