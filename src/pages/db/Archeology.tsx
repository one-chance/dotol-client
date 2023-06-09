import { useState, useRef } from 'react';

import { Button, FlexView, Input, Text } from '@components/common';
import Data from '@data/archeology.json';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(960);
  const itemRef = useRef<HTMLDivElement[]>([]);

  const [searchKeyword, setSearchKeyword] = useState(``);

  const TITLES = [`아이템`, `위치`, `사용 방법`, `수량`, `보상`];
  const WIDTHS = [160, 100, 400, 40, 260];

  const inputSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const searchItem = () => {
    if (searchKeyword === ``) {
      itemRef.current.forEach(item => {
        item.style.setProperty(`background-color`, `white`);
      });
      return;
    }

    itemRef.current.forEach(item => {
      if (item.innerText.includes(searchKeyword)) {
        item.style.setProperty(`background-color`, `red`);

        item.scrollIntoView({
          behavior: `smooth`,
          block: `center`,
        });
      } else {
        item.style.setProperty(`background-color`, `white`);
      }
    });
  };

  return (
    <FlexView
      css={{ maxWidth: `1080px`, width: `100%`, margin: `20px auto` }}
      gap={20}
    >
      <FlexView css={{ padding: `0 10px` }} gap={4} items="center" row>
        <Input
          placeholder="아이템, 지역, NPC, 보상"
          width={200}
          onChange={inputSearchKeyword}
          onKeyDown={e => {
            if (e.key === `Enter`) searchItem();
          }}
        />

        <Button
          color="blue"
          css={{ width: `60px`, height: `36px`, borderRadius: `4px` }}
          onClick={searchItem}
        >
          <Text color={Colors.white}>검색</Text>
        </Button>
      </FlexView>

      <FlexView css={{ minWidth: `960px`, overflowX: `auto` }}>
        <FlexView color="purple" css={{ minHeight: `40px` }} items="center" row>
          {TITLES.map((title, index) => (
            <Text
              key={title}
              color={Colors.white}
              css={{
                minWidth: `${WIDTHS[index]}px`,
                paddingLeft: index === 0 ? `8px` : 0,
              }}
              bold
              noDrag
              small
            >
              {title}
            </Text>
          ))}
        </FlexView>

        <FlexView>
          {Data.map((item, index) => (
            <FlexView
              key={item.item}
              ref={el => (itemRef.current[index] = el as HTMLDivElement)}
              css={{ minHeight: `40px`, borderBottom: `1px solid lightgray` }}
              items="center"
              row
            >
              <Text css={{ minWidth: `160px`, paddingLeft: `8px` }} small>
                {item.item}
              </Text>

              <Text css={{ minWidth: `100px` }} small>
                {item.location}
              </Text>

              <Text css={{ minWidth: `400px` }} small>
                {item.use}
              </Text>

              <FlexView>
                {item.rewardList.map(reward => (
                  <FlexView
                    key={reward.name}
                    css={{ minHeight: `40px` }}
                    items="center"
                    row
                  >
                    <Text css={{ minWidth: `40px` }} small>
                      {reward.count}
                    </Text>
                    <Text css={{ minWidth: `260px` }} small>
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
