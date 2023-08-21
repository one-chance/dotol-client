import { Anchor, FlexView } from '@components/common';
import { TOTAL_MENU } from '@constants/menu';
import { Colors } from '@styles/system';

type MenuProps = {
  onSelect: () => void;
};

export default ({ onSelect }: MenuProps) => (
  <FlexView gap={32} row>
    {TOTAL_MENU.map(menus => (
      <FlexView key={menus.menu} gap={18}>
        {menus.sub.map(menu => (
          <Anchor
            key={menu.name}
            aria-label="메뉴"
            css={{
              width: `88px`,
              lineHeight: `27px`,
              textAlign: `center`,
              color: `#486284`,
              ':hover': { fontWeight: 700, color: Colors.purple },
            }}
            href={menu.url}
            onClick={onSelect}
          >
            {menu.name}
          </Anchor>
        ))}
      </FlexView>
    ))}
  </FlexView>
);
