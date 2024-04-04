import { ReactNode, useEffect, useState, useRef, HTMLAttributes } from 'react';

import { CSSObject } from '@emotion/react';

import { FlexView, Text, Icon } from '@components/common';

type SelectProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  width: number;
  height?: number;
  children: ReactNode;
  disabled?: boolean;
  error?: boolean;
  square?: boolean;
  isMobile?: boolean;
};

export default function Select({
  label,
  width,
  height,
  children,
  disabled,
  error,
  square,
  isMobile,
}: SelectProps) {
  const selectRef = useRef<HTMLDivElement>(null);
  const optionListRef = useRef<HTMLDivElement>(null);
  const [showOption, setShowOption] = useState(false);

  const wrapperCSS: CSSObject = {
    width: width ? `${width}px` : `100%`,
    position: `relative`,
    userSelect: `none`,
  };

  const selectCSS: CSSObject = {
    minHeight: height || `40px`,
    cursor: `pointer`,
    padding: isMobile ? `0 4px` : `0 8px`,
    backgroundColor: `#FFF`,
    border: `1px solid #DCDEEA`,
    borderRadius: `4px`,
    ...(showOption && { border: `1px solid #358CFE` }),
    ...(error && { border: `1px solid red` }),
    ...(disabled && { filter: `opacity(50%)`, pointerEvents: `none` }),
    ...(square && { borderRadius: 0 }),
  };

  const optionListCSS: CSSObject = {
    position: `absolute`,
    zIndex: 1000,
    width: `100%`,
    marginTop: height || `40px`,
    cursor: `pointer`,
    boxShadow: `0 0 2px rgba(0, 0, 0, 0.3)`,
  };

  useEffect(() => {
    const autoClose = (e: CustomEvent<MouseEvent>) => {
      if (
        !selectRef.current?.contains(e.target as Node) &&
        !optionListRef.current?.contains(e.target as Node)
      ) {
        e.stopPropagation();
        setShowOption(false);
      }
    };

    window.addEventListener(`mousedown`, autoClose as EventListener);

    return () => {
      window.removeEventListener(`mousedown`, autoClose as EventListener);
    };
  }, []);

  useEffect(() => {
    setShowOption(false);
  }, [label]);

  return (
    <FlexView
      ref={selectRef}
      content="start"
      css={wrapperCSS}
      onClick={() => {
        if (!disabled) setShowOption(!showOption);
      }}
    >
      <FlexView content="between" css={selectCSS} items="center" row>
        <Text size="small">{label}</Text>
        <Icon name={showOption ? `arrowUp` : `arrowDown`} size={16} />
      </FlexView>

      {showOption && (
        <FlexView
          ref={optionListRef}
          color="#FFFFFF"
          css={optionListCSS}
          radius={4}
        >
          {children}
        </FlexView>
      )}
    </FlexView>
  );
}
