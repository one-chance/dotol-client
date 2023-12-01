import { ReactNode, useState } from 'react';

import { CSSObject } from '@emotion/react';

import { FlexView, Icon, Text } from '@components/common';
import { useResponsive } from '@hooks/index';

type AccordionProps = {
  title: string;
  titleCSS?: CSSObject;
  subTitle: string;
  divider?: boolean;
  children: ReactNode;
};

export default ({
  title,
  titleCSS,
  subTitle,
  divider,
  children,
}: AccordionProps) => {
  const isMobile = useResponsive(480);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FlexView
      css={{
        width: `fit-content`,
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
        <FlexView content="between" items="center" fill row>
          <Text size={isMobile ? `small` : `normal`}>{title}</Text>
          <Text>{subTitle}</Text>
        </FlexView>

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
