/* eslint-disable no-alert */
import { useEffect, useState } from 'react';

import { getFreeboardPost } from '@apis/freeboard';
import { Post } from '@components/board-pages/post';
import { FlexView } from '@components/common';
import { Category, IPost } from '@interfaces/board';
import { useLocation, useNavigate } from 'react-router-dom';

const CATEGORES = [`free`, `tip`, `video`, `sever`, `trade`];

export default () => {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.pathname.split(`/`)[2] as Category;
  const [isValid, setIsValid] = useState(true);

  const [post, setPost] = useState<IPost>({
    index: 0,
    title: `테스트 제목입니다.`,
    content: `테스트 본문입니다.`,
    writer: { userId: `quwieo`, character: `협가검@하자` },
    recommenders: [`quwieo`],
    views: 12,
    commentCount: 0,
    comments: [],
    createdAt: ``,
    updatedAt: ``,
  });

  useEffect(() => {
    if (!CATEGORES.includes(category)) {
      alert(`올바르지 않은 접근입니다.`);
      navigate(-1);
    }

    const seq = Number(location.pathname.split(`/`)[4]);

    getFreeboardPost(seq).then(res => {
      if (res.statusCode === 200) {
        setPost(res.data);
        setIsValid(true);
      } else {
        alert(`존재하지 않는 글입니다.`);
        navigate(`/board/${category}`);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlexView css={{ maxWidth: `960px`, width: `100%`, margin: `40px auto` }}>
      {isValid && <Post category={category} page={1} post={post} />}
    </FlexView>
  );
};
