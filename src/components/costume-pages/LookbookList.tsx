import { useState } from 'react';

import { Button, FlexView, Input, Text } from '@components/common';
import { Colors } from '@styles/system';

type LookbookListProps = {
  isMobile?: boolean;
  applyPreview: (list: string) => void;
};

const EQUIP_PARTS = [
  `목/어깨장식`,
  `투구`,
  `얼굴장식`,
  `무기`,
  `갑옷/겉옷`,
  `방패/보조무기`,
  `망토`,
  `신발`,
  `장신구`,
  `세트옷`,
];

const INPUT_WIDTH = 180;

export default ({ isMobile, applyPreview }: LookbookListProps) => {
  const [itemList, setItemList] = useState<string[]>([
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
  ]);

  const inputEquipName = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    itemList[id] = e.target.value;
    setItemList([...itemList]);
  };

  const initItemList = () => {
    setItemList([``, ``, ``, ``, ``, ``, ``, ``, ``, ``]);
  };

  const applyLookbook = () => {
    const list = itemList
      .filter(equip => equip !== ``)
      .map(encodeURI)
      .join(`|`);

    applyPreview(list);
  };

  return (
    <FlexView
      content="between"
      css={{
        maxWidth: `720px`,
        border: `1px solid lightgray`,
        padding: isMobile ? `20px` : `20px 40px`,
        margin: isMobile ? `0 4px` : undefined,
      }}
      gap={20}
    >
      <FlexView content="between" gap={20} row wrap>
        {EQUIP_PARTS.map((part, index) => (
          <FlexView key={part} items="center" row>
            <Text css={{ minWidth: `120px` }} medium>
              {part}
            </Text>
            <Input
              width={INPUT_WIDTH}
              onChange={e => inputEquipName(e, index)}
            />
          </FlexView>
        ))}
      </FlexView>

      <FlexView content="end" gap={20} items="center" row>
        <Button
          border={Colors.red}
          css={{
            width: `120px`,
            height: `36px`,
          }}
          radius={4}
          onClick={initItemList}
        >
          <Text color={Colors.red} medium>
            초기화
          </Text>
        </Button>

        <Button
          border={Colors.primary}
          css={{
            width: `120px`,
            height: `36px`,
            border: `1px solid ${Colors.primary}`,
          }}
          radius={4}
          onClick={applyLookbook}
        >
          <Text color={Colors.primary} medium>
            적용
          </Text>
        </Button>
      </FlexView>
    </FlexView>
  );
};
