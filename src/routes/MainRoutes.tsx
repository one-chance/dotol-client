import { ReactNode, Suspense, lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Spinner } from '@components/common';
import * as Calculator from '@pages/calculator';
import * as Costume from '@pages/costume';
import * as DB from '@pages/db';
import * as Main from '@pages/main';
import * as User from '@pages/user';
import { Auction, TradeBoard } from '@pages/trade';
import { isLoggedInState } from '@states/index';

// 게시판 메뉴
const FreeBoardPage = lazy(() => import(`@pages/board/FreeBoardPage`));
const FreePostPage = lazy(() => import(`@pages/board/FreePostPage`));
const TipBoardPage = lazy(() => import(`@pages/board/TipBoardPage`));
const ServerBoardPage = lazy(() => import(`@pages/board/ServerBoardPage`));
const VideoBoardPage = lazy(() => import(`@pages/board/VideoBoardPage`));
const EditPostPage = lazy(() => import(`@pages/board/EditPostPage`));
const WritePostPage = lazy(() => import(`@pages/board/WritePostPage`));

// 콘텐츠 메뉴
const BodyReinforceAbilityPage = lazy(
  () => import(`@pages/content/BodyReinforceAbilityPage`),
);
const BodyReinforceBonusPage = lazy(
  () => import(`@pages/content/BodyReinforceBonusPage`),
);
const BodyReinforceRecipePage = lazy(
  () => import(`@pages/content/BodyReinforceRecipePage`),
);
const AchievementPage = lazy(() => import(`@pages/content/AchievementPage`));
const AdventurePage = lazy(() => import(`@pages/content/AdventurePage`));
const ArcheologyPage = lazy(() => import(`@pages/content/ArcheologyPage`));

interface PageRoute {
  element: ReactNode;
  path: string;
}

const withSuspense = (Component: ReactNode) => (
  <Suspense fallback={<Spinner />}>{Component}</Suspense>
);

const createRoutes = (pages: PageRoute[]) =>
  pages.map(page => (
    <Route element={page.element} key={page.path} path={page.path} />
  ));

export default function MainRoutes() {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const boardPages = [
    { element: <FreeBoardPage />, path: `/freeboard` },
    { element: <FreePostPage />, path: `/freeboard/:postId` },
    { element: <TipBoardPage />, path: `/tipboard` },
    { element: <ServerBoardPage />, path: `/serverboard` },
    { element: <VideoBoardPage />, path: `/videoboard` },
    { element: <EditPostPage />, path: `/:boardId/edit/:postId` },
    { element: <WritePostPage />, path: `/:boardId/write` },
  ];

  const costumePages = [
    { element: <Costume.CostumeListPage />, path: `/costume/list` },
    { element: <Costume.LuxuryListPage />, path: `/costume/luxury` },
    { element: <Costume.LookbookPage />, path: `/costume/lookbook` },
    { element: <Costume.TanningPage />, path: `/costume/tanning` },
  ];

  const contentPages = [
    {
      element: <AchievementPage />,
      path: '/content/achievement',
    },
    {
      element: <AdventurePage />,
      path: '/content/adventure',
    },
    {
      element: <ArcheologyPage />,
      path: '/content/archeology',
    },
    {
      element: <BodyReinforceAbilityPage />,
      path: '/content/body-reinforce/ability',
    },
    {
      element: <BodyReinforceBonusPage />,
      path: '/content/body-reinforce/bonus',
    },
    {
      element: <BodyReinforceRecipePage />,
      path: '/content/body-reinforce/recipe',
    },
  ];

  const calculatorPages = [
    { element: <Calculator.AbilityPage />, path: `/calculator/ability` },
    { element: <Calculator.CalendarPage />, path: `/calculator/calendar` },
    { element: <Calculator.OldEngravePage />, path: `/calculator/engrave` },
    { element: <Calculator.PowerPage />, path: `/calculator/power` },
    { element: <Calculator.ProductionPage />, path: `/calculator/production` },
  ];

  const dbPages = [
    {
      element: <DB.AntiquityEquipListPage />,
      path: `/db/antiquity-equip/list`,
    },
    {
      element: <DB.AntiquityEquipRecipePage />,
      path: `/db/antiquity-equip/recipe`,
    },
    { element: <DB.EquipSkillPage />, path: `/db/equip-skill` },
    { element: <DB.NormalEquipListPage />, path: `/db/normal-equip/list` },
    { element: <DB.NormalEquipSetPage />, path: `/db/normal-equip/set` },
    { element: <DB.PetEquipAccuracyPage />, path: `/db/pet-equip/accuracy` },
    { element: <DB.PetEquipListPage />, path: `/db/pet-equip/list` },
    { element: <DB.PetEquipRecipePage />, path: `/db/pet-equip/recipe` },
    { element: <DB.SkillAbilityPage />, path: `/db/skill-ability` },
  ];

  const tradePages = [
    { element: <TradeBoard />, path: `/tradeboard` },
    { element: <Auction />, path: `/trade/auction` },
  ];

  const userPages = [
    {
      element: isLoggedIn ? <User.CharacterListPage /> : <Navigate to="/" />,
      path: `/user/character`,
    },
    {
      element: isLoggedIn ? <User.ChangePasswordPage /> : <Navigate to="/" />,
      path: `/user/change-password`,
    },
    { element: <User.ForgotPasswordPage />, path: `/user/forgot-password` },
    { element: <User.ForgotUserIdPage />, path: `/user/forgot-userid` },
    {
      element: isLoggedIn ? <User.ProfilePage /> : <Navigate to="/" />,
      path: `/user/profile`,
    },
    {
      element: <User.ResetPasswordPage />,
      path: `/user/reset-password/:token`,
    },
    { element: <User.SignUpPage />, path: `/user/signup` },
    {
      element: isLoggedIn ? <User.WithdrawalPage /> : <Navigate to="/" />,
      path: `/user/withdrawal`,
    },
  ];

  const mainPages = [
    { element: <Main.HomePage />, path: `/` },
    { element: <Main.PrivacyPolicyPage />, path: `/privacy-policy` },
    { element: <Main.TermsOfServicePage />, path: `/terms-of-service` },
    { element: <Main.NoMatchPage />, path: `*` },
  ];

  return (
    <Routes>
      {/* 사용자 메뉴 */}
      {createRoutes(userPages)}

      {/* 게시판 메뉴 */}
      {createRoutes(
        boardPages.map(page => ({
          ...page,
          element: withSuspense(page.element),
        })),
      )}

      {/* 코디 메뉴 */}
      {createRoutes(costumePages)}

      {/* 도감 메뉴 */}
      {createRoutes(dbPages)}

      {/* 콘텐츠 메뉴 */}
      {createRoutes(
        contentPages.map(page => ({
          ...page,
          element: withSuspense(page.element),
        })),
      )}

      {/* 계산기 메뉴 */}
      {createRoutes(calculatorPages)}

      {/* 거래소 메뉴 */}
      {createRoutes(tradePages)}

      {/* 기본 메뉴 */}
      {createRoutes(mainPages)}
    </Routes>
  );
}
