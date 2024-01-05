import { Elements, Mopy, TypeValues } from 'aurorix-core';

export const mopysBlueprintSeed: Mopy.Model[] = [
  {
    id: 'c769613a-9edd-416f-bebe-ffbc6cc4eb60',
    alias_name: '01-grass-mopy',
    sprite: {
      url: 'https://aurorix.s3.us-east-1.amazonaws.com/sprites/mopys/grass/01-grass-mopy-1x4.png',
      columns: 4,
      rows: 1,
    },
    att: {
      level: {
        value: 1,
        type_value: TypeValues.NUMERIC,
      },
      health: {
        max_value: 15,
        current_value: 15,
        type_value: TypeValues.NUMERIC,
      },
      attack: {
        value: 10,
        type_value: TypeValues.NUMERIC,
      },
      defense: {
        value: 5,
        type_value: TypeValues.PERCENTAGE,
      },
      elements: [Elements.GRASS],
      xp: {
        max_value: 15,
        current_value: 0,
        type_value: TypeValues.NUMERIC,
      },
    },
  },
  {
    id: '52244005-891b-4f5c-bc7a-9610ba557ae0',
    alias_name: '01-fire-mopy',
    sprite: {
      url: 'https://aurorix.s3.us-east-1.amazonaws.com/sprites/mopys/fire/01-fire-mopy-1x4.png',
      columns: 4,
      rows: 1,
    },
    att: {
      level: {
        value: 1,
        type_value: TypeValues.NUMERIC,
      },
      health: {
        max_value: 15,
        current_value: 15,
        type_value: TypeValues.NUMERIC,
      },
      attack: {
        value: 10,
        type_value: TypeValues.NUMERIC,
      },
      defense: {
        value: 5,
        type_value: TypeValues.PERCENTAGE,
      },
      elements: [Elements.FIRE],
      xp: {
        max_value: 15,
        current_value: 0,
        type_value: TypeValues.NUMERIC,
      },
    },
  },
  {
    id: '46ad9ec3-18c6-47da-abd3-f337dcb1ec3a',
    alias_name: '01-shadow-mopy',
    sprite: {
      url: 'https://aurorix.s3.us-east-1.amazonaws.com/sprites/mopys/shadow/01-shadow-mopy-1x4.png',
      columns: 4,
      rows: 1,
    },
    att: {
      level: {
        value: 1,
        type_value: TypeValues.NUMERIC,
      },
      health: {
        max_value: 15,
        current_value: 15,
        type_value: TypeValues.NUMERIC,
      },
      attack: {
        value: 10,
        type_value: TypeValues.NUMERIC,
      },
      defense: {
        value: 5,
        type_value: TypeValues.PERCENTAGE,
      },
      elements: [Elements.SHADOW],
      xp: {
        max_value: 15,
        current_value: 0,
        type_value: TypeValues.NUMERIC,
      },
    },
  },
  {
    id: '4a33bb69-a2dc-4601-900e-a5a6a339e33b',
    alias_name: '01-water-mopy',
    sprite: {
      url: 'https://aurorix.s3.us-east-1.amazonaws.com/sprites/mopys/water/01-water-mopy-1x4.png',
      columns: 4,
      rows: 1,
    },
    att: {
      level: {
        value: 1,
        type_value: TypeValues.NUMERIC,
      },
      health: {
        max_value: 15,
        current_value: 15,
        type_value: TypeValues.NUMERIC,
      },
      attack: {
        value: 10,
        type_value: TypeValues.NUMERIC,
      },
      defense: {
        value: 5,
        type_value: TypeValues.PERCENTAGE,
      },
      elements: [Elements.SHADOW],
      xp: {
        max_value: 15,
        current_value: 0,
        type_value: TypeValues.NUMERIC,
      },
    },
  },
];
