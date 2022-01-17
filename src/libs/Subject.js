class Subject {
  constructor() {
    this.observersList = [];
  }

  subscribe(callback) {
    if (typeof callback === 'function') {
      this.observersList.push(callback);
      return true;
    }

    return false;
  }

  notify(data) {
    this.observersList.forEach((callback) => callback(data));
  }
}

export default Subject;
