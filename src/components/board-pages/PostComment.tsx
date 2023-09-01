import { useState } from 'react';

import { createComment } from '@apis/board';
import { CommentList, NewComment } from '@components/board-pages';
import { FlexView } from '@components/common';
import { Toast } from '@components/toast';
import { IComment } from '@interfaces/board';
import { showLoginState } from '@states/login';
import { Colors } from '@styles/system';
import { useSetRecoilState } from 'recoil';

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
    <FlexView
      css={{ border: `1px solid lightgray`, borderWidth: `1px 1px 0 1px` }}
    >
      <NewComment color={Colors.whiteGrey} onSubmit={submitComment} />

      {comments?.map((comment: IComment) => (
        <CommentList key={comment.index} comment={comment} />
      ))}

      {showToast && <Toast message={toastMessage} type="error" />}
    </FlexView>
  );
};
