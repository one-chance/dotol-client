import { useState, useEffect, useRef } from 'react';

import { Button, FlexView, Icon, Text, Link } from '@components/common';
import { Colors } from '@styles/system';
import { useTranslation } from 'react-i18next';

export default () => {
  const [t] = useTranslation(`header`);
  const [showTotalMenu, setShowTotalMenu] = useState(false);

  const openTotalMenu = () => {
    setShowTotalMenu(true);
  };

  const closeTotalMenu = () => {
    setShowTotalMenu(false);
  };

  return (
    <header
      style={{
        position: `fixed`,
        zIndex: 999,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <FlexView
        color={Colors.white}
        content="between"
        css={{
          padding: `20px 24px 16px 24px`,
          boxShadow: `0 2px 4px rgba(0, 0, 0, 0.2)`,
        }}
        items="start"
        row
      >
        <Link to="/">
          <Text>{t(`title`)}</Text>
        </Link>

        <Button onClick={openTotalMenu}>
          <Icon name="menu" />
        </Button>
      </FlexView>
    </header>
  );
};
