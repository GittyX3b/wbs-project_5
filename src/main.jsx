import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from '@/App.jsx';
import { DataProvider } from '@provider';

import '@/main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataProvider>
  </StrictMode>,
);
