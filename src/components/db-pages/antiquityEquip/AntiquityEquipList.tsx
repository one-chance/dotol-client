import { useState } from 'react';

import HOLY_EQUIP_DATA from '@data/antiquity-equip-holy.json';
import EQUIP_DATA from '@data/antiquity-equip.json';
import { CSSObject } from '@emotion/react';

import { FlexView, Text } from '@components/common';
import { useResponsive } from '@hooks/index';

type AntiquityEquipListProps = {
  part: string;
};

const TITLES = [
  [
    `등급`,
    `피흡\n무시`,
    `마수`,
    `피흡`,
    `공증`,
    `방관`,
    `방무`,
    `체력\n(%)`,
    `마력\n(%)`,
    `타격치`,
  ],
  [
    `등급`,
    `피흡\n무시`,
    `재생력`,
    `마치`,
    `피흡`,
    `공증`,
    `방무`,
    `체력\n(%)`,
    `마력\n(%)`,
    `방어`,
  ],
  [
    `등급`,
    `피흡\n무시`,
    `회향`,
    `직타`,
    `피흡`,
    `방무`,
    `체력\n(%)`,
    `마력\n(%)`,
    `방어`,
  ],
  [
    `등급`,
    `저항\n무시(%)`,
    `체력`,
    `체력\n(%)`,
    `마력`,
    `마력\n(%)`,
    `힘`,
    `민첩`,
    `지력`,
  ],
  [`등급`, `피흡무시`, `마수`, `힘`, `민첩`, `지혜`, `방어`],
  [`등급`, `내구도(%)`, `마치`, `시향`, `공증`, `명회`],
];

const EQUIP_PARTS = [`무기`, `투구`, `갑옷`, `명경`, `장갑`, `보주`];

export default function AntiquityEquipList({ part }: AntiquityEquipListProps) {
  const isMobile = useResponsive(620);
  // const [selectedParts, setSelectedParts] = useState(EQUIP_PARTS[0]);

  const equipData: { [key: string]: string }[] =
    EQUIP_DATA[EQUIP_PARTS.indexOf(part)];

  const holyEquipData: { [key: string]: string }[] =
    EQUIP_PARTS.indexOf(part) < 3
      ? HOLY_EQUIP_DATA[EQUIP_PARTS.indexOf(part)]
      : [];

  const titleCSS: CSSObject = {
    letterSpacing: isMobile ? 0 : undefined,
    whiteSpace: `pre-wrap`,
  };

  return (
    <FlexView gap={20}>
      <FlexView gap={8}>
        <Text size={isMobile ? `normal` : `large`} weight="semiBold">
          일반 유물
        </Text>

        <FlexView css={{ width: isMobile ? `350px` : `600px` }}>
          <FlexView
            color="lightgray"
            css={{ minHeight: `40px`, padding: `4px 0` }}
            items="center"
            row
          >
            {TITLES[EQUIP_PARTS.indexOf(part)].map(title => (
              <Text
                key={title}
                css={titleCSS}
                size={isMobile ? `xSmall` : `small`}
                weight="semiBold"
                center
                fill
              >
                {title}
              </Text>
            ))}
          </FlexView>

          {equipData?.map((item: { [key: string]: string }) => (
            <FlexView
              key={item.등급}
              css={{
                minHeight: `30px`,
                border: `solid lightgray`,
                borderWidth: isMobile ? `0 0 1px 0` : `0 1px 1px 1px`,
              }}
              items="center"
              row
            >
              {TITLES[EQUIP_PARTS.indexOf(part)].map(title => (
                <Text
                  key={title}
                  size={isMobile ? `xSmall` : `small`}
                  center
                  fill
                >
                  {item[title.replace(`\n`, ``)]}
                </Text>
              ))}
            </FlexView>
          ))}
        </FlexView>
      </FlexView>

      {holyEquipData.length > 1 && (
        <FlexView gap={8}>
          <Text size={isMobile ? `normal` : `large`} weight="semiBold">
            신성한 유물
          </Text>

          <FlexView css={{ width: isMobile ? `350px` : `600px` }}>
            <FlexView
              color="lightgray"
              css={{ minHeight: `40px`, padding: `4px 0` }}
              items="center"
              row
            >
              {TITLES[EQUIP_PARTS.indexOf(part)].map(title => (
                <Text
                  key={title}
                  css={titleCSS}
                  size={isMobile ? `xSmall` : `small`}
                  weight="semiBold"
                  center
                  fill
                >
                  {title}
                </Text>
              ))}
            </FlexView>

            {holyEquipData?.map((item: { [key: string]: string }) => (
              <FlexView
                key={item.등급}
                css={{
                  minHeight: `30px`,
                  border: `solid lightgray`,
                  borderWidth: isMobile ? `0 0 1px 0` : `0 1px 1px 1px`,
                }}
                items="center"
                row
              >
                {TITLES[EQUIP_PARTS.indexOf(part)].map(title => (
                  <Text
                    key={title}
                    size={isMobile ? `xSmall` : `small`}
                    center
                    fill
                  >
                    {item[title.replace(`\n`, ``)]}
                  </Text>
                ))}
              </FlexView>
            ))}
          </FlexView>
        </FlexView>
      )}
    </FlexView>
  );
}
