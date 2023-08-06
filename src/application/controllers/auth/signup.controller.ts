import { AppError } from '@application/middlewares/errors';
import { makeTokenService, TokenService } from '@application/services/auth';
import {
  CreateUserService,
  makeCreateUserService,
} from '@application/services/user';
import { ControllerContract } from '@domain/contracts';
import { Http } from '@main/interfaces';

export class SignupController implements ControllerContract {
  constructor(
    private readonly userCreateService: CreateUserService,
    private readonly tokenService: TokenService,
  ) {}

  async handle(request: Http.Request): Promise<Http.Response> {
    const { email, nickname, password } = request.body;

    try {
      const user = await this.userCreateService.perform({
        email,
        nickname,
        password,
      });

      const access_token = await this.tokenService.generate({
        id: user.id as string,
        nickname,
        email,
      });

      return {
        statusCode: Http.StatusCode.CREATED,
        data: { user, access_token },
      };
    } catch (e: any) {
      throw new AppError({
        message: 'Failed in Signup',
        category: 'FAILED_IN_SIGNUP',
        status: Http.StatusCode.BAD_REQUEST,
        messages: e.message,
      });
    }
  }
}

/* istanbul ignore next */
export const makeSignupController = (): SignupController => {
  return new SignupController(makeCreateUserService(), makeTokenService());
};
