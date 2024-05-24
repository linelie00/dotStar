import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SessionRoomPage from './SessionRoomPage';
import SignPage from './page/SignPage';
import IntroPage from './page/IntroPage';
import MainPage from './page/MainPage';
import './App.css';
import { GlobalStyles, FontStyles } from './styles/GlobalStyles';
import { ColorStyles } from './styles/variable';
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <FontStyles />
      <ColorStyles />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/room" element={<SessionRoomPage />} />
          <Route path="/sign" element={<SignPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/main" element={<MainPage />} />
          {/* 다른 라우트들 추가 */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
