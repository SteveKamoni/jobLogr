import React, { useState, useEffect } from 'react';
import './profile.css';
import {
  Moon,
  Sun,
  Settings,
  Camera,
  Edit2,
  Clock,
  Target,
  CheckCircle,
  Flame,
  User,
  Award,
  Trophy,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Briefcase,
  Book
} from 'lucide-react';



const ProfileDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or use preferred color scheme
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className={`profile-dashboard ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        {/* Theme Toggle */}
        <div className="theme-toggle-container">
          <button id="themeToggle" className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? (
              <Moon/>
            ) : (
            <Sun/>
            )}
          </button>
        </div>
        
        <div className="grid-container">
          {/* Profile Card */}
          <div className="profile-section">
            <div className="glass-card profile-card">
              <div className="profile-header">
                <div>
                  <h2>Profile</h2>
                  <p>Your personal information</p>
                </div>
                <button className="settings-button">
                  <Settings/>
                </button>
              </div>
              
              <div className="profile-content">
                <div className="profile-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                    alt="Profile" 
                    className="profile-image"
                  />
                  <button className="camera-button">
                    <Camera/>
                  </button>
                </div>
                
                <h3>Alexandra Chen</h3>
                <p className="profile-title">Product Designer & Developer</p>
                
                <div className="tags-container">
                  <span className="tag design">Design</span>
                  <span className="tag ux">UX</span>
                  <span className="tag frontend">Frontend</span>
                </div>
              </div>
              
              <div className="profile-footer">
                <button className="edit-profile-button">
                  <i data-lucide="edit-2"></i>
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="stats-grid">
              <div className="stat-card glass-card">
                <div className="stat-content">
                  <div>
                    <p>Hours Tracked</p>
                    <h4>1,248</h4>
                  </div>
                  <div className="stat-icon clock">
                    <Clock/>
                  </div>
                </div>
              </div>
              
              <div className="stat-card glass-card">
                <div className="stat-content">
                  <div>
                    <p>Goals Achieved</p>
                    <h4>87%</h4>
                  </div>
                  <div className="stat-icon target">
                    <Target/>
                  </div>
                </div>
              </div>
              
              <div className="stat-card glass-card">
                <div className="stat-content">
                  <div>
                    <p>Tasks Done</p>
                    <h4>324</h4>
                  </div>
                  <div className="stat-icon check">
                    <CheckCircle/>
                  </div>
                </div>
              </div>
              
              <div className="stat-card glass-card">
                <div className="stat-content">
                  <div>
                    <p>Streak</p>
                    <h4>42 days</h4>
                  </div>
                  <div className="stat-icon flame">
                    <Flame/>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress Rings */}
            <div className="glass-card progress-container">
              <h4>Weekly Progress</h4>
              
              <div className="progress-rings">
                {/* Daily Focus */}
                <div className="progress-ring-item">
                  <div className="ring-container">
                    <svg className="progress-ring-svg" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#6366f1"
                        strokeWidth="3"
                        strokeDasharray="75, 100"
                        className="progress-ring"
                      />
                    </svg>
                    <div className="ring-percentage">
                      <span>75%</span>
                    </div>
                  </div>
                  <p>Focus</p>
                </div>
                
                {/* Learning */}
                <div className="progress-ring-item">
                  <div className="ring-container">
                    <svg className="progress-ring-svg" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="3"
                        strokeDasharray="60, 100"
                        className="progress-ring"
                      />
                    </svg>
                    <div className="ring-percentage">
                      <span>60%</span>
                    </div>
                  </div>
                  <p>Learning</p>
                </div>
                
                {/* Productivity */}
                <div className="progress-ring-item">
                  <div className="ring-container">
                    <svg className="progress-ring-svg" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeDasharray="90, 100"
                        className="progress-ring"
                      />
                    </svg>
                    <div className="ring-percentage">
                      <span>90%</span>
                    </div>
                  </div>
                  <p>Productivity</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="main-content">
            {/* Tabs */}
            <div className="tabs-container">
              <div className="tabs">
                <button 
                  className={`tab ${activeTab === 'personal' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('personal')}
                >
                  <span>
                    <User/>
                    <span>Personal Info</span>
                  </span>
                </button>
                {/* <button 
                  className={`tab ${activeTab === 'skills' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('skills')}
                >
                  <span>
                    <i data-lucide="award"></i>
                    <span>Skills</span>
                  </span>
                </button> */}
                {/* <button 
                  className={`tab ${activeTab === 'achievements' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('achievements')}
                >
                  <span>
                    <i data-lucide="trophy"></i>
                    <span>Achievements</span>
                  </span>
                </button> */}
                {/* <button 
                  className={`tab ${activeTab === 'settings' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('settings')}
                >
                  <span>
                    <i data-lucide="settings"></i>
                    <span>Settings</span>
                  </span>
                </button> */}
              </div>
            </div>
            
            {/* Personal Info Content */}
            <div className="glass-card info-card">
              <h3>About Me</h3>
              <p className="about-text">
                Passionate product designer with 5+ years of experience creating intuitive user experiences. 
                Currently focused on design systems and frontend development. Love hiking and photography in my free time.
              </p>
              
              <div className="info-grid">
                <div>
                  <h4>CONTACT INFORMATION</h4>
                  <ul className="info-list">
                    <li>
                      <Mail/>
                      <span>alex.chen@example.com</span>
                    </li>
                    <li>
                      <Phone/>
                      <span>+1 (555) 123-4567</span>
                    </li>
                    <li>
                      <MapPin/>
                      <span>San Francisco, CA</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4>SOCIAL LINKS</h4>
                  <ul className="info-list">
                    <li>
                      <Github/>
                      <span>github.com/alexchen</span>
                    </li>
                    <li>
                      <Twitter/>
                      <span>twitter.com/alexchen</span>
                    </li>
                    <li>
                      <Linkedin/>
                      <span>linkedin.com/in/alexchen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Experience Section */}
            <div className="glass-card experience-card">
              <h3>Experience</h3>
              
              <div className="experience-list">
                <div className="experience-item">
                  <div className="experience-icon-container">
                    <div className="experience-icon briefcase">
                      <Briefcase/>
                    </div>
                    <div className="experience-line"></div>
                  </div>
                  <div className="experience-content">
                    <h4>Senior Product Designer</h4>
                    <p className="experience-meta">Acme Inc. • 2020 - Present</p>
                    <p className="experience-description">
                      Lead design for core products, established design system, mentored junior designers.
                    </p>
                  </div>
                </div>
                
                <div className="experience-item">
                  <div className="experience-icon-container">
                    <div className="experience-icon briefcase">
                      <Briefcase/>
                    </div>
                    <div className="experience-line"></div>
                  </div>
                  <div className="experience-content">
                    <h4>UI/UX Designer</h4>
                    <p className="experience-meta">Beta Corp • 2018 - 2020</p>
                    <p className="experience-description">
                      Designed mobile and web interfaces, conducted user research, created prototypes.
                    </p>
                  </div>
                </div>
                
                <div className="experience-item">
                  <div className="experience-icon-container">
                    <div className="experience-icon briefcase">
                     <Briefcase/>

                    </div>
                  </div>
                  <div className="experience-content">
                    <h4>Design Intern</h4>
                    <p className="experience-meta">Gamma Studio • 2017 - 2018</p>
                    <p className="experience-description">
                      Assisted senior designers, created marketing materials, learned design fundamentals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Activity */}
            {/* <div className="glass-card activity-card">
              <h3>Recent Activity</h3>
              
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon check">
                    <i data-lucide="check-circle"></i>
                  </div>
                  <div>
                    <p>
                      Completed <span>"Design System Documentation"</span>
                    </p>
                    <p className="activity-time">2 hours ago</p>
                  </div>
                </div>
                
                <div className="activity-item">
                  <div className="activity-icon book">
                    <i data-lucide="book"></i>
                  </div>
                  <div>
                    <p>
                      Learned <span>"Advanced CSS Grid Techniques"</span>
                    </p>
                    <p className="activity-time">1 day ago</p>
                  </div>
                </div>
                
                <div className="activity-item">
                  <div className="activity-icon target">
                    <i data-lucide="target"></i>
                  </div>
                  <div>
                    <p>
                      Achieved <span>"30-Day Design Challenge"</span>
                    </p>
                    <p className="activity-time">3 days ago</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;