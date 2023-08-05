import { Repository, RepositoryContract } from '@domain/contracts';
import { User } from '@domain/models';
import { MongodbAdapter } from '@infra/adapters';
import { userSchema } from '@infra/mongodb/schemas';

export class UserRepository implements RepositoryContract<User> {
  public static tableName = 'user';
  private readonly databaseAdapter: MongodbAdapter<User>;

  constructor(databaseAdapter: MongodbAdapter<User>) {
    this.databaseAdapter = databaseAdapter;
  }

  async create(data: User): Promise<User> {
    try {
      const { id, email, nickname } = await this.databaseAdapter.create(data);
      return { id, email, nickname };
    } catch (e: any) {
      if (e.code === 11000) throw new Error('Email or nickname already in use');
      throw e;
    }
  }

  async get(params: Repository.ParamsGet): Promise<User> {
    const user = await this.databaseAdapter.get(params);

    if (!user) throw new Error('User not found');

    return {
      id: user.id,
      nickname: user.nickname,
      email: user.email,
      password: user.password,
    };
  }

  async list(params: Repository.ParamsList = {}): Promise<User[]> {
    const data = await this.databaseAdapter.list(params);
    return data.map(({ id, email, nickname, password }) => {
      return { id, email, nickname, password };
    });
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
