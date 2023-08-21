import { FlexView, Text, Link } from '@components/common';
import { Colors } from '@styles/system';

export default () => (
  <footer style={{ position: `absolute`, left: 0, right: 0, bottom: 0 }}>
    <FlexView
      color={Colors.primary}
      css={{
        height: `3rem`,
        padding: `0 10%`,
      }}
      gap={8}
      items="center"
      row
    >
      <Link
        aria-label="이용 약관"
        css={{ lineHeight: `15px` }}
        to="/terms-of-service"
      >
        <Text color={Colors.white} small>
          이용 약관
        </Text>
      </Link>
      <Text color={Colors.white} noDrag>
        /
      </Text>
      <Link
        aria-label="개인정보 처리방침"
        css={{ lineHeight: `15px` }}
        to="/privacy-policy"
      >
        <Text color={Colors.white} small>
          개인정보 처리방침
        </Text>
      </Link>
    </FlexView>
  </footer>
);
