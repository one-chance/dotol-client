import { atom } from 'recoil';

export const isLoggedInState = atom<boolean>({
  key: `isLoggedInState`,
  default: false,
});

export const userInfoState = atom({
  key: `userInfoState`,
  default: {
    userId: ``,
    grade: 0,
    titleAccount: ``,
  },
});
