import { useState } from 'react';

import { Button, FlexView, Text } from '@components/common';

const REINFORCE_INDEX = [1, 3, 4, 5, 6, 8];

export default () => {
  const EQUIP_PARTS = [
    `목/어깨장식`,
    `투구`,
    `얼굴장식`,
    `무기`,
    `갑옷`,
    `방패/보조무기`,
    `오른손`,
    `망토`,
    `왼손`,
    `보조1`,
    `신발`,
    `보조2`,
    `장신구`,
    `세트옷`,
  ];

  const [normalEquipPower, setNormalEquipPower] = useState(0);
  const [equips, setEquips] = useState({
    '목/어깨장식': ``,
    투구: ``,
    얼굴장식: ``,
    무기: ``,
    갑옷: ``,
    '방패/보조무기': ``,
    오른손: ``,
    망토: ``,
    왼손: ``,
    보조1: ``,
    신발: ``,
    보조2: ``,
    장신구: ``,
    세트옷: ``,
  });

  const [equipPowers, setEquipPowers] = useState({
    '목/어깨장식': ``,
    투구: ``,
    얼굴장식: ``,
    무기: ``,
    갑옷: ``,
    '방패/보조무기': ``,
    오른손: ``,
    망토: ``,
    왼손: ``,
    보조1: ``,
    신발: ``,
    보조2: ``,
    장신구: ``,
    세트옷: ``,
  });

  const inputEquip = (part: string, equip: string) => {
    setEquips({ ...equips, [part]: equip });
  };

  return (
    <FlexView
      css={{
        border: `1px solid lightgray`,
        borderRadius: `4px`,
        padding: `20px`,
      }}
      gap={16}
      items="center"
    >
      <FlexView css={{ width: `302px` }} gap={16} items="center" row wrap>
        {EQUIP_PARTS.map((part, index) => (
          <Button
            key={part}
            border="lightgray"
            css={{ width: `140px`, height: `40px` }}
            radius={4}
          >
            <Text>{part}</Text>
          </Button>
        ))}
      </FlexView>

      <Text semiBold>장비 전투력: {normalEquipPower}</Text>
    </FlexView>
  );
};
