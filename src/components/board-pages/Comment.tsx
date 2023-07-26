import { useState } from 'react';

import { Comment, NewComment } from '@components/board-pages';
import { Button, FlexView, Text } from '@components/common';
import { IComment } from '@interfaces/board';
import { userIdState } from '@states/login';
import { Colors } from '@styles/system';
import { useRecoilValue } from 'recoil';

type CommentProps = {
  comment: IComment;
  isRecomment?: boolean;
};

export default ({ comment, isRecomment }: CommentProps) => {
  const userId = useRecoilValue(userIdState);
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
    <FlexView>
      <FlexView css={{ borderBottom: `1px solid lightgray` }}>
        <FlexView
          content="between"
          css={{ padding: `0 10px`, minHeight: `30px` }}
          items="center"
          row
        >
          <FlexView gap={4} items="end" row>
            <Text bold small>
              {comment.writer.character}
            </Text>
            <Text xSmall>
              {comment.updatedAt.split(`.`)[0].replace(`T`, ` `)}
            </Text>
            {comment.createdAt !== comment.updatedAt && (
              <Text color="gray" xSmall>
                (수정)
              </Text>
            )}
          </FlexView>

          <FlexView gap={8} items="center" row>
            {userId === comment.writer.userId && (
              <Button
                aria-label={editMode ? `취소` : `수정`}
                onClick={() => setEditMode(!editMode)}
              >
                <Text small>{editMode ? `취소` : `수정`}</Text>
              </Button>
            )}

            {userId === comment.writer.userId && (
              <Button aria-label="삭제" onClick={deleteComment}>
                <Text small>삭제</Text>
              </Button>
            )}

            {!isRecomment && (
              <Button
                aria-label="답글"
                onClick={() => setReplyMode(!replyMode)}
              >
                <Text small>답글</Text>
              </Button>
            )}
          </FlexView>
        </FlexView>

        <FlexView css={{ padding: `4px 20px`, minHeight: `60px` }}>
          {editMode ? (
            <NewComment onSubmit={editComment} />
          ) : (
            <Text color={comment.isDeleted ? Colors.grey : Colors.black} small>
              {comment.isDeleted ? `삭제된 댓글입니다.` : comment.content}
            </Text>
          )}
        </FlexView>
      </FlexView>

      {comment.replies?.map((reply: IComment) => (
        <FlexView
          key={reply.index}
          color="lightgray"
          css={{ paddingLeft: `20px` }}
        >
          <Comment comment={reply} isRecomment />
        </FlexView>
      ))}

      {replyMode && (
        <FlexView css={{ paddingLeft: `20px` }}>
          <NewComment onSubmit={submitRecomment} />
        </FlexView>
      )}
    </FlexView>
  );
};
