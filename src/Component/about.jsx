import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {
  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7f9fc', // Light grayish blue background
    padding: '40px 20px',
    color: '#333',
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '900px',
    padding: '40px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '2.4rem',
    color: '#2c3e50', // Dark blue
    marginBottom: '30px',
    fontWeight: '700',
    borderBottom: '2px solid #e6eaee',
    paddingBottom: '15px',
  };

  const paragraphStyle = {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    color: '#4a5568', // Dark gray
    marginBottom: '25px',
    textAlign: 'justify',
  };

  const highlightStyle = {
    fontWeight: '600',
    color: '#38a169', // Soft green
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>About Apna Journey</h1>
        <p style={paragraphStyle}>
          At <span style={highlightStyle}>Apna Journey</span>, we are committed to revolutionizing how businesses manage and showcase their profiles. Our platform is designed to simplify the process of creating and updating company profiles, ensuring that businesses of all sizes can maintain an engaging and professional online presence.
        </p>
        <p style={paragraphStyle}>
          <span style={highlightStyle}>Apna Journey</span> offers a seamless experience for startups and established enterprises alike. Our intuitive interface and robust features empower users to effortlessly build and manage their profiles, share important updates, and connect with potential clients and partners. We understand the unique challenges faced by businesses in today's competitive landscape, which is why we have tailored our platform to meet the needs of diverse businesses.
        </p>
        <p style={paragraphStyle}>
          Whether you're a small startup or a growing enterprise, <span style={highlightStyle}>Apna Journey</span> provides you with the tools to create and maintain an accurate and engaging profile. Our goal is to help you enhance your business visibility and streamline your profile management with minimal effort.
        </p>
        <p style={paragraphStyle}>
          We believe in the power of a well-managed profile to attract and retain clients, build partnerships, and showcase your company's unique value. With <span style={highlightStyle}>Apna Journey</span>, you can focus on what you do best while we take care of the details.
        </p>
        <p style={paragraphStyle}>
          Join us on this journey to elevate your business presence and connect with a vibrant community of startups and professionals. We are dedicated to supporting your growth and helping you achieve your business goals with ease.
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default About;