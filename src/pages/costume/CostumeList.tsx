import { useState } from 'react';

import { Mannequin } from '@components/avatar';
import { Button, FlexView, Input, Text } from '@components/common';
import { Select, Option } from '@components/select';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

const CLOTHES_PARTS = [
  `치장 부위`,
  `목/어깨장식`,
  `투구`,
  `얼굴장식`,
  `무기`,
  `겉옷`,
  `방패/보조무기`,
  `망토`,
  `신발`,
  `장신구`,
  `세트옷`,
];

const testList = [
  `20주년목걸이No01`,
  `20주년목걸이No02`,
  `20주년목걸이No03`,
  `20주년목걸이No04`,
  `20주년목걸이No05`,
  `20주년순백하트목걸이`,
  `20주년청옥하트목걸이`,
  `20주년하프하트목걸이`,
  `GM고대마령의목걸이`,
  `GM아기백기린`,
];

export default () => {
  const isMobile = useResponsive(1080);
  const [searchKeyword, setSearchKeyword] = useState(``);
  const [selectedPart, setSelectedPart] = useState(CLOTHES_PARTS[0]);
  const [selectedItem, setSelectedItem] = useState(``);

  const inputSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const selectPart = (id: number) => {
    setSelectedPart(CLOTHES_PARTS[id]);
    // 해당 부위로 1페이지 불러오기
  };

  const selectItem = (_item: string) => {
    setSelectedItem(_item);
  };

  return (
    <FlexView css={{ margin: `40px auto` }} gap={20}>
      <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
        치장 목록
      </Text>

      <FlexView css={{ margin: `0 4px` }} gap={40} row wrap>
        <FlexView
          content="center"
          css={{ border: `1px solid lightgray`, margin: `0 auto` }}
        >
          <Mannequin character="협가검@하자" equip={selectedItem} />
        </FlexView>

        <FlexView
          css={{
            maxWidth: `900px`,
            width: `100%`,
            border: `1px solid lightgray`,
            // borderRadius: `4px`,
            padding: `20px`,
          }}
          gap={20}
        >
          <FlexView content="between" gap={20} items="center" row wrap>
            <FlexView items="center" row>
              <Input
                css={{ borderRight: 0, borderRadius: `4px 0 0 4px` }}
                placeholder="치장 이름"
                value={searchKeyword || ``}
                width={160}
                onChange={inputSearchKeyword}
              />
              <Button
                color="blue"
                css={{
                  borderRadius: `0 4px 4px 0`,
                  width: `60px`,
                  height: `36px`,
                }}
              >
                <Text color={Colors.white}>검색</Text>
              </Button>
            </FlexView>

            <FlexView items="center" row>
              <Select height={36} name={selectedPart} width={140} leftSquare>
                <Option
                  selected={selectedPart}
                  values={CLOTHES_PARTS}
                  onSelect={selectPart}
                />
              </Select>

              <Button
                color="blue"
                css={{
                  borderRadius: `0 4px 4px 0`,
                  width: `60px`,
                  height: `36px`,
                }}
              >
                <Text color={Colors.white}>검색</Text>
              </Button>
            </FlexView>
          </FlexView>

          <FlexView content="center" gap={8} row wrap>
            {testList.map(item => (
              <FlexView>
                <FlexView
                  color="#EBE7E2"
                  css={{ width: `160px`, height: `80px` }}
                />

                <FlexView
                  color="#EBE7E2"
                  content="between"
                  css={{ padding: `4px` }}
                  items="center"
                  row
                >
                  <Text color={Colors.red} bold small>
                    명품
                  </Text>
                  <Text bold small>
                    성별
                  </Text>
                </FlexView>
                <FlexView
                  css={{ minHeight: `28px`, padding: `4px` }}
                  gap={4}
                  center
                >
                  <Button onClick={() => selectItem(item)}>
                    <Text small>{item}</Text>
                  </Button>
                </FlexView>
              </FlexView>
            ))}
          </FlexView>

          <FlexView css={{ minHeight: `40px` }}>
            <Text>페이지네이션</Text>
          </FlexView>
        </FlexView>
      </FlexView>

      <Text color={Colors.red} small>
        # 아이템 이름을 클릭하면 마네킹에 착용됩니다.
      </Text>
    </FlexView>
  );
};
