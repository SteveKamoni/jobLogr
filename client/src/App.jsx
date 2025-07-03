import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/dashboard';
import Layout from './components/layout';
import ApplicationsDashboard from './sections/applications'; // ✅ Import ApplicationsDashboard

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<LandingPage />} />

      {/* Private/Logged-in Pages with Sidebar Layout */}
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      {/* ✅ New Applications Page Route */}
      <Route
        path="/applications"
        element={
          <Layout>
            <ApplicationsDashboard />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
