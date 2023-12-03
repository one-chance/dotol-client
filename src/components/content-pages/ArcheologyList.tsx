import { useRef } from 'react';

import { CSSObject } from '@emotion/react';

import { FlexView, Text } from '@components/common';
import { Colors } from '@styles/token';

type Item = {
  item: string;
  location: string;
  explanation: string;
  quantity: string;
  rewards: string[];
};

type ArceologyListProps = {
  isMobile: boolean;
  list: Item[];
};

export default function ArceologyList({ isMobile, list }: ArceologyListProps) {
  const contentRef = useRef<HTMLDivElement[]>([]);

  const titleCSS: CSSObject = {
    minWidth: isMobile ? `80px` : `120px`,
    lineHeight: isMobile ? `24px` : `28px`,
    color: Colors.white,
    paddingLeft: `8px`,
    fontSize: isMobile ? `14px` : `16px`,
    fontWeight: `bold`,
  };

  const contentCSS: CSSObject = {
    lineHeight: isMobile ? `24px` : `28px`,
    paddingLeft: `8px`,
    fontSize: isMobile ? `14px` : `16px`,
    flex: 1,
  };

  return (
    <FlexView
      border="lightgray"
      css={{
        borderWidth: `1px 1px 0 0`,
        maxWidth: isMobile ? `350px` : `600px`,
        width: `100%`,
      }}
    >
      {list?.map((item: Item, index: number) => (
        <FlexView
          key={item.item}
          ref={el => (contentRef.current[index] = el as HTMLDivElement)}
          css={{ borderBottom: `1px solid lightgray` }}
        >
          <FlexView row>
            <FlexView color={Colors.grey}>
              <Text css={titleCSS}>아이템</Text>
            </FlexView>
            <Text css={contentCSS}>{item.item}</Text>
          </FlexView>

          <FlexView row>
            <FlexView color={Colors.grey}>
              <Text css={titleCSS}>장소</Text>
            </FlexView>
            <Text css={contentCSS}>{item.location}</Text>
          </FlexView>

          <FlexView row>
            <FlexView color={Colors.grey}>
              <Text css={titleCSS}>사용 방법</Text>
            </FlexView>
            <Text css={contentCSS}>{item.explanation}</Text>
          </FlexView>

          <FlexView row>
            <FlexView color={Colors.grey}>
              <Text css={titleCSS}>수량</Text>
            </FlexView>
            <Text css={contentCSS}>{item.quantity}</Text>
          </FlexView>

          <FlexView row>
            <FlexView color={Colors.grey}>
              <Text css={titleCSS}>보상</Text>
            </FlexView>
            <FlexView content="center" gap={4} fill>
              {item.rewards.map(reward => (
                <Text key={reward} css={contentCSS}>
                  {reward}
                </Text>
              ))}
            </FlexView>
          </FlexView>
        </FlexView>
      ))}
    </FlexView>
  );
}
