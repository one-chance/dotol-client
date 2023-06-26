import { useState } from 'react';

import { Avatar } from '@components/avatar';
import { FlexView, Text } from '@components/common';
import { TanningList } from '@components/costume-pages';
import { userInfoState } from '@states/login';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';
import { useRecoilValue } from 'recoil';

export default () => {
  const isMobile = useResponsive(980);
  const { grade, character } = useRecoilValue(userInfoState);
  const [skinNumber, setSkinNumber] = useState(-1);

  const changeSkin = (_skin: number) => {
    if (grade < 2) {
      alert(`대표 캐릭터를 인증한 후에 사용할 수 있습니다.`);
      return;
    }
    setSkinNumber(_skin);
  };

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `40px auto` }} gap={20}>
      <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
        태닝 미리보기
      </Text>

      <FlexView
        css={{ margin: isMobile ? `0 4px` : `0 auto` }}
        gap={20}
        items={isMobile ? `center` : undefined}
        row={!isMobile}
      >
        <Avatar character={character} count={-1} skin={skinNumber} />

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
};
