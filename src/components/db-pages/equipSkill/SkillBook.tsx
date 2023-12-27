import { useState } from 'react';

import { Button, FlexView, Image, Text } from '@components/common';
import { Colors } from '@styles/index';

type SkillBookProps = {
  isMobile: boolean;
};

const SKILL_BOOKS = [
  `거마보호방패`,
  `검은구체핵`,
  `44개의생명`,
  `해일강격`,
  `화염대법`,
  `폭주운기`,
  `복희여와의가호`,
  `분노의화신`,
  `칠흑같은암흑`,
  `검은용의공포`,
  `건곤권`,
  `귀신의몸`,
  `호제암격`,
  `옴마니반메훔'환`,
  `청룡마령참'환`,
];

const skillImgs: { [key: string]: string[] } = {
  거마보호방패: [`a1`, `a2`, `a3`],
  검은구체핵: [`a4`, `a5`, `a6`],
  '44개의생명': [`a7`, `a8`, `a9`],
  해일강격: [`a10`, `a11`, `a12`],
  화염대법: [`a13`, `a14`, `a15`],
  폭주운기: [`a16`, `a17`, `a18`],
  복희여와의가호: [`a19`, `a20`, `a21`],
  분노의화신: [`a22`, `a23`, `a24`],
  칠흑같은암흑: [`a25`, `a26`, `a27`],
  검은용의공포: [`a28`, `a29`, `a30`],
  건곤권: [`a31`, `a32`, `a33`],
  귀신의몸: [`a34`, `a35`, `a36`],
  호제암격: [`a37`, `a38`, `a39`],
  "옴마니반메훔'환": [`a40`],
  "청룡마령참'환": [`a41`],
};

export default function Skillbook({ isMobile }: SkillBookProps) {
  const [skill, setSkill] = useState(``);

  const changeSkill = (name: string) => {
    setSkill(name);
  };

  return (
    <FlexView gap={20}>
      <Text size={isMobile ? `normal` : `large`} weight="semiBold">
        #기술서
      </Text>

      <FlexView
        border="lightgray"
        css={{ padding: `20px` }}
        gap={16}
        radius={8}
        row
        wrap
      >
        {SKILL_BOOKS.map(name => (
          <Button key={name} onClick={() => changeSkill(name)}>
            <Text
              color={name === skill ? Colors.red : Colors.black}
              size={isMobile ? `small` : `normal`}
              weight={name === skill ? `bold` : `regular`}
            >
              {name}
            </Text>
          </Button>
        ))}
      </FlexView>

      <FlexView
        color="lightgray"
        content="center"
        css={{ padding: `20px`, minHeight: `190px` }}
        gap={16}
        items="start"
        radius={8}
        row
        wrap
      >
        {skill !== `` &&
          skillImgs[skill].map(img => (
            <Image
              key={img}
              alt="skill"
              css={{ width: `100%`, height: `auto`, maxWidth: `260px` }}
              src={`https://asset.dotols.com/image/equip-skill/${img}.png`}
            />
          ))}
      </FlexView>
    </FlexView>
  );
}
