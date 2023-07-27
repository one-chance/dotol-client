import { useEffect, useState } from 'react';

import { recommendPost } from '@apis/board';
import { getMyInfo } from '@apis/users';
import { Button, FlexView, Text } from '@components/common';
import { Toast } from '@components/toast';
import { showLoginState, userIdState } from '@states/login';
import { Colors } from '@styles/system';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

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
  const setShowLogin = useSetRecoilState(showLoginState);

  const [grade, setGrade] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessge] = useState(``);

  const openToast = (message: string) => {
    setToastMessge(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };

  const goToList = () => {
    navigate(`/board/${category}?page=1`);
  };

  const thumbUpAndDown = () => {
    if (grade === 0) {
      setShowLogin(true);
      return;
    }
    if (grade < 2) {
      openToast(`대표 캐릭터를 인증해주세요.`);
      return;
    }

    recommendPost(category, index);
  };

  const goToWrite = () => {
    if (grade === 0) {
      setShowLogin(true);
      return;
    }
    if (grade < 2) {
      openToast(`대표 캐릭터를 인증해주세요.`);
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
        aria-label="등록"
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
        aria-label="추천"
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
        aria-label="글쓰기"
        color={Colors.red}
        css={{ width: `80px`, height: `36px` }}
        radius={4}
        onClick={goToWrite}
      >
        <Text color={Colors.white} semiBold small>
          글쓰기
        </Text>
      </Button>

      {showToast && <Toast message={toastMessage} type="error" />}
    </FlexView>
  );
};
