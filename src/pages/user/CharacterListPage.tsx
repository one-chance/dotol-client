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
    <FlexView css={{ margin: `0 auto` }} gap={20} content="start">
      <FlexView row wrap gap={20} content="center">
        <AuthCharacter isMobile={isMobile} />

        <CharacterList isMobile={isMobile} list={characterList} />
      </FlexView>
    </FlexView>
  );
}
