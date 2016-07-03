"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");

// We continue our journey with reactive grocery list. We implemented the previous
// task ourselves. You can see our example implementation.
//
// Task: You have to implement adding items to the list. Create the implementation
//       of the `addGroceryItem` method. This method should modify the `GroceryList`
//       component's state and by that re-render this component.
//
//       You need to render an input and button in `GroceryList` (after the
//       groceries list). Users will use them as an input for new groceries.
//
//       We prepared two components for you. Please render the button and
//       input under your list and define the `onClick` handler for the button.
//
//       Hint: See `render` method body. Look for `newProductInput` and
//             `newProductAddButton` variables
//
//       Do you remember how we used `onChange` event in the third exercise?

var GroceryList = (function (_React$Component) {
  _inherits(GroceryList, _React$Component);

  function GroceryList(props) {
    _classCallCheck(this, GroceryList);

    _get(Object.getPrototypeOf(GroceryList.prototype), "constructor", this).call(this, props);
    this.state = {
      groceries: [{ name: "Apples" }],
      newGroceryName: ""
    };

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }

  // Warning: You shouldn't change this method

  _createClass(GroceryList, [{
    key: "inputChanged",
    value: function inputChanged(event) {
      this.setState({ newGroceryName: event.target.value });
    }

    // Fill the definition of the following method to allow adding new items to the list
    // Hint #1: You should use the `concat` function to modify groceries list.
    // Hint #2: Remember about the case where input is empty.
    // Hint #3: Name of the new grocery item will be stored in `this.state.newGroceryName`.
  }, {
    key: "addGroceryItem",
    value: function addGroceryItem() {
      // Put your code here
    }
  }, {
    key: "render",
    value: function render() {
      var groceriesComponents = [],
          newProductInput = undefined,
          newProductAddButton = undefined;

      for (var index = 0; index < this.state.groceries.length; index++) {
        groceriesComponents.push(React.createElement(GroceryListItem, {
          grocery: this.state.groceries[index]
        }));
      }

      // Here are components for task #2.
      newProductInput = React.createElement("input", { className: "new-item", type: "text", onChange: this.inputChanged });
      // Something is missing here... Will anything happen if you click this button now?
      newProductAddButton = React.createElement(
        "button",
        { className: "add-product" },
        "Add new Product"
      );

      return React.createElement(
        "div",
        null,
        React.createElement(
          "ul",
          null,
          groceriesComponents
        )
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
        this.props.grocery.name
      );
    }
  }]);

  return GroceryListItem;
})(React.Component);

exports["default"] = GroceryList;
module.exports = exports["default"];