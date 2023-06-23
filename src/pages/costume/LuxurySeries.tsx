import { FlexView, Image } from '@components/common';
import { LuxuryList } from '@components/costume-pages';

export default () => {
  const test = encodeURIComponent(`111.png`);

  console.log(encodeURIComponent(`[상급]고대은제팔찌.png`));

  return (
    <FlexView>
      <LuxuryList />

      <Image src="https://image.dotols.com/equip/1.png" />
    </FlexView>
  );
};
