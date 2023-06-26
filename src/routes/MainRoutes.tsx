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
import { Costumes, LuxurySeries, Lookbook, Tanning } from '@pages/costume';
import { AntiquityEquip, NormalEquip, PetEquip, SkillAbility } from '@pages/db';
import { Home, NoMatch, PrivacyPolicy, TermsOfService } from '@pages/index';
import { Auction, TradeBoard } from '@pages/trade';
import {
  ChangePassword,
  CharacterList,
  FindAccount,
  Profile,
  Secession,
  SignIn,
  SignUp,
} from '@pages/user';
import { isLoggedInState } from '@states/login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

export default () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <Routes>
      {/* 사용자 메뉴 */}
      <Route
        element={isLoggedIn ? <Profile /> : <Navigate to="/" />}
        path="/user/profile"
      />
      <Route
        element={isLoggedIn ? <CharacterList /> : <Navigate to="/" />}
        path="/user/character"
      />
      <Route
        element={isLoggedIn ? <ChangePassword /> : <Navigate to="/" />}
        path="/user/change-password"
      />
      <Route
        element={isLoggedIn ? <Secession /> : <Navigate to="/" />}
        path="/user/secession"
      />
      <Route element={<FindAccount />} path="/user/find-account" />
      <Route element={<SignIn />} path="/user/signin" />
      <Route element={<SignUp />} path="/user/signup" />

      {/* 게시판 메뉴 */}
      <Route element={<FreeBoard />} path="/board/free" />
      <Route element={<TipBoard />} path="/board/tip" />
      <Route element={<VideoBoard />} path="/board/video" />
      <Route element={<TradeBoard />} path="/board/trade" />
      <Route element={<ServerBoard />} path="/board/server" />
      <Route element={<Post />} path="/board/:boardId/post/:postId" />
      <Route element={<WritePost />} path="/board/:boardId/write" />
      <Route element={<EditPost />} path="/board/:boardId/edit/:postId" />

      {/* 코디 메뉴 */}
      <Route element={<LuxurySeries />} path="/costume/list/luxury" />
      <Route element={<Costumes />} path="/costume/list/*" />
      <Route element={<Lookbook />} path="/costume/lookbook" />
      <Route element={<Tanning />} path="/costume/tanning" />

      {/* 도감 메뉴 */}
      <Route element={<AntiquityEquip />} path="/db/antiquity-equip" />
      <Route element={<NormalEquip />} path="/db/normal-equip" />
      <Route element={<PetEquip />} path="/db/pet-equip" />
      <Route element={<SkillAbility />} path="/db/skill-ability" />

      {/* 콘텐츠 메뉴 */}
      <Route element={<Achievement />} path="/content/achievement" />
      <Route element={<Adventure />} path="/content/adventure" />
      <Route element={<Archeology />} path="/content/archeology" />

      {/* 계산기 메뉴 */}
      <Route element={<Ability />} path="/calculator/ability" />
      <Route element={<Calendar />} path="/calculator/calendar" />
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
