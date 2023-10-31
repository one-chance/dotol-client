/* eslint-disable no-alert */
import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { getPostList, getPost, viewPost } from '@apis/index';
import {
  PostSummary,
  PostComment,
  PostContent,
  PostTitle,
} from '@components/board-pages';
import { FlexView, Text } from '@components/common';
import { useResponsive } from '@hooks/index';
import { IPost } from '@interfaces/index';
import { Colors } from '@styles/system';

type State = {
  page: number;
};

const FreePostPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useResponsive(800);
  const { page } = (location.state as State) || 0;
  const [isDeleted, setIsDeleted] = useState(false);

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
    if (page === 0) return;

    getPostList(`freeboard`, page, ``, ``).then(res => {
      if (res.statusCode === 200) {
        setPostList(res.data.data);
      }
    });
  }, [page]);

  useEffect(() => {
    const seq = Number(location.pathname.split(`/`)[2]);

    getPost(`freeboard`, seq).then(res => {
      if (res.statusCode === 200) {
        document.title = res.data.title;
        setPost(res.data);
        viewPost(`freeboard`, res.data.index);
      } else {
        setIsDeleted(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <FlexView
      css={{
        maxWidth: `960px`,
        width: `100%`,
        margin: isMobile ? `0 0 40px auto` : `40px auto`,
      }}
    >
      {isDeleted && (
        <FlexView css={{ border: `1px solid lightgray` }} center fill>
          <Text color={Colors.grey} large={isMobile} xLarge={!isMobile} bold>
            삭제된 게시물입니다.
          </Text>
        </FlexView>
      )}

      {post?.index !== 0 && (
        <FlexView gap={20}>
          <FlexView
            css={{
              border: `1px solid lightgray`,
              borderWidth: `1px 1px 0 1px`,
            }}
          >
            <PostTitle isMobile={isMobile} post={post} />
            <PostContent board="freeboard" post={post} />
          </FlexView>

          <PostComment comments={post.comments} />

          <FlexView
            css={{
              border: `1px solid lightgray`,
              borderWidth: `1px 1px 0 1px`,
            }}
          >
            {postList.map(preview => (
              <PostSummary
                key={preview.index}
                board="freeboard"
                isMobile={isMobile}
                page={page}
                post={preview}
              />
            ))}
          </FlexView>
        </FlexView>
      )}
    </FlexView>
  );
};

export default FreePostPage;
