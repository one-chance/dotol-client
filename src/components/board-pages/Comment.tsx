import { useState } from 'react';

import { Comment, InputComment } from '@components/board-pages';
import { Button, FlexView, Text } from '@components/common';

type CommentProps = {
  editedAt: string;
  writer: string;
  content: string;
  recomments?: any;
  isRecomment?: boolean;
  isEdited?: boolean;
  isDeleted?: boolean;
};

export default ({
  editedAt,
  writer,
  content,
  recomments,
  isRecomment,
  isEdited,
  isDeleted,
}: CommentProps) => {
  const [editMode, setEditMode] = useState(false);
  const [replyMode, setReplyMode] = useState(false);

  const editComment = () => {
    setEditMode(false);
  };

  const deleteComment = () => {
    // 삭제
  };

  const submitRecomment = (_recomment: string) => {
    // create recomment
    setReplyMode(false);
  };

  return (
    <FlexView css={{ borderBottom: `1px solid lightgray` }}>
      <FlexView
        content="between"
        css={{ padding: `0 10px`, minHeight: `30px` }}
        items="center"
        row
      >
        <FlexView gap={4} items="end" row>
          <Text bold small>
            {writer}
          </Text>
          <Text xSmall>{editedAt}</Text>
          {isEdited && (
            <Text color="gray" xSmall>
              (수정)
            </Text>
          )}
        </FlexView>

        <FlexView gap={8} items="center" row>
          <Button onClick={() => setEditMode(!editMode)}>
            <Text small>{editMode ? `취소` : `수정`}</Text>
          </Button>

          <Button onClick={deleteComment}>
            <Text small>삭제</Text>
          </Button>

          {!isRecomment && (
            <Button onClick={() => setReplyMode(!replyMode)}>
              <Text small>답글</Text>
            </Button>
          )}
        </FlexView>
      </FlexView>

      <FlexView css={{ padding: `4px 20px`, minHeight: `60px` }}>
        {editMode ? (
          <InputComment onSubmit={editComment} />
        ) : (
          <Text color={isDeleted ? `gray` : `black`} small>
            {isDeleted ? `삭제된 댓글입니다.` : content}
          </Text>
        )}
      </FlexView>

      {recomments?.map((recomment: any) => (
        <FlexView
          key={recomment.id}
          color="lightgray"
          css={{ marginLeft: `20px`, borderTop: `1px solid` }}
        >
          <Comment
            key={recomment.id}
            content="답글 테스트"
            editedAt="2023-06-13 06:06:12"
            writer={recomment.writer}
            isRecomment
          />
        </FlexView>
      ))}

      {replyMode && (
        <FlexView css={{ paddingLeft: `20px` }}>
          <InputComment onSubmit={submitRecomment} />
        </FlexView>
      )}
    </FlexView>
  );
};
