import { Repository } from '@domain/contracts';
import { Character, UserCharacter } from '@domain/models';

export interface GetInicialCharactersUseCase {
  perform(params: Repository.ParamsGet): Promise<Character.Model[]>;
}

export interface ChooseCharactersParams {
  user_id: string;
  alias_name_blueprint: string;
}

export interface ChooseCharactersUseCase {
  perform(params: ChooseCharactersParams): Promise<UserCharacter>;
}
