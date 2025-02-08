import React from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';
import Layout from './pages/Layout';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import DashboardPage from './pages/DashBoard';
import MyProfile from './pages/MyProfile';
import ResumeBuilder from './pages/ResumeBuilder';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<Navigate to="/login" />} />

          <Route element={<Layout />}>
            <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
            <Route path="/myProfile" element={<PrivateRoute><MyProfile /></PrivateRoute>} />
            <Route path="/resumeBuilder" element={<PrivateRoute><ResumeBuilder /></PrivateRoute>} />

          </Route>
        </Routes>
      </Router>
  )
}

export default App
