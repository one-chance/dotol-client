import { useState } from 'react';

import { useSetRecoilState } from 'recoil';

import { CommentList, NewComment } from '@components/board-pages';
import { FlexView } from '@components/common';
import { IComment } from '@interfaces/index';
import { showLoginState, toastState } from '@states/index';
import { Colors } from '@styles/index';

type PostCommentProps = {
  comments: IComment[];
};

export default ({ comments }: PostCommentProps) => {
  const [grade, setGrade] = useState(0);
  const setShowLogin = useSetRecoilState(showLoginState);
  const openToast = useSetRecoilState(toastState);

  const submitComment = (_comment: string) => {
    if (grade === 0) {
      return setShowLogin(true);
    }
    if (grade === 1) {
      return openToast({
        open: true,
        message: `대표 캐릭터를 인증해주세요.`,
        type: `error`,
      });
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
    </FlexView>
  );
};
