import { Repository } from '@domain/contracts';
import { ICharacterBlueprintRepository } from '@domain/interfaces';
import { MongodbAdapter } from '@infra/adapters';
import { characterSchema } from '@infra/mongodb/schemas';
import { Character } from 'aurorix-core';

export class CharacterBlueprintRepository
  implements ICharacterBlueprintRepository
{
  public static tableName = 'character-blueprint';
  private readonly databaseAdapter: MongodbAdapter<Character.Model>;

  constructor(databaseAdapter: MongodbAdapter<Character.Model>) {
    this.databaseAdapter = databaseAdapter;
  }

  async get(params: Repository.ParamsGet): Promise<Character.Model> {
    return await this.databaseAdapter.get(params);
  }

  async list(params: Repository.ParamsList = {}): Promise<Character.Model[]> {
    const data = await this.databaseAdapter.list(params);

    return data.map((blueprint) => {
      return blueprint;
    });
  }

  async createBulk(data: Character.Model[]): Promise<void> {
    await this.databaseAdapter.createBulk(data);
  }
}

/* istanbul ignore next */
export const makeCharacterBlueprintRepository =
  (): CharacterBlueprintRepository => {
    const mongoDbAdapter = new MongodbAdapter<Character.Model>(
      characterSchema,
      CharacterBlueprintRepository.tableName,
    );
    return new CharacterBlueprintRepository(mongoDbAdapter);
  };
