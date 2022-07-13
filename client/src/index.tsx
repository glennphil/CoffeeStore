import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CoffeesContextProvider } from './context/CoffeesContext';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CoffeesContextProvider>
      <App />
    </CoffeesContextProvider>
  </React.StrictMode>
)