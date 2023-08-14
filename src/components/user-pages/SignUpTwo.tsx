import { useState } from 'react';

import { createUser, isDuplicatedEmail, sendOTPCode } from '@apis/users';
import {
  Button,
  Checkbox,
  Divider,
  FlexView,
  Input,
  Text,
} from '@components/common';
import { TermsModal } from '@components/modal';
import { Toast } from '@components/toast';
import { CSSObject } from '@emotion/react';
import { newUserState } from '@states/user';
import { Colors } from '@styles/system';
import { useRecoilValue } from 'recoil';

type SignUpProps = {
  isMobile: boolean;
  setPhase: (_phase: 2 | 3) => void;
};

const btnCSS: CSSObject = {
  width: `80px`,
  height: `40px`,
  borderRadius: `0 4px 4px 0`,
};

const inputCSS: CSSObject = {
  height: `40px`,
  borderRadius: `4px 0 0 4px`,
  borderRight: `none`,
};

export default ({ isMobile, setPhase }: SignUpProps) => {
  const INPUT_WIDTH = isMobile ? 180 : 240;
  const newUserInfo = useRecoilValue(newUserState);

  const [email, setEmail] = useState(``);
  const [otp, setOTP] = useState(``);
  const [isEmailForm, setIsEmailForm] = useState(false);

  const [isCertified, setIsCertified] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessge] = useState(``);

  const openToast = (message: string) => {
    setToastMessge(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };

  const inputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e.target.value)) setIsEmailForm(true);
    else setIsEmailForm(false);

    setEmail(e.target.value);
  };

  const inputOTP = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOTP(e.target.value.replace(/[^0-9]/g, ``));
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

  const sendOTP = () => {
    isDuplicatedEmail(email).then(res => {
      if (res.statusCode === 400) openToast(`이미 등록된 이메일입니다.`);
      else
        sendOTPCode(email).then(res2 => {
          if (res2.statusCode === 200) {
            setIsCertified(true);
          }
        });
    });
  };

  const nextPhase = () => {
    const newUser = {
      userId: newUserInfo.userId,
      password: newUserInfo.password,
      email,
    };

    createUser(newUser).then(res => {
      if (res.statusCode === 200) {
        setPhase(3);
      }
    });
  };

  return (
    <FlexView>
      <FlexView gap={24}>
        <FlexView items="center" row>
          <Text
            css={{ minWidth: isMobile ? `80px` : `120px` }}
            large={!isMobile}
            medium
          >
            이메일
          </Text>

          <Input
            aria-label="이메일"
            css={inputCSS}
            placeholder="이메일 주소"
            value={email || ``}
            width={INPUT_WIDTH}
            onChange={inputEmail}
          />

          <Button
            aria-label="OTP 전송"
            color="red"
            css={btnCSS}
            disabled={!isEmailForm}
            onClick={sendOTP}
          >
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
            aria-label="OTP"
            css={inputCSS}
            placeholder="숫자 6자리"
            value={otp || ``}
            width={INPUT_WIDTH}
            onChange={inputOTP}
          />

          <Button
            aria-label="인증"
            color="red"
            css={btnCSS}
            disabled={otp.length < 6}
          >
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
          <FlexView gap={8} items="center" row>
            <Checkbox size={20} onChange={() => setAgreeTerms(!agreeTerms)} />

            <Text>
              <Button aria-label="서비스 이용약관" onClick={openTerms}>
                <Text color={Colors.purple} small={isMobile}>
                  서비스 이용약관
                </Text>
              </Button>
              과&nbsp;
              <Button aria-label="개인정보 처리방침" onClick={openPrivacy}>
                <Text color={Colors.purple} small={isMobile}>
                  개인정보 처리방침
                </Text>
              </Button>
              에 동의합니다.
            </Text>
          </FlexView>
        </FlexView>
      </FlexView>

      <Divider color="lightgray" margin={isMobile ? 20 : 40} />

      <FlexView items="center">
        <Button
          aria-label="가입하기"
          color="blue"
          css={{ width: `240px`, minHeight: `40px` }}
          disabled={!isCertified || !agreeTerms}
          radius={20}
          onClick={nextPhase}
        >
          <Text color={Colors.white} semiBold>
            가입하기
          </Text>
        </Button>
      </FlexView>

      {showTerms && <TermsModal close={closeTerms} type="terms" />}
      {showPrivacy && <TermsModal close={closePrivacy} type="privacy" />}
      {showToast && <Toast message={toastMessage} type="error" />}
    </FlexView>
  );
};
