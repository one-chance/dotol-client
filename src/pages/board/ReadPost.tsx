/* eslint-disable no-alert */
import { useEffect } from 'react';

import { Post } from '@components/board-pages';
import { FlexView } from '@components/common';
import { Category } from '@interfaces/board';
import { useLocation, useNavigate } from 'react-router-dom';

const CATEGORES = [`free`, `tip`, `video`, `sever`, `trade`];

export default () => {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.pathname.split(`/`)[2] as Category;
  const seq = Number(location.pathname.split(`/`)[3]);

  useEffect(() => {
    if (!CATEGORES.includes(category)) {
      alert(`올바르지 않은 접근입니다.`);
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <FlexView css={{ maxWidth: `960px`, width: `100%`, margin: `40px auto` }}>
      <Post category={category} />
    </FlexView>
  );
};
