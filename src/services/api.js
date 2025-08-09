import axios from 'axios';
import config from '../config';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: config.API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API endpoints
export const endpoints = {
  currentTemperature: '/api/temperature',
  temperatureHistory: '/api/temperature/history',
  temperatureStats: '/api/temperature/stats',
  generateDummy: '/api/temperature/generate-dummy',
  health: '/api/health',
};

// API service functions
export const temperatureAPI = {
  // Get current temperature data
  getCurrentTemperature: async () => {
    try {
      const response = await api.get(endpoints.currentTemperature);
      return response.data;
    } catch (error) {
      console.error('Error fetching current temperature:', error);
      throw error;
    }
  },

  // Get temperature history
  getTemperatureHistory: async () => {
    try {
      const response = await api.get(endpoints.temperatureHistory);
      return response.data;
    } catch (error) {
      console.error('Error fetching temperature history:', error);
      throw error;
    }
  },

  // Get temperature statistics
  getTemperatureStats: async () => {
    try {
      const response = await api.get(endpoints.temperatureStats);
      return response.data;
    } catch (error) {
      console.error('Error fetching temperature stats:', error);
      throw error;
    }
  },

  // Generate dummy data (for testing)
  generateDummyData: async () => {
    try {
      const response = await api.get(endpoints.generateDummy);
      return response.data;
    } catch (error) {
      console.error('Error generating dummy data:', error);
      throw error;
    }
  },
};

// Health check
export const healthAPI = {
  checkHealth: async () => {
    try {
      const response = await api.get(endpoints.health);
      return response.data;
    } catch (error) {
      console.error('Error checking API health:', error);
      throw error;
    }
  },
};

export default api; 