import { AppError } from '@application/middlewares/errors';
import { makeTokenService, TokenService } from '@application/services/auth';
import { MiddlewareContract } from '@domain/contracts';
import { Http } from '@main/interfaces';

export class ContextUserMiddleware implements MiddlewareContract {
  constructor(private readonly tokenService: TokenService) {}

  async handle(request: Http.Request): Promise<void> {
    const { headers } = request;

    try {
      const [, token] = String(headers.authorization).split(/[ ]/g);

      const decode = await this.tokenService.decode(token);

      request.user = {
        id: decode.id as string,
        email: decode.email,
        nickname: decode.nickname,
      };
    } catch (e: any) {
      throw new AppError({
        message: 'Failed in get user context request',
        category: 'FAILED_IN_AUTH',
        status: Http.StatusCode.BAD_REQUEST,
        messages: e.message,
      });
    }
  }
}

/* istanbul ignore next */
export const makeContextUserMiddleware = (): ContextUserMiddleware => {
  return new ContextUserMiddleware(makeTokenService());
};
