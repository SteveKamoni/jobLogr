import React, { useEffect } from 'react';
import './analytics.css';

function JobAnalyticsDashboard() {
  useEffect(() => {
    const initializeCharts = async () => {
      const Chart = (await import('chart.js/auto')).default;

      // Declare chart instances to be used across scopes
      let activityChart, outcomeChart, jobTypeChart, companiesChart;

      const activityCtx = document.getElementById('activityChart')?.getContext('2d');
      if (activityCtx) {
        activityChart = new Chart(activityCtx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
              {
                label: 'Applications Sent',
                data: [12, 19, 15, 21, 18, 25, 22],
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
              },
              {
                label: 'Interviews',
                data: [2, 3, 1, 4, 5, 2, 6],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  color: window.matchMedia('(prefers-color-scheme: dark)').matches ? '#fff' : '#333'
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                  color: window.matchMedia('(prefers-color-scheme: dark)').matches ? '#fff' : '#333'
                }
              },
              x: {
                grid: {
                  color: window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                  color: window.matchMedia('(prefers-color-scheme: dark)').matches ? '#fff' : '#333'
                }
              }
            }
          }
        });

        const outcomeCtx = document.getElementById('outcomeChart').getContext('2d');
        outcomeChart = new Chart(outcomeCtx, {
          type: 'doughnut',
          data: {
            labels: ['Accepted', 'Rejected', 'Pending', 'No Response'],
            datasets: [{
              data: [3, 24, 35, 25],
              backgroundColor: ['#10b981', '#ef4444', '#f59e0b', '#64748b'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  color: window.matchMedia('(prefers-color-scheme: dark)').matches ? '#fff' : '#333'
                }
              }
            },
            cutout: '70%'
          }
        });

        const jobTypeCtx = document.getElementById('jobTypeChart').getContext('2d');
        jobTypeChart = new Chart(jobTypeCtx, {
          type: 'bar',
          data: {
            labels: ['Full-time', 'Contract', 'Remote', 'Internship', 'Hybrid'],
            datasets: [{
              label: 'Applications',
              data: [45, 12, 28, 8, 15],
              backgroundColor: [
                'rgba(79, 70, 229, 0.7)',
                'rgba(99, 102, 241, 0.7)',
                'rgba(129, 140, 248, 0.7)',
                'rgba(165, 180, 252, 0.7)',
                'rgba(199, 210, 254, 0.7)'
              ],
              borderColor: [
                'rgba(79, 70, 229, 1)',
                'rgba(99, 102, 241, 1)',
                'rgba(129, 140, 248, 1)',
                'rgba(165, 180, 252, 1)',
                'rgba(199, 210, 254, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                  color: window.matchMedia('(prefers-color-scheme: dark)').matches ? '#fff' : '#333'
                }
              },
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  color: window.matchMedia('(prefers-color-scheme: dark)').matches ? '#fff' : '#333'
                }
              }
            }
          }
        });

        const companiesCtx = document.getElementById('companiesChart').getContext('2d');
        companiesChart = new Chart(companiesCtx, {
          type: 'pie',
          data: {
            labels: ['TechCorp', 'DevSolutions', 'WebCraft', 'DataSystems', 'CloudNine', 'Others'],
            datasets: [{
              data: [15, 12, 8, 6, 5, 41],
              backgroundColor: ['#6366f1', '#8b5cf6', '#d946ef', '#ec4899', '#f43f5e', '#64748b'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  color: window.matchMedia('(prefers-color-scheme: dark)').matches ? '#fff' : '#333'
                }
              }
            }
          }
        });

        // Heatmap generation remains unchanged
        const heatmapContainer = document.getElementById('heatmap-container');
        const today = new Date();
        const startDate = new Date();
        startDate.setDate(today.getDate() - 42);

        const heatmapData = {
          '2023-06-01': 2,
          '2023-06-05': 5,
          '2023-06-08': 1,
          '2023-06-12': 3,
          '2023-06-15': 4,
          '2023-06-20': 2,
          '2023-06-25': 1,
          '2023-06-28': 3,
          '2023-07-01': 2,
          '2023-07-05': 1
        };

        for (let i = 0; i < 42; i++) {
          const date = new Date(startDate);
          date.setDate(startDate.getDate() + i);

          const dateStr = date.toISOString().split('T')[0];
          const count = heatmapData[dateStr] || 0;

          const dayElement = document.createElement('div');
          dayElement.className = 'heatmap-day w-8 h-8 rounded flex items-center justify-center text-xs font-medium cursor-pointer';
          dayElement.setAttribute('data-count', count);
          dayElement.setAttribute('data-date', dateStr);
          dayElement.setAttribute('title', `${dateStr}: ${count} applications`);

          if (count === 0) {
            dayElement.classList.add('bg-gray-100', 'dark:bg-gray-700');
          } else if (count <= 1) {
            dayElement.classList.add('bg-blue-200', 'dark:bg-blue-900');
          } else if (count <= 2) {
            dayElement.classList.add('bg-blue-300', 'dark:bg-blue-800');
          } else if (count <= 3) {
            dayElement.classList.add('bg-blue-400', 'dark:bg-blue-700');
          } else {
            dayElement.classList.add('bg-blue-500', 'dark:bg-blue-600');
          }

          dayElement.textContent = date.getDate();
          heatmapContainer.appendChild(dayElement);
        }

        // Dark mode color refresh logic
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeMediaQuery.addEventListener('change', (e) => {
          const isDark = e.matches;

          const charts = [activityChart, outcomeChart, jobTypeChart, companiesChart];
          charts.forEach(chart => {
            if (chart.options.scales?.x) {
              chart.options.scales.x.ticks.color = isDark ? '#fff' : '#333';
              chart.options.scales.x.grid.color = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
            }
            if (chart.options.scales?.y) {
              chart.options.scales.y.ticks.color = isDark ? '#fff' : '#333';
              chart.options.scales.y.grid.color = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
            }
            if (chart.options.plugins?.legend?.labels) {
              chart.options.plugins.legend.labels.color = isDark ? '#fff' : '#333';
            }
            chart.update();
          });
        });
      }
    };

    initializeCharts();
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Analytics Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Track your progress, patterns, and performance</p>
          </div>
          
          {/* Date Range Filter */}
          <div className="mt-4 md:mt-0">
            <select id="dateRange" className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="7">Last 7 Days</option>
              <option value="30" selected>This Month</option>
              <option value="90">Last 90 Days</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
        </div>
        
        {/* Performance Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Applications */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Total Applications</p>
                <h3 className="text-2xl font-bold mt-2">87</h3>
                <p className="text-green-500 text-sm mt-1"><i className="fas fa-arrow-up mr-1"></i>12% from last month</p>
              </div>
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white">
                <i className="fas fa-paper-plane text-xl"></i>
              </div>
            </div>
          </div>
          
          {/* Interviews Scheduled */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Interviews</p>
                <h3 className="text-2xl font-bold mt-2">14</h3>
                <p className="text-green-500 text-sm mt-1"><i className="fas fa-arrow-up mr-1"></i>8% from last month</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white">
                <i className="fas fa-calendar-check text-xl"></i>
              </div>
            </div>
          </div>
          
          {/* Offers Received */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Offers Received</p>
                <h3 className="text-2xl font-bold mt-2">3</h3>
                <p className="text-green-500 text-sm mt-1"><i className="fas fa-arrow-up mr-1"></i>2% from last month</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white">
                <i className="fas fa-briefcase text-xl"></i>
              </div>
            </div>
          </div>
          
          {/* Rejected Applications */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Rejected</p>
                <h3 className="text-2xl font-bold mt-2">24</h3>
                <p className="text-red-500 text-sm mt-1"><i className="fas fa-arrow-down mr-1"></i>4% from last month</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white">
                <i className="fas fa-times-circle text-xl"></i>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Application Activity Line Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Application Activity</h3>
            <div className="chart-container" style={{ height: '300px' }}>
              <canvas id="activityChart"></canvas>
            </div>
          </div>
          
          {/* Outcome Breakdown Doughnut Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Application Outcomes</h3>
            <div className="chart-container" style={{ height: '300px' }}>
              <canvas id="outcomeChart"></canvas>
            </div>
          </div>
        </div>
        
        {/* Secondary Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Job Type Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Applications by Job Type</h3>
            <div className="chart-container" style={{ height: '300px' }}>
              <canvas id="jobTypeChart"></canvas>
            </div>
          </div>
          
          {/* Companies Pie Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Top Companies Applied To</h3>
            <div className="chart-container" style={{ height: '300px' }}>
              <canvas id="companiesChart"></canvas>
            </div>
          </div>
        </div>
        
        {/* Heatmap Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-8">
          <h3 className="font-semibold text-lg mb-4">Application Heatmap</h3>
          <div className="overflow-x-auto">
            <div className="heatmap-grid inline-block">
              <div className="grid grid-cols-7 gap-1">
                <div id="heatmap-container" className="grid grid-cols-7 gap-1"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end mt-4">
            <div className="flex items-center">
              <span className="text-xs mr-2">Less</span>
              <div className="flex">
                <div className="w-4 h-4 rounded-sm bg-gray-200 mx-0.5"></div>
                <div className="w-4 h-4 rounded-sm bg-blue-200 mx-0.5"></div>
                <div className="w-4 h-4 rounded-sm bg-blue-400 mx-0.5"></div>
                <div className="w-4 h-4 rounded-sm bg-blue-600 mx-0.5"></div>
                <div className="w-4 h-4 rounded-sm bg-blue-800 mx-0.5"></div>
              </div>
              <span className="text-xs ml-2">More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobAnalyticsDashboard;