import { PayloadToken } from '@domain/contracts';
import { TokenUseCase } from '@domain/use-cases';
import { makeTokenAdapter, TokenAdapter } from '@infra/adapters';

export class TokenService implements TokenUseCase {
  constructor(private readonly tokenAdapter: TokenAdapter) {}

  async generate(params: PayloadToken): Promise<string> {
    return await this.tokenAdapter.encode(params);
  }

  async decode(token: string): Promise<Record<any, any>> {
    return await this.tokenAdapter.decode(token);
  }

  async verify(token: string): Promise<boolean> {
    return await this.tokenAdapter.verify(token);
  }
}

/* istanbul ignore next */
export const makeTokenService = (): TokenService => {
  return new TokenService(makeTokenAdapter());
};
