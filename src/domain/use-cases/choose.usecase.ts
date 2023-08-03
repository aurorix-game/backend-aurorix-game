import { Character } from '@domain/models';

export interface GetInicialCharactersUseCase {
  perform(): Character.Model[];
}
