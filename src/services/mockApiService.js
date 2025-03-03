import { 
    USER_MAIN_DATA, 
    USER_ACTIVITY, 
    USER_AVERAGE_SESSIONS, 
    USER_PERFORMANCE 
  } from '../mocks/mockData';
  
  /**
   * Service qui simule des appels API en utilisant des données mockées
   */
  const mockApiService = {
    /**
     * Récupère les données principales d'un utilisateur
     * @param {string} userId - Identifiant de l'utilisateur
     * @returns {Object} - Données de l'utilisateur
     */
    async getUserMainData(userId) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const user = USER_MAIN_DATA.find(u => u.id === parseInt(userId));
          resolve(user || null);
        }, 300); // Simule un délai réseau
      });
    },
  
    /**
     * Récupère les données d'activité d'un utilisateur
     * @param {string} userId - Identifiant de l'utilisateur
     * @returns {Array} - Sessions d'activité
     */
    async getUserActivity(userId) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const activity = USER_ACTIVITY.find(a => a.userId === parseInt(userId));
          resolve(activity ? activity.sessions : null);
        }, 300);
      });
    },
  
    /**
     * Récupère les données de sessions moyennes d'un utilisateur
     * @param {string} userId - Identifiant de l'utilisateur
     * @returns {Array} - Sessions transformées au format attendu par le LineChart
     */
    async getUserAverageSessions(userId) {
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
    },
  
    /**
     * Récupère les données de performance d'un utilisateur
     * @param {string} userId - Identifiant de l'utilisateur
     * @returns {Object} - Données de performance
     */
    async getUserPerformance(userId) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const performance = USER_PERFORMANCE.find(p => p.userId === parseInt(userId));
          resolve(performance || null);
        }, 300);
      });
    }
  };
  
  export default mockApiService;