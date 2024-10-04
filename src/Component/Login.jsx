import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/auth/login`, formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);
      toast.success("Login successful!");

      // Check if there is form data to create a profile
      if (location.state?.formData) {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/company`, location.state.formData);
        toast.success("Company profile created successfully!");
      }

      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f4f8',
    perspective: '1000px',
    padding: '20px',
  };

  const boxStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: 'clamp(20px, 5vw, 40px)',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    transform: 'rotateY(10deg)',
    transition: 'transform 0.6s ease',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      transform: 'none',
    },
  };

  const boxHoverStyle = {
    transform: 'rotateY(0)',
  };

  const inputStyle = {
    width: '100%',
    padding: 'clamp(10px, 3vw, 15px)',
    margin: '10px 0',
    borderRadius: '25px',
    border: '2px solid #007BFF',
    outline: 'none',
    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
    color: '#333',
    backgroundColor: '#f9f9f9',
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    width: '100%',
    padding: 'clamp(10px, 3vw, 15px)',
    margin: '20px 0',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#FF6600',
    color: '#fff',
    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const titleStyle = {
    fontSize: 'clamp(1.5rem, 5vw, 2rem)',
    color: '#007BFF',
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  const linkStyle = {
    color: '#007BFF',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <div 
        style={boxStyle} 
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, boxHoverStyle)}
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, boxStyle)}
      >
        <h2 style={titleStyle}>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => e.currentTarget.style.border = '2px solid #FF6600'}
          onBlur={(e) => e.currentTarget.style.border = '2px solid #007BFF'}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => e.currentTarget.style.border = '2px solid #FF6600'}
          onBlur={(e) => e.currentTarget.style.border = '2px solid #007BFF'}
          required
        />
        <button type="submit" onClick={handleSubmit} style={buttonStyle}>
          Login
        </button>
        <p>
          Don't have an account? 
          <Link 
            to="/register" 
            style={linkStyle} 
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
          > Register here</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;