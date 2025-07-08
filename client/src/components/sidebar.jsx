// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

function Sidebar({ isCollapsed, setIsCollapsed }) {
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="header-links-top">
        {/* Header */}
        <div className="sidebar-header">
          {!isCollapsed && <h1 className="app-name">JobTrackr</h1>}
          <button
            className="toggle-btn"
            onClick={toggleSidebar}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            <i className={`fas ${isCollapsed ? "fa-chevron-right" : "fa-chevron-left"}`}></i>
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="sidebar-nav">
          <NavLink to="/dashboard" className="nav-item" title="Dashboard">
            <i className="fas fa-tachometer-alt"></i>
            {!isCollapsed && <span>Dashboard</span>}
          </NavLink>

          <NavLink to="/applications" className="nav-item" title="My Applications">
            <i className="fas fa-file-alt"></i>
            {!isCollapsed && <span>My Applications</span>}
          </NavLink>

          <NavLink to="/listings" className="nav-item" title="Job Listings">
            <i className="fas fa-briefcase"></i>
            {!isCollapsed && <span>Job Listings</span>}
          </NavLink>

          <NavLink to="/interviews" className="nav-item" title="Interview Schedule">
            <i className="fas fa-calendar-alt"></i>
            {!isCollapsed && <span>Interview Schedule</span>}
          </NavLink>

          <NavLink to="/saved" className="nav-item" title="Saved Jobs">
            <i className="fas fa-heart"></i>
            {!isCollapsed && <span>Saved Jobs</span>}
          </NavLink>

          <NavLink to="/analytics" className="nav-item" title="Analytics">
            <i className="fas fa-chart-bar"></i>
            {!isCollapsed && <span>Analytics</span>}
          </NavLink>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="sidebar-bottom">
        <NavLink to="/profile" className="nav-item" title="Profile">
          <i className="fas fa-user"></i>
          {!isCollapsed && <span>Profile</span>}
        </NavLink>

        <NavLink to="/profile/settings" className="nav-item settings" title="Settings">
          <i className="fas fa-cog"></i>
          {!isCollapsed && <span>Settings</span>}
        </NavLink>

        <NavLink to="/logout" className="nav-item logout" title="Logout">
          <i className="fas fa-sign-out-alt" style={{ color: "#f87171" }}></i>
          {!isCollapsed && <span style={{ color: "#f87171" }}>Logout</span>}
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
