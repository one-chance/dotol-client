import { useState } from 'react';

import { useRecoilValue } from 'recoil';

import { NewComment } from '@components/board-pages';
import { Button, FlexView, Icon, Text } from '@components/common';
import { IComment } from '@interfaces/index';
import { userIdState } from '@states/index';
import { Colors } from '@styles/index';

type CommentProps = {
  comment: IComment;
};

export default function CommentList({ comment }: CommentProps) {
  const userId = useRecoilValue(userIdState);
  const [replyMode, setReplyMode] = useState(false);

  const createReply = () => {
    // create recomment
    setReplyMode(false);
  };

  const deleteComment = () => {
    // 삭제
  };

  const deleteReply = () => {
    // 삭제
  };

  return (
    <FlexView css={{ borderBottom: `1px solid ${Colors.primary20}` }}>
      <FlexView css={{ padding: `12px`, minHeight: `100px` }} gap={8}>
        <FlexView content="between" items="center" row>
          <FlexView gap={8} items="center" row>
            <Text size="small" weight="bold">
              {comment.writer.character}
            </Text>
            <Text size="xSmall">
              {comment.createdAt.split(`.`)[0].replace(`T`, ` `)}
            </Text>
          </FlexView>

          <FlexView content="end" gap={16} items="center" row>
            <Button onClick={() => setReplyMode(!replyMode)}>
              <Text css={{ lineHeight: 1 }} size="small">
                답글
              </Text>
            </Button>

            {userId === comment.writer.userId && (
              <Button onClick={deleteComment}>
                <Text css={{ lineHeight: 1 }} size="small">
                  삭제
                </Text>
              </Button>
            )}
          </FlexView>
        </FlexView>

        <Text
          color={comment.isDeleted ? Colors.grey : Colors.black}
          size="small"
          fill
        >
          {comment.isDeleted ? `삭제된 댓글입니다.` : comment.content}
        </Text>
      </FlexView>

      {replyMode && (
        <FlexView
          color={Colors.whiteGrey}
          css={{
            padding: `10px 10px 10px 20px`,
            borderBottom: `1px solid ${Colors.primary20}`,
          }}
          gap={12}
          row
        >
          <Icon color={Colors.primary60} name="reply" size={16} />
          <NewComment color={Colors.whiteGrey} onSubmit={createReply} />
        </FlexView>
      )}

      {comment.replies?.map((reply: IComment) => (
        <FlexView
          key={reply.index}
          color={Colors.whiteGrey}
          css={{ padding: `12px 12px 12px 24px`, minHeight: `100px` }}
          gap={8}
          row
        >
          <Icon color={Colors.primary60} name="reply" size={12} />
          <FlexView gap={8} fill>
            <FlexView content="between" items="center" row>
              <FlexView gap={8} items="center" row>
                <Text size="small" weight="bold">
                  {reply.writer.character}
                </Text>
                <Text size="xSmall">
                  {reply.createdAt.split(`.`)[0].replace(`T`, ` `)}
                </Text>
              </FlexView>

              {userId === reply.writer.userId && (
                <Button onClick={deleteReply}>
                  <Text size="small">삭제</Text>
                </Button>
              )}
            </FlexView>

            <Text
              color={reply.isDeleted ? Colors.grey : Colors.black}
              size="small"
              fill
            >
              {reply.isDeleted ? `삭제된 댓글입니다.` : reply.content}
            </Text>
          </FlexView>
        </FlexView>
      ))}
    </FlexView>
  );
}
