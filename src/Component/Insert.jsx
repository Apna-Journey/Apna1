import React, { useState } from "react";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Insert = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    title: "",
    author: "",
    descrip: "",
    price: ""
  });

  function fromdatafun(e) {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  async function submitfun(e) {
    e.preventDefault();
    if (!formdata.title || !formdata.author || !formdata.descrip || !formdata.price) {
      toast.error("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:8800/api/book/", formdata);
      toast.success("Insertion successful!");
      setFormdata({
        title: "",
        author: "",
        descrip: "",
        price: ""
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Error occurred during insertion!");
    }
  }

  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#E0F7FA', // Light teal background
    padding: '20px',
    perspective: '1000px',
  };

  const formStyle = {
    width: '100%',
    maxWidth: '550px',
    padding: '40px',
    borderRadius: '12px',
    backgroundColor: '#FFFFFF', // White background for the form
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
    transform: 'rotateY(5deg)',
    transition: 'all 0.5s ease',
    textAlign: 'center',
    position: 'relative',
  };

  const formHoverStyle = {
    transform: 'rotateY(0)',
  };

  const titleStyle = {
    color: '#00796B', // Teal color
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '2.2rem',
    fontWeight: 'bold',
    textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
  };

  const inputStyle = {
    width: '100%',
    padding: '14px',
    marginBottom: '18px',
    border: '2px solid #B0BEC5', // Light grey-blue border
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    color: '#455A64', // Dark grey color
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    width: '100%',
    padding: '14px',
    backgroundColor: '#FF7043', // Coral color
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const buttonHoverStyle = {
    backgroundColor: '#FF5722', // Darker coral on hover
  };

  return (
    <div style={pageStyle}>
      <div 
        style={formStyle} 
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, formHoverStyle)}
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, formStyle)}
      >
        <h1 style={titleStyle}>Create Profile</h1>
        <form onSubmit={submitfun}>
          <div>
            <label style={labelStyle}>Company Name and Industry</label>
            <input
              type="text"
              style={inputStyle}
              onChange={fromdatafun}
              name="title"
              value={formdata.title}
              placeholder="Enter company name and industry"
              onFocus={(e) => e.currentTarget.style.borderColor = '#00796B'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#B0BEC5'}
            />
          </div>
          <div>
            <label style={labelStyle}>Website Link</label>
            <input
              type="text"
              style={inputStyle}
              onChange={fromdatafun}
              name="author"
              value={formdata.author}
              placeholder="Enter website link"
              onFocus={(e) => e.currentTarget.style.borderColor = '#00796B'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#B0BEC5'}
            />
          </div>
          <div>
            <label style={labelStyle}>Description (No. of Employees, Location etc.)</label>
            <input
              type="text"
              style={inputStyle}
              onChange={fromdatafun}
              name="descrip"
              value={formdata.descrip}
              placeholder="Enter company description"
              onFocus={(e) => e.currentTarget.style.borderColor = '#00796B'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#B0BEC5'}
            />
          </div>
          <div>
            <label style={labelStyle}>Year of Foundation</label>
            <input
              type="number"
              style={inputStyle}
              onChange={fromdatafun}
              name="price"
              value={formdata.price}
              placeholder="Enter foundation year"
              onFocus={(e) => e.currentTarget.style.borderColor = '#00796B'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#B0BEC5'}
            />
          </div>

          <button 
            type="submit" 
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
          >
            Create Profile
          </button>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Insert;
