import { IUserMopyRepository } from '@domain/interfaces';
import { GetUserMopysUseCase } from '@domain/use-cases';
import { makeUserMopyRepository } from '@infra/mongodb/repos';
import { UserMopy } from 'aurorix-core';

export class GetUserMopysService implements GetUserMopysUseCase {
  constructor(private readonly userMopyRepository: IUserMopyRepository) {}

  async perform(userId: string): Promise<UserMopy[]> {
    return await this.userMopyRepository.list({
      filter: { user_id: userId },
    });
  }
}

/* istanbul ignore next */
export const makeGetUserMopysService = (): GetUserMopysService => {
  return new GetUserMopysService(makeUserMopyRepository());
};
