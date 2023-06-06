import { useState } from 'react';

import {
  Button,
  Checkbox,
  Divider,
  FlexView,
  Input,
  Text,
} from '@components/common';
import { CSSObject } from '@emotion/react';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

const btnCSS: CSSObject = {
  width: `80px`,
  height: `40px`,
  borderRadius: `0 4px 4px 0`,
};

export default () => {
  const isMobile = useResponsive(600);
  const INPUT_WIDTH = isMobile ? 180 : 240;
  const [userId, setUserId] = useState(``);
  const [password, setPassword] = useState(``);
  const [email, setEmail] = useState(``);
  const [otp, setOTP] = useState(``);
  const [isUniqueId, setIsUniqueId] = useState(false);
  const [isEmailForm, setIsEmailForm] = useState(false);
  const [requestOTP, setRequestOTP] = useState(false);
  const [isCertified, setIsCertified] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const inputCSS: CSSObject = {
    height: `40px`,
    borderRadius: `4px 0 0 4px`,
    borderRight: `none`,
    '::placeholder': {
      fontSize: isMobile ? `0.75rem` : `1rem`,
    },
  };

  const inputUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const inputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const inputOTP = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOTP(e.target.value);
  };

  const checkUniqueId = () => {
    // TODO: check unique id
    setIsUniqueId(true);
  };

  const checkUniqueEmail = () => {
    // TODO: check unique email
  };

  const sendOTP = () => {
    // TODO: send OTP
    setRequestOTP(true);
  };

  const openTerms = () => {
    setShowTerms(true);
  };

  const openPrivacy = () => {
    setShowPrivacy(true);
  };

  const closeTerms = () => {
    setShowTerms(false);
  };

  const closePrivacy = () => {
    setShowPrivacy(false);
  };

  return (
    <FlexView css={{ margin: `20px auto` }}>
      <FlexView
        css={{
          border: isMobile ? undefined : `1px solid lightgray`,
          borderRadius: `8px`,
          padding: isMobile ? `10px` : `20px`,
        }}
      >
        <Text
          css={{ marginBottom: isMobile ? `40px` : `80px` }}
          xLarge={isMobile}
          bold
          center
          xxLarge
        >
          회원가입
        </Text>

        <FlexView gap={isMobile ? 20 : 40}>
          <FlexView items="center" row>
            <Text
              css={{ minWidth: isMobile ? `80px` : `120px` }}
              large={!isMobile}
              medium
            >
              아이디
            </Text>

            <Input
              css={inputCSS}
              placeholder="영문, 숫자 (6자리 이상)"
              width={INPUT_WIDTH}
            />
            <Button color="red" css={btnCSS} disabled={isUniqueId}>
              <Text color={Colors.white} small={isMobile}>
                중복 확인
              </Text>
            </Button>
          </FlexView>

          <FlexView items="center" row>
            <Text
              css={{
                minWidth: isMobile ? `80px` : `120px`,
              }}
              large={!isMobile}
              medium
            >
              비밀번호
            </Text>
            <Input
              css={{
                ...inputCSS,
                borderRight: `1px solid lightgray`,
                borderRadius: `4px`,
              }}
              placeholder="영문, 숫자, 특수문자 (8자리 이상)"
              type="password"
              width={INPUT_WIDTH}
            />

            <FlexView css={btnCSS} center>
              <Text>체크</Text>
            </FlexView>
          </FlexView>

          <FlexView items="center" row>
            <Text
              css={{ minWidth: isMobile ? `80px` : `120px` }}
              large={!isMobile}
              medium
            >
              이메일
            </Text>
            <Input
              css={inputCSS}
              placeholder="이메일 주소"
              width={INPUT_WIDTH}
            />
            <Button color="red" css={btnCSS}>
              <Text color={Colors.white} small={isMobile}>
                OTP 전송
              </Text>
            </Button>
          </FlexView>

          <FlexView items="center" row>
            <Text
              css={{ minWidth: isMobile ? `80px` : `120px` }}
              large={!isMobile}
              medium
            >
              OTP
            </Text>
            <Input
              css={inputCSS}
              placeholder="숫자 6자리"
              width={INPUT_WIDTH}
            />
            <Button color="red" css={btnCSS}>
              <Text color={Colors.white} small={isMobile}>
                인증
              </Text>
            </Button>
          </FlexView>
        </FlexView>

        <Divider color="lightgray" margin={isMobile ? 20 : 40} />

        <FlexView gap={16}>
          <Text large={!isMobile} medium>
            약관 동의
          </Text>

          <FlexView content="center" gap={isMobile ? 20 : 40} row>
            <FlexView gap={4} items="center" row>
              <Checkbox />
              <Button>
                <Text small={isMobile}>서비스 이용약관</Text>
              </Button>
            </FlexView>

            <FlexView gap={4} items="center" row>
              <Checkbox />
              <Button>
                <Text small={isMobile}>개인정보 처리방침</Text>
              </Button>
            </FlexView>
          </FlexView>
        </FlexView>

        <Divider color="lightgray" margin={isMobile ? 20 : 40} />

        <FlexView items="center">
          <Button
            color="blue"
            css={{ borderRadius: `4px`, width: `240px`, minHeight: `40px` }}
            disabled={!isCertified || !agreeTerms || !agreePrivacy}
          >
            <Text color={Colors.white} semiBold>
              가입하기
            </Text>
          </Button>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
