import { useEffect, useState } from 'react';

import { IPost } from '@interfaces/board';
import { useLocation, useNavigate } from 'react-router-dom';

import { getAnnouncementList, getPostList } from '@apis/index';
import { PostAnnouncement, PostSummary } from '@components/board-pages';
import { Button, FlexView, Input, Link, Text } from '@components/common';
import { Pagination } from '@components/pagination';
import { Select, Option } from '@components/select';
import { TITLES, SEARCH_TYPES_EN, SEARCH_TYPES_KO } from '@constants/board';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/system';

const WIDTHS = [`auto`, `140`, `80`, `80`];

const FreeBoardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useResponsive(600);

  const [searchType, setSearchType] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState(``);

  const [postList, setPostList] = useState<IPost[]>([]);
  const [announcementList, setAnnouncementList] = useState<IPost[]>([]);

  const selectSearchType = (id: number) => {
    setSearchType(id);
  };

  const inputSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const searchArticle = () => {
    if (searchKeyword === ``) {
      navigate(`/freeboard?page=1`, { replace: true });
      return;
    }

    navigate(
      `/freeboard?page=1&search=${SEARCH_TYPES_EN[searchType]},${searchKeyword}`,
    );
  };

  useEffect(() => {
    //  url 변경되면 새로 데이터 받아와야 함 react-qeury
  }, [location]);

  useEffect(() => {
    document.title = `바람의나라 도톨 | 자유게시판`;

    getPostList(`freeboard`, 1, ``, ``).then(res => {
      if (res.statusCode === 200) {
        setPostList(res.data.data);
      }
    });

    getAnnouncementList(`freeboard`).then(res => {
      if (res.statusCode === 200) {
        setAnnouncementList(res.data);
      }
    });
  }, []);

  return (
    <FlexView
      css={{
        maxWidth: `720px`,
        width: `100%`,
        margin: isMobile ? `20px auto` : `60px auto`,
      }}
      gap={12}
    >
      <FlexView content="between" css={{ padding: `0 8px` }} items="center" row>
        <Text large={!isMobile} bold>
          자유 게시판
        </Text>

        <Link
          css={{
            color: Colors.purple,
            fontWeight: 600,
            fontSize: isMobile ? `14px` : `16px`,
          }}
          to="/freeboard/write"
        >
          글쓰기
        </Link>
      </FlexView>

      <FlexView
        css={{
          minHeight: `400px`,
          borderTop: isMobile ? `1px solid lightgray` : undefined,
        }}
      >
        {!isMobile && (
          <FlexView
            color={Colors.primary10}
            css={{ minHeight: `40px` }}
            items="center"
            row
          >
            {TITLES.map((title, index) => (
              <Text
                key={title}
                css={{ minWidth: `${WIDTHS[index]}px` }}
                fill={index === 0}
                center
                semiBold
                small
              >
                {title}
              </Text>
            ))}
          </FlexView>
        )}

        {announcementList?.map(announcement => (
          <PostAnnouncement
            key={announcement.index}
            board="freeboard"
            isMobile={isMobile}
            page={1}
            post={announcement}
          />
        ))}

        {postList?.map(post => (
          <PostSummary
            key={post.index}
            board="freeboard"
            isMobile={isMobile}
            page={1}
            post={post}
          />
        ))}
      </FlexView>

      <FlexView gap={8}>
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

export default FreeBoardPage;
