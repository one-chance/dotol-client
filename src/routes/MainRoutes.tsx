import { Suspense, lazy } from 'react';

import {
  FreePost,
  ServerBoard,
  TipBoard,
  VideoBoard,
  WritePost,
  EditPost,
} from '@pages/board';
import {
  Ability,
  Calendar,
  OldEngrave,
  Power,
  Production,
} from '@pages/calculator';
import {
  Achievement,
  Adventure,
  Archeology,
  BodyReinforceAbility,
  BodyReinforceBonus,
  BodyReinforceRecipe,
} from '@pages/content';
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
import { isLoggedInState } from '@states/login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

// board 메뉴
const LazyFreeBoard = lazy(() => import(`@pages/board/FreeBoard`));

// user 메뉴
const LazyChangePassword = lazy(() => import(`@pages/user/ChangePassword`));
const LazyCharacterList = lazy(() => import(`@pages/user/CharacterList`));
const LazyForgotPassword = lazy(() => import(`@pages/user/ForgotPassword`));
const LazyForgotUserId = lazy(() => import(`@pages/user/ForgotUserId`));
const LazyProfile = lazy(() => import(`@pages/user/Profile`));
const LazyResetPassword = lazy(() => import(`@pages/user/ResetPassword`));
const LazySignUp = lazy(() => import(`@pages/user/SignUp`));
const LazyWithdrawal = lazy(() => import(`@pages/user/Withdrawal`));

const MainRoutes = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <Routes>
      {/* 사용자 메뉴 */}
      <Route
        element={
          <Suspense fallback={<div>Loading...</div>}>
            {isLoggedIn ? <LazyCharacterList /> : <Navigate to="/" />}
          </Suspense>
        }
        path="/user/character"
      />
      <Route
        element={
          <Suspense fallback={<div>Loading...</div>}>
            {isLoggedIn ? <LazyChangePassword /> : <Navigate to="/" />}
          </Suspense>
        }
        path="/user/change-password"
      />
      <Route
        element={
          <Suspense fallback={<div>Loading...</div>}>
            {isLoggedIn ? <LazyProfile /> : <Navigate to="/" />}
          </Suspense>
        }
        path="/user/profile"
      />
      <Route
        element={
          <Suspense fallback={<div>Loading...</div>}>
            {isLoggedIn ? <LazyWithdrawal /> : <Navigate to="/" />}
          </Suspense>
        }
        path="/user/withdrawal"
      />
      <Route
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyForgotPassword />
          </Suspense>
        }
        path="/user/forgot-password"
      />
      <Route
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyForgotUserId />
          </Suspense>
        }
        path="/user/forgot-userid"
      />
      <Route
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazySignUp />
          </Suspense>
        }
        path="/user/signup"
      />
      <Route
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyResetPassword />
          </Suspense>
        }
        path="/user/reset-password/:token"
      />

      {/* 게시판 메뉴 */}
      <Route
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyFreeBoard />
          </Suspense>
        }
        path="/board/free"
      />
      <Route element={<FreePost />} path="/board/free/post/:postId" />
      <Route element={<TipBoard />} path="/board/tip" />
      <Route element={<VideoBoard />} path="/board/video" />
      <Route element={<TradeBoard />} path="/board/trade" />
      <Route element={<ServerBoard />} path="/board/server" />

      <Route element={<WritePost />} path="/board/:boardId/write" />
      <Route element={<EditPost />} path="/board/:boardId/edit/:postId" />

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
      <Route element={<Achievement />} path="/content/achievement" />
      <Route element={<Adventure />} path="/content/adventure" />
      <Route element={<Archeology />} path="/content/archeology" />
      <Route
        element={<BodyReinforceAbility />}
        path="/content/body-reinforce/ability"
      />
      <Route
        element={<BodyReinforceBonus />}
        path="/content/body-reinforce/bonus"
      />
      <Route
        element={<BodyReinforceRecipe />}
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
