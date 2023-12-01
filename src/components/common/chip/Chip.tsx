import { FlexView, Text } from '@components/common';
import { Colors } from '@styles/index';

type ChipProps = {
  text: string;
  color?: string;
  radius?: number;
  clickable?: boolean;
  onClick: () => void;
};

export default function Chip({
  text,
  color,
  radius,
  clickable,
  onClick,
}: ChipProps) {
  return (
    <FlexView
      border={clickable ? `blue` : Colors.grey}
      color={color || Colors.white}
      content="between"
      css={{
        cursor: clickable ? `pointer` : `default`,
        padding: `0 8px`,
        height: `30px`,
      }}
      gap={16}
      items="center"
      radius={radius || 8}
      row
      onClick={onClick}
    >
      <Text color={clickable ? `blue` : Colors.grey}>{text}</Text>
    </FlexView>
  );
}
