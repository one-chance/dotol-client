/* eslint-disable no-alert */
import { useEffect, useState } from 'react';

import { getPostList, getPost, increaseViews } from '@apis/board';
import {
  PostSummary,
  PostButton,
  PostComment,
  PostContent,
  PostTitle,
} from '@components/board-pages';
import { FlexView } from '@components/common';
import { IPost } from '@interfaces/board';
import { useResponsive } from '@utils/hooks';
import { useLocation, useNavigate } from 'react-router-dom';

type State = {
  page: number;
};

export default () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useResponsive(800);
  const { page } = location.state as State;

  const [post, setPost] = useState<IPost>({
    index: 0,
    title: ``,
    content: ``,
    writer: { userId: ``, character: `` },
    recommenders: [],
    views: 0,
    commentCount: 0,
    comments: [],
    createdAt: ``,
    updatedAt: ``,
  });

  const [postList, setPostList] = useState<IPost[]>([]);

  useEffect(() => {
    getPostList(`free`, page, ``, ``).then(res => {
      if (res.statusCode === 200) {
        setPostList(res.data.data);
      }
    });
  }, [page]);

  useEffect(() => {
    const seq = Number(location.pathname.split(`/`)[4]);

    getPost(`free`, seq).then(res => {
      if (res.statusCode === 200) {
        setPost(res.data);
        increaseViews(`free`, res.data.index);
      } else {
        alert(`존재하지 않는 글입니다.`);
        navigate(`/board/free?page=1`);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <FlexView
      css={{
        maxWidth: `960px`,
        width: `100%`,
        margin: isMobile ? `auto` : `20px auto`,
      }}
    >
      {post.index !== 0 && (
        <>
          <PostTitle category="free" isMobile={isMobile} post={post} />
          <PostContent content={post?.content} />
          <PostButton
            category="free"
            index={post.index}
            isMobile={isMobile}
            recommenders={post.recommenders}
          />
          <PostComment comments={post.comments} />

          <FlexView css={{ margin: `10px 0` }}>
            {postList.map(preview => (
              <PostSummary
                key={preview.index}
                category="free"
                isMobile={isMobile}
                page={page}
                post={preview}
              />
            ))}
          </FlexView>
        </>
      )}
    </FlexView>
  );
};
