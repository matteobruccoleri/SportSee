// mocks/userData.jsx
export const mockUserData = {
  userInfos: {
    firstName: 'John',
    lastName: 'Doe',
    age: 31,
  },
  // Utilisez soit "todayScore" soit "score" selon votre API
  todayScore: 0.13,
  keyData: {
    calorieCount: 980,
    proteinCount: 155,
    carbohydrateCount: 290,
    lipidCount: 50,
  },
  activity: [
    { day: 'L', kilogram: 80, calories: 240 },
    { day: 'M', kilogram: 80.3, calories: 220 },
    { day: 'M', kilogram: 81.1, calories: 280 },
    { day: 'J', kilogram: 81.1, calories: 285 },
    { day: 'V', kilogram: 81.1, calories: 265 },
    { day: 'S', kilogram: 81.1, calories: 280 },
    { day: 'D', kilogram: 81.1, calories: 270 },
  ],
  averageSessions: [
    { day: 1, Duration: 25 },
    { day: 2, Duration: 40 },
    { day: 3, Duration: 50 },
    { day: 4, Duration: 45 },
    { day: 5, Duration: 60 },
    { day: 6, Duration: 55 },
    { day: 7, Duration: 65 },
  ],
  performance: {
    kind: {
      1: 'Cardio',
      2: 'Energy',
      3: 'Endurance',
      4: 'Strength',
      5: 'Speed',
      6: 'Intensity',
    },
    data: [
      { value: 80, kind: 1 },
      { value: 120, kind: 2 },
      { value: 140, kind: 3 },
      { value: 50, kind: 4 },
      { value: 10, kind: 5 },
      { value: 10, kind: 6 },
    ],
  },
};
