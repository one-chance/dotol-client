import { useQuery } from '@tanstack/react-query';

import { getCharacterList } from '@apis/index';
import { FlexView } from '@components/common';
import { AuthCharacter, CharacterList } from '@components/user-pages';
import { useResponsive } from '@hooks/index';

export default function CharacterListPage() {
  const isMobile = useResponsive(750);

  const { data: characterList = [] } = useQuery<string[]>({
    queryKey: [`characterList`],
    queryFn: () => getCharacterList().then(res => res.data),
  });

  return (
    <FlexView content="start" css={{ margin: `0 auto` }} gap={20}>
      <FlexView content="center" gap={20} row wrap>
        <AuthCharacter isMobile={isMobile} />

        <CharacterList isMobile={isMobile} list={characterList} />
      </FlexView>
    </FlexView>
  );
}
