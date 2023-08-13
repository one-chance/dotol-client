import { useState } from 'react';

import { FlexView, Text } from '@components/common';
import { Select, Option } from '@components/select';
import { BODY_REINFORCE_RECIPE } from '@constants/body';
import { BodyRecipe } from '@interfaces/content';
import { Colors } from '@styles/system';

type RecipeListProps = {
  isMobile: boolean;
};

const PARTS = [`무기 ~ 오른손`, `목/어깨`, `신발, 망토`];

export default ({ isMobile }: RecipeListProps) => {
  const [parts, setParts] = useState(0);
  const [ingredient, setIngredient] = useState<BodyRecipe[]>(
    BODY_REINFORCE_RECIPE[0],
  );
  const selectPart = (index: number) => {
    setParts(index);
    setIngredient(BODY_REINFORCE_RECIPE[index]);
  };

  return (
    <FlexView gap={20}>
      <FlexView
        content="between"
        css={{ margin: isMobile ? `0 4px` : undefined }}
        items="center"
        row
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold>
          신체강화 재료
        </Text>

        <Select
          isMobile={isMobile}
          name={PARTS[parts]}
          width={isMobile ? 110 : 140}
        >
          <Option
            selected={PARTS[parts]}
            values={PARTS}
            onSelect={selectPart}
          />
        </Select>
      </FlexView>
      <FlexView>
        <FlexView
          color="lightgray"
          css={{ height: isMobile ? `36px` : `40px` }}
          items="center"
          row
        >
          <Text
            css={{ width: isMobile ? `58px` : `120px` }}
            small={isMobile}
            bold
            center
          >
            등급
          </Text>
          <Text
            css={{ width: isMobile ? `70px` : `120px` }}
            small={isMobile}
            bold
            center
          >
            강화비약
          </Text>
          <Text
            css={{ width: isMobile ? `80px` : `120px` }}
            small={isMobile}
            bold
            center
          >
            전표
          </Text>
          <Text
            css={{ width: isMobile ? `70px` : `120px` }}
            small={isMobile}
            bold
            center
          >
            누적 비약
          </Text>
          <Text
            css={{ width: isMobile ? `80px` : `120px` }}
            small={isMobile}
            bold
            center
          >
            누적 전표
          </Text>
        </FlexView>

        {ingredient?.map((item, index) => (
          <FlexView
            key={item.강화비약}
            css={{
              height: isMobile ? `30px` : `36px`,
              borderBottom: `1px solid lightgray`,
              borderLeft: `1px solid lightgray`,
              borderRight: `1px solid lightgray`,
            }}
            items="center"
            row
          >
            <Text
              css={{ width: isMobile ? `58px` : `119px` }}
              small={isMobile}
              center
            >
              {index + 1}등급
            </Text>
            <Text
              css={{ width: isMobile ? `70px` : `120px` }}
              small={isMobile}
              center
            >
              {item.강화비약}
            </Text>
            <Text
              css={{ width: isMobile ? `80px` : `120px` }}
              small={isMobile}
              center
            >
              {item.전표}
            </Text>
            <Text
              css={{ width: isMobile ? `70px` : `120px` }}
              small={isMobile}
              center
            >
              {item.누적비약}
            </Text>
            <Text
              css={{ width: isMobile ? `80px` : `119px` }}
              small={isMobile}
              center
            >
              {item.누적전표}
            </Text>
          </FlexView>
        ))}
      </FlexView>

      <Text
        color={Colors.red}
        css={{ marginLeft: isMobile ? `4px` : 0 }}
        small={isMobile}
      >
        * 신발, 망토의 전표는 추후 업데이트 예정입니다.
      </Text>
    </FlexView>
  );
};