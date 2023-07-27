import { decodeJWT, getAccessToken } from '@utils/common';
import { atom } from 'recoil';

export const isLoggedInState = atom<boolean>({
  key: `isLoggedInState`,
  default: false,
  effects: [
    ({ setSelf }) => {
      if (getAccessToken() !== null) {
        setSelf(true);
      } else {
        setSelf(false);
      }
    },
  ],
});

export const userIdState = atom<string>({
  key: `userIdState`,
  default: ``,
  effects: [
    ({ setSelf }) => {
      const token = getAccessToken();

      if (token !== null) {
        setSelf(decodeJWT(token).userId);
      } else {
        setSelf(``);
      }
    },
  ],
});

export const showLoginState = atom<boolean>({
  key: `showLoginState`,
  default: false,
});
