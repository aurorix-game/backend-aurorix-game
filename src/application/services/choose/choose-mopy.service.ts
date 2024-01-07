import {
  IMopyBlueprintRepository,
  IUserMopyRepository,
} from '@domain/interfaces';
import { ChooseMopyParams, ChooseMopysUseCase } from '@domain/use-cases';
import {
  makeMopyBlueprintRepository,
  makeUserMopyRepository,
} from '@infra/mongodb/repos';
import { UserMopy } from 'aurorix-core';
import { v4 as uuid } from 'uuid';

export class ChooseMopysService implements ChooseMopysUseCase {
  constructor(
    private readonly mopyBlueprintRepository: IMopyBlueprintRepository,
    private readonly userMopyRepository: IUserMopyRepository,
  ) {}

  async perform(params: ChooseMopyParams): Promise<UserMopy> {
    const haveSomeMopy = await this.userMopyRepository.list({
      filter: { user_id: params.user_id },
    });

    if (haveSomeMopy.length >= 1)
      throw new Error('User has already chosen their initial mopy');

    const mopy = await this.mopyBlueprintRepository.get({
      filter: { alias_name: params.alias_name_blueprint },
    });

    mopy.id = uuid();

    return await this.userMopyRepository.create({
      user_id: params.user_id,
      mopy,
    });
  }
}

/* istanbul ignore next */
export const makeChooseMopyService = (): ChooseMopysService => {
  return new ChooseMopysService(
    makeMopyBlueprintRepository(),
    makeUserMopyRepository(),
  );
};
