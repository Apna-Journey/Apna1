import React, { useState } from 'react';
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
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

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const UserGreeting = styled.span`
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  color: #0000FF;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarStyled>
      <NavContainer>
        <Logo to="/">
          <span>Apna</span><span>Journey</span>
        </Logo>
        <HamburgerButton onClick={toggleMenu}>☰</HamburgerButton>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/home" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/insert" onClick={() => setIsOpen(false)}>Create Profile</NavLink>
          {token ? (
            <>
              <UserGreeting>Hello, {username}</UserGreeting>
              <NavLink as="button" onClick={() => { handleLogout(); setIsOpen(false); }}>Logout</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login" onClick={() => setIsOpen(false)}>Login</NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>

            </>
          )}
        </NavLinks>
      </NavContainer>
    </NavbarStyled>
  );
};

export default Nav;