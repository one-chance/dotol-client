import { Button, FlexView, Image, Text } from '@components/common';
import { MenuTab } from '@components/layout';
import { SKILL_TABS } from '@constants/menu';
import { useResponsive } from '@hooks/useResponsive';
import { Colors } from '@styles/system';
import { useState } from 'react';

const SKILL_BOOKS = [
  '거마보호방패',
  '검은구체핵',
  '44개의생명',
  '해일강격',
  '화염대법',
  '폭주운기',
  '복희여와의가호',
  '분노의화신',
  '칠흑같은암흑',
  '검은용의공포',
  '건곤권',
  '귀신의몸',
  '호제암격',
  "옴마니반메훔'환",
  "청룡마령참'환",
];

const skillImgs: { [key: string]: string[] } = {
  거마보호방패: ['a1', 'a2', 'a3'],
  검은구체핵: ['a4', 'a5', 'a6'],
  '44개의생명': ['a7', 'a8', 'a9'],
  해일강격: ['a10', 'a11', 'a12'],
  화염대법: ['a13', 'a14', 'a15'],
  폭주운기: ['a16', 'a17', 'a18'],
  복희여와의가호: ['a19', 'a20', 'a21'],
  분노의화신: ['a22', 'a23', 'a24'],
  칠흑같은암흑: ['a25', 'a26', 'a27'],
  검은용의공포: ['a28', 'a29', 'a30'],
  건곤권: ['a31', 'a32', 'a33'],
  귀신의몸: ['a34', 'a35', 'a36'],
  호제암격: ['a37', 'a38', 'a39'],
  "옴마니반메훔'환": ['a40'],
  "청룡마령참'환": ['a41'],
};

const EquipSkill = () => {
  const isMobile = useResponsive(960);
  const [skill, setSkill] = useState('');

  const changeSkill = (name: string) => {
    setSkill(name);
  };

  return (
    <FlexView
      css={{
        maxWidth: `960px`,
        width: `100%`,
        margin: isMobile ? `0 0 40px 0` : `60px auto`,
      }}
      gap={40}
    >
      <MenuTab isMobile={isMobile} menus={SKILL_TABS} />

      <FlexView gap={20} css={{ padding: '0 10px' }}>
        <Text xxLarge={!isMobile} large={isMobile} bold>
          장비 마법
        </Text>

        <FlexView gap={10}>
          <Text large semiBold>
            #기술서
          </Text>
          <FlexView
            row
            wrap
            gap={16}
            css={{
              padding: '20px',
              border: '1px solid',
              borderRadius: '8px',
            }}
          >
            {SKILL_BOOKS.map(name => (
              <Button key={name} onClick={() => changeSkill(name)}>
                <Text color={name === skill ? Colors.red : Colors.black}>
                  {name}
                </Text>
              </Button>
            ))}
          </FlexView>
        </FlexView>

        {skill !== '' && (
          <FlexView
            row
            wrap
            center
            gap={16}
            color="lightgray"
            css={{
              padding: '10px 20px',
              minHeight: '250px',
              borderRadius: '8px',
            }}
          >
            {skillImgs[skill].map(img => (
              <Image
                key={img}
                src={`https://asset.dotols.com/image/equip-skill/${img}.png`}
                alt="skill"
                width={260}
              />
            ))}
          </FlexView>
        )}
      </FlexView>
    </FlexView>
  );
};

export default EquipSkill;
