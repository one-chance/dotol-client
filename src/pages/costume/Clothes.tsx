import { useEffect, useState } from 'react';

import { getClothesByName, getClothesByPart } from '@apis/costumes';
import { getMyInfo } from '@apis/users';
import { Mannequin } from '@components/avatar';
import { Button, FlexView, Image, Input, Text } from '@components/common';
import { MenuTab } from '@components/layout';
import { Pagination } from '@components/pagination';
import { Select, Option } from '@components/select';
import { IClothes } from '@interfaces/costumes';
import { isLoggedInState } from '@states/login';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

const CLOTHES_PARTS = [
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

const TABS = [`치장 미리보기`, `명품의 시리즈`];

export default () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useResponsive(960);
  const basicUrl = `https://avatar.baram.nexon.com/Profile/itemRender.aspx?inm=`;

  const [grade, setGrade] = useState(0);
  const [mainCharacter, setMainCharacter] = useState(``);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [selectedTab, setSelectedTab] = useState(TABS[0]);
  const [searchKeyword, setSearchKeyword] = useState(``);
  const [selectedPart, setSelectedPart] = useState(0);
  const [selectedItem, setSelectedItem] = useState<IClothes>({
    name: `착용 아이템`,
    part: 0,
    gender: 0,
    luxury: false,
  });

  const [clothesList, setClothesList] = useState<IClothes[]>([]);
  const [itemCount, setItemCount] = useState(1);

  const selectTab = (tab: string) => {
    setSelectedTab(tab);
  };

  const inputSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const searchByName = (part: number, page: number) => {
    if (grade < 2) {
      alert(`대표 캐릭터를 등록해야 사용할 수 있습니다.`);
      return;
    }

    navigate(`${location.pathname}?page=${page}`, { replace: true });

    if (selectedPart === 0 && searchKeyword === ``) {
      setClothesList([]);
      setItemCount(1);
      setSelectedItem({
        name: `착용 아이템`,
        part: 0,
        gender: 0,
        luxury: false,
      });
      return;
    }

    getClothesByName(searchKeyword, part, page).then(res => {
      if (res.statusCode === 200) {
        setClothesList(res.data.list);
        setItemCount(res.data.count);
      }
    });
  };

  const searchByPart = (part: number, page: number) => {
    navigate(`${location.pathname}?page=${page}`, { replace: true });

    if (part === 0) {
      setClothesList([]);
      setItemCount(1);
      setSelectedItem({
        name: `착용 아이템`,
        part: 0,
        gender: 0,
        luxury: false,
      });
      return;
    }

    getClothesByPart(part, page).then(res => {
      if (res.statusCode === 200) {
        setClothesList(res.data.list);
        setItemCount(res.data.count);
        setSearchKeyword(``);
      }
    });
  };

  const selectPart = (part: number) => {
    if (grade < 2) {
      alert(`대표 캐릭터를 등록해야 사용할 수 있습니다.`);
      return;
    }

    setSelectedPart(part);

    if (searchKeyword !== ``) {
      searchByName(part, 1);
    } else {
      searchByPart(part, 1);
    }
  };

  const selectItem = (_item: IClothes) => {
    setSelectedItem(_item);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get(`page`);

    if (page === null) return;

    if (searchKeyword !== ``) {
      searchByName(selectedPart, Number(page));
    } else {
      searchByPart(selectedPart, Number(page));
    }

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
      css={{ margin: isMobile ? `0 auto 20px auto` : `40px auto` }}
      gap={20}
    >
      <MenuTab isMobile={isMobile} menus={TABS} onClick={selectTab} />

      <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
        치장 미리보기
      </Text>

      <FlexView
        css={{ margin: isMobile ? `0 4px` : 0 }}
        gap={20}
        items="start"
        row
        wrap
      >
        <FlexView
          content="center"
          css={{ border: `1px solid lightgray`, margin: `0 auto` }}
        >
          <Mannequin character={mainCharacter} equip={selectedItem.name} />

          <FlexView css={{ paddingBottom: `20px` }} gap={4}>
            <Text color={Colors.red} center small>
              {CLOTHES_PARTS[selectedItem.part]}
            </Text>
            <Text color={Colors.red} center small>
              {selectedItem.name}
            </Text>
          </FlexView>
        </FlexView>

        <FlexView gap={12}>
          <FlexView
            content="between"
            css={{
              width: isMobile ? `360px` : `718px`,
              border: `1px solid lightgray`,
            }}
            gap={20}
          >
            <FlexView
              css={{
                padding: isMobile ? `10px` : `10px 20px`,
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
                name={CLOTHES_PARTS[selectedPart]}
                width={isMobile ? 110 : 140}
              >
                <Option
                  selected={CLOTHES_PARTS[selectedPart]}
                  values={CLOTHES_PARTS}
                  onSelect={selectPart}
                />
              </Select>

              <Input
                css={{
                  fontSize: isMobile ? `14px` : `16px`,
                  '::placeholder': {
                    fontSize: isMobile ? `14px` : `16px`,
                  },
                }}
                placeholder="치장 이름"
                value={searchKeyword || ``}
                width={isMobile ? 110 : 160}
                onChange={inputSearchKeyword}
                onKeyDown={e => {
                  if (e.key === `Enter`) {
                    searchByName(selectedPart, 1);
                  }
                }}
              />
              <Button
                color="blue"
                css={{
                  width: isMobile ? `48px` : `60px`,
                  height: `36px`,
                }}
                radius={4}
                onClick={() => searchByName(selectedPart, 1)}
              >
                <Text color={Colors.white}>검색</Text>
              </Button>
            </FlexView>

            <FlexView
              css={{
                height: `450px`,
                padding: isMobile ? `0 10px` : `0 20px`,
              }}
            >
              <FlexView
                content={isMobile ? `center` : `start`}
                gap={8}
                row
                wrap
              >
                {clothesList?.map(cloth => (
                  <FlexView key={cloth.name}>
                    <FlexView
                      color="#EBE7E2"
                      css={{
                        width: `160px`,
                        height: `90px`,
                      }}
                      items="center"
                    >
                      {cloth.name !== `` && (
                        <Image
                          css={{ margin: `auto` }}
                          src={`${basicUrl}${cloth.name}`}
                        />
                      )}
                    </FlexView>

                    <FlexView
                      color="#EBE7E2"
                      content="between"
                      css={{ width: `160px`, padding: `4px` }}
                      items="center"
                      row
                    >
                      <Text xSmall>성별</Text>

                      {cloth.luxury && (
                        <Text color={Colors.red} xSmall>
                          명품
                        </Text>
                      )}
                    </FlexView>
                    <FlexView
                      css={{
                        width: `160px`,
                        minHeight: `28px`,
                        padding: `4px`,
                      }}
                      gap={4}
                      center
                    >
                      <Button
                        css={{ userSelect: `text` }}
                        onClick={() => selectItem(cloth)}
                      >
                        <Text
                          color={
                            cloth.name === selectedItem.name
                              ? Colors.red
                              : Colors.primary
                          }
                          small
                          start
                        >
                          {cloth.name}
                        </Text>
                      </Button>
                    </FlexView>
                  </FlexView>
                ))}
              </FlexView>
              <FlexView fill />
            </FlexView>

            <FlexView css={{ minHeight: `40px` }}>
              <Pagination count={itemCount} unit={12} />
            </FlexView>
          </FlexView>

          <Text color={Colors.red} small>
            * 아이템 이름을 클릭하면 마네킹에 착용됩니다.
          </Text>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
