import { Repository, RepositoryContract } from '@domain/contracts';
import { Mopy } from 'aurorix-core';

export interface IMopyBlueprintRepository
  extends RepositoryContract<Mopy.Model> {
  list(params: Repository.ParamsList): Promise<Mopy.Model[]>;
  createBulk(data: Mopy.Model[]): Promise<void>;
  get: (params: Repository.ParamsGet) => Promise<Mopy.Model>;
}
