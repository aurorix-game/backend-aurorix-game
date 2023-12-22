import { Character, TypeValues } from 'aurorix-core';
import { CHARACTER_ATTRIBUTE_ICONS, InitialCharacters } from 'aurorix-core';

export const charactersBlueprintsSeed: Character.Model[] = [
  {
    id: 'e862d225-06cc-4c84-9bc1-cbb1d324474a',
    alias_name: InitialCharacters.Fire,
    sprite: {
      url: 'https://aurorix.s3.us-east-1.amazonaws.com/sprites/characters-initial/fire-char-3x4.png',
      columns: 3,
      rows: 4,
    },
    attributes: [
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.MOPY_CAPTURE,
        value: 500,
        style: {
          color: '#FF52A0',
          icon: CHARACTER_ATTRIBUTE_ICONS[
            Character.TypeAttributes.MOPY_CAPTURE
          ],
        },
      },
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.EXPERTISE,
        value: 700,
        style: {
          color: '#F8C43E',
          icon: CHARACTER_ATTRIBUTE_ICONS[Character.TypeAttributes.EXPERTISE],
        },
      },
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.ELEMENT_TUNNING_FIRE,
        value: 5500,
        style: {
          color: '#FF6536',
          icon: CHARACTER_ATTRIBUTE_ICONS[
            Character.TypeAttributes.ELEMENT_TUNNING_FIRE
          ],
        },
      },
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.ELEMENT_TUNNING_GRASS,
        value: 700,
        style: {
          color: '#69CD42',
          icon: CHARACTER_ATTRIBUTE_ICONS[
            Character.TypeAttributes.ELEMENT_TUNNING_GRASS
          ],
        },
      },
    ],
  },
  {
    id: '59ce3b6b-d672-4d6d-b0c7-c21a3db8405d',
    alias_name: InitialCharacters.Water,
    sprite: {
      url: 'https://aurorix.s3.us-east-1.amazonaws.com/sprites/characters-initial/water-char-3x4.png',
      columns: 3,
      rows: 4,
    },
    attributes: [
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.MOPY_CAPTURE,
        value: 300,
        style: {
          color: '#FF52A0',
          icon: CHARACTER_ATTRIBUTE_ICONS[
            Character.TypeAttributes.MOPY_CAPTURE
          ],
        },
      },
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.EXPERTISE,
        value: 800,
        style: {
          color: '#F8C43E',
          icon: CHARACTER_ATTRIBUTE_ICONS[Character.TypeAttributes.EXPERTISE],
        },
      },
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.ELEMENT_TUNNING_WATER,
        value: 6600,
        style: {
          color: '#57A4FF',
          icon: CHARACTER_ATTRIBUTE_ICONS[
            Character.TypeAttributes.ELEMENT_TUNNING_WATER
          ],
        },
      },
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.ELEMENT_TUNNING_GRASS,
        value: 400,
        style: {
          color: '#69CD42',
          icon: CHARACTER_ATTRIBUTE_ICONS[
            Character.TypeAttributes.ELEMENT_TUNNING_GRASS
          ],
        },
      },
    ],
  },
  {
    id: '196eebb6-af62-4449-abd7-c02d1d35ddaa',
    alias_name: InitialCharacters.Shadow,
    sprite: {
      url: 'https://aurorix.s3.us-east-1.amazonaws.com/sprites/characters-initial/shadow-char-3x4.png',
      columns: 3,
      rows: 4,
    },
    attributes: [
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.MOPY_CAPTURE,
        value: 600,
        style: {
          color: '#FF52A0',
          icon: CHARACTER_ATTRIBUTE_ICONS[
            Character.TypeAttributes.MOPY_CAPTURE
          ],
        },
      },
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.EXPERTISE,
        value: 400,
        style: {
          color: '#F8C43E',
          icon: CHARACTER_ATTRIBUTE_ICONS[Character.TypeAttributes.EXPERTISE],
        },
      },
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.ELEMENT_TUNNING_SHADOW,
        value: 3400,
        style: {
          color: '#8048FF',
          icon: CHARACTER_ATTRIBUTE_ICONS[
            Character.TypeAttributes.ELEMENT_TUNNING_SHADOW
          ],
        },
      },
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.ELEMENT_TUNNING_GRASS,
        value: 2400,
        style: {
          color: '#69CD42',
          icon: CHARACTER_ATTRIBUTE_ICONS[
            Character.TypeAttributes.ELEMENT_TUNNING_GRASS
          ],
        },
      },
    ],
  },
];
