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
        this.observersList.forEach(callback => {
            console.log(data)
            console.log(parseInt(data.timeStamp/1000))
            console.log(data.target.tagName)
            console.log(data.pageX +' '+ data.pageY)
            callback(data)
        });
    }
}

export default Subject;