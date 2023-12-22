import { faker } from '@faker-js/faker';
import { User } from 'aurorix-core';

export const makeUser = (user?: {
  id?: string;
  nickname?: string;
  email?: string;
  password?: string;
}): User => {
  return {
    id: user?.id ?? faker.string.uuid(),
    email: user?.email ?? faker.internet.email(),
    nickname: user?.nickname ?? faker.person.firstName(),
    password: user?.password ?? faker.internet.password(),
  };
};

export const makeUsers = (count = 10): User[] => {
  return Array(count)
    .fill('')
    .map(() => makeUser());
};
