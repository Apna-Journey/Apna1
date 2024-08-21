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

      await axios.post('http://localhost:8800/api/auth/register', {
        email,
        username,
        password
      });
      toast.success('Registration successful!');
      navigate('/login'); // Redirect to login page after registration
    } catch (error) {
      toast.error('Registration error: ' + (error.response?.data?.message || 'Network error'));
    }
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8', // Light background color
    perspective: '1000px', // 3D effect
  };

  const boxStyle = {
    width: '400px',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', // Shadow for 3D effect
    backgroundColor: '#ffffff',
    transform: 'rotateY(10deg)', // 3D rotation
    transition: 'transform 0.6s ease',
    textAlign: 'center',
  };

  const boxHoverStyle = {
    transform: 'rotateY(0)', // Reset rotation on hover
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
    backgroundColor: '#cc5200', // Darker orange on hover
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
          onChange={e => setEmail(e.target.value)} 
          style={inputStyle} 
          onFocus={(e) => e.currentTarget.style.border = '2px solid #FF6600'}
          onBlur={(e) => e.currentTarget.style.border = '2px solid #007BFF'}
        />
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          style={inputStyle} 
          onFocus={(e) => e.currentTarget.style.border = '2px solid #FF6600'}
          onBlur={(e) => e.currentTarget.style.border = '2px solid #007BFF'}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          style={inputStyle} 
          onFocus={(e) => e.currentTarget.style.border = '2px solid #FF6600'}
          onBlur={(e) => e.currentTarget.style.border = '2px solid #007BFF'}
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
          Already have an account? 
          <a 
            href="/login" 
            style={linkStyle} 
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
          > Login here</a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
