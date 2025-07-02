// src/components/sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  return (
<div className="sidebar-container">
  {/* Main Navigation */}
  <nav className="sidebar-nav">
    <NavLink to="/dashboard" className="nav-item">
      <i className="fas fa-tachometer-alt"></i>
      <span>Dashboard</span>
    </NavLink>

    <NavLink to="/applications" className="nav-item">
      <i className="fas fa-file-alt"></i>
      <span>My Applications</span>
    </NavLink>

    <NavLink to="/jobs" className="nav-item">
      <i className="fas fa-briefcase"></i>
      <span>Job Listings</span>
    </NavLink>

    <NavLink to="/interviews" className="nav-item">
      <i className="fas fa-calendar-alt"></i>
      <span>Interview Schedule</span>
    </NavLink>

    <NavLink to="/saved" className="nav-item">
      <i className="fas fa-heart"></i>
      <span>Saved Jobs</span>
    </NavLink>

    <NavLink to="/analytics" className="nav-item">
      <i className="fas fa-chart-bar"></i>
      <span>Analytics</span>
    </NavLink>
  </nav>

  {/* Bottom Settings Section */}
  <div className="sidebar-bottom">
    <NavLink to="/contact" className="nav-item">
      <i className="fas fa-envelope"></i>
      <span>Contact</span>
    </NavLink>

    <NavLink to="/profile" className="nav-item">
      <i className="fas fa-user-cog"></i>
      <span>Profile Settings</span>
    </NavLink>

    <NavLink to="/logout" className="nav-item">
      <i className="fas fa-sign-out-alt"></i>
      <span>Logout</span>
    </NavLink>
  </div>
</div>

  );
}

export default Sidebar;
