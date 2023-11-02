import { useState, useRef } from 'react';

import DATA from '@data/archeology.json';

import { ArcheologyAccordion } from '@components/accordion';
import { Button, FlexView, Input, Text } from '@components/common';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/system';

const TITLES = [`아이템`, `위치`, `사용 방법`, `수량`, `보상`];
const WIDTHS = [160, 100, 400, 40, 260];

export default function ArcheologyPage() {
  const myData = DATA;
  const isMobile = useResponsive(960);
  const itemRef = useRef<HTMLDivElement[]>([]);
  const [searchKeyword, setSearchKeyword] = useState(``);

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
        item.style.setProperty(`background-color`, Colors.secondary);

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
      css={{
        width: isMobile ? `100%` : `960px`,
        margin: isMobile ? `20px auto` : `60px auto`,
      }}
      items="center"
    >
      <FlexView gap={20}>
        <FlexView content="between" gap={20} items="center" row>
          <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
            고고학 유물
          </Text>

          {!isMobile && (
            <FlexView items="center" row>
              <Input
                aria-label="검색어"
                css={{
                  borderRadius: `4px 0 0 4px`,
                  borderRight: 0,
                }}
                placeholder={
                  isMobile ? `아이템, 지역` : `아이템, 지역, NPC, 보상`
                }
                width={isMobile ? 120 : 180}
                onChange={inputSearchKeyword}
                onKeyDown={e => {
                  if (e.key === `Enter`) searchItem();
                }}
              />

              <Button
                aria-label="검색"
                color={Colors.purple}
                css={{
                  width: `60px`,
                  height: `36px`,
                  borderRadius: `0 4px 4px 0`,
                }}
                onClick={searchItem}
              >
                <Text color={Colors.white}>검색</Text>
              </Button>
            </FlexView>
          )}
        </FlexView>

        {isMobile ? (
          <FlexView css={{ border: `1px solid lightgray` }}>
            {myData.map(item => (
              <ArcheologyAccordion
                key={item.index}
                subTitle={item.location}
                title={item.item}
                titleCSS={{ width: `352px` }}
              >
                <FlexView gap={8}>
                  <Text small>사용방법: &nbsp;{item.use}</Text>
                  <FlexView row wrap>
                    <Text small>보상: &nbsp;</Text>
                    <FlexView gap={8}>
                      {item.rewardList.map(reward => (
                        <FlexView key={reward.name} items="center" row>
                          <Text css={{ minWidth: `32px` }} small>
                            {reward.count}개 /&nbsp;
                          </Text>
                          <Text small>{reward.name}</Text>
                        </FlexView>
                      ))}
                    </FlexView>
                  </FlexView>
                </FlexView>
              </ArcheologyAccordion>
            ))}
          </FlexView>
        ) : (
          <FlexView css={{ minWidth: `960px`, overflowX: `auto` }}>
            <FlexView
              color={Colors.red}
              css={{ minHeight: `40px` }}
              items="center"
              row
            >
              {TITLES.map((title, index) => (
                <Text
                  key={title}
                  color={Colors.white}
                  css={{
                    width: `${WIDTHS[index]}px`,
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
              {myData.map((item, index) => (
                <FlexView
                  key={item.index}
                  ref={el => (itemRef.current[index] = el as HTMLDivElement)}
                  css={{
                    minHeight: `40px`,
                    borderBottom: `1px solid lightgray`,
                  }}
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
        )}
      </FlexView>
    </FlexView>
  );
}
