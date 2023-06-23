import { useState } from 'react';

import { getLookbookCount } from '@apis/costumes';
import { Avatar } from '@components/avatar';
import { FlexView, Text } from '@components/common';
import { LookbookList } from '@components/costume-pages';
import { LookbookCount } from '@interfaces/costumes';
import { Colors } from '@styles/system';
import { useQuery } from '@tanstack/react-query';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(980);
  const userId = `quwieo`;

  const [equipList, setEquipList] = useState(``);
  const { data: lookbookCount } = useQuery<number>(
    [`lookbookCount`, userId],
    () => getLookbookCount(userId),
  );

  const equipItem = async (_items: string) => {
    setEquipList(_items);
    // 잔여 횟수 1 감소
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
        <Avatar
          character="협가검@하자"
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
    </FlexView>
  );
};
