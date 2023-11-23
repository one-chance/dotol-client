import { Button, FlexView, Text } from '@components/common';

type ChipProps = {
  text: string;
  color?: string;
  radius?: number;
  clickable?: boolean;
  onClick: () => void;
  onDelete?: () => void;
};

export default ({
  text,
  color,
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
        radius={radius || 8}
        border={clickable ? 'blue' : 'gray'}
        css={{
          cursor: !clickable ? `default` : `pointer`,
          padding: `0 8px`,
          height: `30px`,
        }}
        gap={16}
        items="center"
        row
        onClick={onClick}
      >
        <Text color={clickable ? `blue` : `gray`}>{text}</Text>

        {onDelete && (
          <Button
            aria-label="제거"
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
