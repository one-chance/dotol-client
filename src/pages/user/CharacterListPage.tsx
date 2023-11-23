import { useQuery } from '@tanstack/react-query';

import { getCharacterList } from '@apis/index';
import { FlexView } from '@components/common';
import { AuthCharacter, CharacterList } from '@components/user-pages';
import { useResponsive } from '@hooks/index';

export default function CharacterListPage() {
  const isMobile = useResponsive(500);

  const { data: characterList = [] } = useQuery<string[]>({
    queryKey: [`characterList`],
    queryFn: () => getCharacterList().then(res => res.data),
  });

  return (
    <FlexView
      css={{
        width: isMobile ? `100%` : `960px`,
        margin: isMobile ? `20px auto` : `60px auto`,
      }}
      row
      wrap
      gap={20}
      content="center"
      items="start"
    >
      <AuthCharacter isMobile={isMobile} />

      <CharacterList isMobile={isMobile} list={characterList} />
    </FlexView>
  );
}
