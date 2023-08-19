export const MAIN_MENU = [`코디`, `도감`, `콘텐츠`, `계산기`];
// export const MAIN_MENU = [`코디`, `도감`, `콘텐츠`, `계산기`, `게시판`];

export const TOTAL_MENU = [
  {
    menu: `코디`,
    sub: [
      { name: `치장`, url: `/costume/list` },
      { name: `룩북`, url: `/costume/lookbook` },
      { name: `태닝`, url: `/costume/tanning` },
      // { name: `코디왕`, url: `costume/contest` },
    ],
  },
  {
    menu: `도감`,
    sub: [
      { name: `일반 장비`, url: `/db/normal-equip/list` },
      { name: `환수 장비`, url: `/db/pet-equip/list` },
      { name: `신수 유물`, url: `/db/antiquity-equip/list` },
      { name: `기술 능력`, url: `/db/skill-ability` },
    ],
  },
  {
    menu: `콘첸츠`,
    sub: [
      { name: `업적`, url: `/content/achievement` },
      { name: `탐험일지`, url: `/content/adventure` },
      { name: `고고학`, url: `/content/archeology` },
      { name: `신체 강화`, url: `/content/body-reinforce/ability` },
    ],
  },
  {
    menu: `계산기`,
    sub: [
      { name: `전투력`, url: `/calculator/power` },
      { name: `능력치`, url: `/calculator/ability` },
      { name: `각인 수치`, url: `/calculator/engrave` },
      { name: `생산`, url: `/calculator/production` },
      { name: `세시마을`, url: `/calculator/calendar` },
    ],
  },
  // {
  //   menu: `게시판`,
  //   sub: [
  //     { name: `팁 게시판`, url: `/board/tip?page=1` },
  //     {
  //       name: `자유 게시판`,
  //       url: `/board/free?page=1`,
  //     },
  //     {
  //       name: `영상 게시판`,
  //       url: `/board/video?page=1`,
  //     },
  //     { name: `서버 게시판`, url: `/board/server?page=1` },
  //     { name: `거래 게시판`, url: `/board/trade?page=1` },
  //   ],
  // },
  // {
  //   menu: `거래소`,
  //   sub: [{ name: `거래소`, url: `/trade/auction` }],
  // },
];

export const COSTUME_TABS = [
  { name: `치장 미리보기`, path: `/costume/list` },
  { name: `명품의 도감`, path: `/costume/luxury` },
];

export const NORMAL_EQUIP_TABS = [
  { name: `일반장비 도감`, path: `/db/normal-equip/list` },
  { name: `한벌 효과`, path: `/db/normal-equip/set` },
];

export const PET_EQUIP_TABS = [
  { name: `환수장비 도감`, path: `/db/pet-equip/list` },
  { name: `명중률 계산기`, path: `/db/pet-equip/accuracy` },
  { name: `강화 재료`, path: `/db/pet-equip/recipe` },
];

export const ANTIQUITY_EQUIP_TABS = [
  { name: `신수유물 도감`, path: `/db/antiquity-equip/list` },
  { name: `강화 재료`, path: `/db/antiquity-equip/recipe` },
];

export const BODY_REINFORCE_TABS = [
  { name: `신체강화 능력`, path: `/content/body-reinforce/ability` },
  { name: `신체강화 재료`, path: `/content/body-reinforce/recipe` },
  { name: `신체강화 보너스`, path: `/content/body-reinforce/bonus` },
];

export const USER_MENU_TABS = [
  { name: `프로필`, path: `/user/profile` },
  { name: `비밀번호 변경`, path: `/user/change-password` },
  { name: `회원 탈퇴`, path: `/user/withdrawal` },
];
