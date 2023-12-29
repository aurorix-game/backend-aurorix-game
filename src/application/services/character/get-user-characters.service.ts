import { IUserCharacterRepository } from '@domain/interfaces/user-character.repository';
import { GetUserCharactersUseCase } from '@domain/use-cases';
import { makeUserCharacterRepository } from '@infra/mongodb/repos';
import { UserCharacter } from 'aurorix-core';

export class GetUserCharactersService implements GetUserCharactersUseCase {
  constructor(
    private readonly userCharacterRepository: IUserCharacterRepository,
  ) {}

  async perform(userId: string): Promise<UserCharacter[]> {
    return await this.userCharacterRepository.list({
      filter: { user_id: userId },
    });
  }
}

/* istanbul ignore next */
export const makeGetUserCharactersService = (): GetUserCharactersService => {
  return new GetUserCharactersService(makeUserCharacterRepository());
};
