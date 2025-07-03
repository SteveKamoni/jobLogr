import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faFilter, 
  faChevronLeft, 
  faChevronRight,
  faClock,
  faCheckCircle,
  faTimesCircle,
  faCalendarCheck,
  faMapMarkerAlt,
  faUserTie,
  faCalendarDay,
  faDollarSign,
  faEdit,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import './applications.css';

const Applications = () => {
  // Mock data for applications
  const applicationsData = [
    {
      id: 1,
      jobTitle: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      status: "pending",
      appliedDate: "2023-05-15",
      location: "Remote",
      level: "Senior",
      salary: "$120k - $150k",
      description: "Looking for an experienced React developer to join our team."
    },
    {
      id: 2,
      jobTitle: "UX Designer",
      company: "DesignHub",
      status: "interview",
      appliedDate: "2023-05-10",
      location: "New York, NY",
      level: "Mid-level",
      salary: "$90k - $110k",
      description: "Join our design team to create beautiful user experiences."
    },
    {
      id: 3,
      jobTitle: "Backend Engineer",
      company: "DataSystems",
      status: "accepted",
      appliedDate: "2023-04-28",
      location: "San Francisco, CA",
      level: "Senior",
      salary: "$130k - $160k",
      description: "Node.js and Python experience required for this position."
    },
    {
      id: 4,
      jobTitle: "Product Manager",
      company: "InnovateCo",
      status: "rejected",
      appliedDate: "2023-05-01",
      location: "Chicago, IL",
      level: "Mid-level",
      salary: "$110k - $140k",
      description: "Lead product development for our SaaS platform."
    },
    {
      id: 5,
      jobTitle: "DevOps Engineer",
      company: "CloudSolutions",
      status: "pending",
      appliedDate: "2023-05-18",
      location: "Remote",
      level: "Senior",
      salary: "$125k - $155k",
      description: "AWS and Kubernetes expertise needed for this role."
    },
    {
      id: 6,
      jobTitle: "Data Scientist",
      company: "AnalyticsPro",
      status: "interview",
      appliedDate: "2023-05-12",
      location: "Boston, MA",
      level: "Senior",
      salary: "$140k - $170k",
      description: "Machine learning and Python skills required."
    },
    {
      id: 7,
      jobTitle: "Mobile Developer",
      company: "AppWorks",
      status: "pending",
      appliedDate: "2023-05-05",
      location: "Austin, TX",
      level: "Mid-level",
      salary: "$95k - $120k",
      description: "React Native developer needed for cross-platform apps."
    },
    {
      id: 8,
      jobTitle: "QA Engineer",
      company: "TestRight",
      status: "accepted",
      appliedDate: "2023-04-20",
      location: "Remote",
      level: "Junior",
      salary: "$75k - $90k",
      description: "Automated testing experience with Selenium required."
    },
    {
      id: 9,
      jobTitle: "Technical Writer",
      company: "DocuTech",
      status: "rejected",
      appliedDate: "2023-05-03",
      location: "Portland, OR",
      level: "Mid-level",
      salary: "$80k - $100k",
      description: "Create documentation for our developer tools."
    },
    {
      id: 10,
      jobTitle: "Security Engineer",
      company: "SafeNet",
      status: "pending",
      appliedDate: "2023-05-20",
      location: "Remote",
      level: "Senior",
      salary: "$135k - $165k",
      description: "Cybersecurity expert needed for our infrastructure."
    },
    {
      id: 11,
      jobTitle: "Full Stack Developer",
      company: "WebCraft",
      status: "interview",
      appliedDate: "2023-05-08",
      location: "Denver, CO",
      level: "Mid-level",
      salary: "$100k - $130k",
      description: "JavaScript full stack position with modern frameworks."
    },
    {
      id: 12,
      jobTitle: "UI Developer",
      company: "PixelPerfect",
      status: "pending",
      appliedDate: "2023-05-14",
      location: "Seattle, WA",
      level: "Junior",
      salary: "$85k - $105k",
      description: "HTML/CSS expert needed for frontend development."
    }
  ];

  // Pagination state
  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(applicationsData.length / cardsPerPage);

  // Get current applications
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentApplications = applicationsData.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  // Render page numbers
  const renderPageNumbers = () => {
    const maxVisiblePages = 5;
    let startPage, endPage;
    
    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const half = Math.floor(maxVisiblePages / 2);
      if (currentPage <= half + 1) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage >= totalPages - half) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - half;
        endPage = currentPage + half;
      }
    }

    const pageNumbers = [];
    
    if (startPage > 1) {
      pageNumbers.push(
        <span key="start-ellipsis" className="px-3 py-1">...</span>
      );
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`px-3 py-1 rounded-md ${currentPage === i ? 'bg-blue-600' : 'hover:bg-slate-800'}`}
        >
          {i}
        </button>
      );
    }
    
    if (endPage < totalPages) {
      pageNumbers.push(
        <span key="end-ellipsis" className="px-3 py-1">...</span>
      );
    }
    
    return pageNumbers;
  };

  // Get status icon
  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return faClock;
      case 'accepted': return faCheckCircle;
      case 'rejected': return faTimesCircle;
      case 'interview': return faCalendarCheck;
      default: return null;
    }
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="applications-container">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Applications</h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-slate-400">Track and manage your job applications</p>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md flex items-center gap-2 w-full md:w-auto justify-center">
              <FontAwesomeIcon icon={faPlus} /> Add Application
            </button>
            <button className="border border-slate-700 hover:bg-slate-800 px-4 py-2 rounded-md flex items-center gap-2 w-full md:w-auto justify-center">
              <FontAwesomeIcon icon={faFilter} /> Filter
            </button>
          </div>
        </div>
      </header>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-slate-400 text-sm">Total Applications</p>
          <p className="text-2xl font-bold">24</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-slate-400 text-sm">Pending</p>
          <p className="text-2xl font-bold">8</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-slate-400 text-sm">Accepted</p>
          <p className="text-2xl font-bold">3</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-slate-400 text-sm">Rejected</p>
          <p className="text-2xl font-bold">5</p>
        </div>
      </div>

      {/* Applications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentApplications.map((app) => {
          const statusClass = `status-${app.status}`;
          const statusText = app.status.charAt(0).toUpperCase() + app.status.slice(1);
          
          return (
            <div 
              key={app.id} 
              className="application-card bg-slate-800 rounded-xl p-6 border border-slate-700 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{app.jobTitle}</h3>
                  <p className="text-slate-400">{app.company}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusClass}`}>
                  <FontAwesomeIcon icon={getStatusIcon(app.status)} className="mr-1" />
                  {statusText}
                </span>
              </div>
              
              <p className="text-slate-300 mb-4 flex-grow">{app.description}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center text-slate-400">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  <span>{app.location}</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <FontAwesomeIcon icon={faUserTie} className="mr-2" />
                  <span>{app.level}</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <FontAwesomeIcon icon={faCalendarDay} className="mr-2" />
                  <span>{formatDate(app.appliedDate)}</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                  <span>{app.salary}</span>
                </div>
              </div>
              
              <div className="flex gap-2 mt-auto">
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md flex-1 text-center">
                  <FontAwesomeIcon icon={faEdit} className="mr-2" /> Update
                </button>
                <button className="border border-slate-700 hover:bg-slate-700 px-4 py-2 rounded-md">
                  <FontAwesomeIcon icon={faEllipsisH} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4">
        <button 
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-md border border-slate-700 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FontAwesomeIcon icon={faChevronLeft} /> Previous
        </button>
        <div className="flex gap-2">
          {renderPageNumbers()}
        </div>
        <button 
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-md border border-slate-700 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Applications;