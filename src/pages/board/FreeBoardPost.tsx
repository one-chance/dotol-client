import { Post } from '@components/board-pages';
import { FlexView } from '@components/common';

export default () => {
  const a = 1;

  return (
    <FlexView css={{ maxWidth: `960px`, width: `100%`, margin: `40px auto` }}>
      <Post category="free" content="내용" title="제목" />
    </FlexView>
  );
};
