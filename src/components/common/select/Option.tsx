import { useRef, useEffect, useState } from 'react';

import { CSSObject } from '@emotion/react';

import { FlexView, Text } from '@components/common';

type OptionProps = {
  values: string[];
  selected: string;
  onSelect: (index: number) => void;
  height?: number;
};

export default function Option({
  values,
  selected,
  onSelect,
  height,
}: OptionProps) {
  const refs = useRef<HTMLDivElement[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(values.indexOf(selected));

  const optionCSS: CSSObject = {
    minHeight: height ? `${height}px` : `32px`,
    padding: `0 8px`,
    outline: `none`,
    ':hover': {
      backgroundColor: `#F3F4F8`,
    },
    ':focus': {
      backgroundColor: `#E0E2E6`,
    },
    ':first-child': { borderRadius: `4px 4px 0 0` },
    ':last-child': { borderRadius: `0 0 4px 4px` },
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ) => {
    if (e.key === `Enter`) onSelect(index);
    else if (e.key === `ArrowDown`) {
      e.preventDefault();
      setFocusedIndex(prev => (prev + 1) % refs.current.length);
    } else if (e.key === `ArrowUp`) {
      e.preventDefault();
      setFocusedIndex(
        prev => (prev - 1 + refs.current.length) % refs.current.length,
      );
    }
  };

  useEffect(() => {
    refs.current[focusedIndex].focus();
    // refs.current[focusedIndex].focus();
  }, [focusedIndex]);

  return (
    <>
      {values.map((option: string, idx: number) => (
        <FlexView
          key={option}
          ref={(e: HTMLDivElement) => (refs.current[idx] = e)}
          content="center"
          css={optionCSS}
          tabIndex={0}
          onClick={() => onSelect(idx)}
          onKeyDown={e => handleKeyDown(e, idx)}
        >
          <Text color="#4D4D4D" size="small">
            {option}
          </Text>
        </FlexView>
      ))}
    </>
  );
}
