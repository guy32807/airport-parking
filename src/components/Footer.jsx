import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #003366;
  color: white;
  padding: 2rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const FooterSection = styled.div`
  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: #ccc;
    text-decoration: none;
    
    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #335577;
  
  p {
    color: #ccc;
    font-size: 0.9rem;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Airport Parking Deals</h3>
          <p>Finding you the best deals on airport parking nationwide.</p>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Popular Airports</h3>
          <ul>
            <li><a href="https://www.jdoqocy.com/click-9083409-10819559" target="_blank" rel="noopener noreferrer">JFK Airport</a></li>
            <li><a href="https://www.jdoqocy.com/click-9083409-10819559" target="_blank" rel="noopener noreferrer">LAX Airport</a></li>
            <li><a href="https://www.jdoqocy.com/click-9083409-10819559" target="_blank" rel="noopener noreferrer">O'Hare Airport</a></li>
            <li><a href="https://www.jdoqocy.com/click-9083409-10819559" target="_blank" rel="noopener noreferrer">Miami Airport</a></li>
          </ul>
        </FooterSection>
      </FooterContent>
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Airport Parking Deals. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;