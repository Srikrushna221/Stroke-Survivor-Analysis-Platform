import axios from 'axios';

const API_URL = 'http://localhost:3000/behaviors'; // Replace with your actual API URL

export default {
  async fetchBehaviors() {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error fetching behaviors:', error);
      throw error;
    }
  },

  async createBehavior(behavior) {
    try {
      const response = await axios.post(API_URL, behavior);
      return response.data;
    } catch (error) {
      console.error('Error creating behavior:', error);
      throw error;
    }
  },
};
