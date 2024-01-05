import { Repository } from '@domain/contracts';
import { IUserCharacterRepository } from '@domain/interfaces';
import { MongodbAdapter } from '@infra/adapters';
import { userCharacterSchema } from '@infra/mongodb/schemas';
import { UserCharacter } from 'aurorix-core';

export class UserCharacterRepository implements IUserCharacterRepository {
  public static tableName = 'user-character';
  private readonly databaseAdapter: MongodbAdapter<UserCharacter>;

  constructor(databaseAdapter: MongodbAdapter<UserCharacter>) {
    this.databaseAdapter = databaseAdapter;
  }

  async list(params: Repository.ParamsList = {}): Promise<UserCharacter[]> {
    const data = await this.databaseAdapter.list(params);

    return data.map((blueprint) => {
      return blueprint;
    });
  }

  async create(data: UserCharacter): Promise<UserCharacter> {
    return await this.databaseAdapter.create(data);
  }

  async get(params: Repository.ParamsGet): Promise<UserCharacter> {
    const user = await this.databaseAdapter.get(params);

    if (!user) throw new Error('UserCharacter not found');

    return user;
  }
}

/* istanbul ignore next */
export const makeUserCharacterRepository = (): UserCharacterRepository => {
  const mongoDbAdapter = new MongodbAdapter<UserCharacter>(
    userCharacterSchema,
    UserCharacterRepository.tableName,
  );
  return new UserCharacterRepository(mongoDbAdapter);
};
