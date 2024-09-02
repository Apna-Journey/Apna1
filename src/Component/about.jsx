import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {
  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#F4F4F4',
    padding: '20px',
    color: '#333',
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '800px',
    padding: '30px',
    borderRadius: '15px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#FF6600', // Orange
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'left',
  };

  const highlightStyle = {
    fontWeight: 'bold',
    color: '#007A33', // Green
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>About Apna Journey</h1>
        <p style={paragraphStyle}>
          At <span style={highlightStyle}>Apna Journey</span>, we are committed to revolutionizing how businesses manage and showcase their profiles. Our platform is designed to simplify the process of creating and updating company profiles, ensuring that businesses of all sizes can maintain an engaging and professional online presence.
        </p>
        <p style={paragraphStyle}>
          <span style={highlightStyle}>Apna Journey</span> offers a seamless experience for startups and established enterprises alike. Our intuitive interface and robust features empower users to effortlessly build and manage their profiles, share important updates, and connect with potential clients and partners. We understand the unique challenges faced by businesses in today’s competitive landscape, which is why we have tailored our platform to meet the needs of diverse businesses.
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
