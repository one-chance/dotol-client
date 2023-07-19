import { useEffect, useState } from 'react';

import { recommendPost } from '@apis/board';
import { getMyInfo } from '@apis/users';
import { Button, FlexView, Text } from '@components/common';
import { userIdState } from '@states/login';
import { Colors } from '@styles/system';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

type PostButtonProps = {
  category: string;
  index: number;
  recommenders: string[];
  isMobile?: boolean;
};

export default ({
  category,
  index,
  recommenders,
  isMobile,
}: PostButtonProps) => {
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdState);
  const [grade, setGrade] = useState(0);

  const goToList = () => {
    navigate(`/board/${category}?page=1`);
  };

  const thumbUpAndDown = () => {
    if (grade < 2) {
      alert(`로그인이 필요한 기능입니다.`);
    }

    recommendPost(category, index);
  };

  const goToWrite = () => {
    if (grade < 2) {
      alert(`로그인이 필요한 기능입니다.`);
      return;
    }

    navigate(`/board/${category}/write`);
  };

  useEffect(() => {
    if (userId === ``) return;

    getMyInfo().then(res => {
      if (res.statusCode === 200) {
        setGrade(res.data.grade);
      }
    });
  }, [userId]);

  return (
    <FlexView
      content={isMobile ? `around` : `between`}
      css={{
        padding: `10px 0`,
        borderTop: `1px solid ${Colors.lightGrey}`,
        borderBottom: `1px solid ${Colors.lightGrey}`,
      }}
      items="center"
      row
    >
      <Button
        color={Colors.purple}
        css={{ width: `80px`, height: `36px` }}
        radius={4}
        onClick={goToList}
      >
        <Text color={Colors.white} semiBold small>
          목록
        </Text>
      </Button>

      <Button
        css={{
          border: `1px solid`,
          borderColor: recommenders.includes(userId) ? Colors.red : `blue`,
          width: `80px`,
          height: `36px`,
        }}
        radius={4}
        onClick={thumbUpAndDown}
      >
        <Text
          color={recommenders.includes(userId) ? Colors.red : `blue`}
          semiBold
          small
        >
          추천 {recommenders.length}
        </Text>
      </Button>

      <Button
        color={Colors.red}
        css={{ width: `80px`, height: `36px` }}
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
