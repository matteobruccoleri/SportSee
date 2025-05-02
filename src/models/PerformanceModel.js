class PerformanceModel {
    constructor(data) {
      this.userId = data?.userId || null;
      this.kind = data?.kind || {};
      this.data = data?.data?.map(item => ({
        value: item.value || 0,
        kind: item.kind
      })) || [];
    }
  }
  
  export default PerformanceModel;