import { atom } from 'jotai';

export type User = {
  email: string;
  username: string;
  image: string;
  token: string;
};

const currentUserAtom = atom<User | null>(null);

export default currentUserAtom;
