import { useState } from 'react';

import { Chip } from '@components/chip';
import { Button, FlexView, Image, Input, Text } from '@components/common';
import { Select, Option } from '@components/select';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

const ITEM_TYPES = [
  `장비 종류`,
  `용장비`,
  `북방장비`,
  `중국전설`,
  `일본전설`,
  `환웅장비`,
  `백제/황산벌`,
  `전우치/구미호`,
  `타계장비`,
  `흉수계/봉래산`,
  `생산장비`,
  `격전지/전장`,
  `승급장비`,
  `합성노리개`,
  `귀문장비`,
  `기타장비`,
];

const ITEM_PARTS = [
  `착용 부위`,
  `목/어깨장식`,
  `투구`,
  `얼굴장식`,
  `무기`,
  `갑옷`,
  `방패/보조무기`,
  `손`,
  `망토`,
  `보조`,
  `신발`,
  `장신구`,
  `세트옷`,
];

const JOBS = [
  `직업`,
  `공용`,
  `전사`,
  `도적`,
  `주술사`,
  `도사`,
  `궁사`,
  `천인`,
  `마도사`,
  `영술사`,
  `차사`,
  `살수`,
];

export default () => {
  const isMobile = useResponsive(960);
  const [searchKeyword, setSearchKeyword] = useState(``);
  const [searchOption, setSearchOption] = useState({
    type: ITEM_TYPES[0],
    parts: ITEM_PARTS[0],
    job: JOBS[0],
  });

  const [items, setItems] = useState([]);
  const [slotItems, setSlotItems] = useState<{ [key: string]: string }>({
    one: ``,
    two: ``,
    three: ``,
  });

  const inputSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const selectItemType = (id: number) => {
    setSearchOption({ ...searchOption, type: ITEM_TYPES[id] });
  };

  const selectItemPart = (id: number) => {
    setSearchOption({ ...searchOption, parts: ITEM_PARTS[id] });
  };

  const selectJob = (id: number) => {
    setSearchOption({ ...searchOption, job: JOBS[id] });
  };

  const searchItemByName = () => {
    // 장비 검색
    setSearchOption({
      type: ITEM_TYPES[0],
      parts: ITEM_PARTS[0],
      job: JOBS[0],
    });
  };

  const searchItemByOption = () => {
    if (ITEM_TYPES.indexOf(searchOption.type) - 1 < 0) return;
    setSearchKeyword(``);

    // console.log(ITEM_TYPES.indexOf(searchOption.type) - 1);
    // 장비 옵션 검색
  };

  const saveToSlot = (name: string) => {
    if (slotItems.one === ``) setSlotItems({ ...slotItems, one: name });
    else if (slotItems.two === ``) setSlotItems({ ...slotItems, two: name });
    else if (slotItems.three === ``)
      setSlotItems({ ...slotItems, three: name });
  };

  const removeFromSlot = (slot: string) => {
    setSlotItems({ ...slotItems, [slot]: `` });
  };

  return (
    <FlexView css={{ maxWidth: `960px`, width: `100%`, margin: `40px auto` }}>
      <FlexView gap={20}>
        <FlexView gap={20}>
          <FlexView
            content="between"
            css={{ padding: `0 4px` }}
            gap={20}
            items="center"
            row
            wrap
          >
            <FlexView row>
              <Input
                css={{
                  borderRight: 0,
                  borderRadius: `4px 0 0 4px`,
                  textAlign: `center`,
                }}
                placeholder="장비 이름"
                value={searchKeyword || ``}
                width={200}
                onChange={inputSearchKeyword}
                onKeyDown={e => {
                  if (e.key === `Enter`) searchItemByName();
                }}
              />
              <Button
                color="blue"
                css={{ width: `60px`, borderRadius: `0 4px 4px 0` }}
                onClick={searchItemByName}
              >
                <Text color={Colors.white}>검색</Text>
              </Button>
            </FlexView>

            <FlexView gap={4} items="center" row>
              <Select
                height={36}
                isMobile={isMobile}
                name={searchOption.type}
                width={isMobile ? 112 : 130}
              >
                <Option
                  selected={searchOption.type}
                  values={ITEM_TYPES}
                  onSelect={selectItemType}
                />
              </Select>

              <Select
                height={36}
                isMobile={isMobile}
                name={searchOption.parts}
                width={isMobile ? 112 : 130}
              >
                <Option
                  selected={searchOption.parts}
                  values={ITEM_PARTS}
                  onSelect={selectItemPart}
                />
              </Select>

              <Select
                height={36}
                isMobile={isMobile}
                name={searchOption.job}
                width={isMobile ? 66 : 80}
              >
                <Option
                  selected={searchOption.job}
                  values={JOBS}
                  onSelect={selectJob}
                />
              </Select>

              <Button
                color="blue"
                css={{ width: `48px`, height: `36px`, borderRadius: `4px` }}
                onClick={searchItemByOption}
              >
                <Text color={Colors.white}>검색</Text>
              </Button>
            </FlexView>
          </FlexView>

          <FlexView
            css={{
              maxHeight: `200px`,
              minHeight: `100px`,
              overflowY: `auto`,
              border: `1px solid lightgray`,
              borderRadius: `4px`,
              padding: `10px 20px`,
            }}
            gap={4}
            row
            wrap
          >
            {items.length < 1 && (
              <FlexView css={{ width: `100%` }} center>
                <Text color="gray" small={isMobile}>
                  아이템을 선택하면 빈 슬롯에 자동으로 추가됩니다.
                </Text>
                <Text color="gray" small={isMobile}>
                  슬롯 버튼을 클릭하면 빈 슬롯으로 변경됩니다.
                </Text>
              </FlexView>
            )}

            {items?.map(item => (
              <Chip
                key={item}
                radius={8}
                text={item}
                clickable
                onClick={() => saveToSlot(item)}
              />
            ))}
          </FlexView>
        </FlexView>

        <FlexView
          content="center"
          css={{
            border: `1px solid lightgray`,
            borderRadius: `4px`,
            padding: `10px`,
          }}
          gap={16}
          row={!isMobile}
        >
          <FlexView css={{ minWidth: `310px` }} gap={10} items="center">
            <Button
              css={{
                border: `1px solid`,
                borderColor: slotItems.one === `` ? `blue` : `red`,
                borderRadius: `4px`,
                width: `60px`,
                height: `36px`,
              }}
              disabled={slotItems.one === ``}
              onClick={() => removeFromSlot(`one`)}
            >
              <Text color={slotItems.one === `` ? `blue` : `red`}>슬롯1</Text>
            </Button>

            {slotItems.one !== `` && <Image src="/empty.png" />}
          </FlexView>

          <FlexView css={{ minWidth: `300px` }} gap={10} items="center">
            <Button
              css={{
                border: `1px solid`,
                borderColor: slotItems.two === `` ? `blue` : `red`,
                borderRadius: `4px`,
                width: `60px`,
                height: `36px`,
              }}
              disabled={slotItems.two === ``}
              onClick={() => removeFromSlot(`two`)}
            >
              <Text color={slotItems.two === `` ? `blue` : `red`}>슬롯2</Text>
            </Button>

            {slotItems.two !== `` && <Image src="/empty.png" />}
          </FlexView>

          <FlexView css={{ minWidth: `300px` }} gap={10} items="center">
            <Button
              css={{
                border: `1px solid`,
                borderColor: slotItems.three === `` ? `blue` : `red`,
                borderRadius: `4px`,
                width: `60px`,
                height: `36px`,
              }}
              disabled={slotItems.three === ``}
              onClick={() => removeFromSlot(`three`)}
            >
              <Text color={slotItems.three === `` ? `blue` : `red`}>슬롯3</Text>
            </Button>

            {slotItems.three !== `` && <Image src="/empty.png" />}
          </FlexView>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
