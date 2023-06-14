import { useState } from 'react';

import { FlexView, Text } from '@components/common';
import { Option, Select } from '@components/select';
import DATA from '@data/antiquity-recipe.json';
import { useResponsive } from '@utils/hooks';

const EQUIP_PARTS = [`무기`, `투구`, `갑옷`, `명경`, `장갑`, `보주`];
const TITLES = [`장비`, `필요레벨`, `재료`, `금전`, `기본확률`];

export default () => {
  const isMobile = useResponsive(620);
  const [selectedPart, setSelectedPart] = useState(EQUIP_PARTS[0]);
  const myData = DATA[EQUIP_PARTS.indexOf(selectedPart)];

  const selectPart = (id: number) => {
    setSelectedPart(EQUIP_PARTS[id]);
  };

  return (
    <FlexView gap={20}>
      <FlexView content="between" items="center" row>
        <Text xLarge={isMobile} xxLarge={!isMobile} bold>
          신수유물 강화재료
        </Text>

        <Select name={selectedPart} width={100}>
          <Option
            selected={selectedPart}
            values={EQUIP_PARTS}
            onSelect={selectPart}
          />
        </Select>
      </FlexView>

      <FlexView>
        <FlexView
          color="lightgray"
          css={{ minHeight: `36px` }}
          items="center"
          row
        >
          {TITLES.map(title => (
            <Text key={title} center fill semiBold>
              {title}
            </Text>
          ))}
        </FlexView>

        {myData.map(data => (
          <FlexView
            key={data.장비}
            css={{
              minHeight: `32px`,
              borderBottom: `1px solid lightgray`,
              padding: `4px 0`,
            }}
            items="center"
            row
          >
            <Text css={{ whiteSpace: `pre-wrap` }} small={isMobile} center fill>
              {isMobile ? data.장비 : data.장비.replace(`\n`, ``)}
            </Text>
            <Text small={isMobile} center fill>
              {data.필요레벨}
            </Text>
            <Text small={isMobile} center fill>
              {data.재료}
            </Text>
            <Text small={isMobile} center fill>
              {data.금전}
            </Text>
            <Text small={isMobile} center fill>
              {data.기본확률}
            </Text>
          </FlexView>
        ))}
      </FlexView>
    </FlexView>
  );
};
