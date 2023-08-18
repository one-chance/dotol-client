export const GOLD_POWER: { [key: string]: { power: number; max: number } } = {
  '황금돋보기 능력치': { power: 0, max: 0 },
  '방어도무시/방어도(%)': { power: 1, max: 5 },
  '체력/마력(%)': { power: 1, max: 5 },
  '힘/민/지(%)': { power: 0.715, max: 7 },
  '명중회피(%)': { power: 0.556, max: 9 },
  '방관/마치/공증/마증(%)': { power: 0.417, max: 12 },
  '타흡/마흡/피흡(%)': { power: 0.417, max: 12 },
  '시향/회향/직타(%)': { power: 0.417, max: 12 },
  '명중률/타격치/재생력(%)': { power: 0.417, max: 12 },
};

export const GOLD_POWER2: { [key: string]: { power: number; max: number } } = {
  '콘텐츠 능력치': { power: 0, max: 0 },
  방어도: { power: 100, max: 6 },
  방어도무시: { power: 100, max: 3 },
  명중회피: { power: 75, max: 4 },
  마법수준향상: { power: 60, max: 2 },
  명중률: { power: 37.5, max: 4 },
  타격치: { power: 37.5, max: 3 },
  '힘/민첩/지력': { power: 15, max: 7 },
  방어구관통: { power: 3.75, max: 36 },
  '공증/마증/마치': { power: 3.75, max: 27 },
  '타흡/마흡/피흡': { power: 3.75, max: 27 },
  '직타/시향/회향': { power: 3.75, max: 27 },
  재생력: { power: 0.375, max: 300 },
  '체력/마력': { power: 0.003, max: 30000 },
};

export const PET_EQUIP_POWER: { [key: string]: number } = {
  '무기 장비': 0,
  '무기 1성': 100,
  '무기 2성': 200,
  '무기 3성': 300,
  '무기 4성': 400,
  '무기 5성': 500,
  '무기 6성': 600,
  '무기 7성': 700,
  '투구 장비': 0,
  '투구 1성': 100,
  '투구 2성': 200,
  '투구 3성': 300,
  '투구 4성': 400,
  '투구 5성': 500,
  '투구 6성': 600,
  '투구 7성': 700,
  '갑옷 장비': 0,
  '갑옷 1성': 100,
  '갑옷 2성': 200,
  '갑옷 3성': 300,
  '갑옷 4성': 400,
  '갑옷 5성': 500,
  '갑옷 6성': 600,
  '갑옷 7성': 700,
  '성물 장비': 0,
  성물: 200,
  "성물'진": 300,
  '목걸이 장비': 0,
  작생목: 100,
  생목: 200,
  커생목: 300,
  극락목: 400,
  '신물 장비': 0,
  "신물'1성": 100,
  "신물'2성": 200,
  "신물'3성": 300,
  "신물'4성": 400,
  '문양 장비': 0,
  문양: 200,
  "문양'진": 400,
  '분신 장비': 0,
  '용사/공주': 150,
  '미라/해골神': 150,
  환수神: 300,
};

export const ANTIQUITY_POWER: { [key: string]: number } = {
  명경유물: 0,
  명경1성: 796,
  명경2성: 1196,
  명경3성: 1596,
  명경4성: 1996,
  명경5성: 2396,
  명경6성: 2596,
  '명겅6성+1': 2796,
  명경7성: 2996,
  '명경7성+1': 3196,
  명경8성: 3396,
  '명경8성+1': 3596,
  '명경8성+2': 3796,
  명경9성: 3996,
  '명경9성+1': 4196,
  '명경9성+2': 4396,
  무기유물: 0,
  무기1성: 300,
  무기2성: 350,
  무기3성: 400,
  무기4성: 450,
  무기5성: 500,
  무기6성: 550,
  '무기6성+1': 600,
  무기7성: 650,
  '무기7성+1': 700,
  무기8성: 750,
  '무기8성+1': 800,
  '무기8성+2': 850,
  무기9성: 900,
  '무기9성+1': 950,
  '무기9성+2': 1000,
  투구유물: 0,
  투구1성: 300,
  투구2성: 350,
  투구3성: 400,
  투구4성: 450,
  투구5성: 500,
  투구6성: 550,
  '투구6성+1': 600,
  투구7성: 650,
  '투구7성+1': 700,
  투구8성: 750,
  '투구8성+1': 800,
  '투구8성+2': 850,
  투구9성: 900,
  '투구9성+1': 950,
  '투구9성+2': 1000,
  갑옷유물: 0,
  갑옷1성: 300,
  갑옷2성: 350,
  갑옷3성: 400,
  갑옷4성: 450,
  갑옷5성: 500,
  갑옷6성: 550,
  '갑옷6성+1': 600,
  갑옷7성: 650,
  '갑옷7성+1': 700,
  갑옷8성: 750,
  '갑옷8성+1': 800,
  '갑옷8성+2': 850,
  갑옷9성: 900,
  '갑옷9성+1': 950,
  '갑옷9성+2': 1000,
  신성한1성: 600,
  신성한2성: 650,
  신성한3성: 700,
  신성한4성: 750,
  신성한5성: 800,
  신성한6성: 850,
  신성한7성: 900,
  신성한8성: 950,
  신성한9성: 1000,
  장갑유물: 0,
  신수장갑1성: 100,
  신수장갑2성: 200,
  신수장갑3성: 300,
  신수장갑4성: 400,
  신수장갑5성: 500,
  보조유물: 0,
  신수보주1성: 200,
  신수보주2성: 400,
  신수보주3성: 600,
};

