import { useState } from 'react';

import { Board, IPost } from '@interfaces/board';

import { Button, FlexView, Link, Text } from '@components/common';
import { Colors } from '@styles/system';
import { convertDateFormat } from '@utils/index';

type PostSummaryProps = {
  post: IPost;
  page: number;
  board: Board;
  isMobile?: boolean;
};

export default ({ post, page, board, isMobile }: PostSummaryProps) => {
  const [showUserModal, setShowUserModal] = useState(false);

  const openUserModal = () => setShowUserModal(true);
  const closeUserModal = () => setShowUserModal(false);

  const desktop = (
    <FlexView
      content="between"
      css={{
        borderBottom: `1px solid lightgray`,
        minHeight: `40px`,
        ':hover': {
          backgroundColor: `#F4F4F4`,
        },
      }}
      items="center"
      row
    >
      <FlexView
        css={{ maxWidth: `420px`, padding: `0 8px` }}
        gap={4}
        items="center"
        fill
        row
      >
        <Link
          aria-label="게시물"
          state={{ page }}
          to={`/${board}/${post.index}`}
        >
          <FlexView gap={4} items="center" row>
            <Text
              css={{
                maxWidth: `calc(100vw - 340px)`,
                overflow: `hidden`,
                whiteSpace: `nowrap`,
                textOverflow: `ellipsis`,
                wordBreak: `break-all`,
                ':hover': {
                  color: Colors.purple,
                  textDecoration: `underline`,
                  textUnderlinePosition: `under`,
                },
              }}
              small
            >
              {post.title}
            </Text>

            {post.commentCount !== 0 && (
              <Text color={Colors.purple} semiBold small>
                {`[${post.commentCount}]`}
              </Text>
            )}
          </FlexView>
        </Link>
      </FlexView>

      <Button
        aria-label="작성자"
        css={{ minWidth: `140px`, padding: `0 8px` }}
        onClick={openUserModal}
      >
        <Text center small>
          {post.writer.character}
        </Text>
      </Button>

      <Text css={{ minWidth: `80px`, padding: `0 8px` }} center small>
        {post.recommenders.length}
      </Text>
      <Text css={{ minWidth: `80px`, padding: `0 8px` }} center small>
        {convertDateFormat(post.createdAt)}
      </Text>
    </FlexView>
  );

  const mobile = (
    <FlexView
      content="center"
      css={{
        minHeight: `60px`,
        padding: `4px 8px`,
        borderBottom: `1px solid lightgray`,
      }}
      gap={8}
    >
      <Link aria-label="게시물" state={{ page }} to={`/${board}/${post.index}`}>
        <FlexView gap={4} items="center" row>
          <Text
            css={{
              maxWidth: `calc(100vw - 60px)`,
              overflow: `hidden`,
              whiteSpace: `nowrap`,
              textOverflow: `ellipsis`,
              wordBreak: `break-all`,
            }}
            semiBold
            small
          >
            {post.title}
          </Text>

          {post.commentCount !== 0 && (
            <Text color={Colors.purple} semiBold small>
              {`[${post.commentCount}]`}
            </Text>
          )}
        </FlexView>
      </Link>

      <FlexView gap={8} items="center" row>
        <Button aria-label="작성자">
          <Text xSmall>{post.writer.character}</Text>
        </Button>

        <Text xSmall>추천{post.recommenders.length}</Text>
        <Text xSmall>{convertDateFormat(post.createdAt)}</Text>
      </FlexView>
    </FlexView>
  );

  return isMobile ? mobile : desktop;
};
