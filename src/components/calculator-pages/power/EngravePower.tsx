import { useState } from 'react';

import { FlexView, Input, Text } from '@components/common';

export default () => {
  const [engravePower, setEngravePower] = useState(0);

  return (
    <FlexView
      css={{
        border: `1px solid lightgray`,
        borderRadius: `4px`,
        padding: `20px`,
      }}
      gap={16}
      items="center"
    >
      <FlexView gap={8}>
        <FlexView items="center" row>
          <Text>능력치</Text>

          <Input height={40} placeholder="수치(%)" width={100} center />
        </FlexView>

        <FlexView items="center" row>
          <Text>능력치</Text>

          <Input height={40} placeholder="수치(%)" width={100} center />
        </FlexView>
      </FlexView>

      <Text semiBold>각인 전투력: {engravePower}</Text>
    </FlexView>
  );
};
