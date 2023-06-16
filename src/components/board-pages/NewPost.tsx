import { Button, FlexView, Input, Text } from '@components/common';
import { CATEGORES } from '@constants/board';
import { Category } from '@interfaces/board';
import { useResponsive } from '@utils/hooks';

type NewPostProps = {
  category: Category;
};

export default ({ category }: NewPostProps) => {
  const isMobile = useResponsive(800);

  return (
    <FlexView gap={20}>
      <Text bold xxLarge>
        {CATEGORES[category]} 게시판
      </Text>

      <FlexView gap={10}>
        <Input height={40} placeholder="제목을 입력하세요." />
        <FlexView
          css={{
            padding: `10px`,
            minHeight: `400px`,
            border: `1px solid lightgray`,
            borderRadius: `4px`,
          }}
          data-placeholder="내용을 입력하세요."
        >
          <Text>내용을 입력하세요..</Text>
        </FlexView>
      </FlexView>

      <FlexView content="end" gap={8} items="center" row>
        <Button
          css={{
            border: `1px solid red`,
            borderRadius: `4px`,
            width: `80px`,
            height: `40px`,
          }}
        >
          <Text color="red">취소</Text>
        </Button>
        <Button
          css={{
            border: `1px solid blue`,
            borderRadius: `4px`,
            width: `80px`,
            height: `40px`,
          }}
        >
          <Text color="blue">등록</Text>
        </Button>
      </FlexView>
    </FlexView>
  );
};
