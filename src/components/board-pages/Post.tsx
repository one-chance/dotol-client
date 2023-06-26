/* eslint-disable no-alert */
import {
  BoardButtons,
  InputComment,
  CommentList,
} from '@components/board-pages';
import { Button, FlexView, Text } from '@components/common';
import { CATEGORES } from '@constants/board';
import { Category } from '@interfaces/board';
import { userInfoState } from '@states/login';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

type PostProps = {
  category: Category;
  title: string;
  content: string;
};

const basicUrl = `https://dotols.com`;

export default ({ category, title, content }: PostProps) => {
  const location = useLocation();
  const { userId } = useRecoilValue(userInfoState);
  const postId = location.pathname.split(`post/`)[1];

  const copyUrl = () => {
    navigator.clipboard.writeText(basicUrl + location.pathname);
    alert(`클립보드에 URL이 복사되었습니다.`);
  };

  const submitComment = (_comment: string) => {
    // 댓글 등록
  };

  const editPost = () => {
    // 글 수정
  };

  const deletePost = () => {
    // 글 삭제
  };

  return (
    <FlexView
      css={{
        borderTop: `1px solid lightgray`,
        borderBottom: `1px solid lightgray`,
      }}
    >
      <FlexView
        css={{ padding: `4px 8px`, minHeight: `40px` }}
        gap={8}
        items="center"
        row
      >
        <Text bold fill>
          [{CATEGORES[category]}] 타이틀
        </Text>

        <FlexView css={{ minWidth: `140px` }} center>
          <Text>작성자</Text>
        </FlexView>

        <Text css={{ minWidth: `60px` }}>조회 1</Text>

        <Text css={{ minWidth: `60px` }}>추천 1</Text>
      </FlexView>

      <FlexView
        content="between"
        css={{
          borderBottom: `1px solid lightgray`,
          height: `36px`,
          padding: `0 8px`,
        }}
        items="center"
        row
      >
        <FlexView gap={8} items="center" row>
          <Button
            border="lightgray"
            css={{
              height: `24px`,
              padding: `0 8px`,
            }}
            radius={4}
            onClick={copyUrl}
          >
            <Text small>복사</Text>
          </Button>
          <Text color="gray" xSmall>
            {basicUrl + location.pathname}
          </Text>
        </FlexView>

        {userId === `협가검@하자` && (
          <FlexView gap={16} items="center" row>
            <Button onClick={editPost}>
              <Text small>수정</Text>
            </Button>
            <Button onClick={deletePost}>
              <Text small>삭제</Text>
            </Button>
          </FlexView>
        )}
      </FlexView>

      <FlexView
        css={{
          minHeight: `100px`,
          marginTop: `20px`,
          padding: `10px 20px`,
        }}
      >
        POST 내용
      </FlexView>

      <FlexView
        css={{
          padding: `10px 0`,
          borderTop: `1px solid lightgray`,
          borderBottom: `1px solid lightgray`,
        }}
      >
        <BoardButtons
          category={category}
          page={1}
          recommend={1}
          recommendList={[]}
          write
        />
      </FlexView>

      <CommentList comments={[]} />

      <InputComment color="lightgray" onSubmit={submitComment} />
    </FlexView>
  );
};
