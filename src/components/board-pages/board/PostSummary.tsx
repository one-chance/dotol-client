import { useState } from 'react';

import { Button, FlexView, Link, Text } from '@components/common';
import { Category, IPost } from '@interfaces/board';
import { convertDateFormat } from '@utils/common';

type PostSummaryProps = {
  post: IPost;
  category: Category;
};

export default ({ post, category }: PostSummaryProps) => {
  const [showUserModal, setShowUserModal] = useState(false);

  const openUserModal = () => setShowUserModal(true);
  const closeUserModal = () => setShowUserModal(false);

  return (
    <FlexView
      content="between"
      css={{
        borderTop: `1px solid lightgray`,
        minHeight: `36px`,
        ':hover': {
          backgroundColor: `#F4F4F4`,
        },
      }}
      items="center"
      row
    >
      <Text css={{ minWidth: `60px` }} center small>
        {post.index}
      </Text>

      <FlexView
        css={{ maxWidth: `420px`, padding: `0 8px` }}
        gap={4}
        items="center"
        fill
        row
      >
        <Link
          css={{
            overflow: `hidden`,
            whiteSpace: `nowrap`,
            textOverflow: `ellipsis`,
            ':hover': {
              textDecoration: `underline`,
              textUnderlinePosition: `under`,
            },
          }}
          to={`/board/${category}/post/${post.index}`}
        >
          {post.title}
        </Link>

        <Text color="red" css={{ minWidth: `40px` }} center small>
          {`[${post.commentCount}]`}
        </Text>
      </FlexView>

      <Button css={{ minWidth: `140px` }} onClick={openUserModal}>
        <Text center small>
          {post.writer.character}
        </Text>
      </Button>

      <Text css={{ minWidth: `60px` }} center small>
        {post.views}
      </Text>
      <Text css={{ minWidth: `60px` }} center small>
        {post.recommenders.length}
      </Text>
      <Text css={{ minWidth: `60px` }} center small>
        {convertDateFormat(post.createdAt)}
      </Text>
    </FlexView>
  );
};
