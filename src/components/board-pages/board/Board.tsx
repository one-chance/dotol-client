import { useEffect, useState } from 'react';

import { getFreeboard } from '@apis/freeboard';
import { PostSummary } from '@components/board-pages/post';
import { Button, FlexView, Input, Text } from '@components/common';
import { Pagination } from '@components/pagination';
import { Select, Option } from '@components/select';
import {
  CATEGORES,
  TITLES,
  SEARCH_TYPES_EN,
  SEARCH_TYPES_KO,
} from '@constants/board';
import { Category, IPost } from '@interfaces/board';
import { Colors } from '@styles/system';
import { useLocation, useNavigate } from 'react-router-dom';

import BoardButton from './BoardButton';

type BoardProps = {
  category: Category;
};

const WIDTHS = [`60`, `auto`, `140`, `60`, `60`, `60`];

export default ({ category }: BoardProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [page, setpage] = useState(1);
  const [count, setCount] = useState(0);
  const [postList, setPostList] = useState<IPost[]>([]);
  const [searchType, setSearchType] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState(``);

  const getPostList = (_page: number) => {
    if (category === `free`)
      getFreeboard(_page, SEARCH_TYPES_EN[searchType], searchKeyword).then(
        res => {
          console.log(res);
          if (res.statusCode === 200) {
            setPostList(res.data.data);
            setCount(res.data.count);
          }
        },
      );
  };

  const selectSearchType = (id: number) => {
    setSearchType(id);
  };

  const inputSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const searchArticle = () => {
    if (searchKeyword === ``) {
      navigate(`/board/${category}?page=1`, { replace: true });
      return;
    }

    navigate(
      `/board/${category}?page=1&search=${SEARCH_TYPES_EN[searchType]},${searchKeyword}`,
    );
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageParam = Number(params.get(`page`) ?? 1);

    getPostList(pageParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <FlexView gap={20}>
      <Text bold xxLarge>
        {CATEGORES[category]} 게시판
      </Text>

      <FlexView
        css={{
          minHeight: `400px`,
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

        {postList?.map(post => (
          <PostSummary
            key={post.index}
            category={category}
            page={1}
            post={post}
          />
        ))}
      </FlexView>

      <FlexView gap={10}>
        <BoardButton category={category} />

        <Pagination count={count} unit={10} />

        <FlexView gap={8} center row>
          <Select height={36} name={SEARCH_TYPES_KO[searchType]} width={100}>
            <Option
              selected={SEARCH_TYPES_KO[searchType]}
              values={SEARCH_TYPES_KO}
              onSelect={selectSearchType}
            />
          </Select>

          <FlexView row>
            <Input
              css={{ borderRight: 0, borderRadius: `4px 0 0 4px` }}
              value={searchKeyword || ``}
              width={200}
              onChange={inputSearchKeyword}
              onKeyDown={e => {
                if (e.key === `Enter`) {
                  searchArticle();
                }
              }}
            />
            <Button
              color={Colors.purple}
              css={{ width: `60px`, borderRadius: `0 4px 4px 0` }}
              onClick={searchArticle}
            >
              <Text color="white" semiBold>
                검색
              </Text>
            </Button>
          </FlexView>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
