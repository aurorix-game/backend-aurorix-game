import { Repository } from '@domain/contracts';
import { IUserRepository } from '@domain/interfaces';
import { User } from '@domain/models';
import { MongodbAdapter } from '@infra/adapters';
import { userSchema } from '@infra/mongodb/schemas';

export class UserRepository implements IUserRepository {
  public static tableName = 'user';
  private readonly databaseAdapter: MongodbAdapter<User>;

  constructor(databaseAdapter: MongodbAdapter<User>) {
    this.databaseAdapter = databaseAdapter;
  }

  async create(data: User): Promise<User> {
    try {
      return await this.databaseAdapter.create(data);
    } catch (e: any) {
      if (e.code === 11000) throw new Error('Email or nickname already in use');
      throw e;
    }
  }

  async get(params: Repository.ParamsGet): Promise<User> {
    const user = await this.databaseAdapter.get(params);

    if (!user) throw new Error('User not found');

    return user;
  }

  async list(params: Repository.ParamsList = {}): Promise<User[]> {
    return await this.databaseAdapter.list(params);
  }
}

/* istanbul ignore next */
export const makeUserRepository = (): UserRepository => {
  const mongoDbAdapter = new MongodbAdapter<User>(
    userSchema,
    UserRepository.tableName,
  );
  return new UserRepository(mongoDbAdapter);
};
