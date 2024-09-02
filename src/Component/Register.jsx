import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // Check if email is already registered
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}api/auth/register`,
        { email, username, password }
      );

      if (response.data.exists) {
        toast.error(response.data.message);
        return;
      }

      // Store token and redirect to /insert
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);
      toast.success('Registration successful!');
      navigate('/insert'); // Redirect to /insert after registration

    } catch (error) {
      toast.error('Registration error: ' + (error.response?.data?.message || 'Network error'));
    }
  };

  

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
    perspective: '1000px',
  };

  const boxStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    transform: 'rotateY(10deg)',
    transition: 'transform 0.6s ease',
    textAlign: 'center',
  };

  const boxHoverStyle = {
    transform: 'rotateY(0)',
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '25px',
    border: '2px solid #007BFF',
    outline: 'none',
    fontSize: '1rem',
    color: '#333',
    backgroundColor: '#f9f9f9',
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    margin: '20px 0',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#FF6600',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#cc5200',
  };

  const titleStyle = {
    fontSize: '2rem',
    color: '#007BFF',
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  const subtitleStyle = {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '30px',
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
        <h2 style={titleStyle}>Register</h2>
        <p style={subtitleStyle}>Create a new account by filling the form below.</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.border = '2px solid #FF6600')}
          onBlur={(e) => (e.currentTarget.style.border = '2px solid #007BFF')}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.border = '2px solid #FF6600')}
          onBlur={(e) => (e.currentTarget.style.border = '2px solid #007BFF')}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.border = '2px solid #FF6600')}
          onBlur={(e) => (e.currentTarget.style.border = '2px solid #007BFF')}
        />
        <button
          onClick={handleRegister}
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
        >
          Register
        </button>
        <p>
          Already have an account?{' '}
          <a
            href="/login"
            style={linkStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
          >
            Login here
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;


