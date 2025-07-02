// src/pages/DashboardPage.jsx
import React from 'react';
import Sidebar from '../components/sidebar';

export default function DashboardPage() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ padding: '2rem', flexGrow: 1 }}>
        <h2>Dashboard Home</h2>
        <p>This is where your job tracking happens.</p>
      </main>
    </div>
  );
}

