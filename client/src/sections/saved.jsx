import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faSearch, faBuilding, faMapMarkerAlt, faMoneyBillWave, faBookmark, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './saved.css';
import { useCallback } from 'react';
const SavedJobsDashboard = () => {
    // Sample job data
    const [jobs, setJobs] = useState([
        {
            id: 1,
            title: "Senior Frontend Developer",
            company: "TechCorp",
            logo: "https://via.placeholder.com/40",
            location: "San Francisco",
            type: "Full-time",
            salary: "$120,000 - $150,000",
            tags: ["React", "TypeScript", "Redux", "CSS"],
            savedDate: "2023-05-15",
            description: "We're looking for an experienced frontend developer to lead our web application development."
        },
        {
            id: 2,
            title: "UX/UI Designer",
            company: "DesignHub",
            logo: "https://via.placeholder.com/40",
            location: "Remote",
            type: "Contract",
            salary: "$80 - $100/hr",
            tags: ["Figma", "Sketch", "User Research", "Prototyping"],
            savedDate: "2023-05-10",
            description: "Join our design team to create beautiful and intuitive user experiences."
        },
        {
            id: 3,
            title: "Backend Engineer",
            company: "DataSystems",
            logo: "https://via.placeholder.com/40",
            location: "New York",
            type: "Full-time",
            salary: "$110,000 - $140,000",
            tags: ["Node.js", "Python", "AWS", "PostgreSQL"],
            savedDate: "2023-05-05",
            description: "Help us build scalable backend systems for our data processing platform."
        },
        {
            id: 4,
            title: "DevOps Specialist",
            company: "WebSolutions",
            logo: "https://via.placeholder.com/40",
            location: "London",
            type: "Full-time",
            salary: "£90,000 - £110,000",
            tags: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
            savedDate: "2023-04-28",
            description: "Implement and maintain our cloud infrastructure and deployment pipelines."
        }
    ]);

    const [darkMode, setDarkMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [jobTypeFilter, setJobTypeFilter] = useState('');
    const [companyFilter, setCompanyFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [animationId, setAnimationId] = useState(null);

// Define filterJobs first
const filterJobs = useCallback(() => {
  const filtered = jobs.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesJobType = jobTypeFilter ? job.type === jobTypeFilter : true;
    const matchesCompany = companyFilter ? job.company === companyFilter : true;
    const matchesLocation = locationFilter ? job.location === locationFilter : true;

    return matchesSearch && matchesJobType && matchesCompany && matchesLocation;
  });

  setFilteredJobs(filtered);
}, [jobs, searchTerm, jobTypeFilter, companyFilter, locationFilter]);

// Now use it here safely
useEffect(() => {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  setDarkMode(savedDarkMode);
  filterJobs();
}, [filterJobs]);


    const unsaveJob = (jobId) => {
        setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
        setAnimationId(jobId);
        setTimeout(() => setAnimationId(null), 500);
    };

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
    };

    const getTypeBadgeColor = (type) => {
        switch(type) {
            case 'Full-time':
                return 'badge-full-time';
            case 'Part-time':
                return 'badge-part-time';
            case 'Contract':
                return 'badge-contract';
            case 'Remote':
                return 'badge-remote';
            case 'Internship':
                return 'badge-internship';
            default:
                return 'badge-default';
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = now - date;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return 'today';
        if (diffDays === 1) return 'yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) {
            const weeks = Math.floor(diffDays / 7);
            return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
        }
        return date.toLocaleDateString();
    };

    return (
        <div className={`app-container ${darkMode ? 'dark' : ''}`}>
            <div className="container">
                {/* Header */}
                <div className="header">
                    <div>
                        <h1 className="title">Saved Jobs</h1>
                        <p className="subtitle">Your bookmarked job opportunities</p>
                    </div>
                    <button id="theme-toggle" className="theme-toggle" onClick={toggleDarkMode}>
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                    </button>
                </div>

                {/* Search and Filters */}
                <div className="filters-container">
                    {/* Search Bar */}
                    <div className="search-bar">
                        <div className="search-icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <input 
                            type="text" 
                            id="search-jobs" 
                            className="search-input"
                            placeholder="Search by job title, company or tags..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Filters */}
                    <div className="filters-grid">
                        {/* Job Type Filter */}
                        <div>
                            <label htmlFor="job-type" className="filter-label">Job Type</label>
                            <select 
                                id="job-type" 
                                className="filter-select"
                                value={jobTypeFilter}
                                onChange={(e) => setJobTypeFilter(e.target.value)}
                            >
                                <option value="">All Types</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                                <option value="Remote">Remote</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        {/* Company Filter */}
                        <div>
                            <label htmlFor="company" className="filter-label">Company</label>
                            <select 
                                id="company" 
                                className="filter-select"
                                value={companyFilter}
                                onChange={(e) => setCompanyFilter(e.target.value)}
                            >
                                <option value="">All Companies</option>
                                <option value="TechCorp">TechCorp</option>
                                <option value="DesignHub">DesignHub</option>
                                <option value="DataSystems">DataSystems</option>
                                <option value="WebSolutions">WebSolutions</option>
                            </select>
                        </div>

                        {/* Location Filter */}
                        <div>
                            <label htmlFor="location" className="filter-label">Location</label>
                            <select 
                                id="location" 
                                className="filter-select"
                                value={locationFilter}
                                onChange={(e) => setLocationFilter(e.target.value)}
                            >
                                <option value="">All Locations</option>
                                <option value="New York">New York</option>
                                <option value="San Francisco">San Francisco</option>
                                <option value="Remote">Remote</option>
                                <option value="London">London</option>
                                <option value="Berlin">Berlin</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Jobs List */}
                <div id="jobs-container">
                    {filteredJobs.length === 0 ? (
                        /* Empty State */
                        <div className="empty-state">
                            <div className="empty-icon">
                                <FontAwesomeIcon icon={faBookmark} />
                            </div>
                            <h3 className="empty-title">No saved jobs yet</h3>
                            <p className="empty-description">
                                When you find interesting job postings, save them here to keep track and apply later.
                            </p>
                            <button className="browse-jobs-btn">
                                Browse Jobs
                            </button>
                        </div>
                    ) : (
                        filteredJobs.map(job => (
                            <div key={job.id} className="job-card">
                                <div className="job-card-content">
                                    <div className="job-logo">
                                        <div className="logo-container">
                                            <FontAwesomeIcon icon={faBuilding} />
                                        </div>
                                    </div>
                                    <div className="job-details">
                                        <div className="job-header">
                                            <div>
                                                <h3 className="job-title">{job.title}</h3>
                                                <p className="job-company">{job.company}</p>
                                            </div>
                                            <div className="job-type-badge">
                                                <span className={`job-type ${getTypeBadgeColor(job.type)}`}>
                                                    {job.type}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="job-meta">
                                            <span className="meta-item">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} /> {job.location}
                                            </span>
                                            <span className="meta-item">
                                                <FontAwesomeIcon icon={faMoneyBillWave} /> {job.salary}
                                            </span>
                                            <span className="meta-item">
                                                <FontAwesomeIcon icon={faCalendarAlt} /> Saved {formatDate(job.savedDate)}
                                            </span>
                                        </div>
                                        
                                        <div className="job-tags">
                                            {job.tags.map((tag, index) => (
                                                <span key={index} className="tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <div className="job-actions">
                                            <button className="view-details-btn">
                                                View Details
                                            </button>
                                            <button 
                                                className="unsave-btn"
                                                onClick={() => unsaveJob(job.id)}
                                            >
                                                <FontAwesomeIcon 
                                                    icon={faBookmark} 
                                                    className={animationId === job.id ? 'unsave-animation' : ''}
                                                /> 
                                                <span>Unsave</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default SavedJobsDashboard;