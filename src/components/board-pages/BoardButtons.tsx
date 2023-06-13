import { useState } from 'react';

import { Button, FlexView, Text } from '@components/common';
import { Category } from '@interfaces/board';
import { Colors } from '@styles/system';
import { useNavigate } from 'react-router-dom';

type BoardButtonProps = {
  category: Category;
  recent?: boolean;
  page?: number;
  recommend?: number;
  recommendList?: string[];
  write?: boolean;
};

export default ({
  category,
  recent,
  page,
  recommend,
  recommendList,
  write,
}: BoardButtonProps) => {
  const navigate = useNavigate();
  const [isRecommended, setIsRecommended] = useState(
    recommendList?.includes(`내 아이디`),
  );

  const goRecentPage = () => {
    navigate(`/board/${category}?page=1`);
  };

  const backToList = () => {
    navigate(`/board/${category}?page=${page}`);
  };

  const recommendArticle = () => {
    // 추천 한거면 추천 취소가 되어야 함
    // 추천 안한거면 추천이 되어야 함
  };

  const writeNewArticle = () => {
    navigate(`/board/${category}/write`);
  };

  return (
    <FlexView content="between" items="center" row>
      {recent && (
        <Button
          color="blue"
          css={{ width: `80px`, height: `36px`, borderRadius: `4px` }}
          onClick={goRecentPage}
        >
          <Text color={Colors.white} semiBold>
            최신글
          </Text>
        </Button>
      )}

      {page && (
        <Button
          color="blue"
          css={{ width: `80px`, height: `36px`, borderRadius: `4px` }}
          onClick={backToList}
        >
          <Text color={Colors.white} semiBold>
            목록
          </Text>
        </Button>
      )}

      {recommend && (
        <Button
          css={{
            minWidth: `80px`,
            height: `36px`,
            border: `1px solid`,
            borderColor: isRecommended ? `red` : `gray`,
            borderRadius: `4px`,
          }}
          onClick={recommendArticle}
        >
          <Text color={isRecommended ? `red` : `gray`}>추천 {recommend}</Text>
        </Button>
      )}

      {write && (
        <Button
          color="red"
          css={{ width: `80px`, height: `36px`, borderRadius: `4px` }}
          onClick={writeNewArticle}
        >
          <Text color={Colors.white} semiBold>
            글쓰기
          </Text>
        </Button>
      )}
    </FlexView>
  );
};
