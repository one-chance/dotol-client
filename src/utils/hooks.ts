import { useEffect, useState } from 'react';

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
