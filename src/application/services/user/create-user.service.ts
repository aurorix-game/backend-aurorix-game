import { BcryptService, makeBcryptService } from '@application/services/crypto';
import { IUserRepository } from '@domain/interfaces';
import { CreateUserUseCase } from '@domain/use-cases';
import { makeUserRepository } from '@infra/mongodb/repos';
import { User } from 'aurorix-core';

export class CreateUserService implements CreateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly bcryptService: BcryptService,
  ) {}

  async perform(user: User & { password: string }): Promise<User> {
    user.password = await this.bcryptService.hash(user.password);
    return await this.userRepository.create(user);
  }
}

/* istanbul ignore next */
export const makeCreateUserService = (): CreateUserService => {
  return new CreateUserService(makeUserRepository(), makeBcryptService());
};
