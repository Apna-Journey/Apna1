import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';



const NavbarStyled = styled.nav`
  background-color: #f8f9fa;
  padding: 15px 0;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #000;
  span:first-child {
    color: #FFA500;
  }
  span:last-child {
    color: #008000;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #006400;
  padding: 8px 16px;
  border-radius: 20px;
  border: 2px solid #006400;
  transition: all 0.3s ease;

  &:hover {
    background-color: #FFE4B5;
    color: #006400;
  }
`;

const UserGreeting = styled.span`
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  color: #0000FF;
  margin-right: 20px;
`;

const Nav = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <NavbarStyled>
      <NavContainer>
        <Logo to="/">
          <span>Apna</span><span>Journey</span>
        </Logo>
        <NavLinks>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/insert">Create Profile</NavLink>
          {token ? (
            <>
              <UserGreeting>Hello, {username}</UserGreeting>
              <NavLink as="button" onClick={handleLogout}>Logout</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </NavLinks>
      </NavContainer>
    </NavbarStyled>
  );
};

export default Nav;
