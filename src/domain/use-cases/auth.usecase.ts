import { PayloadToken } from '@domain/contracts';
import { User } from 'aurorix-core';

export interface TokenUseCase {
  generate(params: PayloadToken): Promise<string>;
  decode(token: string): Promise<Record<any, any>>;
  verify(token: string): Promise<boolean>;
}

export interface BasicAuthLoginUseCase {
  perform(basic: string): Promise<User>;
}
