/* eslint-disable no-alert */
import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { NewPost } from '@components/board-pages';
import { FlexView } from '@components/common';
import { Board } from '@interfaces/index';

const CATEGORES = [
  `freeboard`,
  `tipboard`,
  `videoboard`,
  `severboard`,
  `tradeboard`,
];

export default function WritePostPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = location.pathname.split(`/`)[2] as Board;

  useEffect(() => {
    if (!CATEGORES.includes(params)) {
      alert(`올바르지 않은 접근입니다.`);
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <FlexView
      css={{
        maxWidth: `1080px`,
        width: `100%`,
        margin: `60px auto`,
      }}
    >
      <NewPost board={params} />
    </FlexView>
  );
}
