"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// Every React component exposes special methods that allow you to plug in logic
// when certain events occur during the component's life. They are called
// 'lifecycle methods', and they can be used in variety of ways.
// They are used mostly to integrate non-React code manipulating the DOM with
// your components - like autocomplete, jQuery plugins etc.
//
// There are three methods that are widely used:
// * componentDidMount - this method fires when React component is rendered for
//                       the first time in the web browser. It does not run when
//                       you render component using server-side rendering.
//                       A render can be caused by an explicit React.render
//                       call or when a child component is rendered within a render
//                       method of its parent component.
//
// * componentDidUpdate - this method fires when a component is updated -
//                        when state changes or the forceUpdate method
//                        is called explicitly.
//
// * componentWillUnmount - this method fires before the component 'dies'. You
//                          can unmount the component directly using the
//                          React.unmountComponentAtNode method. A component can
//                          be also unmounted during re-rendering of the parent component.
//
// Tasks for this exercise are in comments inside the component class code.
//
// In this exercise lifecycle methods will be used to provide convenient debug
// messages in developer's console.
// There are more lifecycle methods available.
// Those three presented are commonly used.
//
// Extra task: Learn about componentWillUpdate. What's the difference between
//             this and the componentDidUpdate method? Think about the possible
//             use cases of this lifecycle method.
// Extra task: Learn about componentWillMount. How can it be useful?
//             (Hint: Think about server-side rendering of React components)
// Extra task: Learn about componentWillReceiveProps. How it can be used?
//             Is it fired when you render a component for the first time?
// Extra task: There is a method which directly modifies behavior of React
//             itself - it's called shouldComponentUpdate.
//             How can you use it to optimise rendering cycle of your
//             React components? Learn about PureRenderMixin.
//
// All lifecycle methods are described here:
// http://facebook.github.io/react/docs/component-specs.html

var LifecycleMethodsComponent = (function (_React$Component) {
  _inherits(LifecycleMethodsComponent, _React$Component);

  function LifecycleMethodsComponent(props) {
    _classCallCheck(this, LifecycleMethodsComponent);

    _get(Object.getPrototypeOf(LifecycleMethodsComponent.prototype), "constructor", this).call(this, props);
    this.state = { name: "Bob" };
  }

  // This code will be called when the component finishes mounting
  // (so it is visible for a user).

  _createClass(LifecycleMethodsComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Task 1: Display a message "I'm mounted!" in developer's console when the
      //         component finishes mounting.
      //         Use `console.log` function for it.
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // Task 2: Display a message "Updated!" in developer's console
      //         when the component updates.
      //         Here you also need to use the console.log function.
      //         Notice that in this lifecycle method you have an access
      //         to previous values of properties and state.
      //         Think about it: Could you find a possible use case
      //                         for using previous state and properties values?
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Task 3: Display a message "Goodbye, cruel world! :(" in developer's
      //         console when the component unmounts.
      //         In the real world this lifecycle method is often used to
      //         'clean up' external integrations from the component.
      //         Think about the use case like this: You have an event bus and
      //         you are listening for events. Your event listeners use setState
      //         directly. What will happen if you unmount the component?
      //         How can this lifecycle method help you to avoid such problems?
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "p",
        null,
        "Whatever, ",
        this.state.name,
        "!"
      );
    }
  }]);

  return LifecycleMethodsComponent;
})(_react2["default"].Component);

exports["default"] = LifecycleMethodsComponent;
module.exports = exports["default"];