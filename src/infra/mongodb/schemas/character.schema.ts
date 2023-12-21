import { Character } from '@domain/models';
import { HydratedDocument, Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

const spriteCharacter = new Schema<Character.Sprite>({
  url: { type: 'string' },
  columns: { type: 'number' },
  rows: { type: 'number' },
});

const styleAttributeCharacterSchema = new Schema<Character.AttributeStyle>({
  color: { type: 'string' },
  icon: { type: 'string' },
});

const attributeCharacterSchema = new Schema<Character.Attribute>({
  label: { type: 'string' },
  type: { type: 'string' },
  type_value: { type: 'string' },
  value: { type: 'number' },
  style: styleAttributeCharacterSchema,
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
    attributes: [attributeCharacterSchema],
  },
  { versionKey: false },
);

characterSchema.set('toJSON', {
  virtuals: true,
  transform(_doc: HydratedDocument<unknown>, ret: Record<string, any>) {
    delete ret._id;
    delete ret.sprite._id;

    (ret as Character.Model)?.attributes?.forEach((att: any) => {
      delete att._id;
      delete att.style._id;
    });
  },
});

export { characterSchema };
