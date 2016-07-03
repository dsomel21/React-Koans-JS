"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");

// We will create dynamic list of parties nearby. Let's see how to render
// a list of items.
//
// Task #1: Add another party (or parties) to the list.
// Task #2: Change `ul` HTML attribute `class` to 'parties-list'.

var PartiesList = (function (_React$Component) {
  _inherits(PartiesList, _React$Component);

  function PartiesList() {
    _classCallCheck(this, PartiesList);

    _get(Object.getPrototypeOf(PartiesList.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(PartiesList, [{
    key: "render",

    // We can put DOM elements delivered by React just like HTML elements.
    // Doesn't this code look familiar to you?
    value: function render() {
      return React.createElement(
        "ul",
        { className: "parties-list" },
        React.createElement(
          "li",
          null,
          "Party at Aperture Laboratories"
        ),
        React.createElement(
          "li",
          null,
          "Grad After Party"
        ),
        React.createElement(
          "li",
          null,
          "Putt Jattan De Shakeen"
        ),
        React.createElement(
          "li",
          null,
          "Mittran Da Tonka"
        )
      );
    }

    // Think about it: Why is that `className` attribute not called just `class`?
    // Hint: Some words in JavaScript/JSX are reserved...
  }]);

  return PartiesList;
})(React.Component);

exports["default"] = PartiesList;
module.exports = exports["default"];