import { Button, FlexView, Link, Text } from '@components/common';
import { Board, IPost } from '@interfaces/index';
import { Colors } from '@styles/system';
import { convertDateFormat } from '@utils/index';

type PostSummaryProps = {
  post: IPost;
  page: number;
  board: Board;
  isMobile?: boolean;
};

export default ({ post, page, board, isMobile }: PostSummaryProps) => {
  const desktop = (
    <FlexView
      content="between"
      css={{
        borderBottom: `1px solid lightgray`,
        minHeight: `40px`,
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
            <Text color={Colors.red} css={{ minWidth: `40px` }} semiBold small>
              [공지]
            </Text>

            <Text
              color={Colors.red}
              css={{
                maxWidth: `calc(100vw - 340px)`,
                overflow: `hidden`,
                whiteSpace: `nowrap`,
                textOverflow: `ellipsis`,
                wordBreak: `break-all`,
              }}
              small
            >
              {post.title}
            </Text>
          </FlexView>
        </Link>
      </FlexView>

      <Link
        aria-label="작성자"
        css={{ minWidth: `140px`, padding: `0 8px`, textAlign: `center` }}
        to="/freeboard?page=1&search=writer,띠용@GM"
      >
        <Text color={Colors.red} small>
          {post.writer.character}
        </Text>
      </Link>

      <Text
        color={Colors.red}
        css={{ minWidth: `80px`, padding: `0 8px` }}
        center
        small
      >
        {post.recommenders.length}
      </Text>
      <Text
        color={Colors.red}
        css={{ minWidth: `80px`, padding: `0 8px` }}
        center
        small
      >
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
          <Text color={Colors.red} css={{ minWidth: `40px` }} semiBold small>
            [공지]
          </Text>

          <Text
            color={Colors.red}
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
        </FlexView>
      </Link>

      <FlexView gap={8} items="center" row>
        <Button aria-label="작성자">
          <Text color={Colors.red} xSmall>
            {post.writer.character}
          </Text>
        </Button>

        <Text color={Colors.red} xSmall>
          추천{post.recommenders.length}
        </Text>
        <Text color={Colors.red} xSmall>
          {convertDateFormat(post.createdAt)}
        </Text>
      </FlexView>
    </FlexView>
  );

  return isMobile ? mobile : desktop;
};
