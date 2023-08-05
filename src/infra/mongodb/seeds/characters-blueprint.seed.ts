import { Character, TypeValues } from '@domain/models';

export const charactersBlueprintsSeed: Character.Model[] = [
  {
    id: 'e862d225-06cc-4c84-9bc1-cbb1d324474a',
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
  {
    id: '59ce3b6b-d672-4d6d-b0c7-c21a3db8405d',
    alias_name: 'blueprint-water',
    sprite: {
      url: 'https://aurorix.s3.us-east-1.amazonaws.com/sprites/characters-initial/water-char-3x4.png',
      columns: 3,
      rows: 2,
    },
    attributes: [
      {
        label: 'Mopy Capture',
        type_value: TypeValues.PERCENTAGE,
        value: 300,
        style: {
          color: '#FF52A0',
          icon: 'https://aurorix.s3.amazonaws.com/sprites/icons/capture-mopy.png',
        },
      },
      {
        label: 'Expertise',
        type_value: TypeValues.PERCENTAGE,
        value: 800,
        style: {
          color: '#F8C43E',
          icon: 'https://aurorix.s3.amazonaws.com/sprites/icons/expertise.png',
        },
      },
      {
        label: 'Element Tunning - Water',
        type_value: TypeValues.PERCENTAGE,
        value: 6600,
        style: {
          color: '#57A4FF',
          icon: 'https://aurorix.s3.amazonaws.com/sprites/icons/water.png',
        },
      },
      {
        label: 'Element Tunning - Grass',
        type_value: TypeValues.PERCENTAGE,
        value: 400,
        style: {
          color: '#69CD42',
          icon: 'https://aurorix.s3.amazonaws.com/sprites/icons/grass.png',
        },
      },
    ],
  },
];
