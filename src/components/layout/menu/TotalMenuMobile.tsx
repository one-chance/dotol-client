import { useState } from 'react';

import { Button, FlexView, Link, Icon, Text } from '@components/common';
import { TOTAL_MENU, MAIN_MENU } from '@constants/menu';
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
      color="lightgray"
      content="between"
      css={{ padding: `20px 24px 16px 24px` }}
      items="center"
      row
    >
      <Text>헤더</Text>

      <Button onClick={onClose}>
        <Icon name="close" size={24} />
      </Button>
    </FlexView>

    <FlexView css={{ padding: `0 24px` }} gap={8}>
      {MAIN_MENU.map((menu, index) => {
        const [showSubMenu, setShowSubMenu] = useState(false);

        return (
          <FlexView
            key={menu}
            content="center"
            css={{ minHeight: `36px` }}
            onClick={() => setShowSubMenu(!showSubMenu)}
          >
            <FlexView content="between" items="center" row>
              <Text css={{ lineHeight: `36px` }}>{menu}</Text>

              <Icon name={showSubMenu ? `arrowUp` : `arrowDown`} size={16} />
            </FlexView>

            {showSubMenu && (
              <FlexView css={{ paddingLeft: `16px` }}>
                {TOTAL_MENU[index].sub.map(sub => (
                  <Link
                    key={sub.name}
                    css={{ lineHeight: `28px` }}
                    to={sub.url}
                    onClick={onClose}
                  >
                    <Text small>{sub.name}</Text>
                  </Link>
                ))}
              </FlexView>
            )}
          </FlexView>
        );
      })}
    </FlexView>
  </FlexView>
);
