import React from "react";
import "./dashboard.css";

const jobs = [
  {
    title: "Backend Developer",
    company: "Netflix",
    location: "Remote",
    tags: ["Full-time", "Senior"],
    badge: "Recommended",
    description:
      "We're looking for an experienced backend developer to join our streaming team. You'll work on scalable microservices...",
  },
  {
    title: "Product Manager",
    company: "Spotify",
    location: "New York",
    tags: ["Full-time", "Mid-level"],
    badge: "Top Company",
    description:
      "Lead the development of new features for our music streaming platform. Work with cross-functional teams...",
  },
  {
    title: "DevOps Engineer",
    company: "Airbnb",
    location: "San Francisco",
    tags: ["Full-time", "Senior"],
    badge: "Urgent",
    description:
      "Join our infrastructure team to build and maintain our cloud infrastructure. Experience with Kubernetes and AWS required.",
  },
  {
    title: "UI/UX Designer",
    company: "Adobe",
    location: "Remote",
    tags: ["Full-time", "Mid-level"],
    badge: "Recommended",
    description:
      "Design intuitive interfaces for our creative tools. Strong portfolio required. Experience with Figma and Adobe XD...",
  },
  {
    title: "Data Analyst",
    company: "Uber",
    location: "Nairobi",
    tags: ["Full-time", "Junior"],
    description:
      "Analyze rider and driver data to improve services in the African market. SQL and Python experience required.",
  },
  {
    title: "Mobile Developer",
    company: "TikTok",
    location: "Remote",
    tags: ["Full-time", "Mid-level"],
    badge: "Top Company",
    description:
      "Develop new features for our iOS and Android apps. Experience with React Native or native mobile development...",
  },
];

function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Welcome back, Steve <span className="online-dot">🟢</span></h2>
        <p>Here's a quick look at your job search activity.</p>

<section className="applications-section">
  <h3>Your Applications</h3>
  <div className="applications-grid">
    {[
      {
        title: "Data Scientist",
        company: "Microsoft",
        status: "Rejected",
        date: "April 10, 2025",
        tags: ["Full-time", "Entry-level"],
      },
      {
        title: "Backend Developer",
        company: "Netflix",
        status: "Accepted",
        date: "March 22, 2025",
        tags: ["Remote", "Senior"],
      },
      {
        title: "Product Manager",
        company: "Spotify",
        status: "Pending",
        date: "April 5, 2025",
        tags: ["Full-time", "Mid-level"],
      },
            {
        title: "Product Manager",
        company: "Spotify",
        status: "Pending",
        date: "April 5, 2025",
        tags: ["Full-time", "Mid-level"],
      }
    ].map((app, index) => (
      <div className={`application-card ${app.status.toLowerCase()}`} key={index}>
        <div className="card-top">
          <div>
            <h4>{app.title}</h4>
            <p className="company">{app.company}</p>
            <span className={`badge ${app.status.toLowerCase()}`}>{app.status}</span>
          </div>
          <div className="card-right">
            <p className="meta">Applied: {app.date}</p>
            <div className="tags">
              {app.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
            <button className="update-btn">Update Status</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      </section>

      {/* Job Recommendations */}
      <section className="jobs-section">
        <div className="jobs-header">
          <h3>Recommended Jobs</h3>
          <div className="filters">
            <select>
              <option>All Types</option>
              <option>Full-time</option>
              <option>Part-time</option>
            </select>
            <select>
              <option>All Locations</option>
              <option>Remote</option>
              <option>Nairobi</option>
              <option>New York</option>
            </select>
          </div>
        </div>

        <div className="jobs-grid">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <div className="job-header">
                <h4>{job.title}</h4>
                {job.badge && (
                  <span
                    className={`job-badge ${job.badge
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {job.badge}
                  </span>
                )}
              </div>
              <p className="company">{job.company}</p>
              <p className="location">
                <i className="fas fa-map-marker-alt"></i> {job.location}
              </p>
              <p className="desc">{job.description}</p>
              <div className="tags">
                {job.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button>&lt;</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>&gt;</button>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
