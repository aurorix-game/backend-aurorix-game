import { UserMopy } from 'aurorix-core';

export interface GetUserMopysUseCase {
  perform(userId: string): Promise<UserMopy[]>;
}
