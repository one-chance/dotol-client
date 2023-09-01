import { Button, FlexView, Text } from '@components/common';
import { IPost } from '@interfaces/board';

type PostTitleProps = {
  post: IPost;
  isMobile?: boolean;
};

export default ({ post, isMobile }: PostTitleProps) => {
  const desktop = (
    <FlexView
      css={{
        padding: `12px 8px`,
        borderBottom: `1px solid lightgray`,
      }}
      gap={12}
    >
      <Text fill large semiBold>
        {post.title}
      </Text>

      <FlexView content="between" items="center" row>
        <FlexView gap={16} items="center" row>
          <Button aria-label="작성자">
            <Text small>{post.writer.character}</Text>
          </Button>

          <Text center small>
            조회 {post.views}
          </Text>

          <Text center small>
            댓글 {post.commentCount}
          </Text>

          <Text center small>
            추천 {post.recommenders.length}
          </Text>
        </FlexView>

        <Text small>
          {post.createdAt.split(`.`)[0].replace(`T`, ` `).substring(0, 16)}
        </Text>
      </FlexView>
    </FlexView>
  );

  const mobile = (
    <FlexView
      css={{
        borderBottom: `1px solid lightgray`,
        padding: `12px 4px`,
      }}
      gap={8}
    >
      <Text css={{ fontSize: `18px` }} bold>
        {post.title}
      </Text>

      <FlexView gap={12} items="center" row wrap>
        <Button aria-label="작성자">
          <Text xSmall>{post.writer.character}</Text>
        </Button>

        <Text xSmall>조회 {post.views}</Text>

        <Text xSmall>댓글 {post.commentCount}</Text>

        <Text xSmall>추천 {post.recommenders.length}</Text>

        <Text xSmall>
          {post.createdAt.split(`.`)[0].replace(`T`, ` `).substring(0, 16)}
        </Text>
      </FlexView>
    </FlexView>
  );

  return isMobile ? mobile : desktop;
};
