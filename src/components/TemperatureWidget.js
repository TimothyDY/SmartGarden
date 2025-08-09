import React, { useState, useEffect } from 'react';
import { temperatureAPI } from '../services/api';
import config from '../config';
import './TemperatureWidget.css';

const TemperatureWidget = () => {
  const [currentData, setCurrentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCurrentTemperature = async () => {
    try {
      const data = await temperatureAPI.getCurrentTemperature();
      setCurrentData(data);
      setError(null);
    } catch (err) {
      setError('Unable to fetch temperature data');
      console.error('Error fetching current temperature:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentTemperature();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchCurrentTemperature, config.REFRESH_INTERVAL);
    
    return () => clearInterval(interval);
  }, []);

  const getTemperatureColor = (temp) => {
    if (temp < config.TEMPERATURE_THRESHOLDS.COLD) return '#3b82f6'; // Cold - Blue
    if (temp > config.TEMPERATURE_THRESHOLDS.HOT) return '#1d4ed8'; // Hot - Blue
    return '#10b981'; // Normal - Green
  };

  const getTemperatureStatus = (temp) => {
    if (temp < config.TEMPERATURE_THRESHOLDS.COLD) return 'Cold';
    if (temp > config.TEMPERATURE_THRESHOLDS.HOT) return 'Hot';
    return 'Normal';
  };

  if (loading) {
    return (
      <div className="temperature-widget loading">
        <div className="widget-content">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !currentData) {
    return (
      <div className="temperature-widget error">
        <div className="widget-content">
          <div className="widget-icon">⚠️</div>
          <p>Temperature data unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className="temperature-widget">
      <div className="widget-content">
        <div className="widget-header">
          <div className="widget-icon">🌡️</div>
          <h3>Live Temperature</h3>
        </div>
        <div className="widget-data">
          <div 
            className="temperature-value"
            style={{ color: getTemperatureColor(currentData.temperature) }}
          >
            {currentData.temperature}°C
          </div>
          <div className="temperature-status">
            {getTemperatureStatus(currentData.temperature)}
          </div>
          {currentData.humidity && (
            <div className="humidity-data">
              <span className="humidity-label">Humidity:</span>
              <span className="humidity-value">{currentData.humidity}%</span>
            </div>
          )}
        </div>
        <div className="widget-footer">
          <small>Last updated: {new Date(currentData.timestamp).toLocaleTimeString()}</small>
        </div>
      </div>
    </div>
  );
};

export default TemperatureWidget; 