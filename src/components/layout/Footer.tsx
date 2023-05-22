import { FlexView, Text, Link } from '@components/common';
import { Colors } from '@styles/system';

export default () => (
  <footer>
    <FlexView
      css={{
        height: `3rem`,
        borderTop: `1px solid #D5D5D5`,
        backgroundColor: `#22252C`,
        padding: `0 10%`,
      }}
      gap={16}
      items="center"
      row
    >
      <Link to="/user/terms-of-service">
        <Text color={Colors.white} small>
          이용 약관
        </Text>
      </Link>
      <Text color={Colors.white}>/</Text>
      <Link to="/user/privacy-policy">
        <Text color={Colors.white} small>
          개인정보 처리방침
        </Text>
      </Link>
    </FlexView>
  </footer>
);
