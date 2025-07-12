import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/dashboard';
import Layout from './components/layout';
import ApplicationsDashboard from './sections/applications'; // ✅ Import ApplicationsDashboard
import JobListings from './sections/listings';
import InterviewScheduleDashboard from './sections/interviews';
import SavedJobsDashboard from './sections/saved';
import JobAnalyticsDashboard from './sections/analytics';
import ProfileDashboard from './sections/profile';
import SettingsDashboard from './sections/settings';
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

      <Route
        path="/listings"
        element={
          <Layout>
            <JobListings />
          </Layout>
        }
      />
      <Route
        path="/interviews"
        element={
          <Layout>
            <InterviewScheduleDashboard />
          </Layout>
        }
      />
      {/* Add more routes as needed */}
      <Route
        path="/saved"
        element={
          <Layout>
            <SavedJobsDashboard />
          </Layout>
        }
      />

      <Route
        path="/analytics"
        element={
          <Layout>
            <JobAnalyticsDashboard />
          </Layout>
        }
      />

      <Route
        path="/profile"
        element={
          <Layout>
            <ProfileDashboard />
          </Layout>
        }
      />
      <Route
        path="/settings"
        element={
          <Layout>
            <SettingsDashboard />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
