import { Character, UserCharacter } from '@domain/models';
import { HydratedDocument, Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

import { characterSchema } from './character.schema';

const userCharacterSchema = new Schema<UserCharacter>(
  {
    user_id: {
      type: 'string',
      required: true,
      default: () => uuid(),
      index: 'hashed',
    },
    character: characterSchema,
  },
  { versionKey: false },
);

userCharacterSchema.set('toJSON', {
  virtuals: true,
  transform(_doc: HydratedDocument<unknown>, ret: Record<string, any>) {
    delete ret._id;

    (ret as Character.Model)?.attributes?.forEach((att: any) => {
      delete att._id;
    });
  },
});

export { userCharacterSchema };
