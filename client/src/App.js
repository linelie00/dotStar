import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SessionRoomPage from './SessionRoomPage';
import './App.css';

function App() {
    return (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/room" element={<SessionRoomPage />} />
              {/* 다른 라우트들 추가 */}
            </Routes>
          </Router>
        </div>
    );
}

export default App;