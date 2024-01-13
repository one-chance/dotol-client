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

    handleResize();
    window.addEventListener(`resize`, handleResize);

    return () => {
      window.removeEventListener(`resize`, handleResize);
    };
  }, []);

  return windowSize;
};

export const useResponsive = (breakpoint: number): boolean => {
  const { width } = useWindowSize();

  return width <= breakpoint;
  // const [isMobile, setIsMobile] = useState<boolean>(width <= breakpoint);

  // useEffect(() => {
  //   setIsMobile(width <= breakpoint);
  // }, [width, breakpoint]);

  // return isMobile;
};
