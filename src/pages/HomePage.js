import React, { useEffect, useState } from 'react';
import AboutPage from './AboutPage';
import '../styles/HomePage.css';
import slide1 from '../assets/alien-cube.JPG';
import slide2 from '../assets/kim-silks-ambient.JPG';
import slide3 from '../assets/business-lyra.jpg';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: slide1
  },
  {
    image: slide2
  },
  {
    image: slide3
  },
];

const HomePage = () => {

  return (
    <div className="home-container">
      <Slideshow/>
      <HireUsBlurb/>
    </div>
  );
};

function Slideshow () {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return <div className="slide-container">
    <div className="welcome-text">
      <p className="welcome">Welcome to</p>
      <i>Highly Classified</i>
      <p className="description">Denver’s finest in aerial entertainment</p>
    </div>
    <div className="slideshow">
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          key={index}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay">
            <h1 className="slide-text">{slide.text}</h1>
          </div>
        </div>
      ))}
    </div>
  </div>;
}

function HireUsBlurb () {
  return <div className="services-section" id="services">
  <h2 className="section-title">What We Offer</h2>
  <p className="services-description">
    In addition to our captivating stage performances, Highly Classified LLC is available for custom events and experiences. Our performers bring elegance and excitement to any atmosphere with:
  </p>
  <ul className="services-list">
    <li>✨ Aerial Champagne Service</li>
    <li>✨ Immersive Ambient Performance</li>
    <li>✨ Feature Appearances in Shows & Production</li>
  </ul>
  <a className="hire-link"><u>Hire us for your Corporate Function, Private Party, Wedding, or Event!</u></a>
</div>
}

export default HomePage;
