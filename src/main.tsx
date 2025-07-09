import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Principal from './Principal.tsx';
import Produtos from './Produtos.tsx';
import Cadastrar from './Cadastrar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

