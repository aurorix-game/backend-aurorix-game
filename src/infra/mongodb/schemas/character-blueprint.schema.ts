import { Character } from '@domain/models';
import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

export const characterBlueprintSchema = new Schema<Character.Model>({
  id: {
    type: 'string',
    required: true,
    default: () => uuid(),
    index: 'hashed',
  },
  alias_name: { type: 'string', unique: true },
  sprite: {
    url: { type: 'string' },
    columns: { type: 'number' },
    rows: { type: 'number' },
  },
  attributes: [
    {
      label: { type: 'string' },
      type_value: { type: 'string' },
      value: { type: 'number' },
      style: {
        color: { type: 'number' },
        icon: { type: 'number' },
      },
    },
  ],
});
