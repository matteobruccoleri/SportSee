class SessionModel {
  constructor(data) {
    const dayLabels = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };
    
    // Retourner directement un tableau pour le LineChart
    if (Array.isArray(data)) {
      this.data = data.map(session => ({
        day: dayLabels[session.day] || session.day.toString(),
        Duration: session.sessionLength || 0
      }));
    } else {
      this.data = [];
    }
  }
}

export default SessionModel;