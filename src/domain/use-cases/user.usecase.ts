import { Repository } from '@domain/contracts';
import { User } from 'aurorix-core';

export interface CreateUserUseCase {
  perform(user: User): Promise<User>;
}

export interface GetUserUseCase {
  perform(params: Repository.ParamsGet): Promise<User>;
}

export interface ListUserUseCase {
  perform(params: Repository.ParamsList): Promise<User[]>;
}
