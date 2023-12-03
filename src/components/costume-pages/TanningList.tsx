import { Button, FlexView, Text } from '@components/common';
import { SKIN_LIST } from '@constants/index';
import { Colors } from '@styles/index';

type TanningListProps = {
  skinColor: number;
  selectSkin: (skin: number) => void;
};

export default function TanningList({
  skinColor,
  selectSkin,
}: TanningListProps) {
  const changeSkin = (_skin: number) => {
    selectSkin(_skin);
  };

  return (
    <FlexView
      content="center"
      css={{
        border: `1px solid lightgray`,
        padding: `20px`,
        maxWidth: `720px`,
      }}
    >
      <FlexView gap={8} row wrap>
        <Button
          aria-label="초기화"
          color={Colors.red}
          css={{ padding: `4px 8px` }}
          radius={4}
          onClick={() => changeSkin(-1)}
        >
          <Text color={Colors.white}>초기화</Text>
        </Button>

        {SKIN_LIST.map(skin => (
          <Button
            key={skin.name}
            aria-label="태닝 색상"
            color={skin.number === skinColor ? Colors.primary : Colors.white}
            css={{
              height: `28px`,
              border: `1px solid ${Colors.primary}`,
              padding: `0 8px`,
            }}
            radius={4}
            onClick={() => changeSkin(skin.number)}
          >
            <Text
              color={skin.number === skinColor ? Colors.white : Colors.primary}
            >
              {skin.name}
            </Text>
          </Button>
        ))}
      </FlexView>
    </FlexView>
  );
}
