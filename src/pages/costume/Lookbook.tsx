import { useState } from 'react';

import { Avatar } from '@components/avatar';
import { Button, FlexView, Input, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

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

export default () => {
  const isMobile = useResponsive(1080);
  const [equipList, setEquipList] = useState(``);
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

  const applyPreview = () => {
    const list = itemList
      .filter(equip => equip !== ``)
      .map(encodeURI)
      .join(`|`);

    setEquipList(list);
  };

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `40px auto` }} gap={20}>
      <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
        장비/치장 룩북
      </Text>

      <FlexView
        css={{ margin: `0 4px` }}
        gap={40}
        items={isMobile ? `center` : undefined}
        row={!isMobile}
      >
        <Avatar character="협가검@하자" count={40} equip={equipList} />

        <FlexView
          content="between"
          css={{
            maxWidth: `720px`,
            border: `1px solid lightgray`,
            padding: isMobile ? `20px` : `20px 40px`,
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
              color="red"
              css={{ width: `140px`, height: `36px`, borderRadius: `4px` }}
              onClick={initItemList}
            >
              <Text color={Colors.white} medium>
                초기화
              </Text>
            </Button>

            <Button
              color="blue"
              css={{ width: `140px`, height: `36px`, borderRadius: `4px` }}
              onClick={applyPreview}
            >
              <Text color={Colors.white} medium>
                적용
              </Text>
            </Button>
          </FlexView>
        </FlexView>
      </FlexView>

      <FlexView css={{ margin: `0 4px` }}>
        <Text color="red" small={isMobile} medium>
          * 게임 내에서 세트옷 부위 장비를 노출한 캐릭터는 룩북이 적용되지
          않습니다.
        </Text>
        <Text color="red" small={isMobile} medium>
          * 벗은 상태에서는 투구 부위에 아이템을 착용할 수 없는 버그가 있습니다.
        </Text>
      </FlexView>
    </FlexView>
  );
};
