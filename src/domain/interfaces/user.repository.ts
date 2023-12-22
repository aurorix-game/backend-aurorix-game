import { Repository, RepositoryContract } from '@domain/contracts';
import { User } from 'aurorix-core';

export interface IUserRepository extends RepositoryContract<User> {
  get(params: Repository.ParamsGet): Promise<User>;
  create(data: User): Promise<User>;
  list(params: Repository.ParamsList): Promise<User[]>;
}
