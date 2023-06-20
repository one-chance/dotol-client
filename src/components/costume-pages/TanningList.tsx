import { Button, FlexView, Text } from '@components/common';
import DATA from '@data/tanning.json';
import { Colors } from '@styles/system';

type TanningListProps = {
  skinColor: number;
  selectSkin: (skin: number) => void;
};

export default ({ skinColor, selectSkin }: TanningListProps) => {
  const skinList = DATA;

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
        margin: `0 4px`,
      }}
    >
      <FlexView gap={8} row wrap>
        <Button
          color={Colors.red}
          css={{ padding: `4px 8px` }}
          radius={4}
          onClick={() => changeSkin(-1)}
        >
          <Text color={Colors.white} medium>
            초기화
          </Text>
        </Button>

        {skinList.map(skin => (
          <Button
            key={skin.name}
            color={skin.number === skinColor ? Colors.primary : Colors.white}
            css={{
              height: `28px`,
              border: `1px solid ${Colors.primary}`,
              borderRadius: `4px`,
              padding: `0 8px`,
            }}
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
};
