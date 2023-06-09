import { ReactNode, useState } from 'react';

import { FlexView, Icon, Text } from '@components/common';
import { CSSObject } from '@emotion/react';

type AccordionProps = {
  title: string;
  content?: string;
  titleCSS?: CSSObject;
  contentCSS?: CSSObject;
  divider?: boolean;
  children?: ReactNode;
};

export default ({
  title,
  content,
  titleCSS,
  contentCSS,
  divider,
  children,
}: AccordionProps) => {
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
          padding: `10px`,
          cursor: `pointer`,
          ...(divider && isOpen && { borderBottom: `1px solid lightgray` }),
        }}
        gap={40}
        items="center"
        row
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text medium>{title}</Text>
        <Icon name={isOpen ? `arrowUp` : `arrowDown`} size={16} />
      </FlexView>

      <FlexView
        css={{
          ...contentCSS,
          padding: isOpen ? `10px` : `0 10px`,
          minHeight: isOpen ? `auto` : 0,
          transition: `0.2s ease-in-out`,
        }}
        wrap
      >
        {isOpen && children && children}
        {isOpen && !children && <Text>{content}</Text>}
      </FlexView>
    </FlexView>
  );
};
