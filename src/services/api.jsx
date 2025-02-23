const apiService = {
  async getUserMainData(userId) {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  },

  async getUserActivity(userId) {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching activity data:', error);
      throw error;
    }
  },

  async getUserAverageSessions(userId) {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching average sessions:', error);
      throw error;
    }
  },

  async getUserPerformance(userId) {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching performance data:', error);
      throw error;
    }
  }
};

export default apiService;