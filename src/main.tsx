import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './main.css';
import './locales/index';

ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
