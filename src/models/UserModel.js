class UserModel {
    constructor(data) {
      const userData = Array.isArray(data) ? data.find(user => user.id === data.id) || data[0] || {} : data;
      
      this.id = userData.id || null;
      this.userInfos = userData.userInfos || {};
      this.score = userData.todayScore || userData.score || 0;
      this.keyData = userData.keyData || {};
    }
  }
  
  export default UserModel;