"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");

// This exercise is a bit bigger than the previous ones.
// We will make a reactive grocery list.
//
// Task: Fill the `return` of `GroceryList` render method. It should return
//       a list of `GroceryListItem`. You need to display the groceries names
//       using `this.props` in `GroceryListItem`. We already prepared the variable
//       `groceriesComponents` inside `render` method containing a list of these items for you.

var GroceryList = (function (_React$Component) {
  _inherits(GroceryList, _React$Component);

  function GroceryList(props) {
    _classCallCheck(this, GroceryList);

    _get(Object.getPrototypeOf(GroceryList.prototype), "constructor", this).call(this, props);
    this.state = {
      groceries: [{ name: "Apples" }]
    };
  }

  // Render grocery name from component's properties.
  // If you have a problem, check `this.props` in the console.

  _createClass(GroceryList, [{
    key: "render",
    value: function render() {
      var groceriesComponents = [];
      // Properties are a way to pass parameters to your React components.
      // We mentioned this in the third exercise. Properties are to React
      // components what attributes are to HTML elements.
      //
      // Below you can see how to pass properties to child components.
      // We have defined a `grocery` property for each `GroceryListItem`.
      for (var index = 0; index < this.state.groceries.length; index++) {
        groceriesComponents.push(React.createElement(GroceryListItem, {
          grocery: this.state.groceries[index]
        }));
      }

      // Hint: Don't forget about putting items into `ul`
      return React.createElement(
        "div",
        null,
        "// Put your code here"
      );
    }
  }]);

  return GroceryList;
})(React.Component);

var GroceryListItem = (function (_React$Component2) {
  _inherits(GroceryListItem, _React$Component2);

  function GroceryListItem(props) {
    _classCallCheck(this, GroceryListItem);

    _get(Object.getPrototypeOf(GroceryListItem.prototype), "constructor", this).call(this, props);
  }

  _createClass(GroceryListItem, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        null,
        "// Put your code here."
      );
    }
  }]);

  return GroceryListItem;
})(React.Component);

exports["default"] = GroceryList;
module.exports = exports["default"];