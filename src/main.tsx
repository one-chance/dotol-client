import ScrollToTop from '@routes/ScrollToTop';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from './App';

import './main.css';
import './locales/index';

ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement).render(
  <BrowserRouter>
    <RecoilRoot>
      <ScrollToTop />
      <App />
    </RecoilRoot>
  </BrowserRouter>,
);
