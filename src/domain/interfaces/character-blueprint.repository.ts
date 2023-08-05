import { Repository, RepositoryContract } from '@domain/contracts';
import { Character } from '@domain/models';

export interface ICharacterBlueprintRepository
  extends RepositoryContract<Character.Model> {
  list(params: Repository.ParamsList): Promise<Character.Model[]>;
}
