import { useState } from 'react';

import { FlexView, Text } from '@components/common';
import { Select, Option } from '@components/select';
import HOLY_EQUIP_DATA from '@data/antiquity-equip-holy.json';
import EQUIP_DATA from '@data/antiquity-equip.json';
import { CSSObject } from '@emotion/react';
import { useResponsive } from '@utils/hooks';

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
    `체력(%)`,
    `마력(%)`,
    `방어`,
  ],
  [
    `등급`,
    `피흡\n무시`,
    `회향`,
    `직타`,
    `피흡`,
    `방무`,
    `체력(%)`,
    `마력(%)`,
    `방어`,
  ],
  [
    `등급`,
    `저항\n무시(%)`,
    `체력`,
    `체력(%)`,
    `마력`,
    `마력(%)`,
    `힘`,
    `민첩`,
    `지력`,
  ],
  [`등급`, `피흡무시`, `마수`, `힘`, `민첩`, `지혜`, `방어`],
  [`등급`, `내구도(%)`, `마치`, `시향`, `공증`, `명회`],
];

const EQUIP_PARTS = [`무기`, `투구`, `갑옷`, `명경`, `장갑`, `보주`];

export default () => {
  const isMobile = useResponsive(620);
  const [selectedParts, setSelectedParts] = useState(EQUIP_PARTS[0]);

  const equipData: { [key: string]: string }[] =
    EQUIP_DATA[EQUIP_PARTS.indexOf(selectedParts)];
  const holyEquipData: { [key: string]: string }[] =
    EQUIP_PARTS.indexOf(selectedParts) < 3
      ? HOLY_EQUIP_DATA[EQUIP_PARTS.indexOf(selectedParts)]
      : [];

  const titleCSS: CSSObject = {
    letterSpacing: isMobile ? 0 : undefined,
    whiteSpace: `pre-wrap`,
  };

  const cellCSS: CSSObject = {
    letterSpacing: isMobile ? -0.5 : undefined,
  };

  const selectParts = (index: number) => {
    setSelectedParts(EQUIP_PARTS[index]);
  };

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView
        content="between"
        css={{ padding: isMobile ? `0 4px` : undefined }}
        items="center"
        row
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold>
          신수유물 도감
        </Text>

        <Select name={selectedParts} width={100}>
          <Option
            selected={selectedParts}
            values={EQUIP_PARTS}
            onSelect={selectParts}
          />
        </Select>
      </FlexView>

      <FlexView gap={8}>
        <Text
          css={{ padding: isMobile ? `0 4px` : undefined }}
          large={!isMobile}
          semiBold
        >
          일반 유물
        </Text>

        <FlexView css={{ width: isMobile ? `360px` : `600px` }}>
          <FlexView
            color="lightgray"
            css={{ minHeight: `40px`, padding: `4px 0` }}
            items="center"
            row
          >
            {TITLES[EQUIP_PARTS.indexOf(selectedParts)].map(title => (
              <Text
                key={title}
                css={titleCSS}
                small={isMobile}
                center
                fill
                semiBold
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
              {TITLES[EQUIP_PARTS.indexOf(selectedParts)].map(title => (
                <Text key={title} css={cellCSS} small={isMobile} center fill>
                  {item[title.replace(`\n`, ``)]}
                </Text>
              ))}
            </FlexView>
          ))}
        </FlexView>
      </FlexView>

      {holyEquipData.length > 1 && (
        <FlexView gap={8}>
          <Text
            css={{ padding: isMobile ? `0 4px` : undefined }}
            large={!isMobile}
            semiBold
          >
            신성한 유물
          </Text>

          <FlexView css={{ width: isMobile ? `360px` : `600px` }}>
            <FlexView
              color="lightgray"
              css={{ minHeight: `40px`, padding: `4px 0` }}
              items="center"
              row
            >
              {TITLES[EQUIP_PARTS.indexOf(selectedParts)].map(title => (
                <Text
                  key={title}
                  css={titleCSS}
                  small={isMobile}
                  center
                  fill
                  semiBold
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
                {TITLES[EQUIP_PARTS.indexOf(selectedParts)].map(title => (
                  <Text key={title} css={cellCSS} small={isMobile} center fill>
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
};
