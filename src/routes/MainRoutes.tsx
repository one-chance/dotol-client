import { FreeBoard, ServerBoard, TipBoard, VideoBoard } from '@pages/board';
import { Ability, Calendar, Power, Production } from '@pages/calculator';
import { CostumeList, Lookbook, Tanning } from '@pages/costume';
import {
  Achievement,
  Adventure,
  AntiquityEquip,
  Archeology,
  NormalEquip,
  PetEquip,
} from '@pages/db';
import Home from '@pages/Home';
import NoMatch from '@pages/NoMatch';
import { Auction, TradeBoard } from '@pages/trade';
import {
  ChangePassword,
  FindAccount,
  Profile,
  PrivacyPolicy,
  Secession,
  SignIn,
  SignUp,
  TermsOfService,
} from '@pages/user';

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

export const ArcheologyPage = {
  path: `/db/archeology`,
  element: <Archeology />,
};

export const AntiquityEquipPage = {
  path: `/db/equip/antiquity`,
  element: <AntiquityEquip />,
};

export const NormalEquipPage = {
  path: `/db/equip/normal`,
  element: <NormalEquip />,
};

export const PetEquipPage = {
  path: `/db/equip/pet`,
  element: <PetEquip />,
};

/* 거래소 메뉴 */
export const AuctionPage = {
  path: `/trade/auction`,
  element: <Auction />,
};

export const TradeBoardPage = {
  path: `/trade/board`,
  element: <TradeBoard />,
};

/* 사용자 메뉴 */
export const ProfilePage = {
  path: `/user/profile`,
  element: <Profile />,
};

export const FindAccountPage = {
  path: `/user/find-account`,
  element: <FindAccount />,
};

export const SignInPage = {
  path: `/user/signin`,
  element: <SignIn />,
};

export const SignUpPage = {
  path: `/user/signup`,
  element: <SignUp />,
};

export const SecessionPage = {
  path: `/user/secession`,
  element: <Secession />,
};

export const ChangePasswordPage = {
  path: `/user/change-password`,
  element: <ChangePassword />,
};

export const PrivacyPolicyPage = {
  path: `/user/privacy-policy`,
  element: <PrivacyPolicy />,
};

export const TermsOfServicePage = {
  path: `/user/terms-of-service`,
  element: <TermsOfService />,
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
