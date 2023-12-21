import { ICharacterBlueprintRepository } from '@domain/interfaces';
import { IUserCharacterRepository } from '@domain/interfaces/user-character.repository';
import { UserCharacter } from '@domain/models';
import {
  ChooseCharactersParams,
  ChooseCharactersUseCase,
} from '@domain/use-cases';
import {
  makeCharacterBlueprintRepository,
  makeUserCharacterRepository,
} from '@infra/mongodb/repos';
import { v4 as uuid } from 'uuid';

export class ChooseCharactersService implements ChooseCharactersUseCase {
  constructor(
    private readonly characterBlueprintRepository: ICharacterBlueprintRepository,
    private readonly userCharacterRepository: IUserCharacterRepository,
  ) {}

  async perform(params: ChooseCharactersParams): Promise<UserCharacter> {
    const haveSomeCharacter = await this.userCharacterRepository.list({
      filter: { user_id: params.user_id },
    });

    if (haveSomeCharacter.length >= 1)
      throw new Error('User has already chosen their initial character');

    const character = await this.characterBlueprintRepository.get({
      filter: { alias_name: params.alias_name_blueprint },
    });

    character.id = uuid();
    character.alias_name = 'char-01';

    return await this.userCharacterRepository.create({
      user_id: params.user_id,
      character,
    });
  }
}

/* istanbul ignore next */
export const makeChooseCharactersService = (): ChooseCharactersService => {
  return new ChooseCharactersService(
    makeCharacterBlueprintRepository(),
    makeUserCharacterRepository(),
  );
};
