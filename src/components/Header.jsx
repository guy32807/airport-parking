import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #003366;
  color: white;
  padding: 1rem 0;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  
  a {
    color: white;
    text-decoration: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  
  li {
    margin-left: 2rem;
  }
  
  a {
    color: white;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <Link to="/">Airport Parking Deals</Link>
        </Logo>
        <NavLinks>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;