import { User } from 'aurorix-core';
import { HydratedDocument, Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

const userSchema = new Schema<User>(
  {
    id: {
      type: 'string',
      required: true,
      default: () => uuid(),
      index: 'hashed',
    },
    nickname: { type: 'string', required: true, unique: true, index: 'hashed' },
    email: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true, select: false },
  },
  { versionKey: false },
);

userSchema.set('toJSON', {
  virtuals: true,
  transform(_doc: HydratedDocument<unknown>, ret: Record<string, any>) {
    delete ret._id;
  },
});

export { userSchema };
