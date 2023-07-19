import { useState, useEffect } from 'react';

import { FlexView, Button, Icon, Text } from '@components/common';
import { CSSObject } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';

type PaginationProps = {
  count: number;
  unit: number;
};

const buttonCSS: CSSObject = {
  width: `24px`,
  height: `24px`,
  lineHeight: 1,
};

export default ({ count, unit }: PaginationProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageList, setPageList] = useState<number[]>([1, 2, 3, 4, 5]);
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(Math.ceil(count / unit));

  const getSearchKeyword = () => {
    const urlParams = new URLSearchParams(location.search);
    const searchParam = urlParams.get(`search`);
    return searchParam === null ? `` : `&search=${searchParam}`;
  };

  const movePage = (_page: number) => {
    const searchKeyword = getSearchKeyword();
    navigate(`${location.pathname}?page=${_page}${searchKeyword}`);
  };

  const prevPageList = () => {
    const searchKeyword = getSearchKeyword();
    navigate(`${location.pathname}?page=${pageList[0] - 1}${searchKeyword}`);
  };

  const nextPageList = () => {
    const searchKeyword = getSearchKeyword();

    navigate(`${location.pathname}?page=${pageList[4] + 1}${searchKeyword}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const pageParam = urlParams.get(`page`);

    if (pageParam === null) return;
    setPage(Number(pageParam));

    const first = 5 * Math.floor((Number(pageParam) - 1) / 5) + 1;
    setPageList([first, first + 1, first + 2, first + 3, first + 4]);
  }, [location.search]);

  useEffect(() => {
    setMaxPage(Math.ceil(count / unit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <FlexView css={{ height: `36px` }} gap={10} center row>
      {count !== 1 && pageList[0] > 5 && (
        <Button css={buttonCSS} onClick={prevPageList}>
          <Icon color="#242424" name="arrowLeft" size={16} />
        </Button>
      )}

      {count !== 1 &&
        pageList.map(
          (pageNumber: number) =>
            pageNumber <= maxPage && (
              <Button
                key={pageNumber}
                css={buttonCSS}
                onClick={() => movePage(pageNumber)}
              >
                <Text
                  color={page === pageNumber ? `#242424` : `#878787`}
                  semiBold={page === pageNumber}
                >
                  {pageNumber}
                </Text>
              </Button>
            ),
        )}

      {count !== 1 && pageList[4] < maxPage && (
        <Button css={buttonCSS} onClick={nextPageList}>
          <Icon color="#242424" name="arrowRight" size={16} />
        </Button>
      )}
    </FlexView>
  );
};
