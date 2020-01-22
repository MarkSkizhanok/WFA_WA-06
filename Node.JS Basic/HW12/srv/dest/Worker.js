"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Worker =
/*#__PURE__*/
function () {
  function Worker(name, surname, position) {
    _classCallCheck(this, Worker);

    this._name = name;
    this._surname = surname;
    this._position = position;
  }

  _createClass(Worker, [{
    key: "showPosition",
    value: function showPosition() {
      console.log("Position = ".concat(this._position));
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(name) {
      this._name = name;
    }
  }, {
    key: "surname",
    get: function get() {
      return this._surname;
    },
    set: function set(surname) {
      this._surname = surname;
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(position) {
      this._position = position;
    }
  }]);

  return Worker;
}();

module.exports = Worker;
//# sourceMappingURL=Worker.js.map
