const User = require("./User");
const Worker = require("./Worker");

var user = new User(1, 1, 1);
user.increaseAge();

var worker = new Worker(1, 1, 1, 1);
worker.showPosition();