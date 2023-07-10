import { useState } from 'react';

import { Button, FlexView, Input, Text } from '@components/common';
import { Pagination } from '@components/pagination';
import { Select, Option } from '@components/select';
import { CATEGORES } from '@constants/board';
import { Category } from '@interfaces/board';
import { useNavigate } from 'react-router-dom';

type BoardProps = {
  category: Category;
};

const SEARCH_TYPES = [`제목`, `내용`, `제목+내용`, `작성자`];

export default ({ category }: BoardProps) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [searchType, setSearchType] = useState(SEARCH_TYPES[0]);
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

  const moveToArticle = (seq: number) => {
    navigate(`/board/${category}/${seq}`);
  };

  return (
    <FlexView gap={20}>
      <FlexView gap={10}>
        <Text bold center xLarge>
          {CATEGORES[category]} 게시판
        </Text>

        <FlexView css={{ borderTop: `1px solid lightgray` }}>
          <FlexView
            content="between"
            css={{ padding: `8px`, borderBottom: `1px solid lightgray` }}
            row
          >
            <FlexView gap={4} fill>
              <FlexView
                css={{ width: `calc(100vw - 56px)` }}
                gap={4}
                items="center"
                row
              >
                <Text
                  css={{
                    paddingRight: `8px`,
                    overflow: `hidden`,
                    whiteSpace: `nowrap`,
                    textOverflow: `ellipsis`,
                    wordBreak: `break-all`,
                  }}
                  small
                >
                  제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.
                </Text>
              </FlexView>

              <FlexView gap={8} items="center" row>
                <Button>
                  <Text xSmall>관찰완료@연</Text>
                </Button>
                <Text xSmall>조회10</Text>
                <Text xSmall>추천1</Text>
                <Text xSmall>06.23</Text>
              </FlexView>
            </FlexView>

            <FlexView
              color="lightgray"
              css={{ width: `40px`, borderRadius: `4px` }}
              center
            >
              <Text semiBold small>
                +100
              </Text>
            </FlexView>
          </FlexView>

          <FlexView
            content="between"
            css={{ padding: `4px 8px`, borderBottom: `1px solid lightgray` }}
            row
          >
            <FlexView gap={4} fill>
              <FlexView
                css={{ width: `calc(100vw - 78px)` }}
                gap={4}
                items="center"
                row
              >
                <Text color="blue" semiBold small>
                  자유
                </Text>
                <Text
                  css={{
                    paddingRight: `8px`,
                    overflow: `hidden`,
                    whiteSpace: `nowrap`,
                    textOverflow: `ellipsis`,
                    wordBreak: `break-all`,
                  }}
                  fill
                  small
                >
                  제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.
                </Text>
              </FlexView>

              <FlexView gap={4} items="center" row>
                <Text small>작성자</Text>
                <Text small>조회</Text>
                <Text small>추천</Text>
                <Text small>작성</Text>
              </FlexView>
            </FlexView>

            <FlexView
              color="lightgray"
              css={{ width: `40px`, borderRadius: `4px` }}
              center
            >
              <Text semiBold small>
                +1
              </Text>
            </FlexView>
          </FlexView>
        </FlexView>
      </FlexView>

      <Pagination count={100} unit={10} />

      <FlexView gap={8} center row>
        <Select height={36} name={searchType} width={100}>
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
            width={160}
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
  );
};
