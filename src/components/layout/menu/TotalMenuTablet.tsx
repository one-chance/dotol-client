import { Button, FlexView, Icon, Text } from '@components/common';
import { TOTAL_MENU } from '@constants/menu';
import { Colors } from '@styles/system';

type MenuProps = {
  onClose: () => void;
};

export default ({ onClose }: MenuProps) => (
  <FlexView
    color={Colors.white}
    css={{ position: `fixed`, top: 0, left: 0, right: 0, bottom: 0 }}
  >
    <FlexView
      content="between"
      css={{ padding: `20px 24px 16px 24px` }}
      items="center"
      row
    >
      <Text>헤더</Text>

      <Button onClick={onClose}>
        <Icon name="clsoe" size={24} />
      </Button>
    </FlexView>
  </FlexView>
);