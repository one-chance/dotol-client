import { FlexView, Text, Link } from '@components/common';
import { useTranslation } from 'react-i18next';

export default () => {
  const [t] = useTranslation(`header`);

  return (
    <header>
      <FlexView
        content="between"
        css={{
          height: `3rem`,
          padding: `0 10%`,
          borderBottom: `1px solid #D5D5D5`,
        }}
        items="center"
        row
      >
        <Link to="/">
          <Text>{t(`title`)}</Text>
        </Link>
      </FlexView>
    </header>
  );
};
