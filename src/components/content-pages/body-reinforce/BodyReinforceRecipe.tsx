import { FlexView, Text } from '@components/common';

type Recipe = {
  강화비약: string;
  전표: string;
  누적비약: string;
  누적전표: string;
};

type BodyReinforceRecipeProps = {
  isMobile: boolean;
  list: Recipe[];
};

export default function BodyReinforceRecipe({
  isMobile,
  list,
}: BodyReinforceRecipeProps) {
  return (
    <FlexView>
      <FlexView
        color="lightgray"
        css={{ height: isMobile ? `36px` : `40px` }}
        items="center"
        row
      >
        <Text
          css={{ width: isMobile ? `58px` : `100px` }}
          size={isMobile ? `small` : `normal`}
          weight="bold"
          center
        >
          등급
        </Text>
        <Text
          css={{ width: isMobile ? `65px` : `100px` }}
          size={isMobile ? `small` : `normal`}
          weight="bold"
          center
        >
          강화비약
        </Text>
        <Text
          css={{ width: isMobile ? `80px` : `100px` }}
          size={isMobile ? `small` : `normal`}
          weight="bold"
          center
        >
          전표
        </Text>
        <Text
          css={{ width: isMobile ? `65px` : `100px` }}
          size={isMobile ? `small` : `normal`}
          weight="bold"
          center
        >
          누적 비약
        </Text>
        <Text
          css={{ width: isMobile ? `80px` : `100px` }}
          size={isMobile ? `small` : `normal`}
          weight="bold"
          center
        >
          누적 전표
        </Text>
      </FlexView>

      {list?.map((item, index) => (
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
            css={{ width: isMobile ? `58px` : `100px` }}
            size={isMobile ? `small` : `normal`}
            center
          >
            {index + 1}등급
          </Text>
          <Text
            css={{ width: isMobile ? `65px` : `100px` }}
            size={isMobile ? `small` : `normal`}
            center
          >
            {item.강화비약}
          </Text>
          <Text
            css={{ width: isMobile ? `80px` : `100px` }}
            size={isMobile ? `small` : `normal`}
            center
          >
            {item.전표}
          </Text>
          <Text
            css={{ width: isMobile ? `65px` : `100px` }}
            size={isMobile ? `small` : `normal`}
            center
          >
            {item.누적비약}
          </Text>
          <Text
            css={{ width: isMobile ? `80px` : `100px` }}
            size={isMobile ? `small` : `normal`}
            center
          >
            {item.누적전표}
          </Text>
        </FlexView>
      ))}
    </FlexView>
  );
}
