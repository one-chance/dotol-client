import { Button, FlexView, Image, Text } from '@components/common';
import { Colors } from '@styles/token';

interface ImageSlotProps {
  items: string[];
  isMobile: boolean;
  width?: number;
  onSelect: (idx: number, name: string) => void;
}

export default function ImageSlot({
  items,
  isMobile,
  width,
  onSelect,
}: ImageSlotProps) {
  const basicUrl = `https://asset.dotols.com/image/`;

  return (
    <FlexView
      border="lightgray"
      content="center"
      css={{ padding: `8px` }}
      gap={12}
      radius={4}
      row={!isMobile}
    >
      {items.map((item, index) => (
        <FlexView key={index} gap={10} items="center" fill>
          <Button
            aria-label={`슬롯${index + 1}`}
            border={item === `` ? Colors.primary : Colors.red}
            css={{ width: `80px`, height: `36px` }}
            disabled={item === ``}
            radius={4}
            onClick={() => onSelect(index, item)}
          >
            <Text color={item === `` ? Colors.primary : Colors.red}>
              슬롯{index + 1}
            </Text>
          </Button>

          {item !== `` && (
            <Image
              css={{ maxWidth: width ? `${width}px` : `100%`, width: `100%` }}
              src={`${basicUrl}${item}.png`}
            />
          )}
        </FlexView>
      ))}
    </FlexView>
  );
}
