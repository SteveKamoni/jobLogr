import React, { useEffect } from 'react';
import './analytics.css';

function AnalyticsDashboard() {
  useEffect(() => {
    const loadChartScripts = async () => {
      const Chart = (await import('chart.js/auto')).default;

      const ctx = document.getElementById('activityChart')?.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr'],
            datasets: [{
              label: 'Applications',
              data: [10, 20, 30, 40],
              backgroundColor: 'rgba(79, 70, 229, 0.1)',
              borderColor: '#4f46e5',
              borderWidth: 2,
              fill: true,
              tension: 0.4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        });
      }

      // You can repeat this for outcomeChart, jobTypeChart, companiesChart...
    };

    loadChartScripts();
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 font-poppins">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Analytics Dashboard
            </h1>
            <p className="text-gray-500 dark:text-gray-400">Track your progress, patterns, and performance</p>
          </div>
          <div className="mt-4 md:mt-0">
            <select id="dateRange" className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="7">Last 7 Days</option>
              <option value="30" selected>This Month</option>
              <option value="90">Last 90 Days</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
        </div>

        {/* Cards, Charts, and Heatmap are moved to reusable components in production */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Repeat cards */}
          {/* Example Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Total Applications</p>
                <h3 className="text-2xl font-bold mt-2">87</h3>
                <p className="text-green-500 text-sm mt-1">
                  <i className="fas fa-arrow-up mr-1"></i>12% from last month
                </p>
              </div>
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white">
                <i className="fas fa-paper-plane text-xl"></i>
              </div>
            </div>
          </div>
          {/* ...Other Cards... */}
        </div>

        {/* Charts and Heatmap placeholders */}
        <div className="chart-container" style={{ height: '300px' }}>
          <canvas id="activityChart"></canvas>
        </div>

        <div className="chart-container" style={{ height: '300px' }}>
          <canvas id="outcomeChart"></canvas>
        </div>

        <div className="chart-container" style={{ height: '300px' }}>
          <canvas id="jobTypeChart"></canvas>
        </div>

        <div className="chart-container" style={{ height: '300px' }}>
          <canvas id="companiesChart"></canvas>
        </div>

        <div className="heatmap-grid grid grid-cols-7 gap-1 mt-4">
          {/* You can dynamically generate heatmap boxes here */}
        </div>
      </div>
    </div>
  );
}

export default AnalyticsDashboard;
