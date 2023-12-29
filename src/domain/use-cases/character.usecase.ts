import { UserCharacter } from 'aurorix-core';

export interface GetUserCharactersUseCase {
  perform(userId: string): Promise<UserCharacter[]>;
}
