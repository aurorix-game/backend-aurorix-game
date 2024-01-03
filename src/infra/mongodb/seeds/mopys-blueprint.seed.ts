import { Elements, Mopy, TypeValues } from 'aurorix-core';

export const mopysBlueprint: Mopy.Model[] = [
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
];
