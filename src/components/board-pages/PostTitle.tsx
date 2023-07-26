import { deletePost } from '@apis/board';
import { Button, FlexView, Text } from '@components/common';
import { IPost } from '@interfaces/board';
import { userIdState } from '@states/login';
import { Colors } from '@styles/system';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

type PostTitleProps = {
  post: IPost;
  category: string;
  isMobile?: boolean;
};

const basicUrl = `https://dotols.com`;

export default ({ post, category, isMobile }: PostTitleProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdState);

  const copyUrl = () => {
    navigator.clipboard.writeText(basicUrl + location.pathname);
  };

  const editPost = () => {
    navigate(`/board/${category}/edit/${post.index}`, { state: post });
  };

  const removePost = () => {
    deletePost(category, post.index).then(res => {
      if (res.statusCode === 200) {
        alert(`삭제되었습니다.`);
        navigate(`/board/free?page=1`);
      }
    });
  };

  const desktop = (
    <FlexView
      css={{
        borderTop: `1px solid lightgray`,
        borderBottom: `1px solid lightgray`,
        padding: `8px 0`,
      }}
    >
      <FlexView
        css={{ padding: `0 8px`, minHeight: `24px` }}
        items="center"
        row
        wrap
      >
        <Text bold fill small>
          {post.title}
        </Text>

        <FlexView gap={8} items="center" row>
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
      </FlexView>

      <FlexView
        content="between"
        css={{
          minHeight: `20px`,
          padding: `0 8px`,
        }}
        items="center"
        row
      >
        <Button aria-label="url" onClick={copyUrl}>
          <Text color="gray" xSmall>
            {basicUrl + location.pathname}
          </Text>
        </Button>

        <FlexView gap={8} items="center" row>
          <FlexView gap={4} items="center" row>
            <Text xSmall>{post.updatedAt.split(`.`)[0].replace(`T`, ` `)}</Text>
            {post.createdAt !== post.updatedAt && <Text>(수정)</Text>}
          </FlexView>

          <FlexView gap={8} items="center" row>
            <Button
              aria-label="수정"
              disabled={userId !== post.writer.userId}
              onClick={editPost}
            >
              <Text xSmall>수정</Text>
            </Button>
            <Button
              aria-label="삭제"
              disabled={userId !== post.writer.userId}
              onClick={removePost}
            >
              <Text xSmall>삭제</Text>
            </Button>
          </FlexView>
        </FlexView>
      </FlexView>
    </FlexView>
  );

  const mobile = (
    <FlexView
      css={{
        borderTop: `1px solid lightgray`,
        borderBottom: `1px solid lightgray`,
        padding: `8px 0`,
      }}
      gap={8}
    >
      <FlexView css={{ padding: `0 8px`, minHeight: `24px` }} gap={4}>
        <Text bold small>
          {post.title}
        </Text>

        <FlexView gap={4} items="center" row>
          <Button aria-label="작성자">
            <Text xSmall>{post.writer.character}</Text>
          </Button>

          <Text center xSmall>
            조회 {post.views}
          </Text>

          <Text center xSmall>
            댓글 {post.commentCount}
          </Text>

          <Text center xSmall>
            추천 {post.recommenders.length}
          </Text>
        </FlexView>
      </FlexView>

      <FlexView
        content="between"
        css={{
          borderTop: `1px solid lightgray`,
          padding: `8px 8px 0 8px`,
        }}
        gap={8}
        items="center"
        row
      >
        <Button
          aria-label="url"
          border={Colors.lightGrey}
          css={{ width: `40px`, padding: `2px 4px` }}
          radius={4}
          onClick={copyUrl}
        >
          <Text color="gray" xSmall>
            주소
          </Text>
        </Button>

        <FlexView gap={4} items="center" row>
          <Text xSmall>{post.updatedAt.split(`.`)[0].replace(`T`, ` `)}</Text>
          {post.createdAt !== post.updatedAt && <Text>(수정)</Text>}
        </FlexView>

        <FlexView gap={16} items="center" row>
          <Button
            aria-label="수정"
            disabled={userId !== post.writer.userId}
            onClick={editPost}
          >
            <Text xSmall>수정</Text>
          </Button>
          <Button
            aria-label="삭제"
            disabled={userId !== post.writer.userId}
            onClick={removePost}
          >
            <Text xSmall>삭제</Text>
          </Button>
        </FlexView>
      </FlexView>
    </FlexView>
  );

  return isMobile ? mobile : desktop;
};
