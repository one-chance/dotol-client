import { useState } from 'react';

import { Comment } from '@components/board-pages';
import { Button, FlexView, Text } from '@components/common';

type CommentListProps = {
  comments: any;
};

export default ({ comments }: CommentListProps) => {
  const a = 1;

  return (
    <FlexView css={{ padding: `10px 0` }}>
      {/* {comments?.map((comment: any) => (
        <Comment editedAt="2023-06-13 06:06:12" writer="관찰완료@하자" />
      ))} */}

      <Comment
        content="댓글 테스트"
        editedAt="2023-06-13 06:06:12"
        recomments={[
          { id: 1, writer: `협가검@하자` },
          { id: 2, writer: `협가검@하자` },
        ]}
        writer="관찰완료@하자"
      />

      <Comment
        content="댓글 테스트"
        editedAt="2023-06-13 06:06:12"
        writer="관찰완료@하자"
      />
    </FlexView>
  );
};
