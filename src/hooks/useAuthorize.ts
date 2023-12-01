import { useSetRecoilState } from 'recoil';

import { showLoginState, toastState } from '@states/index';

export const useAuthorize = (grade: number) => {
  const setShowLogin = useSetRecoilState(showLoginState);
  const setToast = useSetRecoilState(toastState);

  if (grade === 0) {
    return setShowLogin(true);
  } if (grade === 1) {
    return setToast({
      open: true,
      type: `error`,
      message: `대표 캐릭터를 인증해주세요.`,
    });
  }
};
