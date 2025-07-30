import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Board from './pages/Board';
import Training from './pages/Training';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-14">
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/board" element={<Board />} />
            <Route path="/training" element={<Training />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 