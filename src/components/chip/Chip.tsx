import { Button, FlexView, Text } from '@components/common';

type ChipProps = {
  text: string;
  color?: string;
  textColor?: string;
  radius?: number;
  clickable?: boolean;
  onClick: () => void;
  onDelete?: () => void;
};

export default ({
  text,
  color,
  textColor,
  radius,
  clickable,
  onClick,
  onDelete,
}: ChipProps) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {!onDelete && (
      <FlexView
        color={color || `#FFFFFF`}
        content="between"
        css={{
          cursor: !clickable ? `default` : `pointer`,
          border: `1px solid lightgray`,
          borderColor: clickable ? `blue` : `lightgray`,
          borderRadius: radius ? `${radius}px` : `10px`,
          padding: `0 8px`,
          height: `30px`,
        }}
        gap={16}
        items="center"
        row
        onClick={onClick}
      >
        <Text color={textColor || `#000000`}>{text}</Text>

        {onDelete && (
          <Button
            css={{ borderRadius: `50%`, border: `1px solid lightgray` }}
            onClick={onDelete}
          >
            <Text>x</Text>
          </Button>
        )}
      </FlexView>
    )}
  </>
);
