import { useState } from 'react';

import { FlexView } from '@components/common';
import { IComment } from '@interfaces/board';
import { Colors } from '@styles/system';

import Comment from './Comment';
import NewComment from './NewComment';

type PostCommentProps = {
  comments: IComment[];
};

export default ({ comments }: PostCommentProps) => {
  const [grade, setGrade] = useState(0);

  const submitComment = (_comment: string) => {
    if (grade < 2) alert(`로그인이 필요한 기능입니다.`);
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
    </>
  );
};
