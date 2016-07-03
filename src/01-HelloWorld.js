"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");

// This is really simple React Component.
// It has its own name (HelloWorld) it will be used for things like error display.
//
// Task: Render HTML span with "Hello World" text.

var HelloWorld = (function (_React$Component) {
  _inherits(HelloWorld, _React$Component);

  function HelloWorld() {
    _classCallCheck(this, HelloWorld);

    _get(Object.getPrototypeOf(HelloWorld.prototype), "constructor", this).apply(this, arguments);
  }

  // Note:
  // You can use the official Google Chrome extension to browse all ReactJS
  // components rendered on a single page. See the description here:
  // https://facebook.github.io/react/blog/2014/01/02/react-chrome-developer-tools.html

  _createClass(HelloWorld, [{
    key: "render",

    // All components *must* have a `render` method defined.
    //
    // To define a component's render method, we use syntax called JSX. As you
    // can see it looks similar to HTML. You can use normal JavaScript too, but
    // JSX is much more popular, so we will stick to it. JSX gets converted to
    // JavaScript code. It is here just for readability purposes.
    //
    // Note: You can read about `render` syntax here:
    // https://facebook.github.io/react/docs/displaying-data.html
    //
    // Warning! JSX is not HTML - in the following lessons you will notice the differences.
    //
    // React delivers a big set of standard HTML elements like `div`, `p`,
    // `canvas` etc. Here you can see usage of a `div` element.

    value: function render() {
      return React.createElement(
        "span",
        null,
        "Hello World"
      );
    }
  }]);

  return HelloWorld;
})(React.Component);

exports["default"] = HelloWorld;
module.exports = exports["default"];