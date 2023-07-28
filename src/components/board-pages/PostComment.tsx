import { useState } from 'react';

import { createComment } from '@apis/board';
import { FlexView } from '@components/common';
import { Toast } from '@components/toast';
import { IComment } from '@interfaces/board';
import { showLoginState } from '@states/login';
import { Colors } from '@styles/system';
import { useSetRecoilState } from 'recoil';

import Comment from './Comment';
import NewComment from './NewComment';

type PostCommentProps = {
  comments: IComment[];
};

export default ({ comments }: PostCommentProps) => {
  const [grade, setGrade] = useState(0);
  const setShowLogin = useSetRecoilState(showLoginState);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessge] = useState(``);

  const openToast = (message: string) => {
    setToastMessge(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };

  const submitComment = (_comment: string) => {
    if (grade === 0) {
      setShowLogin(true);
      return;
    }
    if (grade < 2) {
      openToast(`대표 캐릭터를 인증해주세요.`);
    }

    // createComment
    // 댓글 등록
  };

  return (
    <>
      <FlexView css={{ paddingTop: `10px` }}>
        {comments?.map((comment: IComment) => (
          <Comment key={comment.index} comment={comment} />
        ))}
      </FlexView>

      <NewComment color={Colors.whiteGrey} onSubmit={submitComment} />

      {showToast && <Toast message={toastMessage} type="error" />}
    </>
  );
};