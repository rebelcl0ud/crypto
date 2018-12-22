webpackJsonp([0],{

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(46);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDatepicker = __webpack_require__(111);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// https://github.com/Hacker0x01/react-datepicker


var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement('img', { className: 'bitcoin-logo', src: '/img/bitcoin21.png' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form col-md-6' },
            _react2.default.createElement(
              'h1',
              null,
              'Enter Transaction'
            ),
            _react2.default.createElement(
              'label',
              null,
              'Amount'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'amount', placeholder: '# of Bitcoin',
              value: this.props.globalState.cryptoAmt,
              onChange: this.props.onCryptoInputChange }),
            _react2.default.createElement(
              'label',
              null,
              'Date'
            ),
            _react2.default.createElement(_reactDatepicker2.default, {
              selected: this.props.globalState.date,
              onChange: this.props.handleDateChange
            }),
            _react2.default.createElement(
              'button',
              { type: 'submit' },
              'Check Profit'
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(46);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_Component) {
  _inherits(Results, _Component);

  function Results() {
    _classCallCheck(this, Results);

    var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Results, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'results' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement('div', { className: 'ads' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
              'h1',
              null,
              'Your $ investment is now...'
            ),
            _react2.default.createElement(
              'h2',
              null,
              '$ RESULT'
            ),
            _react2.default.createElement(
              'h3',
              null,
              'You Made #% Profit'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'main-btn active' },
              'Create Account to track transaction history'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement('div', { className: 'ads' })
          )
        )
      );
    }
  }]);

  return Results;
}(_react.Component);

exports.default = Results;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(46);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDatepicker = __webpack_require__(111);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _axios = __webpack_require__(167);

var _axios2 = _interopRequireDefault(_axios);

var _Home = __webpack_require__(168);

var _Home2 = _interopRequireDefault(_Home);

var _Results = __webpack_require__(169);

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      location: 'home',
      date: new Date(),
      data: '',
      btcToday: '',
      cryptoAmt: 1
    };
    _this.routingSys = _this.routingSys.bind(_this);
    _this.handleDateChange = _this.handleDateChange.bind(_this);
    _this.apiCall = _this.apiCall.bind(_this);
    _this.onCryptoInputChange = _this.onCryptoInputChange.bind(_this);
    return _this;
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=' + new Date().getTime() + '&extraParams=crypto').then(function (response) {
        _this2.setState({
          btcToday: response.data.BTC
        }, function () {
          return console.log('componentDidMount: btcToday.USD: ' + _this2.state.btcToday.USD);
        });
      }).catch(function (err) {
        return console.error(err);
      });
    }

    // simple for prototype

  }, {
    key: 'routingSys',
    value: function routingSys() {
      switch (this.state.location) {
        case 'home':
          // code
          return _react2.default.createElement(_Home2.default, { handleDateChange: this.handleDateChange, globalState: this.state, onCryptoInputChange: this.onCryptoInputChange });
          break;
        case 'results':
          // code
          return _react2.default.createElement(_Results2.default, null);
          break;
        default:
          // code
          return _react2.default.createElement(_Home2.default, null);
      }
    }
  }, {
    key: 'handleDateChange',
    value: function handleDateChange(date) {
      this.setState({
        date: date
      });
    }
  }, {
    key: 'onCryptoInputChange',
    value: function onCryptoInputChange(event) {
      this.setState({
        cryptoAmt: event.target.value
      });
    }
  }, {
    key: 'apiCall',
    value: function apiCall() {
      var _this3 = this;

      _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=' + this.state.date.getTime() / 1000 + '&extraParams=crypto').then(function (response) {
        _this3.setState({
          data: response.data.BTC
        }, function () {
          console.log(_this3.state);

          // price depending on date put, going by 1 BTC
          var costPrice = _this3.state.data.USD;
          console.log('costPrice: ' + costPrice);
          // amount of bitcoin
          var newCostPrice = _this3.state.cryptoAmt * 100;
          console.log('newCostPrice: ' + newCostPrice);
          // $ of bitcoin, date bought
          newCostPrice = newCostPrice * costPrice / 100;
          console.log('newCostPrice: ' + newCostPrice);

          // price on present date
          var sellPrice = _this3.state.btcToday.USD;
          console.log('sellPrice: ' + sellPrice);
          // $ of bitcoin, present
          var newSellPrice = _this3.state.cryptoAmt * 100;
          console.log('newSellPrice: ' + newSellPrice);
          newSellPrice = newSellPrice * sellPrice / 100;
          console.log('newSellPrice: ' + newSellPrice);

          if (newCostPrice < newSellPrice) {
            var differencePriceGain = newSellPrice - newCostPrice;
            differencePriceGain = differencePriceGain.toFixed(2);
            console.log('differencePriceGain: ' + differencePriceGain);

            var percentageGain = differencePriceGain / newCostPrice * 100;
            percentageGain = percentageGain.toFixed(2);
            console.log('percentageGain: ' + percentageGain);

            // console.log(`profit: $${differencePriceGain}, ${percentageGain}%`);
          } else {
            var differencePriceLoss = newCostPrice - newSellPrice;
            differencePriceLoss = differencePriceLoss.toFixed(2);
            console.log('differencePriceLoss: ' + differencePriceLoss);
            var percentageLoss = differencePriceLoss / newCostPrice * 100;
            percentageLoss = percentageLoss.toFixed(2);
            console.log('percentageLoss: ' + percentageLoss);

            // console.log(`loss: $${differencePriceLoss}, ${percentageLoss}%`);
          }
        });
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement(
              'div',
              { className: 'logo', onClick: this.apiCall },
              'crypto'
            ),
            _react2.default.createElement(
              'nav',
              { className: 'menu' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'main-btn' },
                'Sign Up'
              )
            )
          ),
          this.routingSys()
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[191]);