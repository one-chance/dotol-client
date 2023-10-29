import { useEffect, useState } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { getMyInfo } from '@apis/index';
import { Avatar } from '@components/avatar';
import { FlexView, Text } from '@components/common';
import { TanningList } from '@components/costume-pages';
import { Toast } from '@components/toast';
import { useResponsive } from '@hooks/index';
import { isLoggedInState, showLoginState } from '@states/index';
import { Colors } from '@styles/system';

export default () => {
  const isMobile = useResponsive(980);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const setShowLogin = useSetRecoilState(showLoginState);

  const [grade, setGrade] = useState(0);
  const [mainCharacter, setMainCharacter] = useState(``);
  const [skinNumber, setSkinNumber] = useState(-1);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessge] = useState(``);

  const openToast = (message: string) => {
    setToastMessge(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };

  const changeSkin = (_skin: number) => {
    if (grade === 0) {
      setShowLogin(true);
      return;
    }
    if (grade < 2) {
      openToast(`대표 캐릭터를 인증해주세요.`);
      return;
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

      {showToast && <Toast message={toastMessage} type="error" />}
    </FlexView>
  );
};
