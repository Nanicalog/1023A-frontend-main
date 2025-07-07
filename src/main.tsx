import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Principal from './Principal.tsx';
import Categoria from './Categoria.tsx';
import Cadastrar from './Cadastrar.tsx';
import Login from "./Login.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
