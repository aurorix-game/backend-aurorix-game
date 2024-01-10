import { AppError } from '@application/middlewares/errors';
import { ValidatorContract } from '@domain/contracts';
import { Http } from '@main/interfaces';
import { INITIAL_CHARACTERS } from 'aurorix-core';
import * as Yup from 'yup';

const body = Yup.object().shape({
  alias_name_blueprint: Yup.string().oneOf(INITIAL_CHARACTERS).required(),
});

export class ChooseCharacterValidator implements ValidatorContract {
  async handle(request: Http.Request): Promise<void | Error> {
    try {
      await body.validate(request.body, {
        abortEarly: false,
      });
    } catch (e) {
      throw new AppError({
        message: 'Validation failed',
        category: 'FAILED_IN_VALIDATION_CHOOSE_CHARACTER',
        status: Http.StatusCode.BAD_REQUEST,
        messages: e,
      });
    }
  }
}

export const chooseCharacterValidator = new ChooseCharacterValidator();
