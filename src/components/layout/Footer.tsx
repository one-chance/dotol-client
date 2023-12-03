import { FlexView, Text, Link } from '@components/common';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/index';

export default function Footer() {
  const isMobile = useResponsive(1040);

  return (
    <footer>
      <FlexView
        color={Colors.background}
        css={{
          marginTop: `40px`,
          padding: isMobile ? `10px 20px` : `20px 40px`,
        }}
        gap={8}
      >
        <FlexView gap={8} items="center" row>
          <Link
            aria-label="이용 약관"
            css={{ fontSize: isMobile ? `12px` : `14px`, color: Colors.grey }}
            to="/terms-of-service"
          >
            이용 약관
          </Link>
          <Text color={Colors.grey} size={isMobile ? `xSmall` : `small`} noDrag>
            /
          </Text>
          <Link
            aria-label="개인정보 처리방침"
            css={{ fontSize: isMobile ? `12px` : `14px`, color: Colors.grey }}
            to="/privacy-policy"
          >
            개인정보 처리방침
          </Link>
        </FlexView>

        <FlexView>
          <Text
            center={!isMobile}
            color={Colors.grey}
            size={isMobile ? `xSmall` : `small`}
          >
            © 2023. 바람의나라 도톨. All rights reserved.
          </Text>
        </FlexView>
      </FlexView>
    </footer>
  );
}
