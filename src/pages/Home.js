import React from 'react';
import { Link } from 'react-router-dom';
import TemperatureWidget from '../components/TemperatureWidget';
import Dashboard from '../components/Dashboard';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Smart Home Solutions for
              <span className="gradient-text"> Modern Living</span>
            </h1>
            <p className="hero-subtitle">
              Transform your home into an intelligent, connected environment with our cutting-edge smart home technology. 
              Monitor, control, and optimize your living space with ease.
            </p>
            <div className="hero-buttons">
              <Link to="/temperature" className="btn btn-primary">
                View Temperature Data
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="smart-home-illustration">
              <div className="house-icon">🏠</div>
              <div className="sensor-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
            <div className="temperature-widget-container">
              <TemperatureWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <Dashboard />

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Devices Connected</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 