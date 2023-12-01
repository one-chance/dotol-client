import { FlexView, Text, Link } from '@components/common';
import { Colors } from '@styles/index';

export default function FooterMobile() {
  return (
    <footer>
      <FlexView
        color={Colors.grey}
        css={{
          height: `3rem`,
          padding: `0 10px`,
        }}
        gap={4}
        items="center"
        row
      >
        <Link
          aria-label="이용 약관"
          css={{ lineHeight: `12.5px` }}
          to="/terms-of-service"
        >
          <Text color={Colors.white} size="xSmall">
            이용 약관
          </Text>
        </Link>
        <Text color={Colors.white} size="xSmall" noDrag>
          /
        </Text>
        <Link
          aria-label="개인정보 처리방침"
          css={{ lineHeight: `12.5px` }}
          to="/privacy-policy"
        >
          <Text color={Colors.white} size="xSmall">
            개인정보 처리방침
          </Text>
        </Link>
      </FlexView>
    </footer>
  );
}
