import { Repository, RepositoryContract } from '@domain/contracts';
import { UserCharacter } from '@domain/models';

export interface IUserCharacterRepository
  extends RepositoryContract<UserCharacter> {
  list(params: Repository.ParamsList): Promise<UserCharacter[]>;
  create: (data: UserCharacter) => Promise<UserCharacter>;
  get: (params: Repository.ParamsGet) => Promise<UserCharacter>;
}
