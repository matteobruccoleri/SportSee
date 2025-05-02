import { 
  USER_MAIN_DATA, 
  USER_ACTIVITY, 
  USER_AVERAGE_SESSIONS, 
  USER_PERFORMANCE 
} from '../mocks/mockData';
import UserModel from '../models/UserModel';
import ActivityModel from '../models/ActivityModel';
import SessionModel from '../models/SessionModel';
import PerformanceModel from '../models/PerformanceModel';

const dataService = {
  useMock: false,
  
  setUseMock(useMockData) {
    this.useMock = useMockData;
  },

  async getUserMainData(userId) {
    if (this.useMock) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const user = USER_MAIN_DATA.find(u => u.id === parseInt(userId));
          resolve(new UserModel(user));
        }, 300);
      });
    } else {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const data = await response.json();
        return new UserModel(data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
      }
    }
  },

  async getUserActivity(userId) {
    if (this.useMock) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const activity = USER_ACTIVITY.find(a => a.userId === parseInt(userId));
          // Passer directement le tableau de sessions au modèle
          const model = new ActivityModel(activity?.sessions);
          // Résoudre avec les données, pas avec le modèle lui-même
          resolve(model.data);
        }, 300);
      });
    } else {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
        const data = await response.json();
        const model = new ActivityModel(data.data.sessions);
        return model.data;
      } catch (error) {
        console.error('Error fetching activity data:', error);
        throw error;
      }
    }
  },

  async getUserAverageSessions(userId) {
    if (this.useMock) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const averageSessions = USER_AVERAGE_SESSIONS.find(
            s => s.userId === parseInt(userId)
          );
          const model = new SessionModel(averageSessions?.sessions);
          resolve(model.data);
        }, 300);
      });
    } else {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
        const data = await response.json();
        const model = new SessionModel(data.data.sessions);
        return model.data;
      } catch (error) {
        console.error('Error fetching average sessions:', error);
        throw error;
      }
    }
  },

  async getUserPerformance(userId) {
    if (this.useMock) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const performance = USER_PERFORMANCE.find(p => p.userId === parseInt(userId));
          resolve(new PerformanceModel(performance));
        }, 300);
      });
    } else {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
        const data = await response.json();
        return new PerformanceModel(data.data);
      } catch (error) {
        console.error('Error fetching performance data:', error);
        throw error;
      }
    }
  }
};

export default dataService;