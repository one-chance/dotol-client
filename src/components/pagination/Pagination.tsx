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
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(Math.ceil(count / unit));

  const searchParam = new URLSearchParams(location.search).get(`search`) ?? ``;

  const movePage = (_page: number) => {
    const search = searchParam === `` ? `` : `&search=${searchParam}`;
    navigate(`${location.pathname}?page=${_page}${search}`);
    setSelectedPage(_page);
  };

  const movePageList = (direction: number) => {
    const distance = 5 * direction;
    const maxPageList = Math.ceil(maxPage / 5);
    const tempPageList = Math.ceil((selectedPage + distance) / 5);
    const search = searchParam === `` ? `` : `&search=${searchParam}`;

    if (selectedPage + distance < 1 || tempPageList > maxPageList) return;

    setPageList(pageList.map(x => x + distance));

    if (maxPage < selectedPage + distance) {
      navigate(`${location.pathname}?page=${maxPage}${search}`, {
        replace: true,
      });
      setSelectedPage(maxPage);
    } else {
      navigate(`${location.pathname}?page=${selectedPage + distance}${search}`);
      setSelectedPage(selectedPage + distance);
    }
  };

  useEffect(() => {
    const pageParam =
      Number(new URLSearchParams(location.search).get(`page`)) ?? 1;
    setSelectedPage(pageParam);

    const tempPage = 5 * Math.floor(pageParam / 6) + 1;
    setPageList([
      tempPage,
      tempPage + 1,
      tempPage + 2,
      tempPage + 3,
      tempPage + 4,
    ]);
  }, [location.search]);

  useEffect(() => {
    setMaxPage(Math.ceil(count / unit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <FlexView css={{ height: `36px` }} gap={10} center row>
      {selectedPage > 5 && maxPage >= selectedPage && (
        <Button css={buttonCSS} onClick={() => movePageList(-1)}>
          <Icon color="#242424" name="arrowLeft" size={16} />
        </Button>
      )}

      {pageList.map(
        (pageNumber: number) =>
          pageNumber <= maxPage && (
            <Button
              key={pageNumber}
              css={buttonCSS}
              onClick={() => movePage(pageNumber)}
            >
              <Text
                color={selectedPage === pageNumber ? `#242424` : `#878787`}
                semiBold={selectedPage === pageNumber}
              >
                {pageNumber}
              </Text>
            </Button>
          ),
      )}

      {pageList[4] < maxPage && (
        <Button css={buttonCSS} onClick={() => movePageList(1)}>
          <Icon color="#242424" name="arrowRight" size={16} />
        </Button>
      )}
    </FlexView>
  );
};
