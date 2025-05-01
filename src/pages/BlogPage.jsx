import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const BlogPageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    color: #003366;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .content {
    padding: 1.5rem;
    
    h2 {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      color: #003366;
    }
    
    p {
      color: #666;
      margin-bottom: 1rem;
    }
    
    .meta {
      color: #888;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    
    a {
      color: #0066cc;
      text-decoration: none;
      font-weight: bold;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Airport Parking Blog - Tips, Guides & Money-Saving Strategies</title>
        <meta name="description" content="Discover expert tips, comprehensive guides, and money-saving strategies for airport parking at all major US airports." />
        <meta name="keywords" content="airport parking blog, airport parking tips, save on airport parking, airport parking guides" />
        <link rel="canonical" href="https://yourdomain.com/blog" />
      </Helmet>
      
      <BlogPageContainer>
        <BlogPageHeader>
          <h1>Airport Parking Blog</h1>
          <p>Expert tips, guides, and strategies to help you save money and time on airport parking</p>
        </BlogPageHeader>
        
        <BlogGrid>
          <BlogCard>
            <img src="/images/blog-parking-strategies.jpg" alt="Airport Parking Strategies" />
            <div className="content">
              <h2>7 Smart Airport Parking Strategies Every Traveler Should Know</h2>
              <div className="meta">Published on April 28, 2025 · 8 min read</div>
              <p>Discover insider tips to save money and time on airport parking for your next trip. These expert strategies can help you avoid common mistakes and find the best deals.</p>
              <Link to="/blog/best-airport-parking-strategies">Read More →</Link>
            </div>
          </BlogCard>
          
          <BlogCard>
            <img src="/images/blog-save-money.jpg" alt="Save Money on Airport Parking" />
            <div className="content">
              <h2>How to Save Money on Airport Parking: The Complete Guide</h2>
              <div className="meta">Published on April 25, 2025 · 10 min read</div>
              <p>Learn proven methods to cut your airport parking costs by up to 70% with these expert tips. This comprehensive guide covers everything you need to know about finding the best deals.</p>
              <Link to="/blog/saving-money-on-airport-parking">Read More →</Link>
            </div>
          </BlogCard>
        </BlogGrid>
      </BlogPageContainer>
    </>
  );
}

export default BlogPage;