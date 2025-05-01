import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPost1 from './pages/BlogPost1';
import BlogPost2 from './pages/BlogPost2';
import AboutPage from './pages/AboutPage';
import './App.css';

// Get the base name from the package.json homepage or default to "/"
const getBasename = () => {
  try {
    // Extract the path from the homepage URL if it exists
    const { homepage } = require('../package.json');
    if (homepage) {
      // Parse the URL to get the pathname
      return new URL(homepage).pathname;
    }
  } catch (e) {
    // Silent error - fall back to "/"
  }
  return '/';
};

function App() {
  return (
    <HelmetProvider>
      <Router basename={getBasename()}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/best-airport-parking-strategies" element={<BlogPost1 />} />
            <Route path="/blog/saving-money-on-airport-parking" element={<BlogPost2 />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
