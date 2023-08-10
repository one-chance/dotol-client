import { FlexView, Text } from '@components/common';
import { BoardSection, ClothSection } from '@components/home-page';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(980);

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `auto` }} gap={20}>
      <FlexView
        css={{
          width: isMobile ? `350px` : `900px`,
          height: `120px`,
          border: `1px solid lightgray`,
          borderRadius: `4px`,
          padding: `10px`,
          margin: `0 auto`,
        }}
        center
      >
        <Text>공지, 문의</Text>
      </FlexView>

      <FlexView gap={20} row={!isMobile}>
        <ClothSection />

        <BoardSection />
      </FlexView>
    </FlexView>
  );
};
