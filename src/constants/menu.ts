export const MAIN_MENU = [`코디`, `도감`, `콘텐츠`, `계산기`];

export const TOTAL_MENU = [
  {
    menu: `코디`,
    sub: [
      { name: `치장 목록`, url: `/costume/list` },
      { name: `명품의 목록`, url: `/costume/luxury` },
      { name: `캐릭터 룩북`, url: `/costume/lookbook` },
      { name: `태닝 목록`, url: `/costume/tanning` },
      // { name: `코디왕`, url: `costume/contest` },
    ],
  },
  {
    menu: `도감`,
    sub: [
      { name: `일반장비 - 목록`, url: `/db/normal-equip/list` },
      { name: `일반장비 - 한벌효과`, url: `/db/normal-equip/set` },
      { name: `환수장비 - 목록`, url: `/db/pet-equip/list` },
      { name: `환수장비 - 재료`, url: `/db/pet-equip/recipe` },
      { name: `환수장비 - 명중률`, url: `/db/pet-equip/accuracy` },
      { name: `신수유물 - 목록`, url: `/db/antiquity-equip/list` },
      { name: `신수유물 - 재료`, url: `/db/antiquity-equip/recipe` },
      { name: `기술 능력`, url: `/db/skill-ability` },
      { name: `장비 마법`, url: `/db/equip-skill` },
    ],
  },
  {
    menu: `콘텐츠`,
    sub: [
      { name: `업적 정보`, url: `/content/achievement` },
      { name: `탐험일지 정보`, url: `/content/adventure` },
      { name: `고고학 정보`, url: `/content/archeology` },
      { name: `신체강화 - 능력치`, url: `/content/body-reinforce/ability` },
      { name: `신체강화 - 재료`, url: `/content/body-reinforce/recipe` },
      { name: `신체강화 - 보너스`, url: `/content/body-reinforce/bonus` },
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
  //       url: `/freeboard?page=1`,
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

export const USER_MENU_TABS = [
  { name: `프로필`, path: `/user/profile` },
  { name: `비밀번호 변경`, path: `/user/change-password` },
  { name: `회원 탈퇴`, path: `/user/withdrawal` },
];

export const SIDE_MENUS = [
  {
    menu: `코디`,
    icon: `clothes`,
    sub: [
      { name: `치장 목록`, url: `/costume/list` },
      { name: `명품의 목록`, url: `/costume/luxury` },
      { name: `캐릭터 룩북`, url: `/costume/lookbook` },
      { name: `태닝 목록`, url: `/costume/tanning` },
      // { name: `코디왕`, url: `costume/contest` },
    ],
  },
  {
    menu: `도감`,
    icon: `book`,
    sub: [
      { name: `일반장비 - 목록`, url: `/db/normal-equip/list` },
      { name: `일반장비 - 한벌효과`, url: `/db/normal-equip/set` },
      { name: `환수장비 - 목록`, url: `/db/pet-equip/list` },
      { name: `환수장비 - 재료`, url: `/db/pet-equip/recipe` },
      { name: `환수장비 - 명중률`, url: `/db/pet-equip/accuracy` },
      { name: `신수유물 - 목록`, url: `/db/antiquity-equip/list` },
      { name: `신수유물 - 재료`, url: `/db/antiquity-equip/recipe` },
      { name: `기술 능력`, url: `/db/skill-ability` },
      { name: `장비 마법`, url: `/db/equip-skill` },
    ],
  },
  {
    menu: `콘텐츠`,
    icon: `contents`,
    sub: [
      { name: `업적 정보`, url: `/content/achievement` },
      { name: `탐험일지 정보`, url: `/content/adventure` },
      { name: `고고학 정보`, url: `/content/archeology` },
      { name: `신체강화 - 능력치`, url: `/content/body-reinforce/ability` },
      { name: `신체강화 - 재료`, url: `/content/body-reinforce/recipe` },
      { name: `신체강화 - 보너스`, url: `/content/body-reinforce/bonus` },
    ],
  },
  {
    menu: `계산기`,
    icon: `calculator`,
    sub: [
      { name: `전투력`, url: `/calculator/power` },
      { name: `능력치`, url: `/calculator/ability` },
      { name: `각인 수치`, url: `/calculator/engrave` },
      { name: `생산`, url: `/calculator/production` },
      { name: `세시마을`, url: `/calculator/calendar` },
    ],
  },
];
