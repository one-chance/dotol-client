import { useState } from 'react';

import { Avatar } from '@components/avatar';
import { Button, FlexView, Input, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

const EQUIP_PARTS = [
  `목/어깨장식`,
  `투구/모자`,
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
  const basic = `https://avatar.baram.nexon.com/Profile/AvatarRender.aspx?loginID=협가검@하자&is=1`;
  const [imgSrc, setImgSrc] = useState(basic);
  const [equipList, setEquipList] = useState<string[]>([
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
    equipList[id] = e.target.value;
    setEquipList([...equipList]);
  };

  const initEquipList = () => {
    setEquipList([``, ``, ``, ``, ``, ``, ``, ``, ``, ``]);
  };

  const loadPreview = () => {
    let list = `&previewEquip=`;
    equipList.forEach(equip => {
      if (equip !== ``) list += `${encodeURI(equip)}|`;
    });

    setImgSrc(basic + list);
  };

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `40px auto` }} gap={16}>
      <FlexView
        css={{ margin: `0 4px` }}
        gap={40}
        items={isMobile ? `center` : undefined}
        row={!isMobile}
      >
        <Avatar character="협가검@하자" count={40} src={imgSrc} />

        <FlexView
          css={{
            maxWidth: `720px`,
            border: `1px solid lightgray`,
            padding: `20px`,
          }}
          gap={40}
        >
          <Text bold center xLarge>
            바람의나라 룩북
          </Text>

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
              onClick={initEquipList}
            >
              <Text color={Colors.white} medium>
                초기화
              </Text>
            </Button>

            <Button
              color="blue"
              css={{ width: `140px`, height: `36px`, borderRadius: `4px` }}
              onClick={loadPreview}
            >
              <Text color={Colors.white} medium>
                적용
              </Text>
            </Button>
          </FlexView>
        </FlexView>
      </FlexView>

      <Text color="red" css={{ margin: `0 4px` }} small={isMobile} medium>
        * 게임 내에서 세트옷 부위 장비를 노출한 캐릭터는 룩북이 적용되지
        않습니다.
      </Text>
    </FlexView>
  );
};
