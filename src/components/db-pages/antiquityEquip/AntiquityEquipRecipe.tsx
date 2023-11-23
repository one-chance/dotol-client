import { useEffect, useState } from 'react';

import DATA from '@data/antiquity-recipe.json';

import { FlexView, Input, Text, Select, Option } from '@components/common';
import { AntiquityEquipModal } from '@components/modal';
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

export default () => {
  const isMobile = useResponsive(620);
  const [selectedPart, setSelectedPart] = useState(EQUIP_PARTS[0]);
  const myData = DATA[EQUIP_PARTS.indexOf(selectedPart)];
  const [defaultPercentage, setDefaultPercentage] = useState(PERCENTAGES[0]);

  const [extraPercentage, setExtraPercentage] = useState(``);
  const [totalPercentage, setTotalPercentage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const selectPart = (id: number) => {
    setSelectedPart(EQUIP_PARTS[id]);
  };

  const selectPercentage = (id: number) => {
    setDefaultPercentage(PERCENTAGES[id]);
  };

  const inputExtraPercentage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const regex = /^(\d{0,3}(\.\d{0,3})?)?$/;

    if (regex.test(value)) setExtraPercentage(value);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
      <FlexView
        content="between"
        css={{ padding: isMobile ? `0 10px` : undefined }}
        items="center"
        row
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold>
          신수유물 강화재료
        </Text>

        <Select label={selectedPart} width={100}>
          <Option
            selected={selectedPart}
            values={EQUIP_PARTS}
            onSelect={selectPart}
          />
        </Select>
      </FlexView>

      <FlexView
        content="between"
        css={{ padding: isMobile ? `0 10px` : undefined }}
        gap={16}
        items="center"
        row
        wrap
      >
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

          <Text small={isMobile}>&nbsp;+&nbsp;</Text>
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

          <Text small={isMobile} medium>
            &nbsp;= 최종 성공률: {totalPercentage}%
          </Text>
        </FlexView>

        {/* <Button aria-label="설명" onClick={openModal}>
          <Text color="blue" small>
            제작확률 증가?
          </Text>
        </Button> */}
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
              css={{ width: isMobile ? `72px` : `120px` }}
              center
              semiBold
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

      {showModal && <AntiquityEquipModal close={closeModal} />}
    </FlexView>
  );
};
