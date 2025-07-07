import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Principal from './principal';
import Header from './header';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/principal" element={<Principal />} />
        <Route path="/" element={<Principal />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
