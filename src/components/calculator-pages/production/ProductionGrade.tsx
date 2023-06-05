import { useState } from 'react';

import { Button, FlexView, Text } from '@components/common';
import { Select, Option } from '@components/select';
import DATA from '@data/production-grade.json';
import { useResponsive } from '@utils/hooks';

export default () => {
  const gradeData = DATA;
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

  const isMobile = useResponsive(600);
  const [selectedSkill, setSelectedSkill] = useState(0);

  const selectSkill = (idx: number) => {
    setSelectedSkill(idx);
  };

  return (
    <FlexView gap={20}>
      <FlexView gap={16} items="center" row>
        {isMobile ? (
          <FlexView items="center" fill>
            <Select name={SKILLS[selectedSkill]} width={320}>
              <Option
                selected={SKILLS[selectedSkill]}
                values={SKILLS}
                onSelect={selectSkill}
              />
            </Select>
          </FlexView>
        ) : (
          SKILLS.map((skill: string, index: number) => (
            <Button
              key={skill}
              css={{
                width: `60px`,
                height: `40px`,
                borderRadius: `4px`,
                border: `1px solid`,
                borderColor: selectedSkill === index ? `blue` : `lightgray`,
              }}
              onClick={() => setSelectedSkill(index)}
            >
              <Text>{skill}</Text>
            </Button>
          ))
        )}
      </FlexView>

      <FlexView css={{ maxWidth: isMobile ? `320px` : undefined }}>
        <FlexView
          css={{ minHeight: isMobile ? `32px` : `40px` }}
          items="center"
          row
        >
          <Text
            css={{ minWidth: isMobile ? `60px` : `80px` }}
            small={isMobile}
            bold
            center
          >
            단계
          </Text>
          <Text small={isMobile} bold center fill>
            재료
          </Text>
        </FlexView>

        <FlexView css={{ border: `1px solid lightgray` }}>
          {gradeData[selectedSkill].map((ingredients, index) => (
            <FlexView
              key={ingredients[index]}
              css={{
                minHeight: `32px`,
                borderTop: index === 0 ? `none` : `1px solid lightgray`,
              }}
              row
            >
              <FlexView css={{ minHeight: isMobile ? `32px` : `40px` }} center>
                <Text
                  css={{ minWidth: isMobile ? `60px` : `80px` }}
                  xSmall={isMobile}
                  center
                  medium
                >
                  {GRADES[index]}
                </Text>
              </FlexView>

              <FlexView
                css={{ padding: isMobile ? `4px 2px` : `2px 8px` }}
                fill={isMobile}
                gap={isMobile ? 4 : 16}
                items="center"
                row
                wrap
              >
                {ingredients.map(ingredient => (
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
