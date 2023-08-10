import { useState } from 'react';

import { FlexView, Text } from '@components/common';
import { IComment } from '@interfaces/board';
import { Colors } from '@styles/system';

type ReplyProps = {
  reply: IComment;
};

export default ({ reply }: ReplyProps) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <FlexView color={Colors.primary10} content="between" row>
      <FlexView>
        <Text bold small>
          {reply.writer.character}
        </Text>
        <Text xSmall>{reply.updatedAt.split(`.`)[0].replace(`T`, ` `)}</Text>
        {reply.createdAt !== reply.updatedAt && (
          <Text color="gray" xSmall>
            (수정)
          </Text>
        )}
      </FlexView>

      <FlexView>123</FlexView>
    </FlexView>
  );
};
