import { Suspense, lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Spinner } from '@components/common';
import {
  Ability,
  Calendar,
  OldEngrave,
  Power,
  Production,
} from '@pages/calculator';
import { Clothes, Lookbook, LuxurySeries, Tanning } from '@pages/costume';
import {
  AntiquityEquipList,
  AntiquityEquipRecipe,
  NormalEquipList,
  NormalEquipSet,
  PetEquipAccuracy,
  PetEquipList,
  PetEquipRecipe,
  SkillAbility,
} from '@pages/db';
import { Home, NoMatch, PrivacyPolicy, TermsOfService } from '@pages/index';
import { Auction, TradeBoard } from '@pages/trade';
import {
  ChangePassword,
  CharacterList,
  ForgotUserId,
  ForgotPassword,
  Profile,
  ResetPassword,
  SignUp,
  Withdrawal,
} from '@pages/user';
import { isLoggedInState } from '@states/index';

// 게시판 메뉴
const LazyFreeBoard = lazy(() => import(`@pages/board/FreeBoard`));
const LazyFreePost = lazy(() => import(`@pages/board/FreePost`));
const LazyTipBoard = lazy(() => import(`@pages/board/TipBoard`));
const LazyServerBoard = lazy(() => import(`@pages/board/ServerBoard`));
const LazyVideoBoard = lazy(() => import(`@pages/board/VideoBoard`));
const LazyEditPost = lazy(() => import(`@pages/board/EditPost`));
const LazyWritePost = lazy(() => import(`@pages/board/WritePost`));

// 콘텐츠 메뉴
const LazyBodyReinforceAbility = lazy(
  () => import(`@pages/content/BodyReinforceAbility`),
);
const LazyBodyReinforceBonus = lazy(
  () => import(`@pages/content/BodyReinforceBonus`),
);
const LazyBodyReinforceRecipe = lazy(
  () => import(`@pages/content/BodyReinforceRecipe`),
);
const LazyAdventure = lazy(() => import(`@pages/content/Adventure`));
const LazyArcheology = lazy(() => import(`@pages/content/Archeology`));
const LazyAchievement = lazy(() => import(`@pages/content/Achievement`));

const MainRoutes = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <Routes>
      {/* 사용자 메뉴 */}
      <Route
        element={isLoggedIn ? <CharacterList /> : <Navigate to="/" />}
        path="/user/character"
      />
      <Route
        element={isLoggedIn ? <ChangePassword /> : <Navigate to="/" />}
        path="/user/change-password"
      />
      <Route
        element={isLoggedIn ? <Profile /> : <Navigate to="/" />}
        path="/user/profile"
      />
      <Route
        element={isLoggedIn ? <Withdrawal /> : <Navigate to="/" />}
        path="/user/withdrawal"
      />
      <Route element={<ForgotPassword />} path="/user/forgot-password" />
      <Route element={<ForgotUserId />} path="/user/forgot-userid" />
      <Route element={<SignUp />} path="/user/signup" />
      <Route element={<ResetPassword />} path="/user/reset-password/:token" />

      {/* 게시판 메뉴 */}
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <LazyFreeBoard />
          </Suspense>
        }
        path="/freeboard"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <LazyFreePost />
          </Suspense>
        }
        path="/freeboard/:postId"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <LazyTipBoard />
          </Suspense>
        }
        path="/board/tip"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <LazyVideoBoard />
          </Suspense>
        }
        path="/board/video"
      />

      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <LazyServerBoard />
          </Suspense>
        }
        path="/board/server"
      />
      <Route element={<TradeBoard />} path="/board/trade" />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <LazyWritePost />
          </Suspense>
        }
        path="/board/:boardId/write"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <LazyEditPost />
          </Suspense>
        }
        path="/board/:boardId/edit/:postId"
      />

      {/* 코디 메뉴 */}
      <Route element={<Clothes />} path="/costume/list" />
      <Route element={<LuxurySeries />} path="/costume/luxury" />
      <Route element={<Lookbook />} path="/costume/lookbook" />
      <Route element={<Tanning />} path="/costume/tanning" />

      {/* 도감 메뉴 */}
      <Route element={<AntiquityEquipList />} path="/db/antiquity-equip/list" />
      <Route
        element={<AntiquityEquipRecipe />}
        path="/db/antiquity-equip/recipe"
      />
      <Route element={<NormalEquipList />} path="/db/normal-equip/list" />
      <Route element={<NormalEquipSet />} path="/db/normal-equip/set" />
      <Route element={<PetEquipAccuracy />} path="/db/pet-equip/accuracy" />
      <Route element={<PetEquipList />} path="/db/pet-equip/list" />
      <Route element={<PetEquipRecipe />} path="/db/pet-equip/recipe" />
      <Route element={<SkillAbility />} path="/db/skill-ability" />

      {/* 콘텐츠 메뉴 */}
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <LazyAchievement />
          </Suspense>
        }
        path="/content/achievement"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <LazyAdventure />
          </Suspense>
        }
        path="/content/adventure"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <LazyArcheology />
          </Suspense>
        }
        path="/content/archeology"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <LazyBodyReinforceAbility />
          </Suspense>
        }
        path="/content/body-reinforce/ability"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <LazyBodyReinforceBonus />
          </Suspense>
        }
        path="/content/body-reinforce/bonus"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <LazyBodyReinforceRecipe />
          </Suspense>
        }
        path="/content/body-reinforce/recipe"
      />

      {/* 계산기 메뉴 */}
      <Route element={<Ability />} path="/calculator/ability" />
      <Route element={<Calendar />} path="/calculator/calendar" />
      <Route element={<OldEngrave />} path="/calculator/engrave" />
      <Route element={<Power />} path="/calculator/power" />
      <Route element={<Production />} path="/calculator/production" />

      {/* 거래소 메뉴 */}
      <Route element={<Auction />} path="/trade/auction" />

      {/* 기본 메뉴 */}
      <Route element={<Home />} path="/" />
      <Route element={<PrivacyPolicy />} path="/privacy-policy" />
      <Route element={<TermsOfService />} path="/terms-of-service" />
      <Route element={<NoMatch />} path="*" />
    </Routes>
  );
};

export default MainRoutes;
