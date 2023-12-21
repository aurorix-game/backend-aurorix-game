import { UserCharacter } from '@domain/models';
import { HydratedDocument, Schema } from 'mongoose';

import { characterSchema } from './character.schema';

const userCharacterSchema = new Schema<UserCharacter>(
  {
    user_id: {
      type: 'string',
      required: true,
      index: 'hashed',
    },
    character: {
      type: characterSchema,
      required: true,
    },
  },
  { versionKey: false },
);

userCharacterSchema.set('toJSON', {
  virtuals: true,
  transform(_doc: HydratedDocument<unknown>, ret: Record<string, any>) {
    delete ret._id;
  },
});

export { userCharacterSchema };
