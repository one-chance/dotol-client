import { atom } from 'recoil';

export const newUserState = atom({
  key: `newUserState`,
  default: {
    userId: ``,
    password: ``,
  },
});
