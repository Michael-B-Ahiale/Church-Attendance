import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AttendancePage from './pages/AttendancePage';
import AdminPage from './pages/AdminPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;