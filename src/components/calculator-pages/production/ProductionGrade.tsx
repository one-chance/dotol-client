import { useEffect, useState } from 'react';

import { getIngredients } from '@apis/production';
import { FlexView, Text } from '@components/common';
import { Select, Option } from '@components/select';
import { useResponsive } from '@utils/hooks';

const SKILLS = [
  `직조술`,
  `벌목술`,
  `채광술`,
  `조제술`,
  `재봉술`,
  `목공술`,
  `대장술`,
  `강화술`,
];

const GRADES = [
  `왕초보`,
  `초보`,
  `견습`,
  `도제`,
  `숙련`,
  `전문`,
  `장인`,
  `명장인`,
  `대장인`,
  `절대장인`,
  `전설장인`,
];

export default () => {
  const isMobile = useResponsive(600);

  const [data, setData] = useState([[[]]]);
  const [selectedSkill, setSelectedSkill] = useState(0);

  const selectSkill = (idx: number) => {
    setSelectedSkill(idx);
  };

  useEffect(() => {
    getIngredients().then(res => {
      setData(res);
    });
  }, []);

  return (
    <FlexView gap={20}>
      <FlexView
        content="between"
        css={{ margin: isMobile ? `0 10px` : undefined }}
        gap={12}
        items="center"
        row
      >
        <Text large={isMobile} xLarge={!isMobile} bold>
          생산 단계업 재료
        </Text>
        <Select name={SKILLS[selectedSkill]} width={160}>
          <Option
            selected={SKILLS[selectedSkill]}
            values={SKILLS}
            onSelect={selectSkill}
          />
        </Select>
      </FlexView>

      <FlexView>
        <FlexView
          color="lightgray"
          css={{ minHeight: isMobile ? `32px` : `40px` }}
          items="center"
          row
        >
          <Text
            css={{
              width: isMobile ? `60px` : `80px`,
              paddingLeft: isMobile ? `4px` : `8px`,
            }}
            small={isMobile}
            bold
          >
            단계
          </Text>
          <Text
            css={{ paddingLeft: isMobile ? `4px` : `8px` }}
            small={isMobile}
            bold
            fill
          >
            재료
          </Text>
        </FlexView>

        <FlexView css={{ border: `1px solid lightgray` }}>
          {data[selectedSkill].map((ingredients, index) => (
            <FlexView
              key={GRADES[index]}
              css={{
                minHeight: `32px`,
                borderTop: index === 0 ? `none` : `1px solid lightgray`,
              }}
              row
            >
              <FlexView
                css={{
                  minHeight: isMobile ? `32px` : `40px`,
                  borderRight: `1px solid lightgray`,
                }}
                center
              >
                <Text
                  css={{
                    minWidth: isMobile ? `60px` : `80px`,
                    paddingLeft: isMobile ? `4px` : `8px`,
                  }}
                  xSmall={isMobile}
                  medium
                >
                  {GRADES[index]}
                </Text>
              </FlexView>

              <FlexView
                css={{ padding: isMobile ? `4px` : `2px 8px` }}
                gap={isMobile ? 4 : 16}
                items="center"
                fill
                row
                wrap
              >
                {ingredients.map((ingredient: any) => (
                  <Text key={ingredient} xSmall={isMobile}>
                    {ingredient}
                  </Text>
                ))}
              </FlexView>
            </FlexView>
          ))}
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
