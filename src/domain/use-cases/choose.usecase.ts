import { Repository } from '@domain/contracts';
import { Character, Mopy, UserCharacter, UserMopy } from 'aurorix-core';

export interface GetInicialCharactersUseCase {
  perform(params: Repository.ParamsGet): Promise<Character.Model[]>;
}

export interface GetInicialMopysUseCase {
  perform(params: Repository.ParamsGet): Promise<Mopy.Model[]>;
}

export interface ChooseCharactersParams {
  user_id: string;
  alias_name_blueprint: string;
}

export interface ChooseCharactersUseCase {
  perform(params: ChooseCharactersParams): Promise<UserCharacter>;
}

export interface ChooseMopyParams {
  user_id: string;
  alias_name_blueprint: string;
}

export interface ChooseMopysUseCase {
  perform(params: ChooseMopyParams): Promise<UserMopy>;
}
