import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';
import SessionRoomPage from './page/SessionRoomPage';
import TestLoginPage from './page/TestLoginPage';
import './App.css';

function App() {
    return (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/room" element={<SessionRoomPage />} />
              <Route path="/login" element={<TestLoginPage />} />
              {/* 다른 라우트들 추가 */}
            </Routes>
          </Router>
        </div>
    );
}

export default App;