import { useState } from 'react';

import { Button, FlexView, Image, Text } from '@components/common';
import { Colors } from '@styles/index';

type SkillEnchantProps = {
  isMobile: boolean;
};

const ENCHANT_ITEMS = [
  `타계분신`,
  `타계무기`,
  `전우치분신`,
  `구미호분신`,
  `이화선인분신`,
  `싸울아비분신`,
];

const skillImgs: { [key: string]: string[] } = {
  타계분신: [
    `b1`,
    `b2`,
    `b3`,
    `b4`,
    `b5`,
    `b6`,
    `b7`,
    `b8`,
    `b9`,
    `b10`,
    `b11`,
    `b12`,
    `b13`,
    `b14`,
    `b15`,
  ],
  타계무기: [
    `b16`,
    `b17`,
    `b18`,
    `b19`,
    `b20`,
    `b21`,
    `b22`,
    `b23`,
    `b24`,
    `b25`,
    `b26`,
    `b27`,
    `b28`,
    `b29`,
    `b30`,
  ],
  전우치분신: [`b31`, `b32`, `b33`, `b34`, `b35`, `b36`, `b37`],
  구미호분신: [`b38`, `b39`, `b40`, `b41`, `b42`, `b43`, `b44`],
  이화선인분신: [`b45`, `b46`],
  싸울아비분신: [`b47`, `b48`],
};

export default function SkillEnchant({ isMobile }: SkillEnchantProps) {
  const [item, setItem] = useState(``);

  const changeItem = (name: string) => {
    setItem(name);
  };

  return (
    <FlexView gap={20}>
      <Text size={isMobile ? `normal` : `large`} weight="semiBold">
        #마법부여
      </Text>

      <FlexView
        border="lightgray"
        css={{ padding: `20px` }}
        gap={16}
        radius={8}
        row
        wrap
      >
        {ENCHANT_ITEMS.map(name => (
          <Button key={name} onClick={() => changeItem(name)}>
            <Text
              color={name === item ? Colors.red : Colors.black}
              size={isMobile ? `small` : `normal`}
              weight={name === item ? `bold` : `regular`}
            >
              {name}
            </Text>
          </Button>
        ))}
      </FlexView>

      <FlexView
        color="lightgray"
        content={isMobile ? `center` : `start`}
        css={{ padding: `20px`, minHeight: `250px` }}
        gap={16}
        items="start"
        radius={8}
        row
        wrap
      >
        {item !== `` &&
          skillImgs[item].map((img: string) => (
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
