import { useState } from 'react';

import { Button, FlexView, Text } from '@components/common';

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

export default () => {
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

  const [normalEquipPower, setNormalEquipPower] = useState(0);
  const [selectedParts, setSelectedparts] = useState(``);
  const [showEquipModal, setShowEquipModal] = useState(false);

  const openEquipModal = (part: string) => {
    setSelectedparts(part);
    setShowEquipModal(true);
  };

  const inputEquip = (part: string, equip: string) => {
    setEquips({ ...equips, [part]: equip });
  };

  return (
    <FlexView
      border="lightgray"
      css={{
        padding: `20px`,
      }}
      gap={16}
      items="center"
      radius={4}
    >
      <FlexView css={{ width: `300px` }} gap={20} items="center" row wrap>
        {EQUIP_PARTS.map(part => (
          <Button
            key={part}
            aria-label="장비 부위"
            border="lightgray"
            css={{ width: `140px`, height: `40px` }}
            radius={4}
            onClick={() => openEquipModal(part)}
          >
            <Text>{part}</Text>
          </Button>
        ))}
      </FlexView>

      <Text weight="semiBold">장비 전투력: {normalEquipPower}</Text>
    </FlexView>
  );
};
