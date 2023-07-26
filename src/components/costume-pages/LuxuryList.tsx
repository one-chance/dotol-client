import { useState } from 'react';

import { Button, FlexView, Image, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

const NAMES = [
  `마법학교`,
  `은하요술사`,
  `풀잎`,
  `악마사냥꾼`,
  `은빛미호`,
  `시간여행자`,
  `월야산신`,
  `인형술사`,
  `잔혹천사`,
  `천상의심포니`,
  `달빛마중`,
];

export default () => {
  const isMobile = useResponsive(960);
  const [series, setSeries] = useState(0);

  const selectSeries = (id: number) => {
    setSeries(id);
  };

  return (
    <FlexView gap={20}>
      <Text bold center xxLarge>
        명품의 도감
      </Text>

      <FlexView gap={8}>
        <FlexView
          css={{
            padding: `10px`,
            border: `1px solid lightgray`,
            borderRadius: `4px`,
          }}
          gap={16}
          row
          wrap
        >
          {NAMES.map((name, index) => (
            <Button aria-label="기수" onClick={() => selectSeries(index + 1)}>
              <Text
                key={name}
                bold={NAMES[series - 1] === name}
                color={NAMES[series - 1] === name ? Colors.red : Colors.primary}
                small
              >
                {index + 1}기 {name}
              </Text>
            </Button>
          ))}
        </FlexView>

        <FlexView
          css={{
            padding: `10px`,
            border: `1px solid lightgray`,
            borderRadius: `4px`,
          }}
          gap={8}
        >
          파츠
        </FlexView>

        {series !== 0 && (
          <FlexView
            css={{
              border: `1px solid lightgray`,
              borderRadius: `4px`,
              padding: `10px`,
            }}
            center
          >
            <FlexView
              css={{
                maxWidth: `fit-content`,
              }}
            >
              {series !== 0 && <Image src={`/luxury/${series}.png`} />}
            </FlexView>
          </FlexView>
        )}
      </FlexView>

      <Text color={Colors.red}>* 6부위 전용 이펙트가 적용된 이미지입니다.</Text>
    </FlexView>
  );
};
