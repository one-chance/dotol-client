import { FlexView, Image, Text } from '@components/common';
import { ICostume } from '@interfaces/index';
import { Colors } from '@styles/index';

interface CostumeProps {
  item: ICostume;
  isSelected: boolean;
  onSelect: (item: ICostume) => void;
}

const Gender: { [key: number]: string } = {
  0: `공용`,
  1: `남성`,
  2: `여성`,
};

export default function Costume({ item, isSelected, onSelect }: CostumeProps) {
  const basicUrl = `https://avatar.baram.nexon.com/Profile/itemRender.aspx?inm=`;

  return (
    <FlexView key={item.name}>
      <FlexView
        color="#E6E5E5"
        css={{
          width: `160px`,
          minHeight: `90px`,
        }}
        items="center"
      >
        {item.name !== `` && (
          <Image
            css={{ margin: `auto` }}
            src={`${basicUrl}${encodeURI(item.name)}`}
          />
        )}
      </FlexView>

      <FlexView
        color="#EBE7E2"
        content="between"
        css={{ width: `160px`, padding: `4px` }}
        items="center"
        row
      >
        <Text color={Colors.purple} size="xSmall">
          {Gender[item.gender]}
        </Text>

        {item.luxury && (
          <Text color={Colors.red} size="xSmall">
            명품
          </Text>
        )}
      </FlexView>
      <FlexView
        css={{
          width: `160px`,
          minHeight: `28px`,
          padding: `4px`,
        }}
        gap={4}
        center
        onClick={() => onSelect(item)}
      >
        <Text
          color={isSelected ? Colors.red : Colors.primary}
          size="small"
          noDrag
        >
          {item.name}
        </Text>
      </FlexView>
    </FlexView>
  );
}
