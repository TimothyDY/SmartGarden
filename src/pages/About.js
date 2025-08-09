import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">About SmartGarden</h1>
          <p className="about-subtitle">
            Revolutionizing home monitoring with cutting-edge temperature and humidity tracking technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              SmartGarden is dedicated to providing homeowners with intelligent, real-time environmental monitoring solutions. 
              We believe that understanding your home's environment is the first step toward creating a healthier, more comfortable living space.
            </p>
            <p>
              Our advanced temperature and humidity monitoring system helps you maintain optimal conditions for your family, 
              pets, and plants, ensuring your home environment is always at its best.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="technology">
        <div className="container">
          <h2>Our Technology</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">🌡️</div>
              <h3>Real-time Monitoring</h3>
              <p>
                Advanced sensors provide instant temperature and humidity readings, 
                updating every 30 seconds to give you the most current data.
              </p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">📊</div>
              <h3>Data Analytics</h3>
              <p>
                Comprehensive statistics and historical data help you understand 
                patterns and trends in your home's environmental conditions.
              </p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🔗</div>
              <h3>Smart Integration</h3>
              <p>
                Built with modern web technologies, our system integrates seamlessly 
                with your existing smart home ecosystem.
              </p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">📱</div>
              <h3>Mobile Access</h3>
              <p>
                Monitor your home environment from anywhere with our responsive 
                web interface that works on all devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2>Our Team</h2>
          <div className="team-content">
            <p>
              SmartGarden was developed by a passionate team of developers and engineers 
              who understand the importance of a healthy home environment. We combine 
              expertise in IoT technology, web development, and environmental science 
              to create solutions that truly make a difference.
            </p>
            <p>
              Our commitment to quality, innovation, and user experience drives everything we do. 
              We're constantly working to improve our technology and add new features 
              that help you better understand and control your home environment.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Innovation</h3>
              <p>Continuously pushing the boundaries of what's possible in home monitoring technology.</p>
            </div>
            <div className="value-item">
              <h3>Reliability</h3>
              <p>Providing accurate, consistent data you can trust to make informed decisions.</p>
            </div>
            <div className="value-item">
              <h3>Simplicity</h3>
              <p>Making complex environmental monitoring accessible and easy to understand.</p>
            </div>
            <div className="value-item">
              <h3>Quality</h3>
              <p>Delivering robust, well-tested solutions that stand the test of time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
