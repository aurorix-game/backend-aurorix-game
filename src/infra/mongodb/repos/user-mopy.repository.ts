import { Repository } from '@domain/contracts';
import { IUserMopyRepository } from '@domain/interfaces';
import { MongodbAdapter } from '@infra/adapters';
import { userMopySchema } from '@infra/mongodb/schemas';
import { UserMopy } from 'aurorix-core';

export class UserMopyRepository implements IUserMopyRepository {
  public static tableName = 'user-mopy';
  private readonly databaseAdapter: MongodbAdapter<UserMopy>;

  constructor(databaseAdapter: MongodbAdapter<UserMopy>) {
    this.databaseAdapter = databaseAdapter;
  }

  async list(params: Repository.ParamsList = {}): Promise<UserMopy[]> {
    const data = await this.databaseAdapter.list(params);

    return data.map((blueprint) => {
      return blueprint;
    });
  }

  async create(data: UserMopy): Promise<UserMopy> {
    return await this.databaseAdapter.create(data);
  }

  async get(params: Repository.ParamsGet): Promise<UserMopy> {
    const user = await this.databaseAdapter.get(params);

    if (!user) throw new Error('UserMopy not found');

    return user;
  }
}

/* istanbul ignore next */
export const makeUserMopyRepository = (): UserMopyRepository => {
  const mongoDbAdapter = new MongodbAdapter<UserMopy>(
    userMopySchema,
    UserMopyRepository.tableName,
  );
  return new UserMopyRepository(mongoDbAdapter);
};
