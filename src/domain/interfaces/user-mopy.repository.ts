import { Repository, RepositoryContract } from '@domain/contracts';
import { UserMopy } from 'aurorix-core';

export interface IUserMopyRepository extends RepositoryContract<UserMopy> {
  list(params: Repository.ParamsList): Promise<UserMopy[]>;
  create: (data: UserMopy) => Promise<UserMopy>;
  get: (params: Repository.ParamsGet) => Promise<UserMopy>;
}
