import { useState } from 'react';

import { Button, FlexView, Image, Text } from '@components/common';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/index';

const NAMES = [
  `마법학교`,
  `은하요술사`,
  `풀잎`,
  `악마사냥꾼`,
  `은빛미호`,
  `시간여행자`,
  `월야산신`,
  `인형술사`,
  `잔혹천사`,
  `천상의심포니`,
  `달빛마중`,
  `생명의바다`,
  `오방지신`,
];

const PARTS = [
  [],
  [
    `마법학교소녀헤어`,
    `마법학교소년헤어`,
    `마법학교지팡이`,
    `마법학교소녀의상`,
    `마법학교소년의상`,
    `마법학교가방`,
    `마법학교마법책`,
    `마법학교모자`,
  ],
  [
    `은하수요술사모자`,
    `은하수요술봉`,
    `은하수요술사의상(남)`,
    `은하수요술사의상(여)`,
    `봄날벚꽃참새루루`,
    `복슬복슬토끼베베`,
    `은하수별자국`,
    `럭키별장식`,
  ],
  [
    `풀잎소녀헤어`,
    `풀잎소년헤어`,
    `풀잎민들레`,
    `풀잎바늘콕`,
    `풀잎소녀의상`,
    `풀잎소년의상`,
    `풀잎꽃장식`,
    `풀잎행운햄찌`,
    `풀잎민들레모자`,
    `풀잎민들레머리띠`,
  ],
  [
    `악마사냥꾼의뿔`,
    `악마사냥꾼의낫`,
    `악마사냥꾼의상(남)`,
    `악마사냥꾼의상(여)`,
    `심판의모래시계`,
    `복수자의망토`,
    `퇴마의기운`,
    `악마사냥꾼의증표`,
  ],
  [
    `은빛미호의귀`,
    `은빛미호의영혼`,
    `은빛미호의상(남)`,
    `은빛미호의상(여)`,
    `은빛미호`,
    `은빛미호의긴꼬리`,
    `은빛미호의짧은꼬리`,
    `은빛미호의기운`,
    `은빛미호의장식`,
  ],
  [
    `시간여행자머리장식(남)`,
    `시간여행자머리장식(여)`,
    `시간여행자차원봉`,
    `시간여행자의상(남)`,
    `시간여행자의상(여)`,
    `시간여행자드론`,
    `시간여행자망토(남)`,
    `시간여행자망토(여)`,
    `시간여행자비행선`,
  ],
  [
    `월야산신갓`,
    `월야산신외투`,
    `월야산신부채(양)`,
    `월야산신부채(음)`,
    `월야산신의상(남)`,
    `월야산신의상(여)`,
    `월야산신도깨비불`,
    `월야산신밤호랑이`,
  ],
  [
    `인형술사다이아모자`,
    `인형술사하트모자`,
    `인형술사요술가위`,
    `인형술사의상(남)`,
    `인형술사의상(여)`,
    `인형술사토끼인형`,
    `인형술사포근꼬리`,
    `인형술사하양꼬리`,
    `인형술사요술토끼`,
  ],
  [
    `잔혹천사가면`,
    `잔혹천사리본`,
    `잔혹천사장미활`,
    `잔혹천사의상(남)`,
    `잔혹천사의상(여)`,
    `잔혹천사뼈날개`,
    `잔혹천사스컬하트`,
    `잔혹천사하트안대`,
  ],
  [
    `천상의심포니모자`,
    `천상의심포니지휘봉`,
    `천상의심포니의상(남)`,
    `천상의심포니의상(여)`,
    `천상의심포니관현악쥐`,
    `천상의심포니선율`,
    `천상의심포니타악쥐`,
  ],
  [
    `달빛마중머리띠`,
    `달빛마중장우산`,
    `달빛마중청사초롱`,
    `달빛마중수묵도포`,
    `달빛마중수묵매화`,
    `달빛마중토끼가방`,
    `달빛마중산군`,
    `달빛마중깡충귀`,
  ],
  [
    `생명의바다고래물결`,
    `생명의바망원경`,
    `생명의바다왕관`,
    `생명의바다의상(남)`,
    `생명의바다의상(여)`,
    `생명의바다작은친구`,
    `생명의바다햇살파도`,
  ],
  [
    `오방지신백호첨익`,
    `오방지신오행봉잠`,
    `오방지신의상(남)`,
    `오방지신의상(여)`,
    `오방지신주삭비상`,
    `오방지신청룡강림`,
    `오방지신현무가호`,
  ],
];

export default function LuxuryList() {
  const isMobile = useResponsive(960);
  const [series, setSeries] = useState(0);
  const basicURL = `https://asset.dotols.com/image/luxury/`;

  const selectSeries = (id: number) => {
    setSeries(id);
  };

  return (
    <FlexView css={{ maxWidth: `720px` }} gap={8}>
      <FlexView
        border="lightgray"
        css={{ padding: `10px` }}
        gap={16}
        radius={4}
        row
        wrap
      >
        {NAMES.map((name, index) => (
          <Button
            key={name}
            aria-label="기수"
            onClick={() => selectSeries(index + 1)}
          >
            <Text
              key={name}
              color={NAMES[series - 1] === name ? Colors.red : Colors.black}
              size={isMobile ? `small` : `normal`}
              weight={NAMES[series - 1] === name ? `bold` : `regular`}
            >
              {index + 1}기 {name}
            </Text>
          </Button>
        ))}
      </FlexView>

      {series !== 0 && (
        <>
          <FlexView radius={4} center>
            <Image
              css={{
                maxWidth: isMobile ? `350px` : `fit-content`,
                borderRadius: `4px`,
              }}
              src={`${basicURL}${series}.png`}
            />
          </FlexView>

          <FlexView
            border="lightgray"
            css={{ padding: `10px` }}
            gap={8}
            radius={4}
            row
            wrap
          >
            {PARTS[series].map(part => (
              <Text key={part} size={isMobile ? `small` : `normal`}>
                {part}
              </Text>
            ))}
          </FlexView>

          <Text color={Colors.red} size={isMobile ? `small` : `normal`}>
            ● 6부위 전용 이펙트가 적용된 이미지입니다.
          </Text>
        </>
      )}
    </FlexView>
  );
}
