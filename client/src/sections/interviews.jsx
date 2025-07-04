import React, { useState, useEffect } from 'react';
import { 
  faSearch, 
  faFilter, 
  faList, 
  faCalendarAlt, 
  faExternalLinkAlt, 
  faVideo, 
  faBuilding, 
  faPhoneAlt, 
  faCalendarCheck,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGoogle, 
  faMicrosoft, 
  faApple, 
  faAmazon 
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './interviews.css'; // Import your CSS file for styling

const InterviewScheduleDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [filterDropdownActive, setFilterDropdownActive] = useState(false);

  useEffect(() => {
    // Check for saved user preference or use system preference
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  const toggleFilterDropdown = () => {
    setFilterDropdownActive(!filterDropdownActive);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        {/* Header Section */}
        <div className="header">
          <div className="header-left">
            <h1 className="title">Interview Schedule</h1>
            <span className="upcoming-badge">3 upcoming</span>
          </div>
          
          {/* Theme Toggle */}
          <div className="header-right">
            <div className="theme-toggle-container">
              <input 
                type="checkbox" 
                id="theme-toggle" 
                className="theme-toggle" 
                checked={darkMode}
                onChange={toggleTheme}
              />
              <label htmlFor="theme-toggle" className="theme-label"></label>
            </div>
            
            {/* View Toggle */}
            <div className="view-toggle">
              <button className="view-button active">
                <FontAwesomeIcon icon={faList} className="view-icon active" />
              </button>
              <button className="view-button">
                <FontAwesomeIcon icon={faCalendarAlt} className="view-icon" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Search and Filter Section */}
        <div className="search-filter-section">
          <div className="search-filter-row">
            {/* Search Bar */}
            <div className="search-container">
              <div className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search by job title, company..."
              />
            </div>
            
            {/* Filter Button */}
            <button 
              id="filter-toggle" 
              className="filter-button"
              onClick={toggleFilterDropdown}
            >
              <FontAwesomeIcon icon={faFilter} className="filter-icon" />
              Filters
            </button>
          </div>
          
          {/* Filter Dropdown */}
          <div 
            id="filter-dropdown" 
            className={`filter-dropdown ${filterDropdownActive ? 'active' : ''}`}
          >
            <div className="filter-grid">
              {/* Status Filter */}
              <div className="filter-group">
                <h3 className="filter-title">Interview Status</h3>
                <div className="filter-options">
                  <label className="filter-option">
                    <input type="checkbox" className="filter-checkbox" defaultChecked />
                    <span className="filter-option-text">Upcoming</span>
                  </label>
                  <label className="filter-option">
                    <input type="checkbox" className="filter-checkbox" />
                    <span className="filter-option-text">Completed</span>
                  </label>
                  <label className="filter-option">
                    <input type="checkbox" className="filter-checkbox" />
                    <span className="filter-option-text">Missed</span>
                  </label>
                </div>
              </div>
              
              {/* Date Range Filter */}
              <div className="filter-group">
                <h3 className="filter-title">Date Range</h3>
                <div className="filter-options">
                  <select className="filter-select">
                    <option>This Week</option>
                    <option>Next Week</option>
                    <option>This Month</option>
                    <option>Custom Range</option>
                  </select>
                </div>
              </div>
              
              {/* Job Type Filter */}
              <div className="filter-group">
                <h3 className="filter-title">Job Type</h3>
                <div className="filter-options">
                  <select className="filter-select">
                    <option>All Types</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="filter-actions">
              <button className="apply-filters-button">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
        
        {/* Interview List Section */}
        <div className="interview-grid">
          {/* Interview Card 1 */}
          <div className="interview-card">
            <div className="interview-card-content">
              <div className="company-logo-container">
                <div className="company-logo google">
                  <FontAwesomeIcon icon={faGoogle} className="company-icon" />
                </div>
              </div>
              <div className="interview-details">
                <div className="interview-header">
                  <div>
                    <h3 className="job-title">Senior Frontend Developer</h3>
                    <p className="company-name">Google</p>
                  </div>
                  <span className="status-badge upcoming">Upcoming</span>
                </div>
                
                <div className="interview-meta">
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faCalendarAlt} className="meta-icon" />
                    <span>Mon, Jun 12, 2023</span>
                  </div>
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faClock} className="meta-icon" />
                    <span>10:30 AM - 11:30 AM</span>
                  </div>
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faVideo} className="meta-icon" />
                    <span>Zoom Meeting</span>
                  </div>
                </div>
                
                <div className="interview-actions">
                  <a href="#" className="view-details-link">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="action-icon" />
                    View Details
                  </a>
                  <button className="action-button primary">
                    Join Interview
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interview Card 2 */}
          <div className="interview-card">
            <div className="interview-card-content">
              <div className="company-logo-container">
                <div className="company-logo microsoft">
                  <FontAwesomeIcon icon={faMicrosoft} className="company-icon" />
                </div>
              </div>
              <div className="interview-details">
                <div className="interview-header">
                  <div>
                    <h3 className="job-title">UX Designer</h3>
                    <p className="company-name">Microsoft</p>
                  </div>
                  <span className="status-badge in-progress">In Progress</span>
                </div>
                
                <div className="interview-meta">
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faCalendarAlt} className="meta-icon" />
                    <span>Today</span>
                  </div>
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faClock} className="meta-icon" />
                    <span>2:00 PM - 3:00 PM</span>
                  </div>
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faBuilding} className="meta-icon" />
                    <span>In-Person</span>
                  </div>
                </div>
                
                <div className="interview-actions">
                  <a href="#" className="view-details-link">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="action-icon" />
                    View Details
                  </a>
                  <button className="action-button primary">
                    Join Interview
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interview Card 3 */}
          <div className="interview-card">
            <div className="interview-card-content">
              <div className="company-logo-container">
                <div className="company-logo apple">
                  <FontAwesomeIcon icon={faApple} className="company-icon" />
                </div>
              </div>
              <div className="interview-details">
                <div className="interview-header">
                  <div>
                    <h3 className="job-title">iOS Developer</h3>
                    <p className="company-name">Apple</p>
                  </div>
                  <span className="status-badge completed">Completed</span>
                </div>
                
                <div className="interview-meta">
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faCalendarAlt} className="meta-icon" />
                    <span>Wed, Jun 7, 2023</span>
                  </div>
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faClock} className="meta-icon" />
                    <span>9:00 AM - 10:00 AM</span>
                  </div>
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faPhoneAlt} className="meta-icon" />
                    <span>Phone Call</span>
                  </div>
                </div>
                
                <div className="interview-actions">
                  <a href="#" className="view-details-link">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="action-icon" />
                    View Details
                  </a>
                  <button className="action-button secondary">
                    Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interview Card 4 */}
          <div className="interview-card">
            <div className="interview-card-content">
              <div className="company-logo-container">
                <div className="company-logo amazon">
                  <FontAwesomeIcon icon={faAmazon} className="company-icon" />
                </div>
              </div>
              <div className="interview-details">
                <div className="interview-header">
                  <div>
                    <h3 className="job-title">Backend Engineer</h3>
                    <p className="company-name">Amazon</p>
                  </div>
                  <span className="status-badge missed">Missed</span>
                </div>
                
                <div className="interview-meta">
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faCalendarAlt} className="meta-icon" />
                    <span>Fri, Jun 2, 2023</span>
                  </div>
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faClock} className="meta-icon" />
                    <span>1:30 PM - 2:30 PM</span>
                  </div>
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faVideo} className="meta-icon" />
                    <span>Google Meet</span>
                  </div>
                </div>
                
                <div className="interview-actions">
                  <a href="#" className="view-details-link">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="action-icon" />
                    View Details
                  </a>
                  <button className="action-button secondary">
                    Reschedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Empty State (hidden by default) */}
        <div className="empty-state hidden">
          <div className="empty-icon">
            <FontAwesomeIcon icon={faCalendarCheck} className="empty-icon-svg" />
          </div>
          <h3 className="empty-title">No interviews scheduled</h3>
          <p className="empty-description">
            You don't have any upcoming interviews. When you schedule one, it will appear here.
          </p>
          <button className="empty-action-button">
            Track a New Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewScheduleDashboard;