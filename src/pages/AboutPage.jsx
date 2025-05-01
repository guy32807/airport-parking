import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const AboutHeader = styled.div`
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2.5rem;
    color: #003366;
    margin-bottom: 1rem;
  }
`;

const AboutContent = styled.div`
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    color: #003366;
    margin: 2rem 0 1rem;
  }
`;

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Airport Parking Deals | Our Mission</title>
        <meta name="description" content="Learn about Airport Parking Deals and our mission to help travelers find affordable and convenient airport parking options nationwide." />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>
      
      <AboutContainer>
        <AboutHeader>
          <h1>About Airport Parking Deals</h1>
        </AboutHeader>
        
        <AboutContent>
          <p>
            Welcome to Airport Parking Deals, your trusted resource for finding affordable, secure, and convenient airport parking options across the United States.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to help travelers like you save time and money on airport parking. We believe that airport parking shouldn't be stressful or expensive, and we're dedicated to connecting you with the best options that match your needs and budget.
          </p>
          
          <h2>Why Choose Us</h2>
          <p>
            We partner with hundreds of parking facilities near major airports to offer you competitive rates that are often up to 70% less than standard airport parking prices. Our easy comparison platform allows you to find and reserve the perfect parking spot in just minutes.
          </p>
          
          <p>
            Whether you're a frequent business traveler or planning a family vacation, we're here to make at least one part of your journey—finding affordable airport parking—as easy as possible.
          </p>
        </AboutContent>
      </AboutContainer>
    </>
  );
}

export default AboutPage;