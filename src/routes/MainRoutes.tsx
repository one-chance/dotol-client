import Home from '@pages/Home';
import NoMatch from '@pages/NoMatch';

export const HomePge = {
  path: `/`,
  element: <Home />,
};

export const NoMatchPage = {
  path: `/*`,
  element: <NoMatch />,
};
