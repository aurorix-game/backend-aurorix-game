import { Character } from '@domain/models';
import { HydratedDocument, Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

const characterBlueprintSchema = new Schema<Character.Model>(
  {
    id: {
      type: 'string',
      required: true,
      default: () => uuid(),
      index: 'hashed',
    },
    alias_name: {
      type: 'string',
      unique: true,
      required: true,
      index: 'hashed',
    },
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
          color: { type: 'string' },
          icon: { type: 'string' },
        },
      },
    ],
  },
  { versionKey: false },
);

characterBlueprintSchema.set('toJSON', {
  virtuals: true,
  transform(_doc: HydratedDocument<unknown>, ret: Record<string, any>) {
    delete ret._id;

    (ret as Character.Model)?.attributes?.forEach((att: any) => {
      delete att._id;
    });
  },
});

export { characterBlueprintSchema };
