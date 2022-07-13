import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UsersContextProvider } from './context/UsersContext';
import { CoffeesContextProvider } from './context/CoffeesContext';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersContextProvider>
    <CoffeesContextProvider>
      <App />
    </CoffeesContextProvider>
    </UsersContextProvider>
  </React.StrictMode>
)