import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { getClothesList, getMyInfo } from '@apis/index';
import { Costume, Mannequin } from '@components/costume-pages';
import {
  Button,
  FlexView,
  Input,
  Text,
  Select,
  Option,
} from '@components/common';
import { Pagination } from '@components/pagination';
import { ICostume } from '@interfaces/costumes';
import { isLoggedInState, showLoginState, toastState } from '@states/index';
import { Colors } from '@styles/system';
import { useQuery } from '@tanstack/react-query';

const COSTUME_PARTS = [
  `착용 부위`,
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

interface CostumeListProps {
  isMobile: boolean;
}

export default function CostumeList({ isMobile }: CostumeListProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = useRecoilValue(isLoggedInState);
  const setShowLogin = useSetRecoilState(showLoginState);
  const openToast = useSetRecoilState(toastState);

  const [grade, setGrade] = useState(0);
  const [mainCharacter, setMainCharacter] = useState(``);
  const [searchKeyword, setSearchKeyword] = useState(``);
  const [selectedPart, setSelectedPart] = useState(0);
  const [selectedItem, setSelectedItem] = useState<ICostume>({
    index: 0,
    name: `착용 아이템`,
    part: 0,
    gender: 0,
    luxury: false,
  });

  const { data: testList = [] } = useQuery({
    queryKey: [`testList`],
    queryFn: () =>
      getClothesList(searchKeyword, selectedPart, 1).then(res => res.data.list),
  });

  const [itemList, setClothesList] = useState<ICostume[]>([]);
  const [itemCount, setItemCount] = useState(1);

  const inputSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const initData = () => {
    setClothesList([]);
    setItemCount(1);
    setSelectedItem({
      index: 0,
      name: `착용 아이템`,
      part: 0,
      gender: 0,
      luxury: false,
    });
  };

  const searchList = (part: number, page: number) => {
    if (grade === 0) {
      return setShowLogin(true);
    }
    if (grade === 1) {
      return openToast({
        open: true,
        message: `대표 캐릭터를 인증해주세요.`,
        type: 'error',
      });
    }

    navigate(`${location.pathname}?page=${page}`, { replace: true });

    if (part === 0 && searchKeyword === ``) return initData();

    getClothesList(searchKeyword, part, page).then(res => {
      if (res.statusCode === 200) {
        setClothesList(res.data.list);
        setItemCount(res.data.count);
      }
    });
  };

  const selectPart = (part: number) => {
    if (grade === 0) {
      return setShowLogin(true);
    }
    if (grade === 1) {
      return openToast({
        open: true,
        message: `대표 캐릭터를 인증해주세요.`,
        type: 'error',
      });
    }

    setSelectedPart(part);
    searchList(part, 1);
  };

  const selectItem = (_item: ICostume) => {
    setSelectedItem(_item);
  };

  useEffect(() => {
    if (grade === 0) return;

    const urlParams = new URLSearchParams(location.search);
    const page = urlParams.get(`page`);

    if (page === null) return;

    searchList(selectedPart, Number(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  useEffect(() => {
    if (!isLoggedIn) {
      setGrade(0);
      setMainCharacter(``);
      return;
    }

    getMyInfo().then(res => {
      if (res.statusCode === 200) {
        setGrade(res.data.grade);
        setMainCharacter(res.data.mainCharacter);
      }
    });
  }, [isLoggedIn]);

  return (
    <FlexView
      content="center"
      gap={20}
      items={isMobile ? 'center' : 'start'}
      row={!isMobile}
      wrap
    >
      <FlexView content="center" border="lightgray">
        <Mannequin character={mainCharacter} equip={selectedItem.name} />

        <FlexView css={{ paddingBottom: `20px` }} gap={4}>
          <Text color={Colors.red} center small>
            {COSTUME_PARTS[selectedItem.part]}
          </Text>
          <Text color={Colors.red} center small>
            {selectedItem.name}
          </Text>
        </FlexView>
      </FlexView>

      <FlexView gap={10}>
        <FlexView
          border="lightgray"
          content="between"
          css={{
            width: isMobile ? `350px` : `538px`,
            // minWidth: `350px`,
            // maxWidth: '538px',
            // width: '100%',
          }}
          gap={20}
        >
          <FlexView
            css={{
              padding: `10px`,
              borderBottom: `1px solid lightgray`,
            }}
            gap={8}
            center
            row
            wrap
          >
            <Select
              height={36}
              isMobile={isMobile}
              label={COSTUME_PARTS[selectedPart]}
              width={isMobile ? 110 : 140}
            >
              <Option
                selected={COSTUME_PARTS[selectedPart]}
                values={COSTUME_PARTS}
                onSelect={selectPart}
              />
            </Select>

            <Input
              aria-label="검색어"
              placeholder="치장 이름"
              value={searchKeyword || ``}
              width={isMobile ? 110 : 160}
              onChange={inputSearchKeyword}
              onKeyDown={e => {
                if (e.key === `Enter`) {
                  searchList(selectedPart, 1);
                }
              }}
            />
            <Button
              aria-label="검색"
              color={Colors.purple}
              css={{
                width: isMobile ? `48px` : `60px`,
                height: `36px`,
              }}
              radius={4}
              onClick={() => searchList(selectedPart, 1)}
            >
              <Text color={Colors.white}>검색</Text>
            </Button>
          </FlexView>

          <FlexView
            row
            wrap
            gap={8}
            css={{
              minHeight: `450px`,
              padding: isMobile ? `0 10px` : `0 20px`,
            }}
            content="center"
          >
            {itemList?.map(item => (
              <Costume
                item={item}
                key={item.index}
                isSelected={selectedItem.name === item.name}
                onSelect={selectItem}
              />
            ))}
          </FlexView>

          <FlexView css={{ minHeight: `40px` }}>
            <Pagination count={itemCount} unit={12} />
          </FlexView>
        </FlexView>

        <FlexView>
          <Text color={Colors.red} small>
            * 아이템 이름을 클릭하면 마네킹에 착용됩니다.
            <br />* 투구는 미리보기가 안되는 넥슨측 버그가 있습니다.
          </Text>
        </FlexView>
      </FlexView>
    </FlexView>
  );
}
