import { useEffect, useState } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { getMyInfo } from '@apis/index';
import { FlexView, Text } from '@components/common';
import { Avatar, TanningList } from '@components/costume-pages';

import { useResponsive } from '@hooks/index';
import { isLoggedInState, showLoginState, toastState } from '@states/index';
import { Colors } from '@styles/system';

export default function TanningPage() {
  const isMobile = useResponsive(980);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const setShowLogin = useSetRecoilState(showLoginState);
  const openToast = useSetRecoilState(toastState);

  const [grade, setGrade] = useState(0);
  const [mainCharacter, setMainCharacter] = useState(``);
  const [skinNumber, setSkinNumber] = useState(-1);

  const changeSkin = (_skin: number) => {
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

    setSkinNumber(_skin);
  };

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
    <FlexView css={{ margin: isMobile ? `20px auto` : `60px auto` }} gap={20}>
      <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
        태닝 미리보기
      </Text>

      <FlexView
        css={{ margin: isMobile ? `0 4px` : `0 auto` }}
        gap={20}
        items={isMobile ? `center` : undefined}
        row={!isMobile}
      >
        <Avatar character={mainCharacter} count={-1} skin={skinNumber} />

        <TanningList selectSkin={changeSkin} skinColor={skinNumber} />
      </FlexView>

      <Text
        color={Colors.red}
        css={{ margin: `0 4px` }}
        small={isMobile}
        medium
      >
        * 착용 중인 장비를 벗은 상태로 확인해보세요.
      </Text>
    </FlexView>
  );
}
