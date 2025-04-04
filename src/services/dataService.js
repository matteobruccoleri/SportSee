import { 
    USER_MAIN_DATA, 
    USER_ACTIVITY, 
    USER_AVERAGE_SESSIONS, 
    USER_PERFORMANCE 
  } from '../mocks/mockData';
  
  /**
   * Service unifié pour gérer les données de l'application
   * Peut fonctionner avec des données mockées ou des appels API réels
   */
  const dataService = {
    /**
     * Indique si le service doit utiliser les données mockées (true) ou l'API réelle (false)
     */
    useMock: true, // Par défaut, utiliser les mocks
    
    /**
     * Configure le service pour utiliser les mocks ou l'API réelle
     * @param {boolean} useMockData - true pour utiliser les mocks, false pour l'API réelle
     */
    setUseMock(useMockData) {
      this.useMock = useMockData;
    },
  
    /**
     * Récupère les données principales d'un utilisateur
     * @param {string} userId - Identifiant de l'utilisateur
     * @returns {Object} - Données de l'utilisateur
     */
    async getUserMainData(userId) {
      if (this.useMock) {
        return new Promise((resolve) => {
          setTimeout(() => {
            const user = USER_MAIN_DATA.find(u => u.id === parseInt(userId));
            resolve(user || null);
          }, 300);
        });
      } else {
        try {
          const response = await fetch(`http://localhost:3000/user/${userId}`);
          const data = await response.json();
          return data.data;
        } catch (error) {
          console.error('Error fetching user data:', error);
          throw error;
        }
      }
    },
  
    /**
     * Récupère les données d'activité d'un utilisateur
     * @param {string} userId - Identifiant de l'utilisateur
     * @returns {Array} - Sessions d'activité
     */
    async getUserActivity(userId) {
      if (this.useMock) {
        return new Promise((resolve) => {
          setTimeout(() => {
            const activity = USER_ACTIVITY.find(a => a.userId === parseInt(userId));
            resolve(activity ? activity.sessions : null);
          }, 300);
        });
      } else {
        try {
          const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
          const data = await response.json();
          return data.data.sessions;
        } catch (error) {
          console.error('Error fetching activity data:', error);
          throw error;
        }
      }
    },
  
    /**
     * Récupère les données de sessions moyennes d'un utilisateur
     * @param {string} userId - Identifiant de l'utilisateur
     * @returns {Array} - Sessions transformées au format attendu par le LineChart
     */
    async getUserAverageSessions(userId) {
      if (this.useMock) {
        return new Promise((resolve) => {
          setTimeout(() => {
            const averageSessions = USER_AVERAGE_SESSIONS.find(
              s => s.userId === parseInt(userId)
            );
            
            if (averageSessions) {
              // Transforme les données au format attendu par le LineChart
              const formattedSessions = averageSessions.sessions.map(session => ({
                day: session.day,
                Duration: session.sessionLength
              }));
              resolve(formattedSessions);
            } else {
              resolve(null);
            }
          }, 300);
        });
      } else {
        try {
          const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
          const data = await response.json();
          // Transformation pour renvoyer directement un tableau avec les clés attendues par le LineChart
          return data.data.sessions.map(session => ({
            day: session.day,
            Duration: session.sessionLength
          }));
        } catch (error) {
          console.error('Error fetching average sessions:', error);
          throw error;
        }
      }
    },
  
    /**
     * Récupère les données de performance d'un utilisateur
     * @param {string} userId - Identifiant de l'utilisateur
     * @returns {Object} - Données de performance
     */
    async getUserPerformance(userId) {
      if (this.useMock) {
        return new Promise((resolve) => {
          setTimeout(() => {
            const performance = USER_PERFORMANCE.find(p => p.userId === parseInt(userId));
            resolve(performance || null);
          }, 300);
        });
      } else {
        try {
          const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
          const data = await response.json();
          return data.data;
        } catch (error) {
          console.error('Error fetching performance data:', error);
          throw error;
        }
      }
    }
  };
  
  export default dataService;