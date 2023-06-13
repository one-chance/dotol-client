import { useState } from 'react';

import { BoardButtons } from '@components/board-pages';
import { Button, FlexView, Input, Link, Text } from '@components/common';
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

export default ({ category }: BoardProps) => {
  const [searchType, setSearchType] = useState(`제목`);
  const [searchKeyword, setSearchKeyword] = useState(``);

  const selectSearchType = (idx: number) => {
    setSearchType(SEARCH_TYPES[idx]);
  };

  const inputSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const searchArticle = () => {
    // 게시물 검색
  };

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

        <FlexView
          content="between"
          css={{
            borderTop: `1px solid lightgray`,
            minHeight: `36px`,
            ':hover': {
              backgroundColor: `#F4F4F4`,
            },
          }}
          items="center"
          row
        >
          <Text css={{ minWidth: `60px` }} center small>
            1
          </Text>
          <Link
            css={{
              maxWidth: `420px`,
              display: `flex`,
              flexDirection: `row`,
              alignItems: `center`,
            }}
            to={`/board/${category}/post/1`}
          >
            <Text
              css={{
                cursor: `pointer`,
                paddingRight: `4px`,
                overflow: `hidden`,
                whiteSpace: `nowrap`,
                textOverflow: `ellipsis`,
                wordBreak: `break-all`,
              }}
              small
            >
              제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.
            </Text>

            <Text color="red" css={{ minWidth: `40px` }} center small>
              [100]
            </Text>
          </Link>

          <Button css={{ minWidth: `140px` }}>
            <Text center small>
              일이삼사오육@하자
            </Text>
          </Button>

          <Text css={{ minWidth: `60px` }} center small>
            조회
          </Text>
          <Text css={{ minWidth: `60px` }} center small>
            추천
          </Text>
          <Text css={{ minWidth: `60px` }} center small>
            14:23
          </Text>
        </FlexView>

        <FlexView
          content="between"
          css={{
            borderTop: `1px solid lightgray`,
            minHeight: `36px`,
            ':hover': {
              backgroundColor: `#F4F4F4`,
            },
          }}
          items="center"
          row
        >
          <Text css={{ minWidth: `60px` }} center small>
            1
          </Text>
          <Link
            css={{
              maxWidth: `420px`,
              display: `flex`,
              flexDirection: `row`,
              alignItems: `center`,
            }}
            to={`/board/${category}/post/1`}
          >
            <Text
              css={{
                cursor: `pointer`,
                paddingRight: `4px`,
                overflow: `hidden`,
                whiteSpace: `nowrap`,
                textOverflow: `ellipsis`,
                wordBreak: `break-all`,
              }}
              small
            >
              제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.
            </Text>

            <Text color="red" css={{ minWidth: `40px` }} center small>
              [100]
            </Text>
          </Link>

          <Button css={{ minWidth: `140px` }}>
            <Text center small>
              일이삼사오육@하자
            </Text>
          </Button>

          <Text css={{ minWidth: `60px` }} center small>
            조회
          </Text>
          <Text css={{ minWidth: `60px` }} center small>
            추천
          </Text>
          <Text css={{ minWidth: `60px` }} center small>
            14:23
          </Text>
        </FlexView>
      </FlexView>

      <FlexView gap={10}>
        <BoardButtons category={category} recent write />

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
