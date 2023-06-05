import { FlexView, Text, Link } from '@components/common';
import { Colors } from '@styles/system';

export default () => (
  <footer>
    <FlexView
      color="#22252C"
      css={{
        height: `3rem`,
        padding: `0 10%`,
      }}
      gap={8}
      items="center"
      row
    >
      <Link css={{ lineHeight: `15px` }} to="/user/terms-of-service">
        <Text color={Colors.white} small>
          이용 약관
        </Text>
      </Link>
      <Text color={Colors.white} noDrag>
        /
      </Text>
      <Link css={{ lineHeight: `15px` }} to="/user/privacy-policy">
        <Text color={Colors.white} small>
          개인정보 처리방침
        </Text>
      </Link>
    </FlexView>
  </footer>
);
