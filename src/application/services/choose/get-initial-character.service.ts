import { Repository } from '@domain/contracts';
import { ICharacterBlueprintRepository } from '@domain/interfaces';
import { Character } from '@domain/models';
import { GetInicialCharactersUseCase } from '@domain/use-cases';
import { makeCharacterBlueprintRepository } from '@infra/mongodb/repos';

export class GetInicialCharactersService
  implements GetInicialCharactersUseCase
{
  constructor(
    private readonly characterBlueprintRepository: ICharacterBlueprintRepository,
  ) {}
  async perform(params: Repository.ParamsGet): Promise<Character.Model[]> {
    return await this.characterBlueprintRepository.list(params);
  }
}

/* istanbul ignore next */
export const makeGetInicialCharactersService =
  (): GetInicialCharactersService => {
    return new GetInicialCharactersService(makeCharacterBlueprintRepository());
  };
