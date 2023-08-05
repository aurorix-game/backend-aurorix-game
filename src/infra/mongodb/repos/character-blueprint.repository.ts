import { Repository, RepositoryContract } from '@domain/contracts';
import { Character } from '@domain/models';
import { MongodbAdapter } from '@infra/adapters';
import { characterBlueprintSchema } from '@infra/mongodb/schemas';

export class CharacterBlueprintRepository
  implements RepositoryContract<Character.Model>
{
  public static tableName = 'character-blueprint';
  private readonly databaseAdapter: MongodbAdapter<Character.Model>;

  constructor(databaseAdapter: MongodbAdapter<Character.Model>) {
    this.databaseAdapter = databaseAdapter;
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
      characterBlueprintSchema,
      CharacterBlueprintRepository.tableName,
    );
    return new CharacterBlueprintRepository(mongoDbAdapter);
  };
