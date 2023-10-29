import { useEffect, useState } from 'react';

import { CSSObject } from '@emotion/react';
import { IPost } from '@interfaces/board';
import { useNavigate } from 'react-router-dom';

import { FlexView, Link, Text } from '@components/common';
import { useResponsive } from '@hooks/index';
import { convertDateFormat } from '@utils/index';

export default () => {
  const navigate = useNavigate();
  const isMobile = useResponsive(400);

  const [postList, setPostList] = useState<IPost[]>([
    {
      index: 1,
      title: `제목입니다.`,
      content: `내용입니다.`,
      writer: { userId: `quwieo`, character: `협가검@하자` },
      views: 1,
      commentCount: 1,
      recommenders: [`quwieo`],
      comments: [],
      createdAt: `2021-07-07T00:00:00.000Z`,
      updatedAt: `2021-07-07T00:00:00.000Z`,
    },
    {
      index: 2,
      title: `제목입니다.`,
      content: `내용입니다.`,
      writer: { userId: `quwieo`, character: `협가검@하자` },
      views: 1,
      commentCount: 1,
      recommenders: [`quwieo`],
      comments: [],
      createdAt: `2021-07-07T00:00:00.000Z`,
      updatedAt: `2021-07-07T00:00:00.000Z`,
    },
    {
      index: 3,
      title: `제목입니다.`,
      content: `내용입니다.`,
      writer: { userId: `quwieo`, character: `협가검@하자` },
      views: 1,
      commentCount: 1,
      recommenders: [`quwieo`],
      comments: [],
      createdAt: `2021-07-07T00:00:00.000Z`,
      updatedAt: `2021-07-07T00:00:00.000Z`,
    },
    {
      index: 4,
      title: `제목입니다.`,
      content: `내용입니다.`,
      writer: { userId: `quwieo`, character: `협가검@하자` },
      views: 1,
      commentCount: 1,
      recommenders: [`quwieo`],
      comments: [],
      createdAt: `2021-07-07T00:00:00.000Z`,
      updatedAt: `2021-07-07T00:00:00.000Z`,
    },
    {
      index: 5,
      title: `제목입니다.`,
      content: `내용입니다.`,
      writer: { userId: `quwieo`, character: `협가검@하자` },
      views: 1,
      commentCount: 1,
      recommenders: [`quwieo`],
      comments: [],
      createdAt: `2021-07-07T00:00:00.000Z`,
      updatedAt: `2021-07-07T00:00:00.000Z`,
    },
  ]);

  const postCSS: CSSObject = {
    padding: isMobile ? `4px` : `8px`,
    gap: isMobile ? `2px` : `4px`,
    // cursor: `pointer`,
    // ':hover': {
    //   backgroundColor: `lightgray`,
    // },
  };

  // useEffect(() => {
  //   //
  // }, []);

  return (
    <FlexView
      content="between"
      css={{
        border: `1px solid lightgray`,
        borderRadius: `4px`,
        padding: isMobile ? `8px` : `12px`,
        margin: isMobile ? `0 5px` : undefined,
      }}
      fill={!isMobile}
    >
      <Text small={isMobile} bold>
        게시판 최신글
      </Text>
      {/* <Link
        css={{ fontWeight: 700, fontSize: isMobile ? `14px` : `16px` }}
        to="/freeboard?page=1"
      >
        게시판 최신글
      </Link> */}

      {/* <FlexView>
        {postList.map((post: IPost, index: number) => (
          <FlexView
            key={post.index}
            css={{
              ...postCSS,
              ...(index !== 4 && {
                borderBottom: `1px solid lightgray`,
              }),
            }}
          >
            <Link state={{ page: 1 }} to={`/freeboard/${post.index}`}>
              {post.title} [{post.commentCount}]
            </Link>

            <FlexView gap={4} items="center" row>
              <Text small={!isMobile} xSmall={isMobile}>
                {post.writer.character}
              </Text>
              <Text small={!isMobile} xSmall={isMobile}>
                조회{post.views}
              </Text>
              <Text small={!isMobile} xSmall={isMobile}>
                추천{post.recommenders.length}
              </Text>
              <Text small={!isMobile} xSmall={isMobile}>
                {convertDateFormat(post.createdAt)}
              </Text>
            </FlexView>
          </FlexView>
        ))}
      </FlexView> */}
    </FlexView>
  );
};
