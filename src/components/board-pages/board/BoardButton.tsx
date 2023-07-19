import { Button, FlexView, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useNavigate } from 'react-router-dom';

type BoardButtonProps = {
  category: string;
};

export default ({ category }: BoardButtonProps) => {
  const navigate = useNavigate();

  const goToList = () => {
    navigate(`/board/${category}?page=1`);
  };

  const goToWrite = () => {
    navigate(`/board/${category}/write`);
  };

  return (
    <FlexView content="between" items="center" row>
      <Button
        color={Colors.purple}
        css={{ width: `60px`, height: `30px` }}
        radius={4}
        onClick={goToList}
      >
        <Text color={Colors.white} semiBold small>
          목록
        </Text>
      </Button>

      <Button
        color={Colors.red}
        css={{ width: `60px`, height: `30px` }}
        radius={4}
        onClick={goToWrite}
      >
        <Text color={Colors.white} semiBold small>
          글쓰기
        </Text>
      </Button>
    </FlexView>
  );
};
