import { FlexView, Link } from '@components/common';
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
          <FlexView
            key={menu.name}
            css={{
              width: `88px`,
              height: `27px`,
            }}
            center
          >
            <Link
              aria-label="메뉴"
              css={{
                color: `#486284`,
                ':hover': { fontWeight: 700, color: Colors.purple },
              }}
              to={menu.url}
              onClick={onSelect}
            >
              {menu.name}
            </Link>
          </FlexView>
        ))}
      </FlexView>
    ))}
  </FlexView>
);
