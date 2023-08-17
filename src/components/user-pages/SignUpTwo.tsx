import { useEffect, useState } from 'react';

import { isDuplicatedEmail, sendOTPCode, verifyOTPCode } from '@apis/users';
import { Button, FlexView, Text, TextField } from '@components/common';
import { emailState } from '@states/user';
import { Colors } from '@styles/system';
import { useSetRecoilState } from 'recoil';

type Phase = 1 | 2 | 3 | 4;

type SignUpProps = {
  isMobile: boolean;
  setPhase: (_phase: Partial<Phase>) => void;
};

export default ({ isMobile, setPhase }: SignUpProps) => {
  const setEmailState = useSetRecoilState(emailState);

  const [email, setEmail] = useState(``);
  const [otp, setOTP] = useState(``);

  const [isEmailForm, setIsEmailForm] = useState(false);
  const [isUniqueEmail, setIsUniqueEmail] = useState(false);
  const [isCorrectOTP, setIsCorrectOTP] = useState(false);
  const [isSentOTP, setIsSentOTP] = useState(false);

  const [emailErrorMessage, setEmailErrorMessage] = useState(``);
  const [otpErrorMessage, setOTPErrorMessage] = useState(``);

  const inputEmail = (_input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmailErrorMessage(`! 올바른 이메일 형식이 아닙니다.`);
    setEmail(_input);

    if (emailRegex.test(_input)) setIsEmailForm(true);
    else setIsEmailForm(false);
  };

  const inputOTP = (_input: string) => {
    setIsCorrectOTP(true);

    const temp = _input.replace(/[^0-9]/g, ``);
    if (temp.length > 6) return;

    setOTP(temp);
  };

  const sendOTP = () => {
    if (!isEmailForm || !isUniqueEmail) return;

    sendOTPCode(email).then(res => {
      if (res.statusCode === 200) {
        setIsSentOTP(true);
      }
    });
  };

  const verifyOTP = () => {
    if (otp.length !== 6) return;

    verifyOTPCode(email, otp).then(res => {
      if (res.statusCode === 200) {
        setIsCorrectOTP(true);
        setEmailState(email);
        setPhase(3);
      } else {
        setIsCorrectOTP(false);
        setOTPErrorMessage(`! ${res.message}`);
      }
    });
  };

  useEffect(() => {
    if (!isEmailForm) return;

    isDuplicatedEmail(email).then(res => {
      if (res.statusCode === 200) setIsUniqueEmail(true);
      else {
        setIsUniqueEmail(false);
        setEmailErrorMessage(`! ${res.message}`);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  return (
    <FlexView gap={isMobile ? 24 : 40}>
      <Text bold center xxLarge>
        이메일 인증
      </Text>

      <FlexView gap={24}>
        <TextField
          correct={isEmailForm && isUniqueEmail}
          error={!isEmailForm || !isUniqueEmail}
          errorMessage={emailErrorMessage}
          label="이메일"
          value={email}
          onChange={inputEmail}
          onKeyDown={sendOTP}
        />

        {isSentOTP && (
          <TextField
            correct={isCorrectOTP}
            error={!isCorrectOTP}
            errorMessage={otpErrorMessage}
            isMobile={isMobile}
            label="OTP"
            value={otp}
            onChange={inputOTP}
            onKeyDown={verifyOTP}
          />
        )}

        <Button
          color={Colors.purple}
          css={{ width: isMobile ? `320px` : `440px`, height: `40px` }}
          disabled={!isEmailForm || !isUniqueEmail}
          radius={4}
          onClick={() => (isSentOTP ? verifyOTP() : sendOTP())}
        >
          <Text color={Colors.white} semiBold>
            {isSentOTP ? `OTP 인증` : `OTP 전송`}
          </Text>
        </Button>
      </FlexView>
    </FlexView>
  );
};
