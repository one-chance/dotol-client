import { useState } from 'react';

import { FlexView, Icon, Input, Text } from '@components/common';
import { Label } from '@components/common';
import { Colors } from '@styles/system';

type TextFieldProps = {
  label: string;
  value: string;
  onKeyDown?: () => void;
  onChange: (text: string) => void;
  width?: number;
  isMobile?: boolean;
  autoComplete?: string;
  readOnly?: boolean;
  password?: boolean;
  error?: boolean;
  errorMessage?: string;
  correct?: boolean;
  timer?: number;
};

export default ({
  label,
  value,
  onKeyDown,
  onChange,
  width,
  isMobile,
  autoComplete,
  readOnly,
  password,
  error,
  errorMessage,
  correct,
  timer,
}: TextFieldProps) => {
  const [text, setText] = useState(``);
  const [isFocused, setIsFocused] = useState(false);
  const [isEntered, setIsEntered] = useState(value !== ``);

  const inputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    onChange(e.target.value);

    if (e.target.value === ``) setIsEntered(false);
    else setIsEntered(true);
  };

  return (
    <FlexView css={{ width: width ? `${width}px` : `100%` }}>
      <FlexView
        css={{
          borderBottom: isFocused ? `1px solid blue` : `1px solid lightgray`,
          padding: `10px 0`,
          marginTop: `10px`,
          position: `relative`,
        }}
        onBlur={() => setIsFocused(false)}
        onClick={() => {
          if (!readOnly) setIsFocused(true);
        }}
      >
        <Label
          css={{
            color: isFocused ? `blue` : `gray`,
            left: 0,
            lineHeight: `20px`,
            transform:
              isFocused || isEntered
                ? `scale(.8) translateY(-30px)`
                : undefined,
            transformOrigin: `bottom left`,
            transition: `all 0.3s cubic-bezier(.4,0,.2,1)`,
          }}
        >
          {label}
        </Label>
        <Input
          aria-label={label}
          autoComplete={autoComplete}
          autoFocus={isFocused}
          css={{
            border: `none`,
            padding: `0 20px 0 0`,
            minHeight: 0,
            fontSize: isMobile ? `14px` : `16px`,
          }}
          readOnly={readOnly}
          type={password ? `password` : `text`}
          value={value}
          onChange={inputText}
          onFocus={() => setIsFocused(true)}
          onKeyDown={e => {
            if (e.key === `Enter` && onKeyDown) {
              onKeyDown();
            }
          }}
        />

        {correct && (
          <Icon
            color="#49E462"
            css={{ position: `absolute`, right: 0 }}
            name="correct"
            size={16}
          />
        )}

        {timer && (
          <Text
            color={Colors.red}
            css={{ position: `absolute`, right: 0 }}
            semiBold
          >
            {timer}초
          </Text>
        )}
      </FlexView>

      {text !== `` && error && (
        <Text
          color={Colors.red}
          css={{ marginTop: `8px`, lineHeight: 1, minHeight: 0 }}
          small={!isMobile}
          xSmall={isMobile}
          semiBold
        >
          {errorMessage}
        </Text>
      )}
    </FlexView>
  );
};
