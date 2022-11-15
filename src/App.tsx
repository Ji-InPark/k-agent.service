import React from 'react';
import Home from './components/pages/Home';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Information from './components/pages/Information';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/information'} element={<Information />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
