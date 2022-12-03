import React from 'react';
import Home from './components/pages/Home';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Information from './components/pages/Information';

function App() {
  alert('서버 점검 중입니다. \n최대한 빠르게 서비스 할 수 있도록 노력하겠습니다. 감사합니다.');

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
