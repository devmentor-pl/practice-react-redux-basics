class Subject {
    constructor() {
        this.observersList = []; // przechowuje obserwatorów czyli funkcje
    }


    subscribe(callback) { // do tablicy dodajemy f-cje przekazana w parametrze
        if(typeof callback === 'function') {
            this.observersList.push(callback);
            return true;
        }

        return false;
    }

    notify(data) { // wywołujemy wszystkie przekazane do tablicy f-cje
        this.observersList.forEach(callback => callback(data));
    }
}


export default Subject;
