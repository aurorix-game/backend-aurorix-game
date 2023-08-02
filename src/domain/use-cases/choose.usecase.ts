import { Character } from '@domain/models';

export interface GetInicialCharactersUseCase {
  perform(): Promise<Character.Model>;
}
