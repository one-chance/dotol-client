import { atom } from 'recoil';

export const itemState = atom({
  key: `itemState`,
  default: { name: ``, amount: 0 },
});
