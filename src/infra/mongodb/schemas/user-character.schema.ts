import { characterSchema } from '@infra/mongodb/schemas';
import { UserCharacter } from 'aurorix-core';
import { HydratedDocument, Schema } from 'mongoose';

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
    delete ret.id;
    delete ret._id;
  },
});

export { userCharacterSchema };
