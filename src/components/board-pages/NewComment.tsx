import { useState } from 'react';

import { Button, FlexView, Text, TextArea } from '@components/common';
import { Colors } from '@styles/index';

type NewCommentProps = {
  color?: string;
  onSubmit: (e: string) => void;
};

export default function NewComment({ color, onSubmit }: NewCommentProps) {
  const [value, setValue] = useState(``);

  const inputValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const submitValue = () => {
    onSubmit(value);
  };

  return (
    <FlexView
      css={{ padding: `10px`, backgroundColor: color }}
      gap={4}
      items="center"
      fill
      row
    >
      <FlexView fill>
        <TextArea
          css={{ minHeight: `80px` }}
          placeholder="욕설, 비방, 분란은 조장하는 댓글은 제재될 수 있습니다."
          onChange={inputValue}
        />
      </FlexView>

      <Button
        aria-label="등록"
        color={Colors.purple}
        css={{ width: `60px`, height: `80px` }}
        radius={4}
        onClick={submitValue}
      >
        <Text color={Colors.white} size="small" weight="bold">
          등록
        </Text>
      </Button>
    </FlexView>
  );
}
