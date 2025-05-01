import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const Hero = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/airport-parking.jpg');
  background-size: cover;
  background-position: center;
  height: 70vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 1rem;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: #ff6b00;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #e65c00;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #003366;
  }
  
  p {
    color: #666;
  }
`;

const BlogPreviewSection = styled.section`
  background-color: #f9f9f9;
  padding: 4rem 1rem;
`;

const BlogPreviewContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #003366;
  }
`;

const BlogPostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const BlogPostCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .content {
    padding: 1.5rem;
    
    h3 {
      margin-bottom: 0.5rem;
    }
    
    p {
      color: #666;
      margin-bottom: 1rem;
    }
    
    a {
      color: #003366;
      text-decoration: none;
      font-weight: bold;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Airport Parking Deals - Save Up to 70% on Airport Parking</title>
        <meta name="description" content="Find the best airport parking deals nationwide. Save up to 70% on long-term and short-term airport parking at all major US airports." />
        <meta name="keywords" content="airport parking, cheap airport parking, discount airport parking, airport parking deals, long-term airport parking" />
        <meta property="og:title" content="Airport Parking Deals - Save Up to 70% on Airport Parking" />
        <meta property="og:description" content="Find the best airport parking deals nationwide. Save up to 70% on long-term and short-term airport parking at all major US airports." />
        <meta property="og:image" content="/images/airport-parking-social.jpg" />
        <meta property="og:url" content="https://airportparkingdeals.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Airport Parking Deals - Save Up to 70% on Airport Parking" />
        <meta name="twitter:description" content="Find the best airport parking deals nationwide. Save up to 70% on long-term and short-term airport parking at all major US airports." />
        <meta name="twitter:image" content="/images/airport-parking-social.jpg" />
        <link rel="canonical" href="https://airportparkingdeals.com" />
      </Helmet>

      <Hero>
        <HeroContent>
          <h1>Save Up to 70% on Airport Parking</h1>
          <p>Find and reserve the best deals on short-term and long-term parking at airports nationwide. Guaranteed lowest rates and secure reservations.</p>
          <CTAButton href="https://www.jdoqocy.com/click-9083409-10819559" target="_blank" rel="noopener noreferrer">
            Find Parking Deals Now
          </CTAButton>
        </HeroContent>
      </Hero>

      <FeaturesSection>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#003366' }}>Why Choose Us for Airport Parking?</h2>
        <FeaturesGrid>
          <FeatureCard>
            <h3>Save Up to 70%</h3>
            <p>Our special rates help you save significantly compared to parking directly at the airport.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Secure Reservations</h3>
            <p>Book in advance to guarantee your parking spot, even during busy travel seasons.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Free Cancellations</h3>
            <p>Plans change? No problem. Enjoy free cancellations with most of our parking options.</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <BlogPreviewSection>
        <BlogPreviewContent>
          <h2>Latest Parking Tips & Guides</h2>
          <BlogPostGrid>
            <BlogPostCard>
              <img src="/images/blog-parking-strategies.jpg" alt="Airport Parking Strategies" />
              <div className="content">
                <h3>7 Smart Airport Parking Strategies Every Traveler Should Know</h3>
                <p>Discover insider tips to save money and time on airport parking for your next trip...</p>
                <a href="/blog/best-airport-parking-strategies">Read More →</a>
              </div>
            </BlogPostCard>
            <BlogPostCard>
              <img src="/images/blog-save-money.jpg" alt="Save Money on Airport Parking" />
              <div className="content">
                <h3>How to Save Money on Airport Parking: The Complete Guide</h3>
                <p>Learn proven methods to cut your airport parking costs by up to 70% with these expert tips...</p>
                <a href="/blog/saving-money-on-airport-parking">Read More →</a>
              </div>
            </BlogPostCard>
          </BlogPostGrid>
        </BlogPreviewContent>
      </BlogPreviewSection>
    </>
  );
}

export default HomePage;