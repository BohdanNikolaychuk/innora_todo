import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from './providers';
import './global.scss';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>
);
