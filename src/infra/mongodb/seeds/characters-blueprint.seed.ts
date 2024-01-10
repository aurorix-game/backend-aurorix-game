import { Character, TypeValues } from 'aurorix-core';
import { InitialCharacters } from 'aurorix-core';

export const charactersBlueprintsSeed: Character.Model[] = [
  {
    id: 'e862d225-06cc-4c84-9bc1-cbb1d324474a',
    alias_name: InitialCharacters.Fire,
    sprite: {
      url: 'https://aurorix.s3.us-east-1.amazonaws.com/sprites/characters-initial/fire-char-3x4.png',
      columns: 3,
      rows: 4,
    },
    att: {
      mopy_capture: {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.MOPY_CAPTURE,
        value: 500,
      },
      expertise: {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.EXPERTISE,
        value: 700,
      },
    },
    element_tunning: [
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.ELEMENT_TUNNING_FIRE,
        value: 5500,
      },
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.ELEMENT_TUNNING_GRASS,
        value: 700,
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
    att: {
      mopy_capture: {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.MOPY_CAPTURE,
        value: 300,
      },
      expertise: {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.EXPERTISE,
        value: 800,
      },
    },
    element_tunning: [
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.ELEMENT_TUNNING_WATER,
        value: 6600,
      },
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.ELEMENT_TUNNING_GRASS,
        value: 400,
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
    att: {
      mopy_capture: {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.MOPY_CAPTURE,
        value: 600,
      },
      expertise: {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.EXPERTISE,
        value: 400,
      },
    },
    element_tunning: [
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.ELEMENT_TUNNING_SHADOW,
        value: 3400,
      },
      {
        type_value: TypeValues.PERCENTAGE,
        type: Character.TypeAttributes.ELEMENT_TUNNING_GRASS,
        value: 2400,
      },
    ],
  },
];
