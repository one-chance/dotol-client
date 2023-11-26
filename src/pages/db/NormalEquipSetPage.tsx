import { useState } from 'react';

import { FlexView, Option, Select, Text } from '@components/common';
import { NormalEquipSet } from '@components/db-pages';
import { useResponsive } from '@hooks/index';

const EQUIP_TYPES = [
  `장비 종류`,
  `용장비`,
  `북방장비`,
  `중국전설`,
  `일본전설`,
  `환웅장비`,
  `백제/황산벌`,
  `전우치/구미호`,
  `타계장비`,
  `흉수계/봉래산`,
  `생산장비`,
  `격전지/전장`,
  `귀문장비`,
  `기타장비`,
];

export default function NormalEquipSetPage() {
  const isMobile = useResponsive(980);
  const [type, setType] = useState(0);

  const selectType = (id: number) => {
    setType(id);
  };

  return (
    <FlexView
      css={{
        maxWidth: `960px`,
        width: `100%`,
        margin: `0 auto`,
      }}
      gap={20}
    >
      <FlexView content="between" items="center" row>
        <Text large={isMobile} xLarge={!isMobile} bold>
          한벌 효과
        </Text>

        <Select
          height={36}
          isMobile={isMobile}
          label={EQUIP_TYPES[type]}
          width={isMobile ? 112 : 130}
        >
          <Option
            selected={EQUIP_TYPES[type]}
            values={EQUIP_TYPES}
            onSelect={selectType}
          />
        </Select>
      </FlexView>

      <NormalEquipSet type={EQUIP_TYPES[type]} />
    </FlexView>
  );
}
