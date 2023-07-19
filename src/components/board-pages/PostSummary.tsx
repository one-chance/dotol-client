import { useState } from 'react';

import { Button, FlexView, Link, Text } from '@components/common';
import { Category, IPost } from '@interfaces/board';
import { Colors } from '@styles/system';
import { convertDateFormat } from '@utils/common';

type PostSummaryProps = {
  post: IPost;
  page: number;
  category: Category;
  isMobile?: boolean;
};

export default ({ post, page, category, isMobile }: PostSummaryProps) => {
  const [showUserModal, setShowUserModal] = useState(false);

  const openUserModal = () => setShowUserModal(true);
  const closeUserModal = () => setShowUserModal(false);

  const desktop = (
    <FlexView
      content="between"
      css={{
        borderBottom: `1px solid lightgray`,
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
            fontSize: `14px`,
            overflow: `hidden`,
            whiteSpace: `nowrap`,
            textOverflow: `ellipsis`,
            ':hover': {
              textDecoration: `underline`,
              textUnderlinePosition: `under`,
            },
          }}
          state={{ page }}
          to={`/board/${category}/post/${post.index}`}
        >
          {post.title}
        </Link>

        {post.commentCount !== 0 && (
          <Text color="red" css={{ minWidth: `40px` }} small>
            {`[${post.commentCount}]`}
          </Text>
        )}
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

  const mobile = (
    <FlexView>
      <FlexView
        content="between"
        css={{ padding: `4px 8px`, borderBottom: `1px solid lightgray` }}
        row
      >
        <FlexView gap={4} fill>
          <FlexView>
            <Link
              css={{
                fontWeight: 700,
                fontSize: `14px`,
                paddingRight: `8px`,
                overflow: `hidden`,
                whiteSpace: `nowrap`,
                textOverflow: `ellipsis`,
                wordBreak: `break-all`,
              }}
              state={{ page }}
              to={`/board/${category}/post/${post.index}`}
            >
              {post.title}
            </Link>
          </FlexView>

          <FlexView gap={4} items="center" fill row>
            <Button>
              <Text xSmall>{post.writer.character}</Text>
            </Button>
            <Text xSmall>조회{post.views}</Text>
            <Text xSmall>추천{post.recommenders.length}</Text>
            <Text xSmall>{convertDateFormat(post.createdAt)}</Text>
          </FlexView>
        </FlexView>

        <FlexView
          color="lightgray"
          css={{ width: `40px`, borderRadius: `4px` }}
          center
        >
          <Text color={Colors.red} semiBold xSmall>
            +{post.commentCount}
          </Text>
        </FlexView>
      </FlexView>
    </FlexView>
  );

  return isMobile ? mobile : desktop;
};
