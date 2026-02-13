import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasePage from 'pages/BasePage';
import Loading from 'components/Loading';
import { ROUTES } from 'utils/constants';

const Home = lazy(() => import('pages/Home'));
const Favorites = lazy(() => import('pages/Favorites'));
const Player = lazy(() => import('pages/Player'));
const NotFound = lazy(() => import('pages/NotFound'));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<BasePage />}>
            <Route index element={<Home />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path=":id" element={<Player />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
