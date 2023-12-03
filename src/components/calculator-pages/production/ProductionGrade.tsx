import { useEffect, useState } from 'react';

import { getIngredients } from '@apis/index';
import { FlexView, Text, Select, Option } from '@components/common';
import { useResponsive } from '@hooks/index';

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

export default function ProductionGrade() {
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
      <FlexView content="between" gap={12} items="center" row>
        <Text size={isMobile ? `large` : `xLarge`} weight="bold">
          생산 단계업 재료
        </Text>
        <Select label={SKILLS[selectedSkill]} width={100}>
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
            css={{ width: isMobile ? `60px` : `80px` }}
            size={isMobile ? `small` : `normal`}
            weight="bold"
            center
          >
            단계
          </Text>
          <Text
            css={{ width: isMobile ? `300px` : `460px` }}
            size={isMobile ? `small` : `normal`}
            weight="bold"
            center
          >
            재료
          </Text>
        </FlexView>

        <FlexView>
          {data[selectedSkill].map((ingredients, index) => (
            <FlexView
              key={GRADES[index]}
              css={{
                minHeight: isMobile ? `32px` : `40px`,
                borderLeft: `1px solid lightgray`,
                borderBottom: `1px solid lightgray`,
                borderRight: `1px solid lightgray`,
              }}
              row
            >
              <FlexView
                css={{
                  width: isMobile ? `60px` : `80px`,
                  borderRight: `1px solid lightgray`,
                }}
                center
              >
                <Text size={isMobile ? `xSmall` : `normal`}>
                  {GRADES[index]}
                </Text>
              </FlexView>

              <FlexView
                css={{
                  padding: isMobile ? `4px` : `2px 8px`,
                  width: isMobile ? `300px` : `460px`,
                }}
                gap={isMobile ? 4 : 16}
                items="center"
                row
                wrap
              >
                {ingredients.map((ingredient: any) => (
                  <Text key={ingredient} size={isMobile ? `xSmall` : `normal`}>
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
}
