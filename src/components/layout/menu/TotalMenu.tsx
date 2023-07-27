import { FlexView, Link } from '@components/common';
import { TOTAL_MENU } from '@constants/menu';

type MenuProps = {
  onSelect: () => void;
};

export default ({ onSelect }: MenuProps) => (
  <FlexView gap={32} row>
    {TOTAL_MENU.map((menus, index) => (
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
              css={{ color: `#486284`, ':hover': { color: `blue` } }}
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
