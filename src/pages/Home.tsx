import { FlexView, Text } from '@components/common';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(980);

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `auto` }} gap={20}>
      <FlexView
        css={{
          width: isMobile ? `340px` : `800px`,
          height: `120px`,
          border: `1px solid lightgray`,
          borderRadius: `4px`,
          padding: `10px`,
        }}
        center
      >
        <Text>공지, 문의</Text>
      </FlexView>

      <FlexView gap={20} row={!isMobile}>
        <FlexView
          css={{
            minHeight: `400px`,
            border: `1px solid lightgray`,
            borderRadius: `4px`,
            padding: `10px`,
          }}
          center
          fill
        >
          <Text>이달의 치장</Text>
        </FlexView>
        <FlexView
          css={{
            minHeight: `400px`,
            border: `1px solid lightgray`,
            borderRadius: `4px`,
            padding: `10px`,
          }}
          center
          fill
        >
          <Text>게시판 최신글</Text>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
