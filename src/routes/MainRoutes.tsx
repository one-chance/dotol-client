import {
  FreeBoard,
  ServerBoard,
  TipBoard,
  VideoBoard,
  Post,
  WritePost,
  EditPost,
} from '@pages/board';
import { Ability, Calendar, Power, Production } from '@pages/calculator';
import { Achievement, Adventure, Archeology } from '@pages/content';
import { CostumeList, Lookbook, Tanning } from '@pages/costume';
import { AntiquityEquip, NormalEquip, PetEquip, SkillAbility } from '@pages/db';
import { Home, NoMatch, PrivacyPolicy, TermsOfService } from '@pages/index';
import { Auction, TradeBoard } from '@pages/trade';
import {
  ChangePassword,
  FindAccount,
  Profile,
  Secession,
  SignIn,
  SignUp,
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

export const TradeBoardPage = {
  path: `/board/trade`,
  element: <TradeBoard />,
};

export const PostPage = {
  path: `/board/:category/post/:seq`,
  element: <Post />,
};

export const WritePostPage = {
  path: `/board/:cateogry/write`,
  element: <WritePost />,
};

export const EditPostPage = {
  path: `/board/:cateogry/edit/:seq`,
  element: <EditPost />,
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

export const SkillAbilityPage = {
  path: `/db/skill-ability`,
  element: <SkillAbility />,
};

/* 컨텐츠 메뉴 */
export const AchievementPage = {
  path: `/content/achievement`,
  element: <Achievement />,
};

export const AdventurePage = {
  path: `/content/adventure`,
  element: <Adventure />,
};

export const ArcheologyPage = {
  path: `/content/archeology`,
  element: <Archeology />,
};

/* 거래소 메뉴 */
export const AuctionPage = {
  path: `/trade/auction`,
  element: <Auction />,
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

/* 기본 페이지 */
export const HomePge = {
  path: `/`,
  element: <Home />,
};

export const PrivacyPolicyPage = {
  path: `/privacy-policy`,
  element: <PrivacyPolicy />,
};

export const TermsOfServicePage = {
  path: `/terms-of-service`,
  element: <TermsOfService />,
};

export const NoMatchPage = {
  path: `/*`,
  element: <NoMatch />,
};
