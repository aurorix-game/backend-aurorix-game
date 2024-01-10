import { Character } from 'aurorix-core';
import { HydratedDocument, Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

const spriteCharacter = new Schema<Character.Sprite>({
  url: { type: 'string' },
  columns: { type: 'number' },
  rows: { type: 'number' },
});

const mopyCaptureAttributeSchema = new Schema<Character.MopyCaptureAttribute>({
  type: { type: 'string' },
  type_value: { type: 'string' },
  value: { type: 'number' },
});

const expertiseAttributeSchema = new Schema<Character.ExpertiseAttribute>({
  type: { type: 'string' },
  type_value: { type: 'string' },
  value: { type: 'number' },
});

const elementTunningAttributeSchema =
  new Schema<Character.ElementTunningAttribute>({
    type: { type: 'string' },
    type_value: { type: 'string' },
    value: { type: 'number' },
  });

const characterSchema = new Schema<Character.Model>(
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
    sprite: spriteCharacter,
    att: {
      mopy_capture: mopyCaptureAttributeSchema,
      expertise: expertiseAttributeSchema,
    },
    element_tunning: [elementTunningAttributeSchema],
  },
  { versionKey: false },
);

characterSchema.set('toJSON', {
  virtuals: true,
  transform(_doc: HydratedDocument<unknown>, ret: Record<string, any>) {
    delete ret._id;
    delete ret.sprite._id;

    delete ret?.att?.mopy_capture?._id;
    delete ret?.att?.expertise?._id;

    (ret as Character.Model)?.element_tunning?.forEach((att: any) => {
      delete att._id;
    });
  },
});

export { characterSchema };
