import { AppError } from '@application/middlewares/errors';
import {
  BasicAuthLoginService,
  makeBasicAuthLoginService,
  makeTokenService,
  TokenService,
} from '@application/services/auth';
import { ControllerContract } from '@domain/contracts';
import { Http } from '@main/interfaces';

export class LoginController implements ControllerContract {
  constructor(
    private readonly basicAuthLoginService: BasicAuthLoginService,
    private readonly tokenService: TokenService,
  ) {}

  async handle(request: Http.Request): Promise<Http.Response> {
    const { headers } = request;

    try {
      const user = await this.basicAuthLoginService.perform(
        headers.authorization,
      );

      const access_token = await this.tokenService.generate(user.email);

      return {
        statusCode: Http.StatusCode.OK,
        data: { access_token },
      };
    } catch (e: any) {
      throw new AppError({
        message: 'Failed in Login',
        category: 'FAILED_IN_BASIC_LOGIN',
        status: Http.StatusCode.BAD_REQUEST,
        messages: e.message,
      });
    }
  }
}

/* istanbul ignore next */
export const makeLoginController = (): LoginController => {
  return new LoginController(makeBasicAuthLoginService(), makeTokenService());
};
