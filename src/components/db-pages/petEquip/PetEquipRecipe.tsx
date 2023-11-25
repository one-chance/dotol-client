import EQUIP_RECIPE from '@data/pet-recipe.json';

import { FlexView, Text } from '@components/common';
import { useResponsive } from '@hooks/index';

const recipeData = EQUIP_RECIPE;

export default () => {
  const isMobile = useResponsive(580);

  return (
    <FlexView css={{ border: `1px solid lightgray` }}>
      <FlexView color="lightgray" css={{ height: `40px` }} items="center" row>
        <Text css={{ width: isMobile ? `130px` : `160px` }} center semiBold>
          환수장비
        </Text>
        <Text css={{ width: isMobile ? `60px` : `78px` }} center semiBold>
          성공률
        </Text>
        <Text css={{ width: isMobile ? `158px` : `320px` }} center semiBold>
          재료
        </Text>
      </FlexView>

      {recipeData.map(data => (
        <FlexView
          key={data.장비}
          css={{
            minHeight: `36px`,
            borderTop: `1px solid lightgray`,
            padding: `2px 0`,
          }}
          items="center"
          row
        >
          <Text
            css={{
              width: isMobile ? `130px` : `160px`,
              paddingLeft: isMobile ? `4px` : `8px`,
            }}
            small={isMobile}
          >
            {data.장비}
          </Text>

          <Text
            css={{ width: isMobile ? `60px` : `78px` }}
            small={isMobile}
            center
          >
            {data.성공률}
          </Text>

          <FlexView css={{ width: isMobile ? `158px` : `320px` }} row wrap>
            {data.재료.map(item => (
              <Text
                key={item}
                css={{ paddingLeft: isMobile ? `4px` : `8px` }}
                small={isMobile}
              >
                {item}
              </Text>
            ))}
          </FlexView>
        </FlexView>
      ))}
    </FlexView>
  );
};
