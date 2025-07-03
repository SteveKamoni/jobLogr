import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMoon, 
  faSun, 
  faSearch, 
  faMapMarkerAlt, 
  faClock, 
  faBookmark as solidBookmark 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faBookmark as regularBookmark 
} from '@fortawesome/free-regular-svg-icons';

import './listings.css';

const JobListings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      posted: "2 days ago",
      tags: ["React", "TypeScript", "Tailwind CSS", "GraphQL"],
      isRemote: true,
      isSaved: false
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "New York, NY",
      type: "Contract",
      salary: "$80 - $100/hr",
      posted: "1 week ago",
      tags: ["Figma", "Sketch", "Adobe XD", "Prototyping"],
      isRemote: false,
      isSaved: true
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "DataSystems",
      location: "Austin, TX (Hybrid)",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      posted: "3 days ago",
      tags: ["Node.js", "Python", "AWS", "Docker"],
      isRemote: true,
      isSaved: false
    },
    {
      id: 4,
      title: "Product Manager",
      company: "InnovateCo",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$130,000 - $160,000",
      posted: "Just now",
      tags: ["Agile", "Scrum", "Product Roadmap", "JIRA"],
      isRemote: false,
      isSaved: false
    },
    {
      id: 5,
      title: "DevOps Specialist",
      company: "CloudNine",
      location: "Remote",
      type: "Contract",
      salary: "$90 - $120/hr",
      posted: "5 days ago",
      tags: ["Kubernetes", "Terraform", "CI/CD", "Azure"],
      isRemote: true,
      isSaved: false
    },
    {
      id: 6,
      title: "Data Scientist",
      company: "AnalyticsPro",
      location: "Boston, MA (Hybrid)",
      type: "Full-time",
      salary: "$125,000 - $155,000",
      posted: "2 weeks ago",
      tags: ["Python", "Machine Learning", "Pandas", "SQL"],
      isRemote: true,
      isSaved: true
    },
    {
      id: 7,
      title: "Mobile App Developer",
      company: "Appify",
      location: "Remote",
      type: "Full-time",
      salary: "$100,000 - $130,000",
      posted: "3 days ago",
      tags: ["Flutter", "React Native", "iOS", "Android"],
      isRemote: true,
      isSaved: false
    },
    {
      id: 8,
      title: "AI Research Engineer",
      company: "DeepThink",
      location: "Nairobi, Kenya",
      type: "Full-time",
      salary: "KES 300,000",
      posted: "4 days ago",
      tags: ["Python", "TensorFlow", "PyTorch", "ML Ops"],
      isRemote: false,
      isSaved: false
    },
    {
      id: 9,
      title: "Content Strategist",
      company: "BrandSpeak",
      location: "Cape Town, SA",
      type: "Part-time",
      salary: "$60/hr",
      posted: "5 days ago",
      tags: ["SEO", "Copywriting", "Notion", "Content Planning"],
      isRemote: true,
      isSaved: false
    },
    {
      id: 10,
      title: "Cybersecurity Analyst",
      company: "SecureNow",
      location: "Lagos, Nigeria",
      type: "Full-time",
      salary: "$115,000",
      posted: "1 day ago",
      tags: ["Security+", "SOC", "Threat Analysis", "Splunk"],
      isRemote: false,
      isSaved: false
    }
  ]);

  const totalPages = Math.ceil(jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm) || 
    job.company.toLowerCase().includes(searchTerm) ||
    job.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  ).length / jobsPerPage);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedMode || (!localStorage.getItem('darkMode') && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', newMode);
  };

  const toggleSaveJob = (jobId) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, isSaved: !job.isSaved } : job
    ));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm) || 
    job.company.toLowerCase().includes(searchTerm) ||
    job.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleFilterClick = (filterType) => {
    console.log(`Filtering by ${filterType}`);
  };

  const handleJobCardClick = () => {
    console.log('Navigating to job details');
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        {/* Header */}
        <div className="header">
          <div>
            <h1 className="title">Find Your Dream Job</h1>
            <p className="subtitle">Browse through our latest job openings</p>
          </div>
          <button id="theme-toggle" className="theme-toggle" onClick={toggleDarkMode}>
            <FontAwesomeIcon 
              icon={darkMode ? faSun : faMoon} 
              className={darkMode ? 'text-yellow-300' : 'text-gray-700'} 
            />
          </button>
        </div>

        {/* Search and Filters */}
        <div className="search-section">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search jobs, companies, or keywords..." 
              className="search-input"
              onChange={handleSearch}
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
          <div className="filter-container">
            {["All Jobs", "Remote", "Full-time", "Contract", "Tech"].map(type => (
              <button key={type} className="filter-btn" onClick={() => handleFilterClick(type)}>
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings Grid */}
        <div className="job-listings-grid">
          {currentJobs.map(job => (
            <div key={job.id} className="job-card" onClick={handleJobCardClick}>
              <div className="job-card-header">
                <div>
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-company">{job.company}</p>
                </div>
                <button 
                  className="save-btn" 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSaveJob(job.id);
                  }}
                >
                  <FontAwesomeIcon 
                    icon={job.isSaved ? solidBookmark : regularBookmark} 
                    className={job.isSaved ? 'text-blue-500' : 'text-gray-300'} 
                  />
                </button>
              </div>
              <div className="job-meta">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span className="job-location">{job.location}</span>
                <FontAwesomeIcon icon={faClock} />
                <span className="job-type">{job.type}</span>
              </div>
              {job.salary && <p className="job-salary">{job.salary}</p>}
              <div className="job-tags">
                {job.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="job-footer">
                <span className="job-posted">Posted {job.posted}</span>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination-controls">
          <button 
            className="pagination-btn" 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="pagination-status">Page {currentPage} of {totalPages}</span>
          <button 
            className="pagination-btn" 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobListings;
