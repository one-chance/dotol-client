import { useEffect, useState } from 'react';

import { getFreeboard } from '@apis/freeboard';
import { PostSummary } from '@components/board-pages/board';
import { Button, FlexView, Input, Text } from '@components/common';
import { Pagination } from '@components/pagination';
import { Select, Option } from '@components/select';
import { CATEGORES } from '@constants/board';
import { Category } from '@interfaces/board';

type BoardProps = {
  category: Category;
};

const TITLES = [`번호`, `제목`, `작성자`, `조회`, `추천`, `작성일`];
const WIDTHS = [`60`, `auto`, `140`, `60`, `60`, `60`];
const SEARCH_TYPES = [`제목`, `내용`, `제목+내용`, `작성자`];

const test = [
  {
    index: 1,
    title: `제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.`,
    content: `내용입니다.`,
    writer: { userId: `quwieo`, character: `협가검@하자` },
    views: 10,
    commentCount: 100,
    recommenders: [`quwieo`, `2`],
    comments: [],
    createdAt: `2023-07-07T03:04:25.071Z`,
    updatedAt: `2023-06-25T03:04:25.071Z`,
  },
  {
    index: 2,
    title: `제목입니다.`,
    content: `내용입니다.`,
    writer: { userId: `quwieo`, character: `협가검@하자` },
    views: 10,
    commentCount: 100,
    recommenders: [`1`, `2`],
    comments: [],
    createdAt: `2021-06-25T03:04:25.071Z`,
    updatedAt: `2021-06-25T03:04:25.071Z`,
  },
];

export default ({ category }: BoardProps) => {
  const [searchType, setSearchType] = useState(`제목`);
  const [searchKeyword, setSearchKeyword] = useState(``);

  const [postList, setPostList] = useState(test);

  const selectSearchType = (idx: number) => {
    setSearchType(SEARCH_TYPES[idx]);
  };

  const inputSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const searchArticle = () => {
    // 게시물 검색
  };

  useEffect(() => {
    getFreeboard(1, ``, ``).then(res => {
      if (res.statusCode === 200) setPostList(res.data);
    });
    // setArticleList();
  }, []);

  return (
    <FlexView gap={20}>
      <Text bold xxLarge>
        {CATEGORES[category]} 게시판
      </Text>

      <FlexView
        css={{
          borderTop: `1px solid lightgray`,
          borderBottom: `1px solid lightgray`,
        }}
      >
        <FlexView css={{ minHeight: `40px` }} items="center" row>
          {TITLES.map((title, index) => (
            <Text
              key={title}
              css={{ minWidth: `${WIDTHS[index]}px` }}
              fill={index === 1}
              center
              semiBold
            >
              {title}
            </Text>
          ))}
        </FlexView>

        {postList.map(post => (
          <PostSummary key={post.index} category={category} post={post} />
        ))}
      </FlexView>

      <FlexView gap={10}>
        {/* <BoardButtons
          category={category}
          grade={2}
          userId="quwieo"
          recent
          write
        /> */}

        <Pagination count={100} unit={10} />

        <FlexView gap={8} center row>
          <Select height={36} name={searchType} width={140}>
            <Option
              selected={searchType}
              values={SEARCH_TYPES}
              onSelect={selectSearchType}
            />
          </Select>

          <FlexView row>
            <Input
              css={{ borderRight: 0, borderRadius: `4px 0 0 4px` }}
              value={searchKeyword || ``}
              width={280}
              onChange={inputSearchKeyword}
              onKeyDown={e => {
                if (e.key === `Enter`) {
                  searchArticle();
                }
              }}
            />
            <Button
              color="blue"
              css={{ width: `60px`, borderRadius: `0 4px 4px 0` }}
              onClick={searchArticle}
            >
              <Text color="white">검색</Text>
            </Button>
          </FlexView>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
