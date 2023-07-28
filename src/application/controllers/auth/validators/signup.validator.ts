import { AppError } from '@application/middlewares/errors';
import { ValidatorContract } from '@domain/contracts';
import { Http } from '@main/interfaces';
import * as Yup from 'yup';

const body = Yup.object().shape({
  nickname: Yup.string().required(),
  email: Yup.string().lowercase().email().required(),
  password: Yup.string().min(8).max(32).required(),
});

export class SignupValidator implements ValidatorContract {
  async handle(request: Http.Request): Promise<void | Error> {
    try {
      await body.validate(request.body, {
        abortEarly: false,
      });
    } catch (e) {
      throw new AppError({
        message: 'Validation failed',
        category: 'FAILED_IN_VALIDATION_SIGNUP',
        status: Http.StatusCode.BAD_REQUEST,
        messages: e,
      });
    }
  }
}

export const signupValidator = new SignupValidator();
