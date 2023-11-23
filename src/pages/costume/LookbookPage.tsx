import { useEffect, useState } from 'react';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import {
  getLookbookCount,
  decreaseLookbookCount,
  getMyInfo,
} from '@apis/index';
import { Avatar } from '@components/costume-pages';
import { FlexView, Text } from '@components/common';
import { LookbookList } from '@components/costume-pages';
import { useResponsive } from '@hooks/index';
import { isLoggedInState, showLoginState, toastState } from '@states/index';
import { Colors } from '@styles/system';

export default function LookbookPage() {
  const isMobile = useResponsive(980);
  const queryClient = useQueryClient();
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const setShowLogin = useSetRecoilState(showLoginState);
  const openToast = useSetRecoilState(toastState);

  const [grade, setGrade] = useState(0);
  const [mainCharacter, setMainCharacter] = useState(``);
  const [equipList, setEquipList] = useState(``);

  const { data: lookbookCount } = useQuery<number>({
    queryKey: [`lookbookCount`],
    queryFn: () => (isLoggedIn ? getLookbookCount().then(res => res.data) : 0),
  });

  const decreaseCount = useMutation({
    mutationFn: decreaseLookbookCount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`lookbookCount`] });
    },
  });

  const equipItem = (_items: string) => {
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
    <FlexView css={{ margin: isMobile ? `20px auto` : `60px auto` }} gap={20}>
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
          * 게임에서 세트옷을 착용하지 않아야 룩북이 적용됩니다.
        </Text>
        <Text color={Colors.red} small={isMobile} medium>
          * 벗은 상태에서 투구를 착용할 수 없는 버그가 있습니다.
        </Text>
      </FlexView>
    </FlexView>
  );
}
