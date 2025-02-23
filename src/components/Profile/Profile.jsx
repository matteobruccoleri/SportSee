const API_BASE_URL = 'http://localhost:3000';

/**
 * Service pour gérer tous les appels API
 */
export const apiService = {
  /**
   * Récupère les informations principales de l'utilisateur
   * @param {number} userId 
   */
  async getUserMainData(userId) {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des données utilisateur');
    return response.json();
  },

  /**
   * Récupère les données d'activité de l'utilisateur
   * @param {number} userId 
   */
  async getUserActivity(userId) {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/activity`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des données d\'activité');
    return response.json();
  },

  /**
   * Récupère les données de sessions moyennes
   * @param {number} userId 
   */
  async getUserAverageSessions(userId) {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/average-sessions`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des sessions moyennes');
    return response.json();
  },

  /**
   * Récupère les données de performance
   * @param {number} userId 
   */
  async getUserPerformance(userId) {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/performance`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des performances');
    return response.json();
  }
};