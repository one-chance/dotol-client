import { useState } from 'react';

import { getLookbookCount, decreaseLookbookCount } from '@apis/costumes';
import { Avatar } from '@components/avatar';
import { FlexView, Text } from '@components/common';
import { LookbookList } from '@components/costume-pages';
import { isLoggedInState, userInfoState } from '@states/login';
import { Colors } from '@styles/system';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useResponsive } from '@utils/hooks';
import { useRecoilValue } from 'recoil';

export default () => {
  const isMobile = useResponsive(980);
  const queryClient = useQueryClient();
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const { grade, character } = useRecoilValue(userInfoState);

  const [equipList, setEquipList] = useState(``);
  const { data: lookbookCount } = useQuery<number>(
    [`lookbookCount`],

    () => (isLoggedIn ? getLookbookCount() : 0),
  );

  const decreaseCount = useMutation(decreaseLookbookCount, {
    onSuccess: () => {
      queryClient.invalidateQueries([`lookbookCount`]);
    },
  });

  const equipItem = (_items: string) => {
    if (grade < 2) {
      alert(`대표 캐릭터를 인증한 후에 사용할 수 있습니다.`);
      return;
    }

    if (lookbookCount === 0) return;

    setEquipList(_items);
    decreaseCount.mutate();
  };

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
        <Avatar character={character} count={lookbookCount} equip={equipList} />

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
    </FlexView>
  );
};
