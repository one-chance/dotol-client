/* eslint-disable no-alert */
import { useEffect, useState } from 'react';

import { getMyInfo } from '@apis/users';
import { Button, FlexView, Text } from '@components/common';
import { Category, IPost } from '@interfaces/board';
import { userIdState } from '@states/login';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import PostComment from './PostComment';
import PostContent from './PostContent';
import PostTitle from './PostTitle';

type PostProps = {
  category: Category;
  post: IPost;
  page: number;
};

export default ({ category, post, page }: PostProps) => {
  const isMobile = useResponsive(600);
  const navigate = useNavigate();
  const [grade, setGrade] = useState(0);
  const userId = useRecoilValue(userIdState);

  const goToList = () => {
    navigate(`/board/${category}?page=${page}`);
  };

  const recommendPost = () => {
    if (grade < 2) alert(`로그인이 필요한 기능입니다.`);

    // 글 추천
  };

  const goToWrite = () => {
    if (grade < 2) alert(`로그인이 필요한 기능입니다.`);
  };

  useEffect(() => {
    if (!userId) return;

    getMyInfo().then(res => {
      setGrade(res.data.grade);
    });
  }, [userId]);

  return (
    <FlexView>
      <PostTitle
        commentCount={post?.comments.length}
        recommenders={post?.recommenders}
        title={post?.title}
        views={post?.views}
        writer={post?.writer}
      />

      <PostContent content={post?.content} />

      <FlexView
        content="between"
        css={{
          padding: `10px 0`,
          borderTop: `1px solid lightgray`,
          borderBottom: `1px solid lightgray`,
        }}
        items="center"
        row
      >
        <Button
          color="blue"
          css={{ width: `80px`, height: `36px` }}
          radius={4}
          onClick={goToList}
        >
          <Text color={Colors.white}>목록</Text>
        </Button>

        <Button
          css={{
            border: `1px solid`,
            borderColor: post.recommenders.includes(userId) ? `red` : `blue`,
            width: `80px`,
            height: `36px`,
          }}
          radius={4}
          onClick={recommendPost}
        >
          <Text color={post.recommenders.includes(userId) ? `red` : `blue`}>
            추천 {post.recommenders.length}
          </Text>
        </Button>

        <Button
          color="red"
          css={{ width: `80px`, height: `36px` }}
          radius={4}
          onClick={goToWrite}
        >
          <Text color={Colors.white}>글쓰기</Text>
        </Button>
      </FlexView>

      <PostComment comments={post.comments} />
    </FlexView>
  );
};
