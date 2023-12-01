import { Button, FlexView, Text } from '@components/common';
import { IPost } from '@interfaces/index';

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
      <Text size="large" weight="semiBold" fill>
        {post.title}
      </Text>

      <FlexView content="between" items="center" row>
        <FlexView gap={16} items="center" row>
          <Button aria-label="작성자">
            <Text size="small">{post.writer.character}</Text>
          </Button>

          <Text size="small" center>
            조회 {post.views}
          </Text>

          <Text size="small" center>
            댓글 {post.commentCount}
          </Text>

          <Text size="small" center>
            추천 {post.recommenders.length}
          </Text>
        </FlexView>

        <Text size="small">
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
      <Text css={{ fontSize: `18px` }} weight="bold">
        {post.title}
      </Text>

      <FlexView gap={12} items="center" row wrap>
        <Button aria-label="작성자">
          <Text size="xSmall">{post.writer.character}</Text>
        </Button>

        <Text size="xSmall">조회 {post.views}</Text>

        <Text size="xSmall">댓글 {post.commentCount}</Text>

        <Text size="xSmall">추천 {post.recommenders.length}</Text>

        <Text size="xSmall">
          {post.createdAt.split(`.`)[0].replace(`T`, ` `).substring(0, 16)}
        </Text>
      </FlexView>
    </FlexView>
  );

  return isMobile ? mobile : desktop;
};
