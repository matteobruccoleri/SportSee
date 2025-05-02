class ActivityModel {
    constructor(data) {
      if (Array.isArray(data)) {
        this.data = data.map((session, index) => ({
          day: (index + 1).toString(),
          dayOriginal: session.day,
          Poids: session.kilogram || 0,
          Calories: session.calories || 0
        }));
      } else {
        this.data = [];
      }
    }
  }
  
  export default ActivityModel;