import { useState } from 'react';

import { getEquipByName, getEquipByOption } from '@apis/index';
import {
  Button,
  FlexView,
  Input,
  Text,
  Select,
  Option,
} from '@components/common';
import { ImageSlot } from '@components/db-pages';
import { useResponsive } from '@hooks/index';
import { IEquip } from '@interfaces/index';
import { Colors } from '@styles/index';

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
export default function NormalEquipList() {
  const isMobile = useResponsive(960);

  const [searchKeyword, setSearchKeyword] = useState(``);
  const [searchOption, setSearchOption] = useState({
    type: 0,
    part: 0,
    job: 0,
  });

  const [items, setItems] = useState([]);

  const [slot, setSlot] = useState([``, ``, ``]);

  const inputSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const selectItemType = (id: number) => {
    setSearchOption({ ...searchOption, type: id });
  };

  const selectItemPart = (id: number) => {
    setSearchOption({ ...searchOption, part: id });
  };

  const selectJob = (id: number) => {
    setSearchOption({ ...searchOption, job: id });
  };

  const searchItemByName = () => {
    if (searchKeyword === ``) {
      setItems([]);
      return;
    }

    getEquipByName(searchKeyword).then(res => {
      if (res.statusCode === 200) setItems(res.data);
    });

    setSearchOption({ type: 0, part: 0, job: 0 });
  };

  const searchItemByOption = () => {
    if (
      searchOption.type === 0 &&
      searchOption.part === 0 &&
      searchOption.job === 0
    ) {
      setItems([]);
      return;
    }

    getEquipByOption({
      type: searchOption.type,
      part: searchOption.part,
      job: searchOption.job,
    }).then(res => {
      if (res.statusCode === 200) setItems(res.data);
    });

    setSearchKeyword(``);
  };

  const updateSlot = (index: number, name: string) => {
    const copy = [...slot];

    if (index === -1) {
      const emptyIndex = copy.findIndex(empty => empty === ``);
      if (emptyIndex !== -1) copy[emptyIndex] = `equip/${name}`;
    } else {
      copy[index] = ``;
    }

    setSlot(copy);
  };

  return (
    <FlexView gap={20}>
      <FlexView gap={20}>
        <FlexView content="between" gap={20} items="center" row wrap>
          <FlexView row>
            <Input
              css={{
                borderRight: 0,
                borderRadius: `4px 0 0 4px`,
              }}
              placeholder="장비 이름"
              value={searchKeyword || ``}
              width={200}
              center
              onChange={inputSearchKeyword}
              onKeyDown={e => {
                if (e.key === `Enter`) searchItemByName();
              }}
            />
            <Button
              aria-label="검색"
              color={Colors.primary}
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
              label={ITEM_TYPES[searchOption.type]}
              width={isMobile ? 112 : 130}
            >
              <Option
                selected={ITEM_TYPES[searchOption.type]}
                values={ITEM_TYPES}
                onSelect={selectItemType}
              />
            </Select>

            <Select
              height={36}
              isMobile={isMobile}
              label={ITEM_PARTS[searchOption.part]}
              width={isMobile ? 112 : 130}
            >
              <Option
                selected={ITEM_PARTS[searchOption.part]}
                values={ITEM_PARTS}
                onSelect={selectItemPart}
              />
            </Select>

            <Select
              height={36}
              isMobile={isMobile}
              label={JOBS[searchOption.job]}
              width={isMobile ? 66 : 80}
            >
              <Option
                selected={JOBS[searchOption.job]}
                values={JOBS}
                onSelect={selectJob}
              />
            </Select>

            <Button
              aria-label="검색"
              color={Colors.primary}
              css={{ width: `48px`, height: `36px` }}
              radius={4}
              onClick={searchItemByOption}
            >
              <Text color={Colors.white}>검색</Text>
            </Button>
          </FlexView>
        </FlexView>

        <FlexView
          border="lightgray"
          css={{
            maxHeight: `151px`,
            minHeight: `116px`,
            overflowY: `auto`,
            padding: `10px`,
            alignContent: items.length === 0 ? `center` : `flex-start`,
            '::-webkit-scrollbar': { display: `none` },
          }}
          gap={8}
          radius={4}
          row
          wrap
        >
          {items?.length === 0 && (
            <FlexView center fill>
              <Text color="gray" size={isMobile ? `small` : `normal`}>
                아이템을 선택하면 빈 슬롯에 자동으로 추가됩니다.
              </Text>
              <Text color="gray" size={isMobile ? `small` : `normal`}>
                슬롯 버튼을 클릭하면 빈 슬롯으로 변경됩니다.
              </Text>
            </FlexView>
          )}

          {items?.map((item: IEquip) => (
            <Button
              key={item.index}
              aria-label="장비"
              onClick={() => updateSlot(-1, item.index.toString())}
            >
              <Text color={Colors.primary} size="small">
                {item.name}
              </Text>
            </Button>
          ))}
        </FlexView>
      </FlexView>

      <ImageSlot
        isMobile={isMobile}
        items={slot}
        width={300}
        onSelect={updateSlot}
      />
    </FlexView>
  );
}
