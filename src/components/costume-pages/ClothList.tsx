import { useEffect, useState } from 'react';

import { getClothesList } from '@apis/costumes';
import { getMyInfo } from '@apis/users';
import { Mannequin } from '@components/avatar';
import { Button, FlexView, Image, Input, Text } from '@components/common';
import { Pagination } from '@components/pagination';
import { Select, Option } from '@components/select';
import { Toast } from '@components/toast';
import { IClothes } from '@interfaces/costumes';
import { isLoggedInState, showLoginState } from '@states/login';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

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

export default () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useResponsive(980);
  const basicUrl = `https://avatar.baram.nexon.com/Profile/itemRender.aspx?inm=`;

  const isLoggedIn = useRecoilValue(isLoggedInState);
  const setShowLogin = useSetRecoilState(showLoginState);

  const [grade, setGrade] = useState(0);
  const [mainCharacter, setMainCharacter] = useState(``);
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
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessge] = useState(``);

  const Gender: { [key: number]: string } = {
    0: `공용`,
    1: `남성`,
    2: `여성`,
  };

  const openToast = (message: string) => {
    setToastMessge(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };

  const inputSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const initData = () => {
    setClothesList([]);
    setItemCount(1);
    setSelectedItem({
      name: `착용 아이템`,
      part: 0,
      gender: 0,
      luxury: false,
    });
  };

  const searchList = (part: number, page: number) => {
    if (grade === 0) {
      setShowLogin(true);
      return;
    }
    if (grade < 2) {
      openToast(`대표 캐릭터를 인증해주세요.`);
      return;
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
      setShowLogin(true);
      return;
    }
    if (grade < 2) {
      openToast(`대표 캐릭터를 인증해주세요.`);
      return;
    }

    setSelectedPart(part);
    searchList(part, 1);
  };

  const selectItem = (_item: IClothes) => {
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
    <FlexView gap={20}>
      <Text
        css={{ margin: isMobile ? `0 10px` : 0 }}
        xLarge={isMobile}
        xxLarge={!isMobile}
        bold
      >
        치장 미리보기
      </Text>

      <FlexView
        content="center"
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
              width: isMobile ? `352px` : `718px`,
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
              css={{
                minHeight: `450px`,
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
                      color="#E6E5E5"
                      css={{
                        width: `160px`,
                        minHeight: `90px`,
                      }}
                      items="center"
                    >
                      {cloth.name !== `` && (
                        <Image
                          css={{ margin: `auto` }}
                          src={`${basicUrl}${encodeURI(cloth.name)}`}
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
                      <Text color={Colors.purple} xSmall>
                        {Gender[cloth.gender]}
                      </Text>

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
                        aria-label="치장 아이템"
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

          <FlexView>
            <Text color={Colors.red} small>
              * 아이템 이름을 클릭하면 마네킹에 착용됩니다.
            </Text>
            <Text color={Colors.red} small>
              * 투구는 미리보기가 안되는 넥슨측 버그가 있습니다.
            </Text>
          </FlexView>
        </FlexView>
      </FlexView>
      {showToast && <Toast message={toastMessage} type="error" />}
    </FlexView>
  );
};
