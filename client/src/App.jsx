import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/dashboard';
import Layout from './components/layout'; // ✅ Add Layout wrapper

function App() {
  return (
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Private/Logged-in Pages with Sidebar */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* Add other pages wrapped in Layout below this line */}
        {/* <Route path="/jobs" element={<Layout><Jobs /></Layout>} /> */}
      </Routes>
  );
}

export default App;
