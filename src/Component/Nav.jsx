import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarStyled = styled.nav`
  background-color: #fff; /* Subtle and neutral background */
  border-bottom: 1px solid #eaeaea; /* Professional border at the bottom */
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow for depth */
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 15px;
  }
`;

const Logo = styled(Link)`
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
  color: #333; /* Dark color for text */
  letter-spacing: 0.5px;

  span:first-child {
    color: #333; /* Consistent with overall color scheme */
  }
  span:last-child {
    color: #555; /* Slight variation for emphasis */
  }

  &:hover {
    color: #000;
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
    padding: 20px 0;
    background-color: #fff;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
    color: #000;
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
  color: #555;
  margin-right: 15px;
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: #333;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    border: 2px solid #333;
  }
`;

const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const avatarUrl = localStorage.getItem('avatar'); // Assuming you store an avatar URL.

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('avatar');
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
        <HamburgerButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </HamburgerButton>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/home" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/insert" onClick={() => setIsOpen(false)}>Create Profile</NavLink>
          {token ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {avatarUrl && <Avatar src={avatarUrl} alt="avatar" />}
                <UserGreeting>Hello, {username}</UserGreeting>
              </div>
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