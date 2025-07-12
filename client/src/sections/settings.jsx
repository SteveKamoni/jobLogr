import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, Shield, Palette, Moon, Bell, Eye, Link, X, ChevronDown } from 'lucide-react';
import './settings.css'; // Import your CSS styles

const SettingsDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalInput, setModalInput] = useState('');

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'true' || (!savedMode && systemPrefersDark)) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  const openEditModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalInput('');
  };

  const saveChanges = () => {
    // In a real app, you would save the changes here
    alert('Changes saved successfully!');
    closeModal();
  };

  const openConnectedApps = () => {
    alert('Connected apps management would open here');
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <div className="main-content-settings">
        <header className="header">
          <h1 className="header-title">Settings</h1>
          <p className="header-subtitle">Manage your account preferences and privacy settings</p>
        </header>

        <div className="sections-container">
          {/* Account Settings */}
          <section className="settings-section">
            <h2 className="section-title">
              <User className="icon" />
              Account Settings
            </h2>
            <div className="settings-items">
              {/* Email */}
              <div className="settings-item">
                <div className="item-content">
                  <div className="icon-container">
                    <Mail className="icon" />
                  </div>
                  <div>
                    <h3 className="item-title">Email Address</h3>
                    <p className="item-description">john.doe@example.com</p>
                  </div>
                </div>
                <button onClick={() => openEditModal('email')} className="edit-button">
                  Edit
                </button>
              </div>
              
              {/* Password */}
              <div className="settings-item">
                <div className="item-content">
                  <div className="icon-container">
                    <Lock className="icon" />
                  </div>
                  <div>
                    <h3 className="item-title">Password</h3>
                    <p className="item-description">Last changed 3 months ago</p>
                  </div>
                </div>
                <button onClick={() => openEditModal('password')} className="edit-button">
                  Change
                </button>
              </div>
              
              {/* 2FA */}
              <div className="settings-item">
                <div className="item-content">
                  <div className="icon-container">
                    <Shield className="icon" />
                  </div>
                  <div>
                    <h3 className="item-title">Two-Factor Authentication</h3>
                    <p className="item-description">Add an extra layer of security</p>
                  </div>
                </div>
                <div className="toggle-switch">
                  <input type="checkbox" id="2fa-toggle" className="toggle-checkbox" />
                  <label htmlFor="2fa-toggle" className="toggle-label"></label>
                </div>
              </div>
            </div>
          </section>

          {/* Theme Settings */}
          <section className="settings-section">
            <h2 className="section-title">
              <Palette className="icon" />
              Appearance
            </h2>
            <div className="settings-item">
              <div className="item-content">
                <div className="icon-container">
                  <Moon className="icon" />
                </div>
                <div>
                  <h3 className="item-title">Dark Mode</h3>
                  <p className="item-description">Switch between light and dark theme</p>
                </div>
              </div>
              <div className="toggle-switch">
                <input 
                  type="checkbox" 
                  id="theme-toggle" 
                  className="toggle-checkbox" 
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <label htmlFor="theme-toggle" className="toggle-label"></label>
              </div>
            </div>
          </section>

          {/* Notifications */}
          <section className="settings-section">
            <h2 className="section-title">
              <Bell className="icon" />
              Notifications
            </h2>
            <div className="settings-items">
              <div className="settings-item">
                <div className="item-content">
                  <div className="icon-container">
                    <Mail className="icon" />
                  </div>
                  <div>
                    <h3 className="item-title">Email Notifications</h3>
                    <p className="item-description">Receive updates via email</p>
                  </div>
                </div>
                <div className="toggle-switch">
                  <input type="checkbox" id="email-notifications" className="toggle-checkbox" defaultChecked />
                  <label htmlFor="email-notifications" className="toggle-label active"></label>
                </div>
              </div>
              
              <div className="settings-item">
                <div className="item-content">
                  <div className="icon-container">
                    <Bell className="icon" />
                  </div>
                  <div>
                    <h3 className="item-title">Push Notifications</h3>
                    <p className="item-description">Receive browser notifications</p>
                  </div>
                </div>
                <div className="toggle-switch">
                  <input type="checkbox" id="push-notifications" className="toggle-checkbox" defaultChecked />
                  <label htmlFor="push-notifications" className="toggle-label active"></label>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy */}
          <section className="settings-section">
            <h2 className="section-title">
              <Shield className="icon" />
              Privacy
            </h2>
            <div className="settings-items">
              <div className="settings-item">
                <div className="item-content">
                  <div className="icon-container">
                    <Eye className="icon" />
                  </div>
                  <div>
                    <h3 className="item-title">Profile Visibility</h3>
                    <p className="item-description">Control who can see your profile</p>
                  </div>
                </div>
                <div className="select-container">
                  <select className="custom-select">
                    <option>Public</option>
                    <option>Friends</option>
                    <option>Private</option>
                  </select>
                  <ChevronDown className="select-icon" />
                </div>
              </div>
              
              <div className="settings-item">
                <div className="item-content">
                  <div className="icon-container">
                    <Link className="icon" />
                  </div>
                  <div>
                    <h3 className="item-title">Connected Apps</h3>
                    <p className="item-description">Manage third-party applications</p>
                  </div>
                </div>
                <button onClick={openConnectedApps} className="edit-button">
                  Manage
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Edit Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">
                {modalType === 'email' ? 'Change Email Address' : 'Change Password'}
              </h3>
              <button onClick={closeModal} className="modal-close">
                <X className="icon" />
              </button>
            </div>
            <div className="modal-body">
              <label className="modal-label">
                {modalType === 'email' ? 'New Email Address' : 'New Password'}
              </label>
              <input
                type={modalType === 'email' ? 'email' : 'password'}
                className="modal-input"
                placeholder={`Enter new ${modalType}`}
                value={modalInput}
                onChange={(e) => setModalInput(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button onClick={closeModal} className="cancel-button">
                Cancel
              </button>
              <button onClick={saveChanges} className="save-button">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsDashboard;