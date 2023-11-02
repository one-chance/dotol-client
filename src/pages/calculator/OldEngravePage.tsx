import { useEffect, useState } from 'react';

import { FlexView, Icon, Input, Text } from '@components/common';
import { Option, Select } from '@components/select';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/system';

export default function OldEngrave() {
  const isMobile = useResponsive(600);
  const ABILITIES = [
    `능력치`,
    `방어도`,
    `방어도무시`,
    `방어구관통`,
    `공격력증가`,
    `마력증강`,
    `마법치명`,
    `직타저항`,
    `피해흡수`,
    `명중회피`,
  ];

  const RATIOS: { [key: string]: number } = {
    능력치: 0,
    방어도: 0.32,
    방어도무시: 0.32,
    방어구관통: 0.1,
    공격력증가: 0.08,
    마력증강: 0.08,
    마법치명: 0.08,
    직타저항: 0.08,
    피해흡수: 0.08,
    명중회피: 0.43,
  };

  const MAXS: { [key: string]: number } = {
    능력치: 0,
    방어도: 5.76,
    방어도무시: 5.12,
    방어구관통: 8,
    공격력증가: 10.4,
    마력증강: 6.08,
    마법치명: 6.4,
    직타저항: 10.4,
    피해흡수: 10.88,
    명중회피: 1.72,
  };

  const [ability, setAbility] = useState(0);
  const [ratio, setRatio] = useState(0.32);
  const [total, setTotal] = useState(`0`);

  const [engraves, setEngraves] = useState<{ 앞각: string; 뒷각: string }[]>([
    { 앞각: ``, 뒷각: `` },
    { 앞각: ``, 뒷각: `` },
    { 앞각: ``, 뒷각: `` },
    { 앞각: ``, 뒷각: `` },
    { 앞각: ``, 뒷각: `` },
  ]);

  const selectAbility = (idx: number) => {
    setAbility(idx);
    setRatio(RATIOS[ABILITIES[idx]]);
  };

  const inputEngrave = (
    type: number,
    order: '앞각' | '뒷각',
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let temp = e.target.value.replace(/[^0-9.]/g, ``);

    const firstDotIndex = temp.indexOf(`.`);
    if (firstDotIndex !== -1) {
      const afterFirstDot = temp.slice(firstDotIndex + 1).replace(/\./g, ``);
      temp = temp.slice(0, firstDotIndex + 1) + afterFirstDot;
    }

    const decimalIndex = temp.indexOf(`.`);
    if (decimalIndex !== -1) {
      temp = temp.slice(0, decimalIndex + 3);
    }

    engraves[type][order] = temp;
    setEngraves([...engraves]);
  };

  useEffect(() => {
    const tempPower =
      Number(engraves[0].앞각) +
      Number(engraves[0].뒷각) +
      Number(engraves[1].앞각) +
      Number(engraves[1].뒷각) +
      Number(engraves[2].앞각) +
      Number(engraves[2].뒷각) +
      Number(engraves[3].앞각) +
      Number(engraves[3].뒷각) +
      Number(engraves[4].앞각) +
      Number(engraves[4].뒷각);

    setTotal(tempPower.toFixed(2));
  }, [engraves]);

  return (
    <FlexView
      css={{
        width: isMobile ? `100%` : `960px`,
        margin: isMobile ? `40px 0` : `60px auto`,
      }}
      gap={20}
      items="center"
    >
      <FlexView
        css={{ width: isMobile ? `340px` : `500px` }}
        gap={isMobile ? 20 : 40}
      >
        <FlexView content="between" items="center" fill row>
          <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
            각인 수치 변환
          </Text>

          <Select
            isMobile={isMobile}
            name={ABILITIES[ability]}
            width={isMobile ? 100 : 120}
          >
            <Option
              selected={ABILITIES[ability]}
              values={ABILITIES}
              onSelect={selectAbility}
            />
          </Select>
        </FlexView>

        <FlexView gap={isMobile ? 20 : 40} items="center" row={!isMobile}>
          <FlexView gap={12}>
            <Text large={!isMobile} center>
              현재 수치(%)
            </Text>
            <FlexView
              css={{
                border: `1px solid lightgray`,
                borderRadius: `8px`,
                padding: `20px`,
              }}
              gap={4}
            >
              <FlexView gap={4} items="center" row>
                <Text css={{ minWidth: `40px` }} semiBold>
                  주작
                </Text>
                <Input
                  aria-label="앞각"
                  placeholder="앞각"
                  readOnly={ability === 0}
                  value={engraves[0].앞각 || ``}
                  width={60}
                  center
                  onChange={e => inputEngrave(0, `앞각`, e)}
                />
                <Input
                  aria-label="뒷각"
                  placeholder="뒷각"
                  readOnly={ability === 0}
                  value={engraves[0].뒷각 || ``}
                  width={60}
                  center
                  onChange={e => inputEngrave(0, `뒷각`, e)}
                />
              </FlexView>
              <FlexView gap={4} items="center" row>
                <Text css={{ minWidth: `40px` }} semiBold>
                  백호
                </Text>
                <Input
                  aria-label="앞각"
                  placeholder="앞각"
                  readOnly={ability === 0}
                  value={engraves[1].앞각 || ``}
                  width={60}
                  center
                  onChange={e => inputEngrave(1, `앞각`, e)}
                />
                <Input
                  aria-label="뒷각"
                  placeholder="뒷각"
                  readOnly={ability === 0}
                  value={engraves[1].뒷각 || ``}
                  width={60}
                  center
                  onChange={e => inputEngrave(1, `뒷각`, e)}
                />
              </FlexView>
              <FlexView gap={4} items="center" row>
                <Text css={{ minWidth: `40px` }} semiBold>
                  청룡
                </Text>
                <Input
                  aria-label="앞각"
                  placeholder="앞각"
                  readOnly={ability === 0}
                  value={engraves[2].앞각 || ``}
                  width={60}
                  center
                  onChange={e => inputEngrave(2, `앞각`, e)}
                />
                <Input
                  aria-label="뒷각"
                  placeholder="뒷각"
                  readOnly={ability === 0}
                  value={engraves[2].뒷각 || ``}
                  width={60}
                  center
                  onChange={e => inputEngrave(2, `뒷각`, e)}
                />
              </FlexView>
              <FlexView gap={4} items="center" row>
                <Text css={{ minWidth: `40px` }} semiBold>
                  현무
                </Text>
                <Input
                  aria-label="앞각"
                  placeholder="앞각"
                  readOnly={ability === 0}
                  value={engraves[3].앞각 || ``}
                  width={60}
                  center
                  onChange={e => inputEngrave(3, `앞각`, e)}
                />
                <Input
                  aria-label="뒷각"
                  placeholder="뒷각"
                  readOnly={ability === 0}
                  value={engraves[3].앞각 || ``}
                  width={60}
                  center
                  onChange={e => inputEngrave(3, `뒷각`, e)}
                />
              </FlexView>
              <FlexView gap={4} items="center" row>
                <Text css={{ minWidth: `40px` }} semiBold>
                  황룡
                </Text>
                <Input
                  aria-label="앞각"
                  placeholder="앞각"
                  readOnly={ability === 0}
                  value={engraves[4].앞각 || ``}
                  width={60}
                  center
                  onChange={e => inputEngrave(4, `앞각`, e)}
                />
                <Input
                  aria-label="뒷각"
                  placeholder="뒷각"
                  readOnly={ability === 0}
                  value={engraves[4].앞각 || ``}
                  width={60}
                  center
                  onChange={e => inputEngrave(4, `뒷각`, e)}
                />
              </FlexView>
              <Text css={{ marginTop: `10px` }} center semiBold>
                합계: {total}%
              </Text>
            </FlexView>
          </FlexView>

          <Icon name={isMobile ? `arrowDown` : `arrowRight`} size={32} />

          <FlexView gap={12}>
            <Text large={!isMobile} center>
              과거 수치(+)
            </Text>
            <FlexView
              css={{
                border: `1px solid lightgray`,
                borderRadius: `8px`,
                padding: `20px`,
              }}
              gap={4}
            >
              <FlexView gap={4} items="center" row>
                <Text css={{ minWidth: `40px` }} semiBold>
                  주작
                </Text>
                <Input
                  aria-label="앞각"
                  placeholder="앞각"
                  value={Math.floor(Number(engraves[0].앞각) / ratio) || ``}
                  width={60}
                  center
                  readOnly
                />
                <Input
                  aria-label="뒷각"
                  placeholder="뒷각"
                  value={Math.floor(Number(engraves[0].뒷각) / ratio) || ``}
                  width={60}
                  center
                  readOnly
                />
              </FlexView>
              <FlexView gap={4} items="center" row>
                <Text css={{ minWidth: `40px` }} semiBold>
                  백호
                </Text>
                <Input
                  aria-label="앞각"
                  placeholder="앞각"
                  value={Math.floor(Number(engraves[1].앞각) / ratio) || ``}
                  width={60}
                  center
                  readOnly
                />
                <Input
                  aria-label="뒷각"
                  placeholder="뒷각"
                  value={Math.floor(Number(engraves[1].뒷각) / ratio) || ``}
                  width={60}
                  center
                  readOnly
                />
              </FlexView>
              <FlexView gap={4} items="center" row>
                <Text css={{ minWidth: `40px` }} semiBold>
                  청룡
                </Text>
                <Input
                  aria-label="앞각"
                  placeholder="앞각"
                  value={Math.floor(Number(engraves[2].앞각) / ratio) || ``}
                  width={60}
                  center
                  readOnly
                />
                <Input
                  aria-label="뒷각"
                  placeholder="뒷각"
                  value={Math.floor(Number(engraves[2].뒷각) / ratio) || ``}
                  width={60}
                  center
                  readOnly
                />
              </FlexView>
              <FlexView gap={4} items="center" row>
                <Text css={{ minWidth: `40px` }} semiBold>
                  현무
                </Text>
                <Input
                  aria-label="앞각"
                  placeholder="앞각"
                  value={Math.floor(Number(engraves[3].앞각) / ratio) || ``}
                  width={60}
                  center
                  readOnly
                />
                <Input
                  aria-label="뒷각"
                  placeholder="뒷각"
                  value={Math.floor(Number(engraves[3].뒷각) / ratio) || ``}
                  width={60}
                  center
                  readOnly
                />
              </FlexView>
              <FlexView gap={4} items="center" row>
                <Text css={{ minWidth: `40px` }} semiBold>
                  황룡
                </Text>
                <Input
                  aria-label="앞각"
                  placeholder="앞각"
                  value={Math.floor(Number(engraves[4].앞각) / ratio) || ``}
                  width={60}
                  center
                  readOnly
                />
                <Input
                  aria-label="뒷각"
                  placeholder="뒷각"
                  value={Math.floor(Number(engraves[4].앞각) / ratio) || ``}
                  width={60}
                  center
                  readOnly
                />
              </FlexView>
              <Text css={{ marginTop: `10px` }} center semiBold>
                합계: {Math.floor(Number(total) / ratio)}
              </Text>
            </FlexView>
          </FlexView>
        </FlexView>
      </FlexView>

      <Text color={Colors.red} small={isMobile}>
        * 능력치 종류를 선택해야 수치를 입력할 수 있습니다.
      </Text>
    </FlexView>
  );
}
