import { TokenService } from '@application/services/auth';
import { PayloadToken } from '@domain/contracts';
import { makeUser } from '@domain/fakers';
import { TokenAdapter } from '@infra/adapters';

describe(TokenService, () => {
  let sut: TokenService;
  let tokenAdapter: TokenAdapter;

  const user = makeUser();
  const params_token: PayloadToken = {
    id: user.id as string,
    nickname: user.nickname,
    email: user.email,
  };

  beforeEach(() => {
    tokenAdapter = new TokenAdapter();
    sut = new TokenService(tokenAdapter);
  });

  it('should be generate token', async () => {
    const token = await sut.generate(params_token);

    expect(token.substring(0, 2)).toEqual('ey');
  });

  it('should be decode token', async () => {
    const token = await sut.generate(params_token);
    const decode = await sut.decode(token);

    expect(decode).toMatchObject(params_token);
    expect(decode).toHaveProperty('iat');
    expect(decode).toHaveProperty('exp');
  });

  it('should be decode token', async () => {
    const token = await sut.generate(params_token);

    const result = await sut.verify(token);

    expect(result).toBeTruthy();
  });
});
