import { mopySchema } from '@infra/mongodb/schemas';
import { UserMopy } from 'aurorix-core';
import { HydratedDocument, Schema } from 'mongoose';

const userMopySchema = new Schema<UserMopy>(
  {
    user_id: {
      type: 'string',
      required: true,
      index: 'hashed',
    },
    mopy: {
      type: mopySchema,
      required: true,
    },
  },
  { versionKey: false, collection: 'user-mopys' },
);

userMopySchema.set('toJSON', {
  virtuals: true,
  transform(_doc: HydratedDocument<unknown>, ret: Record<string, any>) {
    delete ret.id;
    delete ret._id;
  },
});

export { userMopySchema };
