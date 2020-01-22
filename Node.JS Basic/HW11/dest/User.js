"use strict";

function User(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}

User.prototype.getName = function () {
  return this.name;
};

User.prototype.getSurname = function () {
  return this.surname;
};

User.prototype.getAge = function () {
  return this.age;
};

User.prototype.setName = function (name) {
  this.name = name;
};

User.prototype.setSurname = function (surname) {
  this.surname = surname;
};

User.prototype.setAge = function (age) {
  this.age = age;
};

User.prototype.increaseAge = function () {
  this.age++;
  console.log("Age = " + this.age);
};

module.exports = User;
//# sourceMappingURL=User.js.map
