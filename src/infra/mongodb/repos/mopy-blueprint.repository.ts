import { Repository } from '@domain/contracts';
import { IMopyBlueprintRepository } from '@domain/interfaces';
import { MongodbAdapter } from '@infra/adapters';
import { mopySchema } from '@infra/mongodb/schemas';
import { Mopy } from 'aurorix-core';

export class MopyBlueprintRepository implements IMopyBlueprintRepository {
  public static tableName = 'mopy-blueprint';
  private readonly databaseAdapter: MongodbAdapter<Mopy.Model>;

  constructor(databaseAdapter: MongodbAdapter<Mopy.Model>) {
    this.databaseAdapter = databaseAdapter;
  }

  async get(params: Repository.ParamsGet): Promise<Mopy.Model> {
    return await this.databaseAdapter.get(params);
  }

  async list(params: Repository.ParamsList = {}): Promise<Mopy.Model[]> {
    const data = await this.databaseAdapter.list(params);

    return data.map((blueprint) => {
      return blueprint;
    });
  }

  async createBulk(data: Mopy.Model[]): Promise<void> {
    await this.databaseAdapter.createBulk(data);
  }
}

/* istanbul ignore next */
export const makeMopyBlueprintRepository = (): MopyBlueprintRepository => {
  const mongoDbAdapter = new MongodbAdapter<Mopy.Model>(
    mopySchema,
    MopyBlueprintRepository.tableName,
  );
  return new MopyBlueprintRepository(mongoDbAdapter);
};
