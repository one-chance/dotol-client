import { useEffect, useState } from 'react';

import { getLookbookCount, decreaseLookbookCount } from '@apis/costumes';
import { getMyInfo } from '@apis/users';
import { Avatar } from '@components/avatar';
import { FlexView, Text } from '@components/common';
import { LookbookList } from '@components/costume-pages';
import { Toast } from '@components/toast';
import { isLoggedInState, showLoginState } from '@states/login';
import { Colors } from '@styles/system';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useResponsive } from '@utils/hooks';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export default () => {
  const isMobile = useResponsive(980);
  const queryClient = useQueryClient();
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const setShowLogin = useSetRecoilState(showLoginState);

  const [grade, setGrade] = useState(0);
  const [mainCharacter, setMainCharacter] = useState(``);
  const [equipList, setEquipList] = useState(``);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessge] = useState(``);

  const { data: lookbookCount } = useQuery<number>(
    [`lookbookCount`],
    () => (isLoggedIn ? getLookbookCount().then(res => res.data) : 0),
    { initialData: 0, enabled: isLoggedIn },
  );

  const decreaseCount = useMutation(decreaseLookbookCount, {
    onSuccess: () => {
      queryClient.invalidateQueries([`lookbookCount`]);
    },
  });

  const openToast = (message: string) => {
    setToastMessge(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };

  const equipItem = (_items: string) => {
    if (grade === 0) {
      setShowLogin(true);
      return;
    }
    if (grade < 2) {
      openToast(`대표 캐릭터를 인증해주세요.`);
      return;
    }

    if (lookbookCount === 0) return;

    setEquipList(_items);
    decreaseCount.mutate();
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
    <FlexView css={{ margin: isMobile ? `20px auto` : `40px auto` }} gap={20}>
      <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
        장비/치장 룩북
      </Text>

      <FlexView
        gap={20}
        items={isMobile ? `center` : undefined}
        row={!isMobile}
      >
        <Avatar
          character={mainCharacter}
          count={lookbookCount}
          equip={equipList}
        />

        <LookbookList applyPreview={equipItem} isMobile={isMobile} />
      </FlexView>

      <FlexView css={{ margin: `0 4px` }}>
        <Text color={Colors.red} small={isMobile} medium>
          * 게임 내에서 세트옷 부위 장비를 노출한 캐릭터는 룩북이 적용되지
          않습니다.
        </Text>
        <Text color={Colors.red} small={isMobile} medium>
          * 벗은 상태에서는 투구 부위에 아이템을 착용할 수 없는 버그가 있습니다.
        </Text>
      </FlexView>

      {showToast && <Toast message={toastMessage} type="error" />}
    </FlexView>
  );
};
