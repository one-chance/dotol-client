/* eslint-disable no-alert */
import { useEffect, useState } from 'react';

import { deletePost, recommendPost } from '@apis/board';
import { getMyInfo } from '@apis/users';
import { Button, FlexView, Text } from '@components/common';
import { Toast } from '@components/toast';
import { Board, IPost } from '@interfaces/board';
import { showLoginState, userIdState } from '@states/login';
import { Colors } from '@styles/system';
import { Viewer } from '@toast-ui/react-editor';
import { useResponsive } from '@utils/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import '@toast-ui/editor/dist/toastui-editor.css';

type PostContentProps = {
  board: Board;
  post: IPost;
};

const basicUrl = `https://dotols.com`;

export default ({ board, post }: PostContentProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useResponsive(960);
  const userId = useRecoilValue(userIdState);
  const setShowLogin = useSetRecoilState(showLoginState);

  const [grade, setGrade] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessge] = useState(``);

  const copyUrl = () => {
    navigator.clipboard.writeText(basicUrl + location.pathname);
  };

  const editPost = () => {
    navigate(`/${board}/edit/${post.index}`, { state: post });
  };

  const removePost = () => {
    const isDelete = window.confirm(`게시물을 삭제하시겠습니까?`);

    if (isDelete) {
      deletePost(board, post.index).then(res => {
        if (res.statusCode === 200) {
          navigate(`/freeboard?page=1`);
        }
      });
    }
  };

  const openToast = (message: string) => {
    setToastMessge(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1500);
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

    recommendPost(board, post.index).then(res => {
      if (res.statusCode === 200) {
        window.location.reload();
      }
    });
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
    <FlexView>
      <FlexView
        content="between"
        css={{ padding: `0 8px`, margin: `10px 0` }}
        items="center"
        row
      >
        <Button aria-label="url" onClick={copyUrl}>
          <Text color="gray" xSmall>
            {basicUrl + location.pathname}
          </Text>
        </Button>

        {userId !== post.writer.userId && (
          <FlexView gap={16} items="center" row>
            <Button aria-label="수정" onClick={editPost}>
              <Text color={Colors.grey} small={!isMobile} xSmall={isMobile}>
                수정
              </Text>
            </Button>

            <Button aria-label="삭제" onClick={removePost}>
              <Text color={Colors.grey} small={!isMobile} xSmall={isMobile}>
                삭제
              </Text>
            </Button>
          </FlexView>
        )}
      </FlexView>

      <FlexView css={{ minHeight: `400px`, padding: `0 10px` }}>
        <Viewer initialValue={post.content} />
      </FlexView>

      <FlexView
        content="center"
        css={{
          marginTop: `20px`,
          padding: `12px 0`,
          borderTop: `1px solid lightgray`,
          borderBottom: `1px solid lightgray`,
        }}
        row
      >
        <Button
          aria-label="추천"
          color={
            post.recommenders.includes(userId) ? Colors.purple : Colors.white
          }
          css={{
            border: `1px solid ${Colors.purple}`,
            width: `80px`,
            height: `36px`,
          }}
          radius={4}
          onClick={thumbUpAndDown}
        >
          <Text
            color={
              post.recommenders.includes(userId) ? Colors.white : Colors.purple
            }
            semiBold
            small
          >
            추천 {post.recommenders.length}
          </Text>
        </Button>
      </FlexView>

      {showToast && <Toast message={toastMessage} type="error" />}
    </FlexView>
  );
};
