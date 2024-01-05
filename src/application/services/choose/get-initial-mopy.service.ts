import { Repository } from '@domain/contracts';
import { IMopyBlueprintRepository } from '@domain/interfaces';
import { GetInicialMopysUseCase } from '@domain/use-cases';
import { makeMopyBlueprintRepository } from '@infra/mongodb/repos';
import { mopysBlueprintSeed } from '@infra/mongodb/seeds';
import { Mopy } from 'aurorix-core';

export class GetInicialMopysService implements GetInicialMopysUseCase {
  constructor(
    private readonly mopyBlueprintRepository: IMopyBlueprintRepository,
  ) {}

  async perform(params: Repository.ParamsGet): Promise<Mopy.Model[]> {
    const mopys = await this.mopyBlueprintRepository.list(params);

    if (mopys.length !== mopysBlueprintSeed.length) {
      await this.mopyBlueprintRepository.createBulk(mopysBlueprintSeed);
      return await this.mopyBlueprintRepository.list(params);
    }
    return mopys;
  }
}

/* istanbul ignore next */
export const makeGetInicialMopysService = (): GetInicialMopysService => {
  return new GetInicialMopysService(makeMopyBlueprintRepository());
};
