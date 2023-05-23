import { FlexView, Link } from '@components/common';
import { TOTAL_MENU } from '@constants/menu';

type MenuProps = {
  onHover: (a: number) => void;
  onSelect: () => void;
};

export default ({ onHover, onSelect }: MenuProps) => (
  <FlexView gap={32} row>
    {TOTAL_MENU.map((menus, index) => (
      <FlexView
        key={menus.menu}
        gap={18}
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(-1)}
      >
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
