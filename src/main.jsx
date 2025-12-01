import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App.jsx';
import { AppControlProvider } from '@context';

import '@/main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppControlProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppControlProvider>
  </StrictMode>,
);
