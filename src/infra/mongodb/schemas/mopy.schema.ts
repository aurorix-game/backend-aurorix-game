import { Mopy } from 'aurorix-core';
import { HydratedDocument, Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

const mopySchema = new Schema<Mopy.Model>(
  {
    id: {
      type: 'string',
      required: true,
      default: () => uuid(),
      index: 'hashed',
    },
    alias_name: {
      type: 'string',
      required: true,
      index: 'hashed',
    },
    sprite: {
      url: { type: 'string' },
      columns: { type: 'number' },
      rows: { type: 'number' },
    },
    att: {
      level: {
        value: { type: 'number' },
        type_value: { type: 'string' },
      },
      health: {
        max_value: { type: 'number' },
        current_value: { type: 'number' },
        type_value: { type: 'string' },
      },
      attack: {
        value: { type: 'number' },
        type_value: { type: 'string' },
      },
      defense: {
        value: { type: 'number' },
        type_value: { type: 'string' },
      },
      elements: [{ type: String }],
      xp: {
        max_value: { type: 'number' },
        current_value: { type: 'number' },
        type_value: { type: 'string' },
      },
    },
  },
  { versionKey: false },
);

mopySchema.set('toJSON', {
  virtuals: true,
  transform(_doc: HydratedDocument<unknown>, ret: Record<string, any>) {
    delete ret._id;
  },
});

export { mopySchema };