export const SKILL_POWER: { [key: string]: { power: number; max: string } } = {
  // 전사
  '호기방출 쿨타임[-]': { power: 1, max: `20.0` },
  '호기방출 피해량[+]': { power: 0.667, max: `30.0` },
  '초혼진무 쿨타임[-]': { power: 5, max: `4.0` },
  '초혼진무 PvP 쿨타임[-]': { power: 2.5, max: `8.0` },
  '폭풍결장 쿨타임[-]': { power: 2, max: `10.0` },
  '광폭 광기소모도[-]': { power: 0.834, max: `24.0` },
  '광폭 쿨타임[-]': { power: 2, max: `10.0` },
  '광폭 피해증가율': { power: 1, max: `200` },
  '백호령 지속시간[+]': { power: 4, max: `5.0` },
  '백호령 피해증가율[+]': { power: 4, max: `50` },
  '운상미보 이속증가율[+]': { power: 20, max: `10` },
  '어검화 피해량[+]': { power: 0.667, max: `30.0` },
  '기력방패 마력소모도[-]': { power: 20, max: `10` },
  '기력방패 방어 증가[+]': { power: 40, max: `5` },
  '비검술 쿨타임[-]': { power: 4, max: `5.0` },
  '비검술 피해량[+]': { power: 0.667, max: `30.0` },
  '극백호참 쿨타임[-]': { power: 4, max: `5.0` },
  '극백호참 피해량[+]': { power: 0.667, max: `30.0` },
  '노호검황 쿨타임[-]': { power: 4, max: `5.0` },
  '노호검황 피해량[+]': { power: 0.667, max: `30.0` },
  '노호검황 혼미지속시간[+]': { power: 5, max: `4.0` },
  '노호검황 혼미방향상실률[+]': { power: 13.334, max: `15` },
  '혈겁만파 쿨타임[-]': { power: 0.371, max: `54.0` },
  '혈겁만파 피해량[+]': { power: 0.667, max: `30.0` },
  '천둥낙뢰 쿨타임[-]': { power: 0.37, max: `54.0` },
  '천둥낙뢰 피해량[+]': { power: 0.667, max: `30.0` },
  '섬광일섬 쿨타임[-]': { power: 0.625, max: `32.0` },
  '섬광일섬 피해량[+]': { power: 0.667, max: `30.0` },
  '현무섬멸 쿨타임[-]': { power: 4, max: `5.0` },
  '현무섬멸 피해량[+]': { power: 0.667, max: `30.0` },
  "발도술'시공참 피해량[+]": { power: 0.667, max: `30.0` },
  '명천검강 피해량[+]': { power: 0.667, max: `30.0` },
  '건곤대나이 피해량[+]': { power: 0.667, max: `30.0` },
  '동귀어진 체력소모도[-]': { power: 2, max: `10.0` },
  '동귀어진 피해량[+]': { power: 0.667, max: `30.0` },
  '백호참 체력소모도[-]': { power: 2, max: `10.0` },
  '백호참 피해량[+]': { power: 0.667, max: `30.0` },
  '회선돌격 PvP 쿨타임[-]': { power: 4, max: `5.0` },
  '회선돌격 피해량[+]': { power: 0.667, max: `30.0` },
  '황룡승천 쿨타임[-]': { power: 0.37, max: `54.0` },
  '황룡승천 피해량[+]': { power: 0.667, max: `30.0` },
  '초혼비무 체력소모도[-]': { power: 2, max: `10.0` },
  '초혼비무 피해량[+]': { power: 0.667, max: `30.0` },
  '쇄혼비무 체력소모도[-]': { power: 2, max: `10.0` },
  '쇄혼비무 피해량[+]': { power: 0.667, max: `30.0` },
  "극'어검무 체력소모도[-]": { power: 2, max: `10.0` },
  "극'어검무 피해량[+]": { power: 0.667, max: `30.0` },
  '흑룡참파 체력소모도[-]': { power: 2, max: `10.0` },
  '흑룡참파 피해량[+]': { power: 0.667, max: `30.0` },
  '흑룡광참 체력소모도[-]': { power: 2, max: `10.0` },
  '흑룡광참 피해량[+]': { power: 0.667, max: `30.0` },
  '자혈갱생 회복량[+]': { power: 0.001, max: `200000` },
  '자혈갱생 쿨타임[-]': { power: 0.667, max: `30.0` },
  '석갑 쿨타임[-]': { power: 4, max: `5.0` },
  '석갑 지속시간[+]': { power: 4, max: `5.0` },
  '살신보은 피해감소율[-]': { power: 2, max: `100` },
  '살신성인 쿨타임[-]': { power: 1, max: `20.0` },
  '살신성인 피해감소율[-]': { power: 2, max: `100` },
  '의지의외침 쿨타임[-]': { power: 2, max: `10.0` },
  '갈증 지속시간[+]': { power: 4, max: `5.0` },
  '집중 지속시간[+]': { power: 4, max: `5.0` },
  '구원 PvP 쿨타임[-]': { power: 0.371, max: `54.0` },
  '호신방벽 PvP 쿨타임[-]': { power: 2, max: `10.0` },
  '호신방벽 지속시간[+]': { power: 5, max: `4.0` },
  '타척보 PvP 쿨타임[-]': { power: 6.667, max: `3.0` },
  '타척보 은신제한시간[+]': { power: 50, max: `4` },
  '육감주망 은신발견률증가[+]': { power: 2, max: `10.0` },
  '육감주망 은신제한시간[+]': { power: 50, max: `4` },
  '유인 지속시간[+]': { power: 4, max: `5.0` },
  '도발 PvP 쿨타임[-]': { power: 3.125, max: `64.0` },
  '도발 지속시간[+]': { power: 2, max: `100` },
  '호통 피흡감소[+]': { power: 2, max: `100` },
  '호통 피흡증가[+]': { power: 2, max: `100` },
  '반격 쿨타임[-]': { power: 0.91, max: `22.0` },
  '반격 지속시간[+]': { power: 2, max: `10.0` },
  '반격 피해량[+]': { power: 0.667, max: `30.0` },
  '무장해제 PVP 쿨타임[-]': { power: 4, max: `5.0` },
  '무장해제 지속시간[+]': { power: 4, max: `5.0` },
  '사형선고 PvP 쿨타임[-]': { power: 2, max: `10.0` },
  '검격봉금 PvP 쿨타임[-]': { power: 4, max: `5.0` },
  '검격봉금 지속시간[+]': { power: 4, max: `5.0` },

  // 도적
  '무영보법 명중회피[+]': { power: 13.334, max: `15` },
  '무영보법 측원피해감소율[+]': { power: 1.334, max: `150` },
  '무영보법 측원고정피해감소[+]': { power: 0.001, max: `200000` },
  '투명 피해증가율[+]': { power: 4, max: `50` },
  '전혈 지속시간[+]': { power: 4, max: `5.0` },
  '전혈 전환율[+]': { power: 0.4, max: `500` },
  "전혈'첨 지속시간[+]": { power: 4, max: `5.0` },
  "전혈'첨 전환율[+]": { power: 0.4, max: `500` },
  '은형연막탄 직타저항[+]': { power: 2, max: `100` },
  '은형연막탄 피해흡수[+]': { power: 2, max: `100` },
  '은형연막탄 쿨타임[-]': { power: 2, max: `10.0` },
  '묵혈광참 피해량 감소[-]': { power: 2, max: `100` },
  '묵혈광참 피해량[+]': { power: 0.667, max: `30.0` },
  '묵혈광참 방어 감소[+]': { power: 28.572, max: `7` },
  '파천검무 피해량[+]': { power: 0.667, max: `30.0` },
  '파천검무 쿨타임[-]': { power: 4, max: `5.0` },
  '파천검무참 쿨타임[-]': { power: 4, max: `5.0` },
  '파천검무참 피해량[+]': { power: 0.667, max: `30.0` },
  '분홍경천 쿨타임[-]': { power: 0.625, max: `32.0` },
  '분홍경천 피해량[+]': { power: 0.667, max: `30.0` },
  '화무십일홍 쿨타임[-]': { power: 0.371, max: `54.0` },
  '화무십일홍 피해량[+]': { power: 0.667, max: `30.0` },
  '죽무난도 쿨타임[-]': { power: 0.371, max: `54.0` },
  '죽무난도 피해량[+]': { power: 0.667, max: `30.0` },
  '난도질 피해량[+]': { power: 0.667, max: `30.0` },
  '난도질 쿨타임[-]': { power: 4, max: `5.0` },
  '연격 쿨타임[-]': { power: 0.715, max: `28.0` },
  '연격 피해량[+]': { power: 0.667, max: `30.0` },
  '무영검 피해량[+]': { power: 0.667, max: `30.0` },
  '무영검 방어 감소시간[+]': { power: 13.334, max: `1.5` },
  '무영검 방어 감소[+]': { power: 20, max: `10` },
  '은형파천무 피해량[+]': { power: 0.667, max: `30.0` },
  '은형파천무 쿨타임[-]': { power: 5, max: `4.0` },
  '필살검무 피해량[+]': { power: 0.668, max: `30.0` },
  '백호검무 체력소모도[-]': { power: 2, max: `10.0` },
  '백호검무 피해량[+]': { power: 0.668, max: `30.0` },
  '멸아검무 체력소모도[-]': { power: 2, max: `10.0` },
  '멸아검무 피해량[+]': { power: 0.668, max: `30.0` },
  '혈풍도참 체력소모도[-]': { power: 2, max: `10.0` },
  '혈풍도참 피해량[+]': { power: 0.668, max: `30.0` },
  '은형참절도 피해량[+]': { power: 0.668, max: `30.0` },
  '은형참절도 피격횟수[+]': { power: 25, max: `8` },
  '암살 침묵시간[+]': { power: 40, max: `0.5` },
  '암살 피해량[+]': { power: 0.668, max: `30.0` },
  '맹독표창 쿨타임[-]': { power: 2, max: `10.0` },
  '맹독표창 피해량[+]': { power: 0.668, max: `30.0` },
  '맹독표창 방어 감소시간[+]': { power: 13.334, max: `1.5` },
  '맹독표창 방어 감소[+]': { power: 28.572, max: `7` },
  '무형검 피해량[+]': { power: 0.668, max: `30.0` },
  '무형검 방어 감소시간[+]': { power: 13.334, max: `1.5` },
  '무형검 방어 감소[+]': { power: 20, max: `10` },
  '멸화의검 체력소모도[-]': { power: 2, max: `10.0` },
  '멸화의검 피해량[+]': { power: 0.668, max: `30.0` },
  '환혈 지속시간[+]': { power: 4, max: `5.0` },
  '환혈 회복율[+]': { power: 28.572, max: `7` },
  '분신 지속시간[+]': { power: 6.667, max: `3.0` },
  '지옥무영 쿨타임[-]': { power: 2, max: `10.0` },
  '생환대법 쿨타임[-]': { power: 2, max: `10.0` },
  '생환대법 부활회복량[+]': { power: 1.334, max: `150` },
  '살신보은 피해감소율': { power: 2, max: `100` },
  '흡성대법 PvP 쿨타임[-]': { power: 4, max: `5.0` },
  '혈패파천도 피해량[+]': { power: 0.668, max: `30.0` },
  '수리검투척 피해량[+]': { power: 0.668, max: `30.0` },
  '그림자표창 피해량[+]': { power: 0.668, max: `30.0` },
  '술법가르기 쿨타임[-]': { power: 4, max: `5.0` },
  '술법가르기 피해량[+]': { power: 0.667, max: `30.0` },
  '얼음장막 쿨타임[-]': { power: 2, max: `10.0` },
  '얼음장막 이속감소율[-]': { power: 6.667, max: `30` },
  '참수 PvP 쿨타임[-]': { power: 4, max: `5.0` },
  '참수 피해량[+]': { power: 0.667, max: `30.0` },
  '기술봉인 쿨타임[-]': { power: 0.667, max: `30.0` },
  '기술봉인 지속시간[+]': { power: 6.667, max: `3.0` },
  '부동력 방어 증가[+]': { power: 20, max: `10` },
  '묵혈파안도 피해량[+]': { power: 0.667, max: `30.0` },
  '묵혈파안도 체력소모도[-]': { power: 2, max: `10.0` },
  '묵혈독무 체력소모도[-]': { power: 2, max: `10.0` },
  '묵혈독무 폭발피해량[+]': { power: 0.667, max: `30.0` },

  // 주술사
  '마력집중 쿨타임[-]': { power: 0.91, max: `22.0` },
  '마력집중 변환량[+]': { power: 0.00134, max: `150000` },
  '지옥연화 피해증가율[+]': { power: 0.667, max: `300` },
  '염화강체 쿨타임[-]': { power: 0.8, max: `25.0` },
  '쾌속시전 시전시간 감소율[-]': { power: 1.334, max: `150` },
  '즉발시전 쿨타임[-]': { power: 4, max: `5.0` },
  '즉발시전 쿨타임 반영율[+]': { power: 1.334, max: `150` },
  '파무쾌보 이속증가율[+]': { power: 20, max: `10` },
  '보호 피해감소율[+]': { power: 20, max: `10` },
  '무장 방어도[+]': { power: 20, max: `10` },
  '생사부 쿨타임[-]': { power: 0.371, max: `54.0` },
  '생사부 지속시간[+]': { power: 6.667, max: `3.0` },
  '생사부 추가피해량[+]': { power: 6.667, max: `30` },
  '폭류유성 쿨타임[-]': { power: 0.445, max: `45.0` },
  '폭류유성 피해량[+]': { power: 0.667, max: `30.0` },
  '폭류유빙 쿨타임[-]': { power: 0.8, max: `25.0` },
  '폭류유빙 피해량[+]': { power: 0.667, max: `30.0` },
  '염화지옥 피해량[+]': { power: 0.667, max: `30.0` },
  '지옥홍염 마력소모도[-]': { power: 2, max: `10.0` },
  '지옥홍염 피해량[+]': { power: 0.667, max: `30.0` },
  '천뢰마옥구 피해량[+]': { power: 0.667, max: `30.0` },
  '뇌격구 지속시간[+]': { power: 5, max: `4.0` },
  '뇌격구 피해량[+]': { power: 0.667, max: `30.0` },
  '사슬벼락 마력소모도[-]': { power: 2, max: `10.0` },
  '사슬벼락 피해량[+]': { power: 0.667, max: `30.0` },
  '십자소상파환겁 피해량[+]': { power: 0.667, max: `30.0` },
  '십자소상파환겁 쿨타임[-]': { power: 6.667, max: `3.0` },
  '십자소상파환겁 마력소모도[-]': { power: 2, max: `10.0` },
  '용의잔상 쿨타임[-]': { power: 0.589, max: `34.0` },
  '용의잔상 마력소모도[-]': { power: 2, max: `10.0` },
  '용의잔상 피해량[+]': { power: 0.667, max: `30.0` },
  '지폭지술 쿨타임[-]': { power: 0.445, max: `45.0` },
  '지폭지술 피해량[+]': { power: 0.667, max: `30.0` },
  '화염주 피해량[+]': { power: 0.667, max: `30.0` },
  "화염주'첨 피해량[+]": { power: 0.667, max: `30.0` },
  '지옥인화 쿨타임[-]': { power: 13.334, max: `1.5` },
  '지옥인화 마력소모도[-]': { power: 2, max: `10.0` },
  '지옥인화 피해량[+]': { power: 0.667, max: `30.0` },
  '삼매인화 쿨타임[-]': { power: 6.667, max: `3.0` },
  '삼매인화 마력소모도[-]': { power: 2, max: `10.0` },
  '삼매인화 피해량[+]': { power: 0.667, max: `30.0` },
  '노도성황 쿨타임[-]': { power: 4, max: `5.0` },
  '노도성황 지속시간[+]': { power: 4, max: `5.0` },
  '서리한파 피해량[+]': { power: 0.667, max: `30.0` },
  '서리한파 마비시간[+]': { power: 6.667, max: `3.0` },
  '화염지대 피해량[+]': { power: 0.667, max: `30.0` },
  '회선폭풍 마력소모도[-]': { power: 2, max: `10.0` },
  '회선폭풍 피해량[+]': { power: 0.667, max: `30.0` },
  '누리의기원 회복량[+]': { power: 0.667, max: `30.0` },
  '호신뇌전 쿨타임[-]': { power: 4, max: `5.0` },
  '호신뇌전 지속시간[+]': { power: 4, max: `5.0` },
  '공력증강 시전실패율[-]': { power: 2, max: `10.0` },
  '명상 초당 회복율[+]': { power: 13.334, max: `15` },
  '만공 쿨타임[-]': { power: 4, max: `5.0` },
  '호체주술 저주방어수준[+]': { power: 12.5, max: `16` },
  '호체주술 저주방어횟수[+]': { power: 20, max: `10` },
  '마력방패 피해감소율[-]': { power: 4, max: `50` },
  '석화 쿨타임[-]': { power: 4, max: `5.0` },
  '석화 지속시간[+]': { power: 4, max: `5.0` },
  '환기 쿨타임[-]': { power: 1.25, max: `16.0` },
  '환기 회복량[+]': { power: 0.004, max: `50000` },
  '이형환위 쿨타임[-]': { power: 5, max: `4.0` },
  '저주 방어 감소[+]': { power: 20, max: `10` },
  "혼마'첨 방어 감소[+]": { power: 28.572, max: `7` },
  '마기지체 방어 감소[+]': { power: 20, max: `10` },
  '침잠 피해량 감소[-]': { power: 2, max: `100` },
  '시전지연 시전시간 증가율[+]': { power: 1.334, max: `150` },
  '이어침각 이속감소율[-]': { power: 20, max: `10` },
  '마성제마술 쿨타임[-]': { power: 6.667, max: `3.0` },

  // 도사
  '신령지익 쿨타임[-]': { power: 2, max: `10.0` },
  '파력무참 쿨타임[-]': { power: 2, max: `10.0` },
  '무신의가호 공격력증가[+]': { power: 4, max: `50` },
  '무신의가호 마력증강[+]': { power: 4, max: `50` },
  '무신의가호 마법치명[+]': { power: 5.556, max: `36` },
  '무신의가호 방어구관통[+]': { power: 5.556, max: `36` },
  '투신의가호 마력흡수[+]': { power: 5.556, max: `36` },
  '투신의가호 명중률[+]': { power: 40, max: `5` },
  '투신의가호 시전향상[+]': { power: 3.334, max: `60` },
  '투신의가호 타격흡수[+]': { power: 5.556, max: `36` },
  '용신의가호 방어[+]': { power: 13.334, max: `15` },
  '용신이가호 피해감소율[+]': { power: 33.334, max: `6` },
  '용신의가호 직타저항[+]': { power: 3.334, max: `60` },
  '용신의가호 피해흡수[+]': { power: 3.334, max: `60` },
  "백호의희원'첨 마력소모도[-]": { power: 2, max: `10.0` },
  "백호의희원'첨 회복량[+]": { power: 0.667, max: `30.0` },
  '선기현원 절반 이하 회복횟수[+]': { power: 40, max: `5` },
  '선인의영역 회복량[+]': { power: 0.667, max: `30.0` },
  '선인의영역 쿨타임[-]': { power: 4, max: `5.0` },
  "천신의기원'파 회복량[+]": { power: 0.667, max: `30.0` },
  '천신팔괘진 지속시간[+]': { power: 4, max: `5.0` },
  '천신팔괘진 회복량[+]': { power: 0.667, max: `30.0` },
  '뇌전운무 피해량[+]': { power: 0.667, max: `30.0` },
  '뇌신의보호 쿨타임[-]': { power: 0.625, max: `32.0` },
  '신성광폭 피해증가율[+]': { power: 2, max: `100` },
  '천광방패진 쿨타임[-]': { power: 2, max: `10.0` },
  '결박 PvP 쿨타임[-]': { power: 1.334, max: `15.0` },
  '누리의기원 체력 회복량[+]': { power: 0.667, max: `30.0` },
  '누리의기원 마력 회복량[+]': { power: 0.667, max: `30.0` },
  '백호의희원 마력소모도[-]': { power: 2, max: `10.0` },
  '백호의희원 회복량[+]': { power: 0.667, max: `30.0` },
  '소혼미호 피해량[+]': { power: 0.667, max: `30.0` },
  '소혼해골 피해량[+]': { power: 0.667, max: `30.0` },
  '지진 피해량[+]': { power: 0.667, max: `30.0` },
  '천광폭기 피해량[+]': { power: 0.667, max: `30.0` },
  '천광폭기 공격횟수[+]': { power: 40, max: `5` },
  '불괴신공 쿨타임[-]': { power: 1.25, max: `16.0` },
  '불괴신곡 지속시간[+]': { power: 6.667, max: `3.0` },
  '불괴신공 시전실패율': { power: 2, max: `10.0` },
  '흡체언령술 쿨타임[-]': { power: 2, max: `10.0` },
  '흡체언령술 피격횟수[+]': { power: 20, max: `10` },
  '섬광 초과회복율(만분율)[+]': { power: 0.4, max: `500` },
  '섬광 피해량[+]': { power: 0.667, max: `30.0` },
  '반탄공 쿨타임[-]': { power: 4, max: `5.0` },
  '반탄공 반사율[+]': { power: 13.334, max: `15` },
  '반탄공 피해량[+]': { power: 0.667, max: `30.0` },
  '도약 쿨타임[-]': { power: 6.667, max: `3.0` },
  '도약 PvP 쿨타임[-]': { power: 2, max: `10.0` },
  '혼령구슬 쿨타임[-]': { power: 0.371, max: `54.0` },
  '귀염추혼소 쿨타임[-]': { power: 4, max: `5.0` },
  '귀염추혼소 마력 소모 배율[-]': { power: 66.667, max: `3` },
  '작열 시전시간 증가율[+]': { power: 1.334, max: `150` },
  '작열 피해량 감소[-]': { power: 2, max: `100` },
  '마력연소 마력 대비 피해량[+]': { power: 0.067, max: `3000` },
  '천마흑사진 피해량 감소[-]': { power: 2, max: `100` },
  '돌의장벽 쿨타임[-]': { power: 4, max: `5.0` },
  '돌의장벽 지속시간[+]': { power: 4, max: `5.0` },
  '돌의장벽 시전실패율[-]': { power: 2, max: `10.0` },
  '신성제마술 쿨타임[-]': { power: 0.667, max: `3.0` },

  // 궁사
  '신궁합일 무기파괴력 증가율[+]': { power: 6.667, max: `30` },
  '신궁합일 명중률[+]': { power: 13.334, max: `15` },
  '사격준비 공격력증가[+]': { power: 2, max: `100` },
  '사격준비 필살률[+]': { power: 13.334, max: `15` },
  '투혈 쿨타임[-]': { power: 1, max: `20.0` },
  '흑영의야수 피해량[+]': { power: 0.667, max: `30.0` },
  '집중공격 쿨타임[-]': { power: 4, max: `5.0` },
  '집중공격 공격횟수[+]': { power: 20, max: `10` },
  '집중공격 방어도무시[+]': { power: 28.572, max: `7` },
  '집중공격 공격력증가[+]': { power: 4, max: `50` },
  '집중공격 마법치명타[+]': { power: 4, max: `50` },
  '집중공격 명중률[+]': { power: 16.667, max: `12` },
  '작염시 쿨타임[-]': { power: 4, max: `5.0` },
  '화염장벽 지속시간[+]': { power: 6.667, max: `3.0` },
  '화염장벽 피해량[+]': { power: 0.667, max: `30.0` },
  '폭풍화우 쿨타임[-]': { power: 0.625, max: `32.0` },
  '폭풍화우 피해량[+]': { power: 0.667, max: `30.0` },
  '다발화살 체력소모도[-]': { power: 2, max: `10.0` },
  '다발화살 피해량[+]': { power: 0.667, max: `30.0` },
  '폭마일섬 체력소모도[-]': { power: 2, max: `10.0` },
  '폭마일섬 피해량[+]': { power: 6.667, max: `3.0` },
  '염화마탄시 쿨타임[-]': { power: 0.426, max: `47.0` },
  '염화마탄시 피해량[+]': { power: 0.667, max: `30.0` },
  '이기뇌전시 경직시간[+]': { power: 6.667, max: `3.0` },
  '이기뇌전시 피해량[+]': { power: 0.667, max: `30.0` },
  '깃털부름 PvP 쿨타임[-]': { power: 2.5, max: `8.0` },
  '깃털부름 마력소모도[-]': { power: 2, max: `10.0` },
  '미환탄시 피해량[+]': { power: 0.667, max: `30.0` },
  '가속화살 쿨타임[-]': { power: 20, max: `1.0` },
  '가속화살 피해량[+]': { power: 0.667, max: `30.0` },
  '선풍화우 쿨타임[-]': { power: 2, max: `10.0` },
  '선풍화우 피해량[+]': { power: 0.667, max: `30.0` },
  '풍마섬시 체력소모도[-]': { power: 2, max: `10.0` },
  '풍마섬시 피해량[+]': { power: 0.667, max: `30.0` },
  '천마류폭시 피해량[+]': { power: 0.667, max: `30.0` },
  '마염시 쿨타임[-]': { power: 20, max: `1.0` },
  '기운탐지 PvP 쿨타임[-]': { power: 4, max: `5.0` },
  '기운탐지 지속시간[+]': { power: 6.667, max: `3.0` },
  '폭발사격 체력소모도[-]': { power: 2, max: `10.0` },
  '폭발사격 피해량[+]': { power: 0.667, max: `30.0` },
  '독수리소환 반격율[+]': { power: 13.334, max: `15` },
  '독수리소환 수면시간[+]': { power: 6.667, max: `3.0` },
  '방책설치 쿨타임[-]': { power: 2, max: `10.0` },
  '아공간격리 쿨타임[-]': { power: 2, max: `10.0` },
  '아공간격리 지속시간[+]': { power: 4, max: `5.0` },
  '채난술 쿨타임[-]': { power: 13.334, max: `1.5` },
  '채난술 PvP 쿨타임[-]': { power: 6.667, max: `3.0` },
  '낙뢰충전 쿨타임[-]': { power: 0.625, max: `32.0` },
  '실명화살 명중률 감소[+]': { power: 16.667, max: `12` },
  '실명화살 피해량[+]': { power: 0.667, max: `30.0` },
  '시즉무성 PvP 쿨타임[-]': { power: 6.667, max: `3.0` },
  '시즉무성 침묵시간[+]': { power: 6.667, max: `3.0` },
  '냉기화살 PvP 쿨타임[-]': { power: 13.334, max: `1.5` },
  '냉기화살 수면시간[+]': { power: 6.667, max: `3.0` },
  '암전 PvP 쿨타임[-]': { power: 4, max: `5.0` },
  '암전 지속시간[+]': { power: 0.667, max: `3.0` },
  '마혼효시 공격력증가 감소[+]': { power: 2, max: `100` },
  '마혼효시 회복감소율[-]': { power: 2.5, max: `80` },
  '응축화살 혼미지속시간[+]': { power: 5, max: `4.0` },
  '응축화살 혼미방향살실률[+]': { power: 13.334, max: `15` },
  '응축화살 쿨타임[-]': { power: 13.334, max: `1.5` },
  '족쇄화살 속박시간[+]': { power: 6.667, max: `3.0` },
  '족쇄화살 피해량[+]': { power: 0.667, max: `30.0` },

  // 천인
  '신성해제 쿨타임[-]': { power: 2, max: `10.0` },
  '찰나 추가피해증가율[+]': { power: 4, max: `50` },
  '정기흡수 체력증가율[+]': { power: 1.334, max: `150` },
  '정기흡수 마법치명타[+]': { power: 4, max: `50` },
  '정기흡수 지속시간[+]': { power: 4, max: `5.0` },
  '정기흡수 무기파괴력 증가율[+]': { power: 6.667, max: `30` },
  '운무 PvP 쿨타임[-]': { power: 6.667, max: `3.0` },
  '운무 지속시간[+]': { power: 6.667, max: `3.0` },
  '하늘의눈 PvP 쿨타임[-]': { power: 6.667, max: `3.0` },
  '정기의호리병 쿨타임[-]': { power: 4, max: `5.0` },
  '정기의호리병 PvP 쿨타임[-]': { power: 4, max: `5.0` },
  '정기의호리병 천기 회복량[+]': { power: 2.667, max: `75` },
  '천금신권 고정 피해량[+]': { power: 0.667, max: `30.0` },
  '천금신권 PVP 쿨타임[-]': { power: 6.667, max: `3.0` },
  '천금신권 체력소모도[-]': { power: 2, max: `10.0` },
  '천금신권 기절 지속시간[+]': { power: 13.334, max: `1.5` },
  '천금신권 피해량[+]': { power: 0.667, max: `30.0` },
  '돌개바람 속박 지속시간[+]': { power: 13.334, max: `1.5` },
  '돌개바람 피해량[+]': { power: 0.667, max: `30.0` },
  '돌개바람 PvP 쿨타임[-]': { power: 6.667, max: `3.0` },
  '용오름 쿨타임[-]': { power: 0.455, max: `44.0` },
  '용오름 체력소모도[-]': { power: 2, max: `10.0` },
  '용오름 마력소모도[-]': { power: 2, max: `10.0` },
  '용오름 피해량[+]': { power: 0.667, max: `30.0` },
  '제운종 이속증가율[+]': { power: 20, max: `10` },
  '환운 피해량[+]': { power: 0.667, max: `30.0` },
  '전지전능 쿨타임[-]': { power: 6.667, max: `3.0` },
  '전지전능 피해량[+]': { power: 0.667, max: `30.0` },
  '천금원환 체력소모도[-]': { power: 2, max: `10.0` },
  '천금원환 피해량[+]': { power: 0.667, max: `30.0` },
  '예리함 피해량[+]': { power: 0.667, max: `30.0` },
  '파열 체마소모도[-]': { power: 2, max: `10.0` },
  '파열 피해량[+]': { power: 0.667, max: `30.0` },
  '파열 공격력증가 감소[+]': { power: 2, max: `100` },
  '낙풍 체력소모도[-]': { power: 2, max: `10.0` },
  '낙풍 피해량[+]': { power: 0.667, max: `30.0` },
  '수호번개 피해량[+]': { power: 0.667, max: `30.0` },
  '빙글번쩍 피해흡수[+]': { power: 2, max: `100` },
  '빙글번쩍 쿨타임[-]': { power: 4, max: `5.0` },
  '빙글번쩍 PvP 쿨타임[-]': { power: 4, max: `5.0` },
  '빙글번쩍 지속시간[+]': { power: 6.667, max: `3.0` },
  '빙글번쩍 피해량[+]': { power: 0.667, max: `30.0` },
  '우레 쿨타임[-]': { power: 6.667, max: `3.0` },
  '우레 PvP 쿨타임[-]': { power: 6.667, max: `3.0` },
  '우레 체력소모도[-]': { power: 2, max: `10.0` },
  '우레 마력소모도[-]': { power: 2, max: `10.0` },
  '우레 피해량[+]': { power: 0.667, max: `30.0` },
  '천금사슬낫 체력소모도[-]': { power: 2, max: `10.0` },
  '천금사슬낫 피해량[+]': { power: 0.667, max: `30.0` },
  '하늘기도 쿨타임[-]': { power: 6.667, max: `3.0` },
  '하늘기도 지속시간[+]': { power: 6.667, max: `3.0` },
  '하늘기도 회복율[+]': { power: 13.334, max: `15` },
  '완전방어 PvP 쿨타임[-]': { power: 6.667, max: `3.0` },
  '완전방어 지속시간[+]': { power: 10, max: `2.0` },
  '묵운격 마비 지속시간[+]': { power: 10, max: `2.0` },
  '묵운격 침묵 지속시간[+]': { power: 10, max: `2.0` },
  '집중방어 마력 회복량[+]': { power: 0.667, max: `30.0` },
  '집중방어 쿨타임[-]': { power: 4, max: `5.0` },
  '집중방어 지속시간[+]': { power: 10, max: `2.0` },
  '집중방어 방어 증가': { power: 28.572, max: `7` },
  '집중방어 피해흡수': { power: 4, max: `50` },
  '집중방어 체력 회복량[+]': { power: 0.667, max: `30.0` },
  '빛의심판 쿨타임[-]': { power: 0.8, max: `25.0` },
  '빛의심판 체력소모도[-]': { power: 2, max: `10.0` },
  '빛의심판 마력소모도[-]': { power: 2, max: `10.0` },
  '빛의심판 피해량[+]': { power: 0.667, max: `30.0` },
  '순보 피해량[+]': { power: 0.667, max: `30.0` },
  '체력의징표 회복횟수': { power: 50, max: `4` },
  '마력의징표 회복횟수': { power: 50, max: `4` },
  '빛의감옥 PvP 쿨타임[-]': { power: 2, max: `10.0` },
  '천제의부름 쿨타임[-]': { power: 1.25, max: `16.0` },
  '백우 방어 감소[+]': { power: 28.572, max: `7` },
  '백우 회복량[+]': { power: 0.667, max: `30.0` },
  '백우 쿨타임[-]': { power: 0.667, max: `30.0` },
  '백우 PvP 쿨타임[-]': { power: 6.667, max: `3.0` },
  '백우 체마소모도[-]': { power: 2, max: `10.0` },
  '백우 피해량[+]': { power: 0.667, max: `30.0` },
  '정기탈취 방어 감소[+]': { power: 20, max: `10` },
  '정기탈취 피해흡수 감소[+]': { power: 2, max: `100` },
  '정기탈취 회복감소율[-]': { power: 2, max: `100` },
  '선풍 쿨타임[-]': { power: 6.667, max: `3.0` },
  '선풍 PvP 쿨타임[-]': { power: 6.667, max: `3.0` },
  '선풍 체력소모도[-]': { power: 2, max: `10.0` },
  '선풍 마력소모도[-]': { power: 2, max: `10.0` },
  '선풍 피해량[+]': { power: 0.667, max: `30.0` },
  '공간왜곡 PvP 쿨타임[-]': { power: 6.667, max: `3.0` },
  '황천행 피격횟수[+]': { power: 4, max: `4` },
  '주문잠금 침묵 지속시간[+]': { power: 10, max: `2.0` },

  // 마도사
  '마도향상 마법수준[+]': { power: 13.334, max: `15` },
  '시전연구 시전시간 감소율[-]': { power: 4, max: `50` },
  '시전강화 쿨타임 감소율[+]': { power: 3.334, max: `60` },
  '파괴력강화 무기파괴력 증가율[+]': { power: 16.667, max: `12` },
  '능력강화 능력강화율[+]': { power: 2, max: `100` },
  '흡공의맹약 기력 회복율[+]': { power: 2, max: `100` },
  '마법강화 쿨타임[-]': { power: 0.527, max: `38.0` },
  '기광선 쿨타임[-]': { power: 13.334, max: `1.5` },
  '기광선 체력소모도[-]': { power: 2, max: `10.0` },
  '기광선 피해량[+]': { power: 0.667, max: `30.0` },
  "광폭체마'강 회복량[+]": { power: 0.667, max: `30.0` },
  '광폭마흑진 쿨타임[-]': { power: 1.25, max: `16.0` },
  '광폭마흑진 공격력증가[+]': { power: 2, max: `100` },
  '광폭마흑진 마력증강[+]': { power: 2, max: `100` },
  '광폭마흑진 마법치명타[+]': { power: 2, max: `100` },
  '광폭멸천강 부패피해량[+]': { power: 20, max: `10` },
  '광폭멸천강 쿨타임[-]': { power: 0.455, max: `44.0` },
  '광폭멸천강 이속증가율[+]': { power: 20, max: `10` },
  '능력공유 최대 공유치[+]': { power: 2, max: `100` },
  '광폭기폭사 쿨타임[-]': { power: 4, max: `5.0` },
  '광폭기폭사 피해량[+]': { power: 0.667, max: `30.0` },
  '광폭기대방출 쿨타임[-]': { power: 2, max: `10.0` },
  '혈마광폭파 피해량[+]': { power: 0.667, max: `30.0` },
  '혈마광폭파 마력소모도[-]': { power: 2, max: `10.0` },
  '기공발출 피해량[+]': { power: 0.667, max: `30.0` },
  '마력구회격 피해량[+]': { power: 0.667, max: `30.0` },
  '마력구회격 체마소모도[-]': { power: 2, max: `10.0` },
  '음양구슬 초당 회복율[+]': { power: 13.334, max: `15` },
  '음양구슬 회복량[+]': { power: 0.667, max: `30.0` },
  "기공구슬'화 지속시간[+]": { power: 10, max: `2.0` },
  "기공구슬'화 발동횟수[+]": { power: 20, max: `10` },
  "기공구슬'수 지속시간[+]": { power: 10, max: `2.0` },
  "기공구술'수 발동횟수[+]": { power: 20, max: `10` },
  "기공구슬'뇌 지속시간[+]": { power: 10, max: `2.0` },
  "기공구슬'뇌 발동횟수[+]": { power: 20, max: `10` },
  '영혼의계약 쿨타임[-]': { power: 1.25, max: `16.0` },
  '영혼의계약 체력반환량[+]': { power: 20, max: `10` },
  "광폭공명'강 분담율[+]": { power: 16.667, max: `12` },
  '기공보호막 지속시간[+]': { power: 10, max: `2.0` },
  '기공보호막 피격횟수[+]': { power: 28.572, max: `7` },
  "광폭보호부'강 지속시간[+]": { power: 10, max: `2.0` },
  "광폭보호부'강 누적피해차감율[+]": { power: 13.334, max: `15` },
  '광폭철갑 반격율[+]': { power: 2, max: `100` },
  '광폭철갑 직타저항[+]': { power: 4, max: `50` },
  '광폭철갑 피해흡수[+]': { power: 4, max: `50` },
  '혈마박쥐떼 쿨타임[-]': { power: 4, max: `5.0` },
  '혈마박쥐떼 PvP 쿨타임[-]': { power: 4, max: `5.0` },
  '혈마박쥐떼 피해량[+]': { power: 0.667, max: `30.0` },
  '내성증폭 쿨타임[-]': { power: 0.625, max: `32.0` },
  '내성증폭 지속시간[+]': { power: 4, max: `5.0` },
  '마력보호 소모도 감소율[+]': { power: 1.334, max: `150` },
  '마력증폭 피격횟수[+]': { power: 20, max: `10` },
  '마력증폭 회복율[+]': { power: 40, max: `5` },
  '체마변환 변환율[+]': { power: 13.334, max: `15` },
  '체마변환 최대회복량[+]': { power: 13.334, max: `15` },
  '기공사슬 쿨타임[-]': { power: 13.334, max: `1.5` },
  '기공사슬 발동횟수[+]': { power: 40, max: `5` },
  "광폭부패'강 쿨타임[-]": { power: 4, max: `5.0` },
  "광푹부패'강 부패피해량[+]": { power: 13.334, max: `15` },
  '광폭침묵염파 침묵시간[+]': { power: 10, max: `2.0` },
  '광폭침묵염파 쿨타임[-]': { power: 4, max: `5.0` },
  '광폭증축기 쿨타임[-]': { power: 0.371, max: `54.0` },
  "광폭마진'강 쿨타임[-]": { power: 1.25, max: `16.0` },
  "광폭마진'강 직타저항[+]": { power: 2, max: `100` },
  "광폭마진'강 피해흡수[+]": { power: 2, max: `100` },
  '광마지폭 부패 피해량[+]': { power: 6.667, max: `30` },
  '광마지폭 피해량[+]': { power: 0.667, max: `30.0` },
  '광폭기조사 쿨타임[-]': { power: 4, max: `5.0` },
  '광폭기조사 피해량[+]': { power: 0.667, max: `30.0` },
  '역병지대 쿨타임[-]': { power: 4, max: `5.0` },
  '역병지대 피해량[+]': { power: 0.667, max: `30.0` },

  // 영술사
  '요괴보호 쿨타임[-]': { power: 6.667, max: `3.0` },
  '폭주신령 쿨타임[-]': { power: 1.334, max: `15.0` },
  '폭주신령 소모도 감소율[+]': { power: 2, max: `100` },
  '폭주신령 쿨타임 감소율[+]': { power: 2, max: `100` },
  '나와라폭장승 쿨타임[-]': { power: 6.667, max: `3.0` },
  '나와라폭장승 피해량[+]': { power: 0.667, max: `30.0` },
  '나와라수호승 쿨타임[-]': { power: 6.667, max: `3.0` },
  '나와라수호승 피해량[+]': { power: 0.667, max: `30.0` },
  '괴선공격 피해량[+]': { power: 0.667, max: `30.0` },
  '괴선공격 고목승 체력증가율[+]': { power: 3.334, max: `60` },
  '괴선공격 폭장승 도발시간[+]': { power: 10, max: `2.0` },
  '괴선공격 수호승 무적시간[+]': { power: 10, max: `2.0` },
  '요괴질주 이속증가율[+]': { power: 20, max: `10` },
  '빙의:도깨비불 마법치명[+]': { power: 4, max: `50` },
  '장승빙의 쿨타임[-]': { power: 2, max: `10.0` },
  '도깨비파장 피해량[+]': { power: 0.667, max: `30.0` },
  '도깨비폭격 마력소모도[-]': { power: 2, max: `10.0` },
  '도깨비폭격 피해량[+]': { power: 0.667, max: `30.0` },
  '도깨비혼방출 피해량[+]': { power: 0.667, max: `30.0` },
  '도깨비침식 마력소모도[-]': { power: 2, max: `10.0` },
  '도깨비침식 피해량[+]': { power: 0.667, max: `30.0` },
  '화마질주 쿨타임[-]': { power: 6.667, max: `3.0` },
  '화마질주 체마소모도[-]': { power: 2, max: `10.0` },
  '화마질주 피해량[+]': { power: 0.667, max: `30.0` },
  '화요신권 쿨타임[-]': { power: 2, max: `10.0` },
  '화요신권 피해량[+]': { power: 0.667, max: `30.0` },
  '도깨비불난사 마력소모도[-]': { power: 2, max: `10.0` },
  '도깨비불난사 피해량[+]': { power: 0.667, max: `30.0` },
  '요괴직타 피해량[+]': { power: 0.667, max: `30.0` },
  '요괴회선 피해량[+]': { power: 0.667, max: `30.0` },
  '요괴격추 피해량[+]': { power: 0.667, max: `30.0` },
  '화염쓸기 피해량[+]': { power: 0.667, max: `30.0` },
  '화염회격 쿨타임[-]': { power: 6.667, max: `3.0` },
  '화염회격 피해량[+]': { power: 0.667, max: `30.0` },
  '화염정권 체마소모도[-]': { power: 2, max: `10.0` },
  '화염정권 피해량[+]': { power: 0.667, max: `30.0` },
  '화염돌파 피해량[+]': { power: 0.667, max: `30.0` },
  '화염압도 쿨타임[-]': { power: 6.667, max: `3.0` },
  '화염압도 피해량[+]': { power: 0.667, max: `30.0` },
  '요괴기원 회복율[+]': { power: 20, max: `10` },
  '무공집중 회복량[+]': { power: 0.667, max: `30.0` },
  '무공집중 쿨타임[-]': { power: 4, max: `5.0` },
  '도깨비탈출 지속시간[+]': { power: 6.667, max: `3.0` },
  '도깨비탈출 쿨타임[-]': { power: 2, max: `10.0` },
  '도깨비탈출 피해량[+]': { power: 0.667, max: `30.0` },
  '요괴현신 쿨타임[-]': { power: 6.667, max: `3.0` },
  '요괴현신 피해량[+]': { power: 0.667, max: `30.0` },
  '빙의:대장군 방어[+]': { power: 20, max: `10` },
  '불사표효 쿨타임[-]': { power: 6.667, max: `3.0` },
  '불사표호 방어 감소[+]': { power: 20, max: `10` },
  '도깨비속박 쿨타임[-]': { power: 1.334, max: `15.0` },
  '도깨비속박 지속시간[+]': { power: 6.667, max: `3.0` },
  '흡마귀술 쿨타임[-]': { power: 4, max: `5.0` },
  '흡마귀술 지속시간[+]': { power: 4, max: `5.0` },
  '나와라마혼승 쿨타임[-]': { power: 6.667, max: `3.0` },
  '나와라마혼승 이속감소율': { power: 20, max: `10` },
  '나와라고목승 쿨타임[-]': { power: 6.667, max: `3.0` },
  '나와라고목승 은신제한시간[+]': { power: 50, max: `4` },
  '얼요빙결 쿨타임[-]': { power: 6.667, max: `3.0` },
  '빙의:괴선 수면저항[+]': { power: 0.2, max: `1000` },
  '빙의:괴선 절망저항[+]': { power: 0.2, max: `1000` },
  '빙의:괴선 침묵저항[+]': { power: 0.2, max: `1000` },
  '요기발산 쿨타임[-]': { power: 2, max: `10.0` },
  '요기발산 피해량 증폭[+]': { power: 2, max: `100` },

  // 차사
  '차사강림 쿨타임[-]': { power: 4, max: `5.0` },
  '차사강림 피해증가율[+]': { power: 0.667, max: `300` },
  '차사강림 이속증가율[+]': { power: 20, max: `10` },
  '살극 쿨타임[-]': { power: 2, max: `10.0` },
  '살극 피해량[+]': { power: 0.667, max: `30.0` },
  '영기방패 방어[+]': { power: 20, max: `10` },
  '영기방패 피해흡수[+]': { power: 2, max: `100` },
  '영검 영기소모도[-]': { power: 2, max: `10.0` },
  '영검 추가피해량[+]': { power: 6.667, max: `30` },
  '나선회륜 체력소모도[-]': { power: 2, max: `10.0` },
  '나선회륜 피해량[+]': { power: 0.667, max: `30.0` },
  '풍화일섬 피해량[+]': { power: 0.667, max: `30.0` },
  '잔영 피해량[+]': { power: 0.667, max: `30.0` },
  '수라검 피해량[+]': { power: 0.667, max: `30.0` },
  '영기방출 쿨타임[-]': { power: 4, max: `5.0` },
  '영기방출 피해량[+]': { power: 0.667, max: `30.0` },
  '순섬 체마소모도[-]': { power: 2, max: `10.0` },
  '순섬 피해량[+]': { power: 0.667, max: `30.0` },
  '진섬 체마소모도[-]': { power: 2, max: `10.0` },
  '진섬 피해량[+]': { power: 0.667, max: `30.0` },
  '영살 영기소모도[-]': { power: 2, max: `10.0` },
  '영살 피해량[+]': { power: 0.667, max: `30.0` },
  '초열업화 영기소모도[-]': { power: 2, max: `10.0` },
  '초열업화 피해량[+]': { power: 0.667, max: `30.0` },
  '분쇄섬 지속시간[+]': { power: 6.667, max: `3.0` },
  '분쇄섬 피해량[+]': { power: 0.667, max: `30.0` },
  '월광참 체력소모도[-]': { power: 2, max: `10.0` },
  '월광참 피해량[+]': { power: 0.667, max: `30.0` },
  '낙화 피해량[+]': { power: 0.667, max: `30.0` },
  '역공 지속시간[+]': { power: 10, max: `2.0` },
  '역공 반격 피해량[+] 증가': { power: 20, max: `10` },
  '영기부활 쿨타임[-]': { power: 0.625, max: `32.0` },
  '영기부활 회복율[+]': { power: 20, max: `10` },
  '멸살 쿨타임[-]': { power: 2, max: `10.0` },
  '멸살 피해량[+]': { power: 0.667, max: `30.0` },
  '백귀야행 축적 피해(만분율)[+]': { power: 0.02, max: `10000` },
  '개안 쿨타임[-]': { power: 4, max: `5.0` },
  '저승문 쿨타임[-]': { power: 4, max: `5.0` },
  '저승문 방어[+]': { power: 20, max: `10` },
  '나락 피해량[+]': { power: 0.667, max: `30.0` },
  '영혼의고리 추가피해량[+]': { power: 6.667, max: `30` },
  '영혼의고리 흡혈량[+]': { power: 2, max: `100` },

  // 살수
  '날세우기 쿨타임[-]': { power: 0.4, max: `50.0` },
  '날세우기 무기파괴력 증가율[+]': { power: 6.667, max: `30` },
  '대상추적 마력소모도[-]': { power: 2, max: `10.0` },
  '낫회수 마력소모도[-]': { power: 2, max: `10.0` },
  '아공간이동 피해량[+]': { power: 0.667, max: `30.0` },
  '아공간이동 PVP 쿨타임[-]': { power: 2, max: `10.0` },
  '아공간이동 지속시간[+]': { power: 10, max: `2.0` },
  '심판의낫 회복감소율': { power: 2, max: `100` },
  '심판의낫 방어 감소': { power: 20, max: `10` },
  '심판의낫 지속시간[+]': { power: 6.667, max: `3.0` },
  '금환투겸 체마소모도[-]': { power: 2, max: `10.0` },
  '금환투겸 지속시간[+]': { power: 5, max: `4.0` },
  '금환투겸 피해량[+]': { power: 0.667, max: `30.0` },
  '이선공 체력소모도[-]': { power: 2, max: `10.0` },
  '이선공 피해량[+]': { power: 0.667, max: `30.0` },
  '이계의상처 체마소모도[-]': { power: 2, max: `10.0` },
  '이계의상처 쿨타임[-]': { power: 4, max: `5.0` },
  '이계의상처 피해량[+]': { power: 0.667, max: `30.0` },
  '청룡마령참 쿨타임[-]': { power: 0.91, max: `22.0` },
  '청룡마령참 피해량[+]': { power: 0.667, max: `30.0` },
  '투겸 체마소모도[-]': { power: 2, max: `10.0` },
  '투겸 지속시간[+]': { power: 4, max: `5.0` },
  '투겸 피해량[+]': { power: 0.667, max: `30.0` },
  '청룡참 체력소모도[-]': { power: 2, max: `10.0` },
  '청룡참 피해량[+]': { power: 0.667, max: `30.0` },
  '승월참 체력소모도[-]': { power: 2, max: `10.0` },
  '승월참 피해량[+]': { power: 0.667, max: `30.0` },
  '승월참 지속시간[+]': { power: 10, max: `2.0` },
  '이혈겸 쿨타임[-]': { power: 4, max: `5.0` },
  '이혈겸 체마소모도[-]': { power: 2, max: `10.0` },
  '이혈검 피해량[+]': { power: 0.667, max: `30.0` },
  '일시정지 쿨타임[-]': { power: 6.667, max: `3.0` },
  '일시정지 PvP 쿨타임[-]': { power: 4, max: `5.0` },
  '응급처치 쿨타임[-]': { power: 1, max: `20.0` },
  '응급처치 PvP 쿨타임[-]': { power: 1, max: `20.0` },
  '응급처치 회복량[+]': { power: 0.667, max: `30.0` },
  '위치변환 쿨타임[-]': { power: 6.667, max: `3.0` },
  '위치변환 PvP 쿨타임[-]': { power: 6.667, max: `3.0` },
  '공간도약 체력소모도[-]': { power: 2, max: `10.0` },
  '공간도약 은신시간[+]': { power: 10, max: `2.0` },
  '차원틈 쿨타임[-]': { power: 4, max: `5.0` },
  '차원틈 PvP 쿨타임[-]': { power: 2, max: `10.0` },
  '환영이선 피해량[+]': { power: 0.667, max: `30.0` },
  '환영이선 지속시간[+]': { power: 10, max: `2.0` },
  '이경장막 마력소모도[-]': { power: 2, max: `10.0` },
  '이경장막 지속시간[+]': { power: 10, max: `2.0` },
  '중력붕괴 지속시간[+]': { power: 6.667, max: `3.0` },
  '중력붕괴 피해량[+]': { power: 0.667, max: `30.0` },
  '육감감지 은신발견률증가[+]': { power: 2, max: `10.0` },
  '육감감지 마력소모도[-]': { power: 2, max: `10.0` },
  '육감감지 함정탐지율증가[+]': { power: 2, max: `10.0` },
  '강탈 PvP 쿨타임[-]': { power: 4, max: `5.0` },
  '강탈 체마소모도[-]': { power: 2, max: `10.0` },
};
