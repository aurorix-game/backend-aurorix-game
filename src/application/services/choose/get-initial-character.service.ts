import { Character, TypeValues } from '@domain/models';
import { GetInicialCharactersUseCase } from '@domain/use-cases';

export class GetInicialCharactersService
  implements GetInicialCharactersUseCase
{
  constructor() {}
  perform(): Character.Model[] {
    return [
      {
        alias_name: 'blueprint-fire',
        sprite: {
          url: 'https://aurorix.s3.us-east-1.amazonaws.com/sprites/characters-initial/fire-char-3x4.png',
          columns: 3,
          rows: 2,
        },
        attributes: [
          {
            label: 'Mopy Capture',
            type_value: TypeValues.PERCENTAGE,
            value: 500,
            style: {
              color: '#FF52A0',
              icon: 'https://aurorix.s3.amazonaws.com/sprites/icons/capture-mopy.png',
            },
          },
          {
            label: 'Expertise',
            type_value: TypeValues.PERCENTAGE,
            value: 700,
            style: {
              color: '#F8C43E',
              icon: 'https://aurorix.s3.amazonaws.com/sprites/icons/expertise.png',
            },
          },
          {
            label: 'Element Tunning - Fire',
            type_value: TypeValues.PERCENTAGE,
            value: 5500,
            style: {
              color: '#FF6536',
              icon: 'https://aurorix.s3.amazonaws.com/sprites/icons/fire.png',
            },
          },
          {
            label: 'Element Tunning - Grass',
            type_value: TypeValues.PERCENTAGE,
            value: 700,
            style: {
              color: '#69CD42',
              icon: 'https://aurorix.s3.amazonaws.com/sprites/icons/grass.png',
            },
          },
        ],
      },
    ];
  }
}

/* istanbul ignore next */
export const makeGetInicialCharactersService =
  (): GetInicialCharactersService => {
    return new GetInicialCharactersService();
  };
