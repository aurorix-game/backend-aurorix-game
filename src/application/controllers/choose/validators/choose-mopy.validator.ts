import { AppError } from '@application/middlewares/errors';
import { ValidatorContract } from '@domain/contracts';
import { Http } from '@main/interfaces';
import { INITIAL_MOPYS } from 'aurorix-core';
import * as Yup from 'yup';

const body = Yup.object().shape({
  alias_name_blueprint: Yup.string().oneOf(INITIAL_MOPYS).required(),
});

export class ChooseMopyValidator implements ValidatorContract {
  async handle(request: Http.Request): Promise<void | Error> {
    try {
      await body.validate(request.body, {
        abortEarly: false,
      });
    } catch (e) {
      throw new AppError({
        message: 'Validation failed',
        category: 'FAILED_IN_VALIDATION_CHOOSE_MOPY',
        status: Http.StatusCode.BAD_REQUEST,
        messages: e,
      });
    }
  }
}

export const chooseMopyValidator = new ChooseMopyValidator();
