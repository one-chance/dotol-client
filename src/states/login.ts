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

export const userInfoState = atom<{
  userId: string;
  character: string;
  grade: number;
}>({
  key: `userInfoState`,
  default: { userId: ``, character: `캐릭터@서버`, grade: 0 },
  effects: [
    ({ setSelf }) => {
      const token = getAccessToken();

      if (token !== null) {
        const info = decodeJWT(token);
        setSelf({
          userId: info.userId,
          character: info.character,
          grade: info.grade,
        });
      } else {
        setSelf({ userId: ``, character: `캐릭터@서버`, grade: 0 });
      }
    },
  ],
});
