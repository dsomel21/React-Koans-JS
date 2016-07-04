"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var update = require('react-addons-update');

// Task: Ok, now the last exercise. You have to implement toggling
//       completeness of the each grocery list's item. Make each item reactive.
//
//       This is why we prepared the declaration of the `toggleGroceryCompleteness`
//       method in the `GroceryList` component.
//
//       WARNING: You should remember that we create a `grocery` item in the
//                `addGroceryItem` method. You need to add a `completed` field to
//                the `grocery` objects created there.
//
// === Tasks below aren't required for proceeding in Koans, but we encourage you to try ===
//
// Extra Task: As you can see in the `GroceryList` component - it has more than one
//             responsiblity. It displays groceries list, handles state
//             modification and handles the display and logic of new grocery
//             addition. The last of these responsibilities can be easily
//             extracted to another component. The new component should handle
//             only text input and the submit button.
//
//             Hint: You can pass a callback to the component's method
//                   (like `addGroceryItem`) as an attribute in the `render` method.
//
//             Warning: This task doesn't have its own tests, but current ones
//                      should be enough to cover it. The behaviour of whole
//                      app should not change.
//
// Extra Task: You can try to disable submit button for `newGrocery` if
//             `newGroceryName` state is empty. You can just use property
//             `disabled` for submit button component in `render` method.
//
//             Hint: There are no tests for this extra task. You need to do them
//                   yourself. You can perform manual-testing (meh.)
//                   Or try to create your own tests.
//                   Check out `test/05-Challange-GroceryList.js` for tests to this part.
//
// Extra Task: Extract creation (`addGroceryItem`) of grocery to external service.

var GroceryList = (function (_React$Component) {
  _inherits(GroceryList, _React$Component);

  function GroceryList(props) {
    _classCallCheck(this, GroceryList);

    _get(Object.getPrototypeOf(GroceryList.prototype), "constructor", this).call(this, props);
    this.state = {
      groceries: [{
        name: "Apples",
        completed: false
      }],
      newGroceryName: ""
    };

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.clearList = this.clearList.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }

  _createClass(GroceryList, [{
    key: "inputChanged",
    value: function inputChanged(event) {
      this.setState({ newGroceryName: event.target.value });
    }
  }, {
    key: "addGroceryItem",
    value: function addGroceryItem() {
      if (this.state.newGroceryName) {
        var newGroceryItem = { name: this.state.newGroceryName };
        this.setState({
          groceries: this.state.groceries.concat([newGroceryItem])
        });
      }
    }
  }, {
    key: "clearList",
    value: function clearList(event) {
      this.setState({ groceries: [] });
    }

    // Fill the definition of the following method to allow completing each item
    // Hint 1: Pay attention to the element's index on the list.
  }, {
    key: "toggleGroceryCompleteness",
    value: function toggleGroceryCompleteness(groceryIndex) {
      var inComplete = update(this.state, {
        groceries: _defineProperty({}, groceryIndex, {
          completed: { $set: true }
        })
      });
      // debugger;
      // if (this.state.groceries[groceryIndex].completed){
      this.setState({
        inComplete: inComplete
      });
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var groceriesComponents = [],
          newProductInput = undefined,
          newProductAddButton = undefined,
          clearListButton = undefined;
      for (var index = 0; index < this.state.groceries.length; index++) {
        groceriesComponents.push(React.createElement(GroceryListItem, {
          grocery: this.state.groceries[index],
          onComplete: this.toggleGroceryCompleteness.bind(this, index)
        }));
      }

      newProductInput = React.createElement("input", { className: "new-item", type: "text", onChange: this.inputChanged });
      newProductAddButton = React.createElement(
        "button",
        { className: "add-product", onClick: this.addGroceryItem },
        "Add new Product"
      );
      clearListButton = React.createElement(
        "button",
        { className: "clear-list", onClick: this.clearList },
        "Clear the List"
      );

      return React.createElement(
        "div",
        null,
        React.createElement(
          "ul",
          null,
          groceriesComponents
        ),
        newProductInput,
        newProductAddButton,
        clearListButton
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
      var completed = this.props.grocery.completed ? "completed" : '';
      return React.createElement(
        "li",
        { className: completed, onClick: this.props.onComplete },
        this.props.grocery.name
      );
    }
  }]);

  return GroceryListItem;
})(React.Component);

exports["default"] = GroceryList;
module.exports = exports["default"];