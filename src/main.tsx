import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { ScrollToTop } from '@routes/index';

import App from './App';

import './main.css';

ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement).render(
  <BrowserRouter>
    <RecoilRoot>
      <ScrollToTop />
      <App />
    </RecoilRoot>
  </BrowserRouter>,
);
