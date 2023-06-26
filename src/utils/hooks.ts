import { useEffect, useState } from 'react';

import { isLoggedInState } from '@states/login';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

interface Size {
  width: number;
  height: number;
}

export const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener(`resize`, handleResize);
    handleResize();

    return () => {
      window.removeEventListener(`resize`, handleResize);
    };
  }, []);

  return windowSize;
};

export const useResponsive = (breakpoin: number): boolean => {
  const { width } = useWindowSize();

  const [isMobile, setIsMobile] = useState<boolean>(width <= breakpoin);

  useEffect(() => {
    setIsMobile(width <= breakpoin);
  }, [width, breakpoin]);

  return isMobile;
};

export const useLoginState = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  useEffect(() => {
    const storedLoggedInState = sessionStorage.getItem(`accessToken`);
    if (storedLoggedInState === `true`) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  return isLoggedIn;
};

export default useLoginState;
