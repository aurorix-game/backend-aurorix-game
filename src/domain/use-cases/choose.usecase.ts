import { Repository } from '@domain/contracts';
import { Character } from '@domain/models';

export interface GetInicialCharactersUseCase {
  perform(params: Repository.ParamsGet): Promise<Character.Model[]>;
}
