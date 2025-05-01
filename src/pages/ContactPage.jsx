import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const ContactHeader = styled.div`
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2.5rem;
    color: #003366;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

const ContactForm = styled.form`
  background-color: #f5f9ff;
  padding: 2rem;
  border-radius: 8px;
  
  .form-group {
    margin-bottom: 1.5rem;
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
      color: #003366;
    }
    
    input, textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
      
      &:focus {
        outline: none;
        border-color: #0066cc;
        box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
      }
    }
    
    textarea {
      min-height: 150px;
    }
  }
  
  button {
    background-color: #ff6b00;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: #e65c00;
    }
  }
`;

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Airport Parking Deals</title>
        <meta name="description" content="Have questions about airport parking? Get in touch with our team for assistance finding the best parking options for your trip." />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Helmet>
      
      <ContactContainer>
        <ContactHeader>
          <h1>Contact Us</h1>
          <p>Have questions or feedback? We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.</p>
        </ContactHeader>
        
        <ContactForm onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" required></textarea>
          </div>
          
          <button type="submit">Send Message</button>
        </ContactForm>
      </ContactContainer>
    </>
  );
}

export default ContactPage;