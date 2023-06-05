import { FlexView, Text, Link } from '@components/common';
import { Colors } from '@styles/system';

export default () => (
  <footer>
    <FlexView
      color="#22252C"
      css={{
        height: `3rem`,
        padding: `0 10px`,
      }}
      gap={4}
      items="center"
      row
    >
      <Link css={{ lineHeight: `12.5px` }} to="/user/terms-of-service">
        <Text color={Colors.white} xSmall>
          이용 약관
        </Text>
      </Link>
      <Text color={Colors.white} noDrag xSmall>
        /
      </Text>
      <Link css={{ lineHeight: `12.5px` }} to="/user/privacy-policy">
        <Text color={Colors.white} xSmall>
          개인정보 처리방침
        </Text>
      </Link>
    </FlexView>
  </footer>
);
