import { useState } from 'react';

import { Button, FlexView, Input, Text } from '@components/common';
import Data from '@data/archeology.json';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(400);

  const [searchKeyword, setSearchKeyword] = useState(``);
  const TITLES = [`아이템`, `지역`, `사용 방법`, `수량`, `보상`];

  const searchItem = () => {
    // 아이템 검색
  };

  return (
    <FlexView
      css={{ maxWidth: `1280px`, width: `100%`, margin: `40px auto` }}
      gap={20}
    >
      <FlexView items="center" row>
        <Input />
        <Button onClick={searchItem}>
          <Text>검색</Text>
        </Button>
      </FlexView>

      <FlexView>
        <FlexView color="red" css={{ height: `40px` }} items="center" row>
          {TITLES.map((title, index) => (
            <Text
              key={title}
              color={Colors.white}
              css={{ flex: index === 2 ? 2 : 1, paddingLeft: `16px` }}
              large={!isMobile}
              noDrag
              semiBold
            >
              {title}
            </Text>
          ))}
        </FlexView>

        <FlexView wrap>
          {Data.map((item, index) => (
            <FlexView
              key={item.item}
              css={{ minHeight: `40px` }}
              items="center"
              row
            >
              <Text small={isMobile} fill>
                {item.item}
              </Text>
              <Text small={isMobile} fill>
                {item.location}
              </Text>
              <Text css={{ flex: 2 }} small={isMobile}>
                {item.use}
              </Text>

              <FlexView css={{ flex: 2 }}>
                {item.rewardList.map(reward => (
                  <FlexView
                    key={reward.name}
                    css={{ minHeight: `40px` }}
                    items="center"
                    fill
                    row
                  >
                    <Text small={isMobile} fill>
                      {reward.count}
                    </Text>
                    <Text small={isMobile} fill>
                      {reward.name}
                    </Text>
                  </FlexView>
                ))}
              </FlexView>
            </FlexView>
          ))}
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
