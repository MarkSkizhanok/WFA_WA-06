
const User = require("./User");

class Worker extends User {
    constructor(name, surname, age, position) {
        super(name, surname, age);
        this._position = position;
    }

    get position() {
        return this._position;
    }

    set position(position) {
        this._position = position;
    }

    showPosition() {
        console.log(`Position = ${this._position}`);
    }
}

module.exports = Worker;