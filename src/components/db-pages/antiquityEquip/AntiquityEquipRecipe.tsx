import { useEffect, useState } from 'react';

import DATA from '@data/antiquity-recipe.json';

import { FlexView, Input, Text, Select, Option } from '@components/common';
import { useResponsive } from '@hooks/index';

const EQUIP_PARTS = [`무기`, `투구`, `갑옷`, `명경`, `장갑`, `보주`];
const TITLES = [`장비`, `필요레벨`, `재료`, `금전`, `기본확률`];
const PERCENTAGES = [
  `기본확률`,
  `100%`,
  `90%`,
  `60%`,
  `30%`,
  `15%`,
  `8%`,
  `4%`,
  `2%`,
];
const PERCENTAGE_VALUES = [0, 100, 90, 60, 30, 15, 8, 4, 2];

interface AntiquityEquipRecipeProps {
  part: number;
}

export default function AntiquityEquipRecipe({
  part,
}: AntiquityEquipRecipeProps) {
  const isMobile = useResponsive(620);
  const myData = DATA[part];
  const [defaultPercentage, setDefaultPercentage] = useState(PERCENTAGES[0]);

  const [extraPercentage, setExtraPercentage] = useState(``);
  const [totalPercentage, setTotalPercentage] = useState(0);

  const selectPercentage = (id: number) => {
    setDefaultPercentage(PERCENTAGES[id]);
  };

  const inputExtraPercentage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const regex = /^(\d{0,3}(\.\d{0,3})?)?$/;

    if (regex.test(value)) setExtraPercentage(value);
  };

  useEffect(() => {
    const defaultValue =
      PERCENTAGE_VALUES[PERCENTAGES.indexOf(defaultPercentage)];
    const totalValue =
      defaultValue + (defaultValue * Number(extraPercentage)) / 100;

    setTotalPercentage(Math.round(totalValue * 1000) / 1000);
  }, [defaultPercentage, extraPercentage]);

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView content="between" gap={16} items="center" row wrap>
        <FlexView items="center" row>
          <Select
            height={36}
            isMobile={isMobile}
            label={defaultPercentage}
            width={isMobile ? 80 : 100}
          >
            <Option
              selected={defaultPercentage}
              values={PERCENTAGES}
              onSelect={selectPercentage}
            />
          </Select>

          <Text size={isMobile ? `small` : `normal`}>&nbsp;+&nbsp;</Text>
          <Input
            aria-label="제작확률 증가"
            css={{
              '::placeholder': {
                fontSize: isMobile ? `14px` : `16px`,
              },
            }}
            placeholder="제작확률 증가(%)"
            value={extraPercentage || ``}
            width={isMobile ? 95 : 140}
            center
            onChange={inputExtraPercentage}
          />

          <Text size={isMobile ? `small` : `normal`}>
            &nbsp;= 최종 성공률: {totalPercentage}%
          </Text>
        </FlexView>
      </FlexView>

      <FlexView>
        <FlexView
          color="lightgray"
          css={{ minHeight: `36px` }}
          items="center"
          row
        >
          {TITLES.map(title => (
            <Text
              key={title}
              css={{ width: isMobile ? `70px` : `120px` }}
              weight="semiBold"
              center
            >
              {title}
            </Text>
          ))}
        </FlexView>

        {myData.map(data => (
          <FlexView
            key={data.장비}
            css={{
              minHeight: `32px`,
              border: `solid lightgray`,
              borderWidth: isMobile ? `0 0 1px 0` : `0 1px 1px 1px`,
              padding: `4px 0`,
            }}
            items="center"
            row
          >
            <Text
              css={{ whiteSpace: `pre-wrap` }}
              size={isMobile ? `small` : `normal`}
              center
              fill
            >
              {isMobile ? data.장비 : data.장비.replace(`\n`, ``)}
            </Text>
            <Text size={isMobile ? `small` : `normal`} center fill>
              {data.필요레벨}
            </Text>
            <Text size={isMobile ? `small` : `normal`} center fill>
              {data.재료}
            </Text>
            <Text size={isMobile ? `small` : `normal`} center fill>
              {data.금전}
            </Text>
            <Text size={isMobile ? `small` : `normal`} center fill>
              {data.기본확률}
            </Text>
          </FlexView>
        ))}
      </FlexView>
    </FlexView>
  );
}
