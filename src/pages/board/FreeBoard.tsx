import { useEffect, useState } from 'react';

import { getPostList } from '@apis/board';
import { BoardButton, PostSummary } from '@components/board-pages';
import { Button, FlexView, Input, Text } from '@components/common';
import { Pagination } from '@components/pagination';
import { Select, Option } from '@components/select';
import { TITLES, SEARCH_TYPES_EN, SEARCH_TYPES_KO } from '@constants/board';
import { IPost } from '@interfaces/board';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';
import { useNavigate } from 'react-router-dom';

const WIDTHS = [`60`, `auto`, `140`, `60`, `60`, `60`];

export default () => {
  const navigate = useNavigate();
  const isMobile = useResponsive(800);

  const [searchType, setSearchType] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState(``);

  const [postList, setPostList] = useState<IPost[]>([]);

  const selectSearchType = (id: number) => {
    setSearchType(id);
  };

  const inputSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const searchArticle = () => {
    if (searchKeyword === ``) {
      navigate(`/board/free?page=1`, { replace: true });
      return;
    }

    navigate(
      `/board/free?page=1&search=${SEARCH_TYPES_EN[searchType]},${searchKeyword}`,
    );
  };

  useEffect(() => {
    getPostList(`free`, 1, ``, ``).then(res => {
      if (res.statusCode === 200) {
        setPostList(res.data.data);
      }
    });
  }, []);

  return (
    <FlexView
      css={{
        maxWidth: `800px`,
        width: `100%`,
        margin: isMobile ? `20px auto` : `40px auto`,
      }}
    >
      <Text center={isMobile} xLarge={isMobile} xxLarge={!isMobile} bold>
        자유 게시판
      </Text>

      <FlexView
        css={{
          minHeight: `400px`,
          marginTop: `20px`,
          borderTop: isMobile ? `1px solid lightgray` : undefined,
        }}
      >
        {!isMobile && (
          <FlexView
            css={{
              minHeight: `40px`,
              borderTop: `1px solid ${Colors.lightGrey}`,
              borderBottom: `1px solid ${Colors.lightGrey}`,
            }}
            items="center"
            row
          >
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
        )}

        {postList?.map(post => (
          <PostSummary
            key={post.index}
            category="free"
            isMobile={isMobile}
            page={1}
            post={post}
          />
        ))}
      </FlexView>

      <FlexView css={{ margin: `20px` }} gap={10}>
        <BoardButton category="free" />

        <Pagination count={10} unit={10} />

        <FlexView gap={10} center row>
          <Select height={36} name={SEARCH_TYPES_KO[searchType]} width={100}>
            <Option
              selected={SEARCH_TYPES_KO[searchType]}
              values={SEARCH_TYPES_KO}
              onSelect={selectSearchType}
            />
          </Select>

          <FlexView row>
            <Input
              aria-label="검색어"
              css={{ borderRight: 0, borderRadius: `4px 0 0 4px` }}
              value={searchKeyword || ``}
              width={isMobile ? 150 : 200}
              onChange={inputSearchKeyword}
              onKeyDown={e => {
                if (e.key === `Enter`) {
                  searchArticle();
                }
              }}
            />
            <Button
              aria-label="검색"
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
