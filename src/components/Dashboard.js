import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { temperatureAPI, healthAPI } from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const [currentData, setCurrentData] = useState(null);
  const [statsData, setStatsData] = useState(null);
  const [apiHealth, setApiHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [current, stats, health] = await Promise.allSettled([
        temperatureAPI.getCurrentTemperature(),
        temperatureAPI.getTemperatureStats(),
        healthAPI.checkHealth()
      ]);

      if (current.status === 'fulfilled') {
        setCurrentData(current.value);
      }

      if (stats.status === 'fulfilled') {
        setStatsData(stats.value);
      }

      if (health.status === 'fulfilled') {
        setApiHealth(health.value);
      }

      setError(null);
    } catch (err) {
      setError('Failed to load dashboard data');
      console.error('Error fetching dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    
    // Refresh every 60 seconds
    const interval = setInterval(fetchDashboardData, 60000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="dashboard-header">
            <h2>System Dashboard</h2>
            <div className="loading-spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h2>System Dashboard</h2>
          <button onClick={fetchDashboardData} className="btn btn-secondary">
            🔄 Refresh
          </button>
        </div>

        {error && (
          <div className="error-banner">
            <p>⚠️ {error}</p>
          </div>
        )}

        <div className="dashboard-grid">
          {/* Current Temperature */}
          {currentData && (
            <div className="dashboard-card temperature-card">
              <div className="card-header">
                <h3>Current Environment</h3>
                <span className="card-icon">🌡️</span>
              </div>
              <div className="card-content">
                <div className="temperature-display">
                  <span className="temperature-value">{currentData.temperature}°C</span>
                  {currentData.humidity && (
                    <span className="humidity-value">{currentData.humidity}% RH</span>
                  )}
                </div>
                <p className="location-info">
                  📍 {currentData.location || 'Unknown Location'}
                </p>
                <p className="timestamp-info">
                  Last updated: {new Date(currentData.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          )}

          {/* Statistics */}
          {statsData && (
            <div className="dashboard-card stats-card">
              <div className="card-header">
                <h3>Statistics</h3>
                <span className="card-icon">📊</span>
              </div>
              <div className="card-content">
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-label">Average</span>
                    <span className="stat-value">{statsData.average_temperature}°C</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Min</span>
                    <span className="stat-value">{statsData.min_temperature}°C</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Max</span>
                    <span className="stat-value">{statsData.max_temperature}°C</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Humidity</span>
                    <span className="stat-value">{statsData.average_humidity}%</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="dashboard-card actions-card">
            <div className="card-header">
              <h3>Quick Actions</h3>
              <span className="card-icon">⚡</span>
            </div>
            <div className="card-content">
              <div className="actions-grid">
                <Link to="/temperature" className="action-btn primary">
                  📈 View Details
                </Link>
                <button 
                  onClick={async () => {
                    try {
                      await temperatureAPI.generateDummyData();
                      fetchDashboardData();
                    } catch (err) {
                      console.error('Error generating dummy data:', err);
                    }
                  }} 
                  className="action-btn secondary"
                >
                  🔄 Generate Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 