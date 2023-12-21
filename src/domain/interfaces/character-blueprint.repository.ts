import { Repository, RepositoryContract } from '@domain/contracts';
import { Character } from '@domain/models';

export interface ICharacterBlueprintRepository
  extends RepositoryContract<Character.Model> {
  list(params: Repository.ParamsList): Promise<Character.Model[]>;
  createBulk(data: Character.Model[]): Promise<void>;
  get: (params: Repository.ParamsGet) => Promise<Character.Model>;
}
