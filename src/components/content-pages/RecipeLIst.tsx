import { FlexView, Text } from '@components/common';
import { BODY_REINFORCE_RECIPE } from '@constants/body';

type RecipeListProps = {
  isMobile: boolean;
  part: number;
};

export default ({ isMobile, part }: RecipeListProps) => {
  const data = BODY_REINFORCE_RECIPE[part];

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
          small={isMobile}
          bold
          center
        >
          등급
        </Text>
        <Text
          css={{ width: isMobile ? `65px` : `100px` }}
          small={isMobile}
          bold
          center
        >
          강화비약
        </Text>
        <Text
          css={{ width: isMobile ? `80px` : `100px` }}
          small={isMobile}
          bold
          center
        >
          전표
        </Text>
        <Text
          css={{ width: isMobile ? `65px` : `100px` }}
          small={isMobile}
          bold
          center
        >
          누적 비약
        </Text>
        <Text
          css={{ width: isMobile ? `80px` : `100px` }}
          small={isMobile}
          bold
          center
        >
          누적 전표
        </Text>
      </FlexView>

      {data?.map((item, index) => (
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
            small={isMobile}
            center
          >
            {index + 1}등급
          </Text>
          <Text
            css={{ width: isMobile ? `65px` : `100px` }}
            small={isMobile}
            center
          >
            {item.강화비약}
          </Text>
          <Text
            css={{ width: isMobile ? `80px` : `100px` }}
            small={isMobile}
            center
          >
            {item.전표}
          </Text>
          <Text
            css={{ width: isMobile ? `65px` : `100px` }}
            small={isMobile}
            center
          >
            {item.누적비약}
          </Text>
          <Text
            css={{ width: isMobile ? `80px` : `100px` }}
            small={isMobile}
            center
          >
            {item.누적전표}
          </Text>
        </FlexView>
      ))}
    </FlexView>
  );
};
