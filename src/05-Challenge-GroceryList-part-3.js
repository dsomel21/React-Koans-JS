"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");

// Task: User needs to be able to clear whole grocery list in one click.
//       Render a proper button under your list and implement the `clearList` method.
//       This method should clear the `groceries` array placed in your state.
//       This is similar to the previous task so I don't want to say any more.
//       Have fun.
//
//       Caution: Remember that you should change state only using `setState`
//                method. The only exception of that rule is state definition
//                in a component's class constructor.
//
//       Hint: Don't forget about adding the clearing list button to the
//             `GroceryList` rendering method.

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

    // Fill the definition of the following method to allow clearing the list
    // Hint: You can just simply set the groceries to an empty array.
  }, {
    key: "clearList",
    value: function clearList(e) {
      this.setState({
        groceries: []
      });
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
          grocery: this.state.groceries[index]
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
        { onClick: this.clearList, className: "clear-list" },
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