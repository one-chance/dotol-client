import { ReactNode, useEffect, useState } from 'react';

import { FlexView, Icon, Text } from '@components/common';
import { CSSObject } from '@emotion/react';
import { useResponsive } from '@utils/hooks';

type AccordionProps = {
  title: string;
  titleCSS?: CSSObject;
  divider?: boolean;
  children: ReactNode;
};

export default ({ title, titleCSS, divider, children }: AccordionProps) => {
  const isMobile = useResponsive(480);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [title]);

  return (
    <FlexView
      css={{
        width: `fit-content`,
        borderLeft: `1px solid lightgray`,
        borderRight: `1px solid lightgray`,
        borderBottom: `1px solid lightgray`,
        ...titleCSS,
      }}
    >
      <FlexView
        content="between"
        css={{
          minHeight: `36px`,
          padding: isMobile ? `4px` : `8px`,
          cursor: `pointer`,
          ...(divider && isOpen && { borderBottom: `1px solid lightgray` }),
        }}
        gap={16}
        items="center"
        row
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text small={isMobile} medium>
          {title}
        </Text>
        <Icon name={isOpen ? `arrowUp` : `arrowDown`} size={16} />
      </FlexView>

      <FlexView
        css={{
          padding: isOpen ? `8px` : `0 8px`,
          minHeight: isOpen ? `auto` : 0,
          transition: `0.2s ease-in-out`,
        }}
        wrap
      >
        {isOpen && children}
      </FlexView>
    </FlexView>
  );
};
