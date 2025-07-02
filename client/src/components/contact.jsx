import React, { useState } from "react";
import "./contact.css";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          acceptTerms: false,
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Email send error:", err);
      alert("An error occurred. Try again later.");
    }
  };

  return (
    <section className="contact-container">
      {/* Left Section */}
      <div className="contact-left">
        <div className="contact-intro">
          <p className="subtle-text">ORDER OUT OF THE JOB SEARCH MESS</p>
          <h1>CONTACT US</h1>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              required
            />
          </div>

          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="acceptTerms">I accept the Terms</label>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="contact-right">
        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">
              <MdEmail size={24} />
            </div>
            <p className="info-label">Email</p>
            <p className="info-value">stevekamoni4@gmail.com</p>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <MdPhone size={24} />
            </div>
            <p className="info-label">Phone</p>
            <p className="info-value">+254 (797) 356-687</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
