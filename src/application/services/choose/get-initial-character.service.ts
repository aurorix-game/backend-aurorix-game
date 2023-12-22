import { Repository } from '@domain/contracts';
import { ICharacterBlueprintRepository } from '@domain/interfaces';
import { GetInicialCharactersUseCase } from '@domain/use-cases';
import { makeCharacterBlueprintRepository } from '@infra/mongodb/repos';
import { charactersBlueprintsSeed } from '@infra/mongodb/seeds';
import { Character } from 'aurorix-core';

export class GetInicialCharactersService
  implements GetInicialCharactersUseCase
{
  constructor(
    private readonly characterBlueprintRepository: ICharacterBlueprintRepository,
  ) {}
  async perform(params: Repository.ParamsGet): Promise<Character.Model[]> {
    const characters = await this.characterBlueprintRepository.list(params);

    if (characters.length !== charactersBlueprintsSeed.length) {
      await this.characterBlueprintRepository.createBulk(
        charactersBlueprintsSeed,
      );
      return await this.characterBlueprintRepository.list(params);
    }
    return characters;
  }
}

/* istanbul ignore next */
export const makeGetInicialCharactersService =
  (): GetInicialCharactersService => {
    return new GetInicialCharactersService(makeCharacterBlueprintRepository());
  };
