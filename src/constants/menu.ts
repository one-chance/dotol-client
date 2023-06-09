export const MAIN_MENU = [`코디`, `도감`, `계산기`, `게시판`, `거래소`];

export const TOTAL_MENU = [
  {
    menu: `코디`,
    sub: [
      { name: `치장`, url: `/costume/list` },
      { name: `룩북`, url: `/costume/lookbook` },
      { name: `태닝`, url: `/costume/tanning` },
      { name: `코디왕`, url: `costume/contest` },
    ],
  },
  {
    menu: `도감`,
    sub: [
      { name: `일반 장비`, url: `/db/equip/normal` },
      { name: `환수 장비`, url: `/db/equip/pet` },
      { name: `신수 유물`, url: `/db/equip/antiquity` },
      { name: `업적`, url: `/db/achievement` },
      { name: `탐험일지`, url: `/db/adventure` },
      { name: `고고학`, url: `/db/archeology` },
    ],
  },
  {
    menu: `계산기`,
    sub: [
      { name: `전투력`, url: `/calculator/power` },
      { name: `능력치`, url: `/calculator/ability` },
      { name: `생산`, url: `/calculator/production` },
      { name: `세시마을`, url: `/calculator/calendar` },
    ],
  },
  {
    menu: `게시판`,
    sub: [
      { name: `팁 게시판`, url: `/board/tip` },
      {
        name: `자유 게시판`,
        url: `/board/free`,
      },
      {
        name: `영상 게시판`,
        url: `/board/video`,
      },
      { name: `서버 게시판`, url: `/board/server` },
    ],
  },
  {
    menu: `거래소`,
    sub: [
      { name: `거래소`, url: `/trade/auction` },
      { name: `거래 게시판`, url: `/trade/board` },
    ],
  },
];
