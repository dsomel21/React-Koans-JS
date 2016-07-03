"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

// Congratulations for completing your first React challenge!
// You have already learned how to create React's components and how they affect
// each other. In this exercise you will learn how to render components on the web page.
//
// Task #1: Fill the `renderNameComponent` function. It should render ReactElement
//          into the DOM.

var Name = (function (_React$Component) {
  _inherits(Name, _React$Component);

  function Name() {
    _classCallCheck(this, Name);

    _get(Object.getPrototypeOf(Name.prototype), "constructor", this).apply(this, arguments);
  }

  // See you got a domNode passed as a `domNode` argument.

  _createClass(Name, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "p",
        { id: "hello" },
        "Bazinga!"
      );
    }
  }]);

  return Name;
})(React.Component);

function renderNameComponent(domNode) {}
// Put your code here

// Hint: You have to use the `React.render(ReactElement element, DOMNode node)` method.
//       As you can see, this method takes two parameters:
//       `ReactElement` and DOM node.
//
//       Don't mistake `React.render` with `render` method in a component class.
//       They are completely different methods!
//
//       Notice that class `Name` has type `React.Component`.
//       It's a ReactComponent, not a ReactElement! You need to create an
//       element from the component before putting it into DOM. One way of doing
//       that is using `React.createElement(ReactComponent component)`. E.g.
//
//       `let element = React.createElement(Name);`

exports["default"] = renderNameComponent;
module.exports = exports["default"];