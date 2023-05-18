import { FreeBoard, ServerBoard, TipBoard, VideoBoard } from '@pages/board';
import { Ability, Calendar, Exp, Power, Production } from '@pages/calculator';
import { CostumeList, Lookbook, Tanning } from '@pages/costume';
import {
  Achievement,
  Adventure,
  AntiquityEquip,
  NormalEquip,
  PetEquip,
} from '@pages/db';
import Home from '@pages/Home';
import NoMatch from '@pages/NoMatch';
import { MyInfo } from '@pages/user';

/* 게시판 메뉴 */
export const FreeBoardPage = {
  path: `/board/free`,
  element: <FreeBoard />,
};

export const ServerBoardPage = {
  path: `/board/server`,
  element: <ServerBoard />,
};

export const TipBoardPage = {
  path: `/board/tip`,
  element: <TipBoard />,
};

export const VideoBoardPage = {
  path: `/board/video`,
  element: <VideoBoard />,
};

/* 계산기 메뉴 */
export const AbilityPage = {
  path: `/calculator/ability`,
  element: <Ability />,
};

export const CalendarPage = {
  path: `/calculator/calendar`,
  element: <Calendar />,
};

export const ExpPage = {
  path: `/calculator/exp`,
  element: <Exp />,
};

export const PowerPage = {
  path: `/calculator/power`,
  element: <Power />,
};

export const ProductionPage = {
  path: `/calculator/production`,
  element: <Production />,
};

/* 코디 메뉴 */
export const CostumeListPage = {
  path: `/costume/list`,
  element: <CostumeList />,
};

export const LookbookPage = {
  path: `/costume/lookbook`,
  element: <Lookbook />,
};

export const TanningPage = {
  path: `/costume/tanning`,
  element: <Tanning />,
};

/* 도감 메뉴 */
export const AchievementPage = {
  path: `/db/achievement`,
  element: <Achievement />,
};

export const AdventurePage = {
  path: `/db/adventure`,
  element: <Adventure />,
};

export const AntiquityEquipPage = {
  path: `/db/antiquity-equip`,
  element: <AntiquityEquip />,
};

export const NormalEquipPage = {
  path: `/db/normal-equip`,
  element: <NormalEquip />,
};

export const PetEquipPage = {
  path: `/db/pet-equip`,
  element: <PetEquip />,
};

/* 사용자 메뉴 */
export const MyInfoPage = {
  path: `/user/myinfo`,
  element: <MyInfo />,
};

/* 기본 페이지 */
export const HomePge = {
  path: `/`,
  element: <Home />,
};

export const NoMatchPage = {
  path: `/*`,
  element: <NoMatch />,
};
