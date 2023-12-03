import { useEffect, useState } from 'react';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import {
  getLookbookCount,
  decreaseLookbookCount,
  getMyInfo,
} from '@apis/index';
import { FlexView, Text } from '@components/common';
import { Avatar, LookbookList } from '@components/costume-pages';
import { useResponsive } from '@hooks/index';
import { isLoggedInState, showLoginState, toastState } from '@states/index';
import { Colors } from '@styles/index';

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
        type: `error`,
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
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <Text size={isMobile ? `large` : `xLarge`} weight="bold">
        캐릭터 룩북
      </Text>

      <FlexView
        gap={20}
        items={isMobile ? `center` : `stretch`}
        row={!isMobile}
      >
        <Avatar
          character={mainCharacter}
          count={lookbookCount}
          equip={equipList}
        />

        <LookbookList applyPreview={equipItem} isMobile={isMobile} />
      </FlexView>

      <Text color={Colors.red} size="small">
        ● 인게임에서 세트옷을 보이지 않게 해야 합니다.
        <br />● 벗은 상태로 투구를 착용할 수 없는 버그가 있습니다.
      </Text>
    </FlexView>
  );
}
