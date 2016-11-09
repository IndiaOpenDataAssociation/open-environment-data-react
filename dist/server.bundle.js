/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Navbar = __webpack_require__(50);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Nav = __webpack_require__(48);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _NavItem = __webpack_require__(49);

	var _NavItem2 = _interopRequireDefault(_NavItem);

	var _LinkContainer = __webpack_require__(54);

	var _LinkContainer2 = _interopRequireDefault(_LinkContainer);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import {Navbar, Nav, NavItem} from 'react-bootstrap'

	var _ref = _jsx('div', {}, void 0, _jsx(_Navbar2.default, {
	  inverse: true,
	  fluid: true,
	  fixedTop: true
	}, void 0, _jsx(_Navbar.Header, {}, void 0, _jsx(_Navbar.Brand, {}, void 0, _jsx(_reactRouter.Link, {
	  to: '/'
	}, void 0, 'OPEN ENVIRONMENT DATA PROJECT')), _jsx(_Navbar.Toggle, {})), _jsx(_Navbar.Collapse, {}, void 0, _jsx(_Nav2.default, {
	  pullRight: true
	}, void 0, _jsx(_LinkContainer2.default, {
	  to: '/about'
	}, void 0, _jsx(_NavItem2.default, {
	  eventKey: 1
	}, void 0, 'About')), _jsx(_LinkContainer2.default, {
	  to: '/community'
	}, void 0, _jsx(_NavItem2.default, {
	  eventKey: 2
	}, void 0, 'Community')), _jsx(_LinkContainer2.default, {
	  to: '/openapi'
	}, void 0, _jsx(_NavItem2.default, {
	  eventKey: 3
	}, void 0, 'Open APIs')), _jsx(_LinkContainer2.default, {
	  to: '/partners'
	}, void 0, _jsx(_NavItem2.default, {
	  eventKey: 4
	}, void 0, 'Partners')), _jsx(_NavItem2.default, {
	  eventKey: 5,
	  href: 'http://knowledge.indiaopendata.com/index.php/India_Open_Environment_Data_Project',
	  target: '_blank'
	}, void 0, 'WIKI'), _jsx(_LinkContainer2.default, {
	  to: '/airowl'
	}, void 0, _jsx(_NavItem2.default, {
	  eventKey: 6,
	  className: 'custom-navitem'
	}, void 0, 'Get our OWL'))))));

	var Demo = function (_Component) {
	  _inherits(Demo, _Component);

	  function Demo() {
	    _classCallCheck(this, Demo);

	    return _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).apply(this, arguments));
	  }

	  _createClass(Demo, [{
	    key: 'render',
	    value: function render() {
	      return _ref;
	    }
	  }]);

	  return Demo;
	}(_react.Component);

	exports.default = Demo;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx("div", {
	  className: "black-bg footer-container"
	}, void 0, _jsx("div", {
	  className: "container"
	}, void 0, _jsx("div", {
	  className: "row"
	}, void 0, _jsx("div", {
	  className: "col-sm-12"
	}, void 0, _jsx("div", {
	  className: "text-center white col-sm-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1"
	}, void 0, _jsx("div", {
	  className: "margin-bottom-50"
	}, void 0, _jsx("h2", {
	  className: "white-font bold"
	}, void 0, "IT'S TIME TO GIVE THE ENVIRONMENT A CLOSER LOOK.", _jsx("br", {}), "LET'S JOIN HANDS FOR HEALTHIER TOMORROW!")), _jsx("div", {
	  className: "text-center margin-bottom-50"
	}, void 0, _jsx("a", {
	  className: "btn btn-transparent join-btn",
	  href: "https://docs.google.com/forms/d/1G1SyMFx8aZJWFlY1_DqArcs6G7F9Lk8RLz5_SJREQuE/viewform?c=0&w=1",
	  target: "_blank"
	}, void 0, "Join Us!")))))));

	var Footer = function (_Component) {
	  _inherits(Footer, _Component);

	  function Footer() {
	    _classCallCheck(this, Footer);

	    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	  }

	  _createClass(Footer, [{
	    key: "render",
	    value: function render() {
	      return _ref;
	    }
	  }]);

	  return Footer;
	}(_react.Component);

	exports.default = Footer;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Navbar = __webpack_require__(1);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Map = __webpack_require__(32);

	var _Map2 = _interopRequireDefault(_Map);

	var _FormGroup = __webpack_require__(47);

	var _FormGroup2 = _interopRequireDefault(_FormGroup);

	var _FormControl = __webpack_require__(46);

	var _FormControl2 = _interopRequireDefault(_FormControl);

	var _Home = __webpack_require__(34);

	var _Home2 = _interopRequireDefault(_Home);

	var _Realtime = __webpack_require__(35);

	var _Realtime2 = _interopRequireDefault(_Realtime);

	var _Analytics = __webpack_require__(33);

	var _Analytics2 = _interopRequireDefault(_Analytics);

	var _superagent = __webpack_require__(63);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _LoadingMap = __webpack_require__(31);

	var _LoadingMap2 = _interopRequireDefault(_LoadingMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx(_Navbar2.default, {});

	var _ref2 = _jsx(_LoadingMap2.default, {});

	var _ref3 = _jsx(_Navbar2.default, {});

	var _ref4 = _jsx('option', {
	  value: 'India'
	}, void 0, 'India');

	var _ref5 = _jsx('i', {
	  className: 'fa fa-navicon'
	});

	var _ref6 = _jsx('br', {});

	var _ref7 = _jsx('br', {});

	var _ref8 = _jsx('i', {
	  className: 'fa fa-close'
	});

	var _ref9 = _jsx(_Home2.default, {});

	var _ref10 = _jsx('div', {
	  className: 'dashboard-footer'
	}, void 0, _jsx('a', {
	  href: 'http://indiaopendata.com/',
	  target: '_blank',
	  className: 'title'
	}, void 0, 'An India Open Data Association Initiative'), _jsx('a', {
	  href: 'https://oizom.com/',
	  target: '_blank',
	  className: 'regards'
	}, void 0, 'Made with ', _jsx('i', {
	  className: 'white fa fa-heart'
	}), ' Oizom'));

	var Dashboard = function (_Component) {
	  _inherits(Dashboard, _Component);

	  function Dashboard(props) {
	    _classCallCheck(this, Dashboard);

	    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

	    _this.state = _this.getState();
	    _this.changeCities = _this.changeCities.bind(_this);
	    _this.openPanel = _this.openPanel.bind(_this);
	    _this.closePanel = _this.closePanel.bind(_this);
	    _this.changeTab = _this.changeTab.bind(_this);
	    _this.changeDisable = _this.changeDisable.bind(_this);
	    _this.realTimeData = _this.realTimeData.bind(_this);
	    _this.analyticsData = _this.analyticsData.bind(_this);
	    return _this;
	  }

	  _createClass(Dashboard, [{
	    key: 'getState',
	    value: function getState() {
	      return {
	        markers: [],
	        realTimeData: [],
	        analyticsData: [],
	        city: '',
	        show_panel: false,
	        active_tab: 'home',
	        disable_tab: true,
	        loading: true,
	        lat: '',
	        lng: '',
	        realTimedataLoading: true,
	        city_label: '',
	        device_type: '',
	        time: '',
	        no_records: false,
	        iscity_changed: false,
	        city_list: []
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _superagent2.default.get('https://openenvironment.p.mashape.com/all/public/devices').set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
	        this.setState({ loading: false, markers: res.body });
	      }.bind(this));
	      _superagent2.default.get('https://openenvironment.p.mashape.com/all/public/devices/citiesloc').set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
	        this.setState({ city_list: res.body });
	      }.bind(this));
	    }
	  }, {
	    key: 'changeCities',
	    value: function changeCities(e) {
	      this.setState({ city: e.target.value, iscity_changed: true });
	    }
	  }, {
	    key: 'openPanel',
	    value: function openPanel() {
	      this.setState({ show_panel: true });
	    }
	  }, {
	    key: 'closePanel',
	    value: function closePanel() {
	      this.setState({ show_panel: false });
	    }
	  }, {
	    key: 'changeTab',
	    value: function changeTab(tabName) {
	      this.setState({ active_tab: tabName });
	    }
	  }, {
	    key: 'changeDisable',
	    value: function changeDisable(boolean, label, deviceType) {
	      this.setState({ disable_tab: boolean, active_tab: 'realtime', show_panel: true, city_label: label, device_type: deviceType });
	    }
	  }, {
	    key: 'realTimeData',
	    value: function realTimeData(id, time) {
	      _superagent2.default.get('https://openenvironment.p.mashape.com/all/public/data/cur/' + id).set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
	        this.setState({ realTimeData: res.body, realTimedataLoading: false, time: time });
	      }.bind(this));
	    }
	  }, {
	    key: 'analyticsData',
	    value: function analyticsData(id, time) {
	      _superagent2.default.get('https://openenvironment.p.mashape.com/all/public/data/hours/24/' + id).set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
	        if (res.body.message == 'No records found') {
	          this.setState({ no_records: true });
	        } else {
	          this.setState({ analyticsData: res.body, time: time, no_records: false });
	        }
	      }.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _jsx('div', {}, void 0, this.state.loading ? _jsx('div', {
	        style: { marginTop: '50px' }
	      }, void 0, _ref, _ref2) : _jsx('div', {}, void 0, _ref3, _jsx('section', {
	        className: 'dashboard'
	      }, void 0, _jsx(_Map2.default, {
	        markers: this.state.markers,
	        cityValue: this.state.city,
	        cityChanged: this.state.iscity_changed,
	        setDisable: this.changeDisable,
	        callRealtime: this.realTimeData,
	        callAnalytics: this.analyticsData,
	        cities: this.state.city_list
	      }), _jsx('div', {
	        className: 'select-cities-box'
	      }, void 0, _jsx(_FormGroup2.default, {
	        controlId: 'formControlsSelect'
	      }, void 0, _react2.default.createElement(
	        _FormControl2.default,
	        { componentClass: 'select', placeholder: 'select', ref: 'cityList', className: 'select-cities', onChange: this.changeCities },
	        _ref4,
	        this.state.city_list.map(function (element, index) {
	          return _jsx('option', {
	            value: index
	          }, index, element.name);
	        })
	      ))), _jsx('div', {
	        className: 'info-panel-toggle'
	      }, void 0, _jsx('a', {
	        className: 'open-panel',
	        onClick: this.openPanel
	      }, void 0, _ref5)), this.state.show_panel ? _jsx('div', {
	        className: 'review-panel'
	      }, void 0, _jsx('div', {
	        className: 'panel panel-default'
	      }, void 0, _jsx('div', {
	        className: 'panel-heading '
	      }, void 0, _jsx('div', {
	        className: 'row'
	      }, void 0, this.state.active_tab == 'analytics' ? _jsx('div', {
	        className: 'col-sm-11 col-xs-11'
	      }, void 0, _jsx('img', {
	        src: 'assets/images/avatar.png',
	        style: { width: '35px' }
	      }), _jsx('span', {
	        style: { position: 'absolute', top: '1px', left: '19%', fontSize: '14px' }
	      }, void 0, this.state.city_label), ' ', _ref6, _jsx('span', {
	        style: { position: 'absolute', top: '21px', left: '19%', fontSize: '12px', fontWeight: 300 }
	      }, void 0, this.state.device_type)) : this.state.active_tab == 'home' ? _jsx('div', {
	        className: 'col-sm-11 col-xs-11',
	        style: { padding: '7px 15px' }
	      }, void 0, 'An Open India-Data Initiative') : this.state.active_tab == 'realtime' ? _jsx('div', {
	        className: 'col-sm-11 col-xs-11'
	      }, void 0, _jsx('img', {
	        src: 'assets/images/avatar.png',
	        style: { width: '35px' }
	      }), _jsx('span', {
	        style: { position: 'absolute', top: '1px', left: '19%', fontSize: '14px' }
	      }, void 0, this.state.city_label), ' ', _ref7, _jsx('span', {
	        style: { position: 'absolute', top: '21px', left: '19%', fontSize: '12px', fontWeight: 300 }
	      }, void 0, this.state.device_type)) : '', _jsx('span', {
	        className: 'col-sm-1 col-xs-1 close-panel',
	        onClick: this.closePanel
	      }, void 0, _ref8))), _jsx('div', {
	        className: 'panel-body'
	      }, void 0, this.state.active_tab == 'home' ? _ref9 : '', this.state.active_tab == 'realtime' ? _jsx(_Realtime2.default, {
	        realtimeData: this.state.realTimeData,
	        loadingState: this.state.realTimedataLoading,
	        timeStamp: this.state.time
	      }) : '', this.state.active_tab == 'analytics' ? _jsx(_Analytics2.default, {
	        analysisData: this.state.no_records == true ? this.state.no_records : this.state.analyticsData,
	        timeStamp: this.state.time,
	        realtimeData: this.state.realTimeData
	      }) : ''), _jsx('div', {
	        className: 'panel-footer'
	      }, void 0, _jsx('ul', {
	        className: 'review-panel-tab'
	      }, void 0, _jsx('a', {
	        onClick: function onClick() {
	          _this2.changeTab('home');
	        },
	        className: this.state.active_tab == 'home' ? 'active' : ''
	      }, void 0, _jsx('li', {}, void 0, _jsx('img', {
	        src: this.state.active_tab == 'home' ? 'assets/images/icons/home_b.png' : 'assets/images/icons/home_g.png'
	      }))), _jsx('a', {
	        onClick: function onClick() {
	          _this2.state.disable_tab ? null : _this2.changeTab('realtime');
	        },
	        className: this.state.active_tab == 'realtime' ? 'active' : ''
	      }, void 0, _jsx('li', {}, void 0, _jsx('img', {
	        src: this.state.active_tab == 'realtime' ? 'assets/images/icons/realtime_b.png' : 'assets/images/icons/realtime_g.png'
	      }))), _jsx('a', {
	        onClick: function onClick() {
	          _this2.state.disable_tab ? null : _this2.changeTab('analytics');
	        },
	        className: this.state.active_tab == 'analytics' ? 'active' : ''
	      }, void 0, _jsx('li', {}, void 0, _jsx('img', {
	        src: this.state.active_tab == 'analytics' ? 'assets/images/icons/analytics_b.png' : 'assets/images/icons/analytics_g.png'
	      }))))))) : '')), _ref10);
	    }
	  }]);

	  return Dashboard;
	}(_react.Component);

	exports.default = Dashboard;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-google-maps/lib/GoogleMap");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-google-maps/lib/GoogleMapLoader");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-google-maps/lib/Marker");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _App = __webpack_require__(27);

	var _App2 = _interopRequireDefault(_App);

	var _Dashboard = __webpack_require__(7);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	var _About = __webpack_require__(25);

	var _About2 = _interopRequireDefault(_About);

	var _Community = __webpack_require__(29);

	var _Community2 = _interopRequireDefault(_Community);

	var _Openapi = __webpack_require__(37);

	var _Openapi2 = _interopRequireDefault(_Openapi);

	var _Device = __webpack_require__(36);

	var _Device2 = _interopRequireDefault(_Device);

	var _Partners = __webpack_require__(38);

	var _Partners2 = _interopRequireDefault(_Partners);

	var _Airowl = __webpack_require__(26);

	var _Airowl2 = _interopRequireDefault(_Airowl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}

	/* Workaround for async react routes to work with react-hot-reloader till
	  https://github.com/reactjs/react-router/issues/2182 and
	  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  __webpack_require__(7);
	  // require('./modules/Post/pages/PostDetailPage/PostDetailPage');
	}

	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, _Dashboard2.default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/about',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, _About2.default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/community',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, _Community2.default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/openapi',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, _Openapi2.default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/devices',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, _Device2.default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/partners',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, _Partners2.default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/airowl',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, _Airowl2.default);
	    }).bind(null, __webpack_require__));
	  }
	}));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;

	var _redux = __webpack_require__(11);

	var _reduxThunk = __webpack_require__(62);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _DevTools = __webpack_require__(28);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _reducers = __webpack_require__(39);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Main store function
	 */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }

	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
	  port: process.env.PORT || 3001
	};

	exports.default = config;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;

	var _promiseUtils = __webpack_require__(41);

	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);

	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var webpack = __webpack_require__(6);
	var cssnext = __webpack_require__(43);
	var postcssFocus = __webpack_require__(44);
	var postcssReporter = __webpack_require__(45);

	module.exports = {
	  devtool: 'cheap-module-eval-source-map',

	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },

	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },

	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },

	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },

	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],

	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
		"main.css": "main-838ed6540f.css"
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Navbar = __webpack_require__(1);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Footer = __webpack_require__(2);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx(_Navbar2.default, {});

	var _ref2 = _jsx('div', {
	  className: 'about-styles text-center '
	}, void 0, _jsx('div', {
	  className: 'overlay'
	}, void 0, _jsx('img', {
	  src: '../assets/images/about.jpg',
	  className: 'img-header'
	}), _jsx('div', {
	  className: 'middle-title'
	}, void 0, _jsx('div', {
	  className: 'title-container'
	}, void 0, _jsx('h1', {
	  className: 'white bold '
	}, void 0, 'Air-quality situation across world is a \u2018complex problem\u2019.')))));

	var _ref3 = _jsx('div', {
	  className: 'img-middle'
	}, void 0, _jsx('img', {
	  className: 'img-responsive',
	  src: '../assets/images/indiaopendata-about.png'
	}));

	var _ref4 = _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'The India Open Data Association (IODA), is a platform which promotes and supports different open data initiatives in India. It\u2019s an association of various Indian companies, enthusiasts, research institutes and academic departments, all with a keen interest in putting open data into mainstream. It follows the principle of:');

	var _ref5 = _jsx('div', {
	  className: 'img-middle'
	}, void 0, _jsx('img', {
	  className: 'img-responsive ',
	  src: 'assets/images/dka.png'
	}));

	var _ref6 = _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'The key emphasis for us is proper visualization of the data, accessible to all. Only then the "data" can generate public awareness and trigger an active community action to solve the problems which are of public interest. Open data initiatives in India have remained more or less confined towards presenting the collected information in a raw format. The key essence that has been missing so far is to create individual and collective knowledge out of this data which then can promote and trigger a positive change within the society. This is what IODA aims for and is in-process to achieve through its "Open Environment Data Project" in Delhi.');

	var _ref7 = _jsx('p', {
	  className: 'primary-black bold'
	}, void 0, 'Some of the key objectives of IODA are:');

	var _ref8 = _jsx('ul', {
	  className: 'partners-list'
	}, void 0, _jsx('li', {}, void 0, 'Creating an online platform to showcase the idea of open data and open data projects to the public.'), _jsx('li', {}, void 0, 'Providing an online space for different open data enthusiasts to come together and engage in open data initiatives.'), _jsx('li', {}, void 0, 'Connecting different open data organizations and empower them to collectively design and implement open data projects which have a meaningful impact on society.'), _jsx('li', {}, void 0, 'Showcasing information in an easy-to-understand visualized format.'), _jsx('li', {}, void 0, 'Providing a forum for a healthy discussion on various open data initiatives and its related topics.'), _jsx('li', {}, void 0, 'Creating noise within the society through the information that can ultimately translate into a sound collective community action.'));

	var _ref9 = _jsx('div', {
	  className: 'container about-container'
	}, void 0, _jsx('h2', {
	  className: 'text-center'
	}, void 0, 'The Open Ecosystem for Environment Monitoring'), _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'Convenient conceptual frameworks may not be adequate enough to address the growing problem of air pollution. Although these tactics may appear to be easily accessible and comfortable in practice, however, presence of uncertainty and incomplete nature of knowledge may hinder the process of applying custom-based solutions to big problems like \u2018Making Air-Quality Better\u2019. Only through complete knowledge about a situation, can an individual have the required capability to address and possibly contain the issue. Absence of proper knowledge cannot result in sound and productive action to curb any issue of immense public concern. One has to have full knowledge about the problem, in order to bring about a holistic change within the society. W.Ross Ashby famously said, \u2018only variety destroys variety\u2019.'), _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'We have a complex problem in hand and it requires a complex solution, not a complicated solution. This is only attainable through access to different forms of knowledge about the situation in hand.'));

	var _ref10 = _jsx('div', {
	  className: 'bg-gray'
	}, void 0, _jsx('div', {
	  className: 'container about-container'
	}, void 0, _jsx('h2', {
	  className: 'text-center'
	}, void 0, 'Why Support Us?'), _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'We believe in the idea that by consolidating an active community and directing them towards a public concern, where the solutions are designed by them rather than being directly/indirectly enforced upon, can help in bringing about the desirable qualitative change, which is so far missing, especially in the case of air-quality management. No single entity, be it an individual, an organization or the government can by itself provide the remedies to such concerns. It is a complex problem which requires a networked solution by involving all these entities. Through "Air Pollution.Online", we hope to provide a platform, developed out of the first open-data project of India Open Data Association (IODA), where people of diverse backgrounds can come together, access the knowledge and share their feedbacks to enable an action which is unique, multi-dimensional and is able to hit the roots of the growing concern like, poor air-quality management in Delhi.'), _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'A collective effort is something we hope to promote as well as develop strong web of networks between different stakeholders to address the multiple layers of the situation in hand. We are not contemplating on presenting a specific kind of solution to the public, rather we are contemplating on creating a space where the people as concerned citizens can contribute by sharing solutions which they think is apt for addressing the concern, which ultimately can lead to a sound change within the society.'), _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'Our initiative depends on each and every concerned member, organization, and group etc. of the society. Without the collective effort, the solution is unachievable. We need your support. Please join our network to participate and contribute to this growing concern of air pollution. Let us together address the issue of air-quality management in cities like Delhi, Mumbai, Ahmedabad\u2026, and possibly the whole India. Please join India Open Data Association to bring about a positive change within the society.')));

	var _ref11 = _jsx(_Footer2.default, {});

	var About = function (_Component) {
	  _inherits(About, _Component);

	  function About() {
	    _classCallCheck(this, About);

	    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	  }

	  _createClass(About, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: 'about'
	      }, void 0, _ref, _ref2, _jsx('div', {
	        className: 'bg-gray'
	      }, void 0, _jsx('div', {
	        className: 'container about-container'
	      }, void 0, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _jsx('p', {
	        className: 'primary-black',
	        style: { fontStyle: 'italic' }
	      }, void 0, 'All the data is shared under a "Creative Commons Licence" (Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) licence).'))), _jsx('div', {
	        className: 'bg-white',
	        style: { padding: '25px 0' }
	      }, void 0, _ref9), _ref10, _ref11);
	    }
	  }]);

	  return About;
	}(_react.Component);

	exports.default = About;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Navbar = __webpack_require__(1);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Footer = __webpack_require__(2);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _Helmet = __webpack_require__(52);

	var _Helmet2 = _interopRequireDefault(_Helmet);

	var _Tab = __webpack_require__(55);

	var _Tab2 = _interopRequireDefault(_Tab);

	var _TabList = __webpack_require__(56);

	var _TabList2 = _interopRequireDefault(_TabList);

	var _Tabs = __webpack_require__(58);

	var _Tabs2 = _interopRequireDefault(_Tabs);

	var _TabPanel = __webpack_require__(57);

	var _TabPanel2 = _interopRequireDefault(_TabPanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx(_Navbar2.default, {});

	var _ref2 = _jsx('div', {
	  className: 'hr-orange'
	}, void 0, _jsx('h1', {
	  className: 'primary-black'
	}, void 0, 'Airowl is here'), _jsx('hr', {}));

	var _ref3 = _jsx('div', {
	  className: 'text-center airowl-intro margin-bottom-25'
	}, void 0, _jsx('p', {}, void 0, 'Airowl is India\'s first reliable and most affordable Do-it-Yourself (DiY) personal air quality ', _jsx('a', {
	  className: 'theme-link',
	  href: 'https://en.wikipedia.org/wiki/Particulates',
	  target: '_blank'
	}, void 0, '(Dust SPM 2.5 & 10 micron)'), ' monitoring device.'), _jsx('p', {}, void 0, 'This device generates real-time dust pollution data and shows it on this open data project ', _jsx('a', {
	  className: 'theme-link',
	  href: '/#/dashboard/'
	}, void 0, 'website'), ' and a free mobile app (', _jsx('a', {
	  className: 'theme-link',
	  href: 'https://play.google.com/store/apps/details?id=com.idn0phl3108ed43d22s30&hl=en',
	  target: '_blank'
	}, void 0, 'Android'), ', iOS) that anyone can download. It will not only constantly update you on the quality of air that you are currently breathing but also helps other citizens of the country know the air quality.'), _jsx('p', {}, void 0, 'We sincerely believe, the starting point is 1000s of people like you can start a movement by affording an open source device and contribute the data to public domain for free access & sharing. This will automatically bring in a very large number of people, from all walks of life taking notice and using the free data in their own ways. Once we all start taking necessary action based on this data we will have far better air to breath.'), _jsx('p', {}, void 0, 'Without common man taking action, nothing is going to change.'), _jsx('p', {}, void 0, 'If you are an open data enthusiast, maker, you have an open-source monitoring device (accurate and reliable) or you have suggestions for us, then kindly ', _jsx('a', {
	  className: 'theme-link',
	  href: '/#/openapi/'
	}, void 0, 'contact us'), ' and contribute in this open data project.'), _jsx('img', {
	  className: 'img-responsive airowl-gif',
	  src: 'assets/img/airowl.gif'
	}));

	var _ref4 = _jsx('h1', {}, void 0, 'Buy your owl now');

	var _ref5 = _jsx('img', {
	  className: 'img-responsive img-middle',
	  src: 'assets/img/OWL_3g.jpg'
	});

	var _ref6 = _jsx('a', {
	  href: 'https://www.instamojo.com/AirOwl/airowl/',
	  rel: 'im-checkout',
	  'data-behaviour': 'remote',
	  'data-style': 'flat',
	  'data-text': 'Buy AirOwl 3G',
	  'data-token': '4aaf75271bbcbaa4e9d9bc35a38433d1'
	}, void 0);

	var _ref7 = _jsx('img', {
	  className: 'img-responsive img-middle',
	  src: 'assets/img/OWL_wi.jpg'
	});

	var _ref8 = _jsx('a', {
	  href: 'https://www.instamojo.com/AirOwl/airowl-wi/',
	  rel: 'im-checkout',
	  'data-behaviour': 'remote',
	  'data-style': 'flat',
	  'data-text': 'Buy AirOwl Wi',
	  'data-token': '4aaf75271bbcbaa4e9d9bc35a38433d1'
	}, void 0);

	var _ref9 = _jsx('span', {
	  className: 'red bold'
	}, void 0, 'Use Discount codes FIRST1000 (1001/- off).', _jsx('br', {}), ' if purchasing more than 10 then PACKOF10. (1501/- off)');

	var _ref10 = _jsx('div', {
	  className: 'real-data-home-bg real-data no-top-padding no-bottom-padding'
	}, void 0, _jsx('div', {
	  itemScope: true,
	  itemType: 'http://schema.org/Property',
	  className: 'black-transparent mobile-no-padding'
	}, void 0, _jsx('div', {
	  className: 'container'
	}, void 0, _jsx('div', {
	  className: 'row'
	}, void 0, _jsx('div', {
	  className: 'col-sm-12 margin-v-50'
	}, void 0, _jsx('div', {
	  className: 'col-sm-6 white-card-bg'
	}, void 0, _jsx('div', {
	  className: ''
	}, void 0, _jsx('p', {
	  className: 'title-card-bg'
	}, void 0, 'Portable and easy assembling')), _jsx('div', {
	  className: ''
	}, void 0, _jsx('p', {
	  className: 'desc-card-bg'
	}, void 0, 'Designed for all age groups. Simple and easy assembly. No additional tools required.')))), _jsx('div', {
	  className: 'col-sm-12 margin-bottom-50'
	}, void 0, _jsx('div', {
	  className: 'col-sm-6 col-md-offset-3 col-lg-offset-3 white-card-bg'
	}, void 0, _jsx('div', {
	  className: ''
	}, void 0, _jsx('p', {
	  className: 'title-card-bg'
	}, void 0, 'Consistent Performance and Low Maintenance')), _jsx('div', {
	  className: ''
	}, void 0, _jsx('p', {
	  className: 'desc-card-bg'
	}, void 0, 'The device runs consistently and only requires some dusting for maintenance (once every 3-5 months).')))), _jsx('div', {
	  className: 'col-sm-12 margin-bottom-50'
	}, void 0, _jsx('div', {
	  className: 'col-sm-6'
	}), _jsx('div', {
	  className: 'col-sm-6 white-card-bg'
	}, void 0, _jsx('div', {
	  className: ''
	}, void 0, _jsx('p', {
	  className: 'title-card-bg'
	}, void 0, 'Advance Visualization')), _jsx('div', {
	  className: ''
	}, void 0, _jsx('p', {
	  className: 'desc-card-bg'
	}, void 0, 'Information is offered in the form of graphs and charts. You can easily understand, monitor and compare the data daily, weekly, monthly and yearly.'))))))));

	var _ref11 = _jsx('div', {
	  className: 'margin-bottom-50'
	}, void 0, _jsx('span', {
	  className: 'h1 primary-black font-capital white title title-border'
	}, void 0, 'Know your AirOwl'), _jsx('hr', {
	  id: 'white'
	}));

	var _ref12 = _jsx('div', {
	  className: 'col-sm-12 col-md-8 col-lg-8 white-font col-md-offset-2 col-lg-offset-2'
	}, void 0, _jsx('p', {}, void 0, 'The AirOwl platform is designed for the people to be a part of this revolutionary change. People from different countries, cities and streets can contribute to the society by sharing their data and help in creating a hub for open indicators and distributed tools.'));

	var _ref13 = _jsx(_Tabs2.default, {
	  selectedIndex: 0
	}, void 0, _jsx(_TabList2.default, {}, void 0, _jsx(_Tab2.default, {}, void 0, 'ARDUINO NANO'), _jsx(_Tab2.default, {}, void 0, 'DUST SENSOR'), _jsx(_Tab2.default, {}, void 0, 'GSM BOARD'), _jsx(_Tab2.default, {}, void 0, 'ADAPTER'), _jsx(_Tab2.default, {}, void 0, 'CASING')), _jsx(_TabPanel2.default, {}, void 0, _jsx('div', {
	  className: 'col-sm-12 bg-darker-gray tab-div xyz'
	}, void 0, _jsx('div', {
	  className: 'col-sm-6'
	}, void 0, _jsx('img', {
	  className: 'img-middle img-tab img-responsive',
	  src: 'assets/img/arduino_nano.png'
	})), _jsx('div', {
	  className: 'col-sm-6 vertical-center-parent padding-25 tab-v-container text-left'
	}, void 0, _jsx('div', {
	  className: 'vertical-center'
	}, void 0, _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'A versatile, embedded micro-controller board based upon the popular Arduino format. It can be used on breadboards and can be powered via a Mini-B USB connection, a 6-20V unregulated external power supply, or 5V regulated external power supply. It has 16KB of programmable memory and 14 GPIO pins.'))))), _jsx(_TabPanel2.default, {}, void 0, _jsx('div', {
	  className: 'col-sm-12 bg-darker-gray tab-div xyz'
	}, void 0, _jsx('div', {
	  className: 'col-sm-6'
	}, void 0, _jsx('img', {
	  className: 'img-middle img-tab img-responsive',
	  src: 'assets/img/dust_sensor.jpg'
	})), _jsx('div', {
	  className: 'col-sm-6 vertical-center-parent padding-25 tab-v-container text-left'
	}, void 0, _jsx('div', {
	  className: 'vertical-center'
	}, void 0, _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'The dust sensor provides a good indication of the air quality by measuring the dust concentration. This dust sensor is versatile, accurate and compact in size. Using laser scattering theory, the dust particles present in air are detected, with good selectivity and stability.'))))), _jsx(_TabPanel2.default, {}, void 0, _jsx('div', {
	  className: 'col-sm-12 bg-darker-gray tab-div xyz'
	}, void 0, _jsx('div', {
	  className: 'col-sm-6'
	}, void 0, _jsx('img', {
	  className: 'img-middle img-tab img-responsive',
	  src: 'assets/img/gsm.jpg'
	})), _jsx('div', {
	  className: 'col-sm-6 vertical-center-parent padding-25 tab-v-container text-left'
	}, void 0, _jsx('div', {
	  className: 'vertical-center'
	}, void 0, _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'An ultra-compact and reliable wireless module, the SIM900A is a complete dual-band GSM/GPRS solution in a SMT module. It can be easily embedded in the customer applications. It accepts commands from Arduino Nano through UART. It has an external antenna as well.'))))), _jsx(_TabPanel2.default, {}, void 0, _jsx('div', {
	  className: 'col-sm-12 bg-darker-gray tab-div xyz'
	}, void 0, _jsx('div', {
	  className: 'col-sm-6'
	}, void 0, _jsx('img', {
	  className: 'img-middle img-tab img-responsive',
	  src: 'assets/img/adapter.jpg'
	})), _jsx('div', {
	  className: 'col-sm-6 vertical-center-parent padding-25 tab-v-container text-left'
	}, void 0, _jsx('div', {
	  className: 'vertical-center'
	}, void 0, _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'The simple 5V adapter is the power source for this device. The design of the adapter is similar to that of your mobile adapters. It comes with a one meter length chord.'))))), _jsx(_TabPanel2.default, {}, void 0, _jsx('div', {
	  className: 'col-sm-12 bg-darker-gray tab-div xyz'
	}, void 0, _jsx('div', {
	  className: 'col-sm-6'
	}, void 0, _jsx('img', {
	  className: 'img-middle img-tab img-responsive',
	  src: 'assets/img/casing.jpg'
	})), _jsx('div', {
	  className: 'col-sm-6 vertical-center-parent padding-25 tab-v-container text-left'
	}, void 0, _jsx('div', {
	  className: 'vertical-center'
	}, void 0, _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'The design of the casing is simple yet beautiful. AirOwl can become a part of your prized antiques or gadgets that you have in your house as it is very attractive.'))))));

	var _ref14 = _jsx('div', {
	  className: 'container'
	}, void 0, _jsx('div', {
	  className: 'row'
	}, void 0, _jsx('div', {
	  className: 'col-sm-12 text-center'
	}, void 0, _jsx('div', {
	  className: 'margin-bottom-default hr-orange'
	}, void 0, _jsx('span', {
	  className: 'h1 primary-black font-capital title '
	}, void 0, 'Resources!'), _jsx('hr', {})), _jsx('div', {
	  className: 'row margin-bottom-default'
	}, void 0, _jsx('div', {
	  className: 'col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2'
	}, void 0, _jsx('p', {}, void 0, 'It\'s never late, Good deeds often brings happiness to you and to the people around. Start caring through sharing!'))), _jsx('div', {
	  className: 'col-sm-6 col-lg-offset-3'
	}, void 0, _jsx('a', {
	  className: 'btn btn-default btn-red fa-btn-custom',
	  href: 'https://github.com/IndiaOpenDataAssociation/India-Open-Environment-Data-Project/tree/master/Airowl',
	  target: '_blank'
	}, void 0, ' ', _jsx('i', {
	  className: 'fa fa-github'
	}), ' Github ', _jsx('br', {}), ' ', _jsx('span', {
	  className: 'small-desc'
	}, void 0, '(Technical Details)'), ' '), _jsx('a', {
	  className: 'btn btn-default btn-red fa-btn-custom',
	  href: '\n                            http://knowledge.indiaopendata.com/index.php/AirOwl',
	  target: '_blank'
	}, void 0, ' ', _jsx('i', {
	  className: 'fa fa-wikipedia-w'
	}), ' Wiki ', _jsx('br', {}), ' ', _jsx('span', {
	  className: 'small-desc'
	}, void 0, '(Assembly Details)'))))));

	var _ref15 = _jsx('div', {
	  className: 'know-everything-home-bg know-everything no-bottom-padding no-top-padding'
	}, void 0, _jsx('div', {
	  itemScope: true,
	  itemType: 'http://schema.org/Property',
	  className: 'black-transparent padding-50'
	}, void 0, _jsx('div', {
	  className: 'container'
	}, void 0, _jsx('div', {
	  className: 'row'
	}, void 0, _jsx('div', {
	  className: 'col-sm-12 text-center'
	}, void 0, _jsx('div', {
	  className: 'margin-bottom-50'
	}, void 0, _jsx('span', {
	  className: 'h1 primary-black font-capital title white-border white'
	}, void 0, 'Buy owl now and contribute data'), _jsx('hr', {
	  id: 'whitelong'
	})), _jsx('div', {
	  className: 'row margin-bottom-50'
	}, void 0, _jsx('div', {
	  className: 'col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2'
	}, void 0, _jsx('p', {
	  className: 'white'
	}, void 0, 'Airowl is a simple and easy to assemble kit that can help you personally monitor the air-quality around you. It offers real-time data on air-quality and also the option of contributing it to an open-data platform for a wider community awareness and promote community action for better air-quality management.'))), _jsx('div', {
	  className: 'row'
	}, void 0, _jsx('div', {
	  className: 'col-sm-12 margin-v-25'
	}, void 0, _jsx('div', {
	  className: 'col-sm-4 mobile-no-padding'
	}, void 0, _jsx('div', {
	  className: 'white-vertical-card'
	}, void 0, _jsx('div', {}, void 0, _jsx('img', {
	  className: 'img-responsive white-vertical-card-img',
	  src: 'assets/img/community/city.png'
	})), _jsx('div', {}, void 0, _jsx('p', {
	  className: 'white-vertical-card-title'
	}, void 0, 'city')), _jsx('div', {}, void 0, _jsx('p', {
	  className: 'white-vertical-card-desc'
	}, void 0, 'City life is infected by the epidemic of air pollution. With advancement in technology, our cities can improve. Through proper monitoring and community action, air pollution can be better addressed. We as responsible citizens have to act accordingly.')))), _jsx('div', {
	  className: 'col-sm-4 mobile-no-padding'
	}, void 0, _jsx('div', {
	  className: 'white-vertical-card'
	}, void 0, _jsx('div', {}, void 0, _jsx('img', {
	  className: 'img-responsive white-vertical-card-img',
	  src: 'assets/img/community/research.png'
	})), _jsx('div', {}, void 0, _jsx('p', {
	  className: 'white-vertical-card-title'
	}, void 0, 'RESEARCH')), _jsx('div', {}, void 0, _jsx('p', {
	  className: 'white-vertical-card-desc'
	}, void 0, 'Our tools are open-source. Utilize them in building new products and set an example to showcase how technology, environment and people, together can improve the life on earth and make it more worthy.')))), _jsx('div', {
	  className: 'col-sm-4 mobile-no-padding'
	}, void 0, _jsx('div', {
	  className: 'white-vertical-card'
	}, void 0, _jsx('div', {}, void 0, _jsx('img', {
	  className: 'img-responsive white-vertical-card-img',
	  src: 'assets/img/community/persons.png'
	})), _jsx('div', {}, void 0, _jsx('p', {
	  className: 'white-vertical-card-title'
	}, void 0, 'COMMUNITY')), _jsx('div', {}, void 0, _jsx('p', {
	  className: 'white-vertical-card-desc'
	}, void 0, 'We are a community driven by the common goal of achieving better air-quality management.  Help us by joining our group and creating a wider awareness about this global concern and help those in need.'))))), _jsx('div', {
	  className: 'col-sm-12 '
	}, void 0, _jsx('div', {
	  className: 'col-sm-4 mobile-no-padding'
	}, void 0, _jsx('div', {
	  className: 'white-vertical-card'
	}, void 0, _jsx('div', {}, void 0, _jsx('img', {
	  className: 'img-responsive white-vertical-card-img',
	  src: 'assets/img/community/institution.png'
	})), _jsx('div', {}, void 0, _jsx('p', {
	  className: 'white-vertical-card-title'
	}, void 0, 'INSTITUTION')), _jsx('div', {}, void 0, _jsx('p', {
	  className: 'white-vertical-card-desc'
	}, void 0, 'Institutional learning can help young minds to actively participate in the global discussion on air pollution. Seminars and workshops can provide the students the knowledge to address this matter better.')))), _jsx('div', {
	  className: 'col-sm-4 mobile-no-padding'
	}, void 0, _jsx('div', {
	  className: 'white-vertical-card'
	}, void 0, _jsx('div', {}, void 0, _jsx('img', {
	  className: 'img-responsive white-vertical-card-img',
	  src: 'assets/img/community/personal.png'
	})), _jsx('div', {}, void 0, _jsx('p', {
	  className: 'white-vertical-card-title'
	}, void 0, 'personal spaces')), _jsx('div', {}, void 0, _jsx('p', {
	  className: 'white-vertical-card-desc'
	}, void 0, 'Indoor air pollution is even more harmful than outdoor air pollution. We fail to understand it because we lack the knowledge about it. Now we can. Take part in addressing air pollution holistically.')))), _jsx('div', {
	  className: 'col-sm-4 mobile-no-padding'
	}, void 0, _jsx('div', {
	  className: 'white-vertical-card'
	}, void 0, _jsx('div', {}, void 0, _jsx('img', {
	  className: 'img-responsive white-vertical-card-img',
	  src: 'assets/img/community/developers.png'
	})), _jsx('div', {}, void 0, _jsx('p', {
	  className: 'white-vertical-card-title'
	}, void 0, 'Developers')), _jsx('div', {}, void 0, _jsx('p', {
	  className: 'white-vertical-card-desc'
	}, void 0, 'Our initiative is an open-source project and we request you to feel free in using our designs and framework to develop something better. We would like you to contribute to this sincere initiative so that more and more people can benfit from it.'))))))), _jsx('div', {
	  className: 'text-center'
	}, void 0, _jsx('a', {
	  className: 'btn btn-yellow',
	  href: 'http://knowledge.indiaopendata.com/index.php/Open_Environment_Data_Project',
	  target: '_blank'
	}, void 0, ' Learn More'))))));

	var _ref16 = _jsx(_Footer2.default, {});

	var Airowl = function (_Component) {
	  _inherits(Airowl, _Component);

	  function Airowl(props) {
	    _classCallCheck(this, Airowl);

	    var _this = _possibleConstructorReturn(this, (Airowl.__proto__ || Object.getPrototypeOf(Airowl)).call(this, props));

	    _this.handleSelect = _this.handleSelect.bind(_this);
	    return _this;
	  }

	  _createClass(Airowl, [{
	    key: 'handleSelect',
	    value: function handleSelect(index, last) {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: 'airowl'
	      }, void 0, _jsx(_Helmet2.default, {
	        script: [{ "src": "https://d2xwmjc4uy2hr5.cloudfront.net/im-embed/im-embed.min.js", "type": "text/javascript" }]
	      }), _ref, _jsx('div', {
	        className: 'home-styles text-center'
	      }, void 0, _jsx('div', {
	        className: 'overlay'
	      }, void 0, _jsx('div', {
	        className: 'landing-content black-transparent'
	      }, void 0, _jsx('div', {
	        className: ' padding-default '
	      }, void 0, _jsx('div', {
	        className: 'row '
	      }, void 0, _jsx('div', {
	        className: 'col-sm-12 '
	      }, void 0, _jsx('div', {
	        className: 'col-sm-12 mobile-no-padding vertical-center-parent'
	      }, void 0, _jsx('div', {
	        className: ''
	      }, void 0, _jsx('div', {
	        className: 'col-sm-12 text-left mobile-no-padding',
	        style: { margin: "0 auto" }
	      }, void 0, _jsx('div', {
	        className: 'text-left',
	        style: { minHeight: '180px' }
	      }, void 0), _jsx('div', {
	        className: 'text-left margin-bottom-50'
	      }, void 0, _jsx('h2', {
	        style: { marginBottom: '0px', textAlign: 'left' }
	      }, void 0, 'When People Pollute,'), _jsx('h2', {
	        className: 'no-top-margin',
	        style: { textAlign: 'left' }
	      }, void 0, 'The AirOwl Hoot.'))))))))))), _jsx('div', {
	        className: 'below-home-section home-repeat-bg bg-white'
	      }, void 0, _jsx('div', {
	        className: 'container'
	      }, void 0, _jsx('div', {
	        className: ' text-center'
	      }, void 0, _ref2, _ref3, _jsx('div', {
	        className: 'buy-airowl-section'
	      }, void 0, _ref4, _jsx('div', {
	        className: 'row margin-bottom-25'
	      }, void 0, _jsx('div', {
	        className: 'col-sm-6'
	      }, void 0, _jsx('div', {
	        className: 'text-center margin-bottom-10p'
	      }, void 0, _ref5, _jsx('div', {
	        className: 'text-center red margin-bottom-10p'
	      }, void 0, _jsx('i', {
	        className: 'fa fa-inr',
	        style: { marginRight: "5px" }
	      }), ' 5,000/-'), _ref6)), _jsx('div', {
	        className: 'col-sm-6'
	      }, void 0, _jsx('div', {
	        className: 'text-center'
	      }, void 0, _ref7, _jsx('div', {
	        className: 'text-center red margin-bottom-10p'
	      }, void 0, _jsx('i', {
	        className: 'fa fa-inr',
	        style: { marginRight: "5px" }
	      }), ' 5,000/-'), _ref8)), _ref9))))), _ref10, _jsx('div', {
	        id: 'half-colored'
	      }, void 0, _jsx('div', {
	        className: 'container'
	      }, void 0, _jsx('div', {
	        className: 'row'
	      }, void 0, _jsx('div', {
	        className: 'col-sm-12 text-center'
	      }, void 0, _ref11, _jsx('div', {
	        className: 'row',
	        style: { marginBottom: "40px" }
	      }, void 0, _ref12), _ref13)))), _jsx('div', {
	        className: 'bg-white margin-bottom-25 resource',
	        style: { marginTop: '50px' }
	      }, void 0, _ref14), _ref15, _ref16);
	    }
	  }]);

	  return Airowl;
	}(_react.Component);

	exports.default = Airowl;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(5);

	var _App = {
	  "container": "App__container__4uEyK"
	};

	var _App2 = _interopRequireDefault(_App);

	var _reactHelmet = __webpack_require__(4);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Style


	// Import Components


	// Import Actions


	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.state = { isMounted: false };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: 'India Open Data',
	        titleTemplate: '%s - Blog App',
	        meta: [{ charset: 'utf-8' }, {
	          'http-equiv': 'X-UA-Compatible',
	          content: 'IE=edge'
	        }, {
	          name: 'viewport',
	          content: 'width=device-width, initial-scale=1'
	        }]
	      }), _jsx('div', {}, void 0, this.props.children)));
	    }
	  }]);

	  return App;
	}(_react.Component);

	App.contextTypes = {
	  store: _react2.default.PropTypes.object.isRequired
	};

	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {};
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reduxDevtools = __webpack_require__(59);

	var _reduxDevtoolsLogMonitor = __webpack_require__(61);

	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

	var _reduxDevtoolsDockMonitor = __webpack_require__(60);

	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Navbar = __webpack_require__(1);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Footer = __webpack_require__(2);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx('div', {
	  className: 'about'
	}, void 0, _jsx(_Navbar2.default, {}), _jsx('div', {
	  className: 'about-styles text-center '
	}, void 0, _jsx('div', {
	  className: 'overlay'
	}, void 0, _jsx('img', {
	  src: '../assets/images/community.jpg',
	  className: 'img-header'
	}), _jsx('div', {
	  className: 'middle-title'
	}, void 0, _jsx('div', {
	  className: 'title-container container'
	}, void 0, _jsx('h1', {
	  className: 'white bold '
	}, void 0, 'Join hands to become the agents of change. Be at the forefront of solution makers not pollution makers.'))))), _jsx('div', {
	  className: 'bg-white'
	}, void 0, _jsx('div', {
	  className: 'container community-container'
	}, void 0, _jsx('div', {
	  className: 'margin-bottom-50'
	}, void 0, _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'If you share the same vision, interest, desire and the capability to achieve the common goals of solving the air-quality problem in your habitat \u2014 city, town, village, or any other part of the world, then please join our initiative.'), _jsx('p', {
	  className: 'primary-black '
	}, void 0, 'We don\u2019t aim to offer the final solution, but we aim to bring your ideas, opinions, capabilities and strength to a wider public for active community participation. We do not aim for any specific target group\'s engagement. We welcome anyone from any walk of life to join us. We believe you can contribute to address this issue in your own unique way.')), _jsx('div', {
	  className: 'row'
	}, void 0, _jsx('div', {
	  className: 'col-md-6 community-info'
	}, void 0, _jsx('div', {
	  className: 'text-center margin-bottom-small'
	}, void 0, _jsx('span', {}, void 0, _jsx('i', {
	  className: 'fa fa-2x fa-wikipedia-w theme-color'
	}))), _jsx('p', {
	  className: 'bold'
	}, void 0, 'Enhance ours as well as your knowledge base. Access our wiki to know more and add your feedback, knowledge to widen the boundaries of wisdom.')), _jsx('div', {
	  className: 'col-md-6 community-info'
	}, void 0, _jsx('div', {
	  className: 'text-center margin-bottom-small'
	}, void 0, _jsx('span', {}, void 0, _jsx('i', {
	  className: 'fa fa-2x fa-creative-commons theme-color'
	}))), _jsx('p', {
	  className: 'bold'
	}, void 0, 'Be the agents of change. Help in the redesign of the open source solutions (hardware, software, server, visualisation) we have as of now with us.'))), _jsx('div', {
	  className: 'row'
	}, void 0, _jsx('div', {
	  className: 'col-md-6 community-info'
	}, void 0, _jsx('div', {
	  className: 'text-center margin-bottom-small'
	}, void 0, _jsx('span', {}, void 0, _jsx('i', {
	  className: 'fa fa-2x fa-database theme-color'
	}))), _jsx('p', {
	  className: 'bold'
	}, void 0, 'More data means more knowledge. Kindly donate your air-quality data to the platform.')), _jsx('div', {
	  className: 'col-md-6 community-info'
	}, void 0, _jsx('div', {
	  className: 'text-center margin-bottom-small'
	}, void 0, _jsx('span', {}, void 0, _jsx('i', {
	  className: 'fa fa-2x fa-share-alt theme-color'
	}))), _jsx('p', {
	  className: 'bold'
	}, void 0, 'Actions are multi-dimensional. Kindly share the knowledge of your recommended actions.'))))), _jsx('div', {
	  className: 'bg-gray'
	}, void 0, _jsx('div', {
	  className: 'container community-info'
	}, void 0, _jsx('h2', {
	  className: 'text-center margin-bottom-25'
	}, void 0, 'Resources'), _jsx('div', {
	  className: 'row resources-content margin-bottom-50'
	}, void 0, _jsx('div', {
	  className: 'col-md-3 text-center'
	}, void 0, _jsx('a', {
	  href: 'http://knowledge.indiaopendata.com/index.php/People',
	  target: '_blank'
	}, void 0, _jsx('span', {}, void 0, _jsx('i', {
	  className: 'fa fa-users primary-black'
	}))), _jsx('p', {
	  className: 'h4 primary-black'
	}, void 0, ' People ')), _jsx('div', {
	  className: 'col-md-3 text-center'
	}, void 0, _jsx(_reactRouter.Link, {
	  to: '/devices'
	}, void 0, _jsx('span', {}, void 0, _jsx('i', {
	  className: 'fa fa-cog primary-black'
	}))), _jsx('p', {
	  className: 'h4 primary-black'
	}, void 0, ' Devices ')), _jsx('div', {
	  className: 'col-md-3 text-center'
	}, void 0, _jsx('a', {
	  href: 'https://github.com/IndiaOpenDataAssociation/India-Open-Environment-Data-Project',
	  target: '_blank'
	}, void 0, _jsx('span', {}, void 0, _jsx('i', {
	  className: 'fa fa-github primary-black'
	}))), _jsx('p', {
	  className: 'h4 primary-black'
	}, void 0, ' Github ')), _jsx('div', {
	  className: 'col-md-3 text-center'
	}, void 0, _jsx(_reactRouter.Link, {
	  to: '/openapi'
	}, void 0, _jsx('span', {}, void 0, _jsx('i', {
	  className: 'fa fa-server primary-black'
	}))), _jsx('p', {
	  className: 'h4 primary-black'
	}, void 0, ' API '))))), _jsx(_Footer2.default, {}));

	var Community = function (_Component) {
	  _inherits(Community, _Component);

	  function Community() {
	    _classCallCheck(this, Community);

	    return _possibleConstructorReturn(this, (Community.__proto__ || Object.getPrototypeOf(Community)).apply(this, arguments));
	  }

	  _createClass(Community, [{
	    key: 'render',
	    value: function render() {
	      return _ref;
	    }
	  }]);

	  return Community;
	}(_react.Component);

	exports.default = Community;

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var cities = [{
	  "city": "Agra",
	  "latitude": 27.1767,
	  "longitude": 78.0081
	}, {
	  "city": "Ahmedabad",
	  "latitude": 23.0225,
	  "longitude": 72.5714
	}, {
	  "city": "Bengaluru",
	  "latitude": 12.9716,
	  "longitude": 77.5946
	}, {
	  "city": "Chandrapur",
	  "latitude": 20.2095,
	  "longitude": 79.5603
	}, {
	  "city": "Chennai",
	  "latitude": 13.0827,
	  "longitude": 80.2707
	}, {
	  "city": "Delhi",
	  "latitude": 28.6139,
	  "longitude": 77.2090
	}, {
	  "city": "Faridabad",
	  "latitude": 28.4089,
	  "longitude": 77.3178
	}, {
	  "city": "Gaya",
	  "latitude": 24.7955,
	  "longitude": 84.9994
	}, {
	  "city": "Gurgaon",
	  "latitude": 28.4595,
	  "longitude": 77.0266
	}, {
	  "city": "Haldia",
	  "latitude": 22.0667,
	  "longitude": 88.0698
	}, {
	  "city": "Hyderabad",
	  "latitude": 17.3850,
	  "longitude": 78.4867
	}, {
	  "city": "Jaipur",
	  "latitude": 26.9124,
	  "longitude": 75.7873
	}, {
	  "city": "Jodhpur",
	  "latitude": 26.2389,
	  "longitude": 73.0243
	}, {
	  "city": "Kanpur",
	  "latitude": 26.4499,
	  "longitude": 80.3319
	}, {
	  "city": "Kolkata",
	  "latitude": 22.5726,
	  "longitude": 88.3639
	}, {
	  "city": "Lucknow",
	  "latitude": 26.8467,
	  "longitude": 80.9462
	}, {
	  "city": "Mumbai",
	  "latitude": 19.0760,
	  "longitude": 72.8777
	}, {
	  "city": "Muzaffarpur",
	  "latitude": 26.1209,
	  "longitude": 85.3647
	}, {
	  "city": "Nagpur",
	  "latitude": 21.1458,
	  "longitude": 79.0882
	}, {
	  "city": "Nashik",
	  "latitude": 19.9975,
	  "longitude": 73.7898
	}, {
	  "city": "Panchkula",
	  "latitude": 30.6942,
	  "longitude": 76.8606
	}, {
	  "city": "Patna",
	  "latitude": 25.5941,
	  "longitude": 85.1376
	}, {
	  "city": "Pune",
	  "latitude": 18.5204,
	  "longitude": 73.8567
	}, {
	  "city": "Rohtak",
	  "latitude": 28.8955,
	  "longitude": 76.6066
	}, {
	  "city": "Solapur",
	  "latitude": 17.6599,
	  "longitude": 75.9064
	}, {
	  "city": "Varanasi",
	  "latitude": 25.3176,
	  "longitude": 82.9739
	}];

	exports.default = cities;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _GoogleMapLoader = __webpack_require__(9);

	var _GoogleMapLoader2 = _interopRequireDefault(_GoogleMapLoader);

	var _GoogleMap = __webpack_require__(8);

	var _GoogleMap2 = _interopRequireDefault(_GoogleMap);

	var _Marker = __webpack_require__(10);

	var _Marker2 = _interopRequireDefault(_Marker);

	var _Citydata = __webpack_require__(30);

	var _Citydata2 = _interopRequireDefault(_Citydata);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoadingMap = function (_Component) {
	  _inherits(LoadingMap, _Component);

	  function LoadingMap(props) {
	    _classCallCheck(this, LoadingMap);

	    var _this = _possibleConstructorReturn(this, (LoadingMap.__proto__ || Object.getPrototypeOf(LoadingMap)).call(this, props));

	    _this.state = _this.getState();
	    return _this;
	  }

	  _createClass(LoadingMap, [{
	    key: "getState",
	    value: function getState() {
	      return {
	        lat: 22.9734,
	        lng: 78.6569,
	        zoom: 5
	      };
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.cityValue != nextProps.cityValue) {
	        if (_Citydata2.default[nextProps.cityValue] != undefined) {
	          this.setState({ lat: _Citydata2.default[nextProps.cityValue].latitude, lng: _Citydata2.default[nextProps.cityValue].longitude, zoom: 11 });
	        } else {
	          this.setState(this.getState());
	        }
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _jsx("div", {
	        style: { height: "100%", pointerEvents: 'none', opacity: '0.4' }
	      }, void 0, _jsx(_GoogleMapLoader2.default, {
	        containerElement: _react2.default.createElement("div", _extends({}, this.props.containerElementProps, {
	          style: {
	            height: "92.5vh"
	          }
	        })),
	        googleMapElement: _jsx(_GoogleMap2.default, {
	          defaultZoom: 5,
	          zoom: this.state.zoom,
	          defaultCenter: { lat: 22.9734, lng: 78.6569 },
	          center: { lat: this.state.lat, lng: this.state.lng },
	          onClick: this.props.onMapClick
	        }, void 0)
	      }));
	    }
	  }]);

	  return LoadingMap;
	}(_react.Component);

	exports.default = LoadingMap;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _GoogleMapLoader = __webpack_require__(9);

	var _GoogleMapLoader2 = _interopRequireDefault(_GoogleMapLoader);

	var _GoogleMap = __webpack_require__(8);

	var _GoogleMap2 = _interopRequireDefault(_GoogleMap);

	var _Marker = __webpack_require__(10);

	var _Marker2 = _interopRequireDefault(_Marker);

	var _Mapstyle = __webpack_require__(42);

	var _Mapstyle2 = _interopRequireDefault(_Mapstyle);

	var _MarkerClusterer = __webpack_require__(51);

	var _MarkerClusterer2 = _interopRequireDefault(_MarkerClusterer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DashboardMap = function (_Component) {
	  _inherits(DashboardMap, _Component);

	  function DashboardMap(props) {
	    _classCallCheck(this, DashboardMap);

	    var _this = _possibleConstructorReturn(this, (DashboardMap.__proto__ || Object.getPrototypeOf(DashboardMap)).call(this, props));

	    var mapComponent = void 0;
	    _this.state = _this.getState();
	    return _this;
	  }

	  _createClass(DashboardMap, [{
	    key: "getState",
	    value: function getState() {
	      return {
	        lat: 22.9734,
	        lng: 78.6569,
	        zoom: 5,
	        cityChanged: this.props.cityChanged
	      };
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.cityValue != nextProps.cityValue) {
	        this.setState({ cityChanged: nextProps.cityChanged });
	        if (this.props.cities[nextProps.cityValue] != undefined) {
	          this.setState({ lat: this.props.cities[nextProps.cityValue].latitude, lng: this.props.cities[nextProps.cityValue].longitude, zoom: 11 });
	          if (this.refs.map) {
	            this.refs.map.props.map.setZoom(11);
	          }
	        } else {
	          this.setState({ lat: 22.9734, lng: 78.6569 });
	          this.refs.map.props.map.setZoom(5);
	        }
	      } else {
	        // this.refs.map.props.map.setZoom(this.refs.map.props.map.getZoom())
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      return _jsx("div", {
	        style: { height: "100%" }
	      }, void 0, _jsx(_GoogleMapLoader2.default, {
	        containerElement: _react2.default.createElement("div", _extends({}, this.props.containerElementProps, {
	          style: {
	            height: "92.5vh"
	          }
	        })),
	        googleMapElement: _react2.default.createElement(
	          _GoogleMap2.default,
	          {
	            ref: "map",
	            defaultZoom: 5,
	            defaultCenter: { lat: 22.9734, lng: 78.6569 },
	            center: { lat: this.state.lat, lng: this.state.lng },
	            onClick: this.props.onMapClick,
	            defaultOptions: { styles: _Mapstyle2.default }
	          },
	          _jsx(_MarkerClusterer2.default, {
	            averageCenter: true,
	            enableRetinaIcons: true,
	            gridSize: 60
	          }, void 0, this.props.markers.map(function (marker, index) {
	            var position = {
	              lat: parseFloat(marker.latitude),
	              lng: parseFloat(marker.longitude)
	            };

	            return _jsx(_Marker2.default, {
	              position: position,
	              icon: marker.aqi <= 50 ? 'assets/images/pins/good.svg' : marker.aqi > 50 && marker.aqi < 101 ? 'assets/images/pins/satisfactory.svg' : marker.aqi > 100 && marker.aqi < 201 ? 'assets/images/pins/moderate.svg' : marker.aqi > 200 && marker.aqi < 301 ? 'assets/images/pins/poor.svg' : marker.aqi > 300 && marker.aqi < 401 ? 'assets/images/pins/very-poor.svg' : 'assets/images/pins/severe.svg',
	              onRightclick: function onRightclick() {
	                return _this2.props.onMarkerRightclick(index);
	              },
	              onClick: function onClick() {
	                _this2.props.setDisable(false, marker.label, marker.deviceType);
	                _this2.props.callRealtime(marker.deviceId, marker.t);
	                _this2.props.callAnalytics(marker.deviceId, marker.t);
	                _this2.setState({ lat: marker.latitude, lng: marker.longitude });
	              }
	            });
	          }))
	        )
	      }));
	    }
	  }]);

	  return DashboardMap;
	}(_react.Component);

	exports.default = DashboardMap;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _ReactHighcharts = __webpack_require__(53);

	var _ReactHighcharts2 = _interopRequireDefault(_ReactHighcharts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var arr = [],
	    timeArr = [],
	    newTime = void 0;

	var _ref = _jsx('span', {
	  className: 'col-sm-6 col-xs-6'
	}, void 0, 'Outdoor');

	var _ref2 = _jsx('div', {
	  className: 'analytics-chart'
	}, void 0);

	var _ref3 = _jsx('span', {}, void 0, 'Last 24 hours data');

	var Analytics = function (_Component) {
	  _inherits(Analytics, _Component);

	  function Analytics(props) {
	    _classCallCheck(this, Analytics);

	    var _this = _possibleConstructorReturn(this, (Analytics.__proto__ || Object.getPrototypeOf(Analytics)).call(this, props));

	    _this.displayTime = _this.displayTime.bind(_this);
	    _this.maxAqi = _this.maxAqi.bind(_this);
	    _this.state = { aqiArray: [] };
	    return _this;
	  }

	  _createClass(Analytics, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.analysisData.length > 0) {
	        if (arr.length > 0) {
	          arr = [];
	          this.props.analysisData.map(function (e) {
	            arr.unshift(e.aqi);
	          });
	        } else {
	          this.props.analysisData.map(function (e) {
	            arr.unshift(e.aqi);
	          });
	        }
	        this.setState({ aqiArray: arr });

	        this.props.analysisData.map(function (e) {
	          newTime = new Date(e.payload.d.t * 1000);
	          var hour = newTime.getHours();
	          var hourVal = hour + ':00';
	          timeArr.unshift(hourVal);
	        });
	      }
	      // if(arr.length>0){
	      //   arr = [];
	      //   this.props.analysisData.map((e) => {
	      //     arr.unshift(e.aqi)
	      //   })
	      //   this.setState({aqiArray:arr})
	      // }
	      // else
	      // {
	      //   if(this.props.analysisData.length > 0) {
	      //
	      //     this.props.analysisData.map((e) => {
	      //       arr.unshift(e.aqi)
	      //     })
	      //     this.setState({aqiArray: arr})
	      //   }
	      // }

	      // if(timeArr.length > 0){
	      //   timeArr = []
	      //
	      //   this.props.analysisData.map((e) => {
	      //     newTime = new Date(e.payload.d.t * 1000)
	      //     var hour = newTime.getHours();
	      //     var hourVal = hour + ':00';
	      //     timeArr.unshift(hourVal)
	      //   })
	      // }
	      // else {
	      //
	      //   if(this.props.analysisData.length > 0){
	      //     this.props.analysisData.map((e) => {
	      //       newTime = new Date(e.payload.d.t * 1000)
	      //       var hour = newTime.getHours();
	      //       var hourVal = hour + ':00';
	      //       timeArr.unshift(hourVal)
	      //     })
	      //   }
	      // }
	    }
	  }, {
	    key: 'displayTime',
	    value: function displayTime() {
	      var a = new Date(this.props.timeStamp * 1000);

	      var year = a.getFullYear().toString().substr(2, 2);
	      var month = a.getMonth() + 1;
	      var date = a.getDate();
	      var hour = a.getHours();
	      var min = a.getMinutes();
	      var ampm = hour >= 12 ? 'pm' : 'am';
	      var displayTime = date + '-' + month + "-" + year + ' ' + hour + ':' + min + ampm;
	      return displayTime;
	    }
	  }, {
	    key: 'maxAqi',
	    value: function maxAqi() {
	      return Math.max.apply(Math, _toConsumableArray(arr));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var config = {
	        chart: {
	          backgroundColor: 'transparent',
	          width: 350,
	          height: 170,
	          type: 'areaspline'
	        },
	        colors: ['#00b3bf'],

	        title: {
	          text: 'Max AQI: ' + this.maxAqi(),
	          style: {
	            color: 'white',
	            fontSize: '14px'
	          }
	        },

	        legend: {
	          enabled: false
	        },

	        credits: {
	          enabled: false
	        },

	        xAxis: {
	          categories: timeArr,
	          labels: {
	            style: {
	              color: '#FFF'
	            }
	          }
	        },

	        yAxis: {
	          labels: {
	            style: {
	              color: '#FFF'
	            }
	          },
	          title: {
	            text: null
	          }
	        },

	        series: [{
	          name: 'Data',
	          data: this.state.aqiArray,
	          fillColor: 'rgba(255,255,255, 0.1)',
	          marker: {
	            enabled: false
	          }

	        }]
	      };
	      return _jsx('div', {
	        className: 'dashboard-home'
	      }, void 0, _jsx('div', {
	        className: 'home-top-content row'
	      }, void 0, _ref, _jsx('span', {
	        className: 'col-sm-6 col-xs-6'
	      }, void 0, 'as of: ', this.displayTime())), _jsx('div', {
	        className: 'home-bottom-content'
	      }, void 0, this.props.analysisData == true ? _ref2 : _jsx('div', {
	        className: 'analytics-chart'
	      }, void 0, _ref3, this.state.aqiArray.length > 0 ? _jsx(_ReactHighcharts2.default, {
	        config: config
	      }) : null), _jsx('div', {
	        className: 'average-cal'
	      }, void 0, _jsx('p', {
	        style: { textAlign: 'center', color: 'white', fontSize: '13px' }
	      }, void 0, 'Last hour Average'), _jsx('div', {
	        className: 'row'
	      }, void 0, this.props.realtimeData.map(function (gases) {
	        return Object.keys(gases.payload.d).map(function (key, index) {
	          return key != 't' && gases.payload.d[key] > 1 ? _jsx('div', {
	            className: 'col-sm-3 col-xs-3'
	          }, void 0, _jsx('div', {
	            className: 'avg-container'
	          }, void 0, _jsx('p', {
	            className: 'readings'
	          }, void 0, Math.trunc(gases.payload.d[key])), _jsx('p', {
	            className: 'units'
	          }, void 0, key == 'temp' ? 'C' : 'u3/mg')), _jsx('p', {
	            style: { textAlign: 'center', fontFamily: 'Bebasneues', color: 'white', marginTop: '10px' }
	          }, void 0, key == 'pm10' ? 'PM 10' : key == 'pm25' ? 'PM 2.5' : key == 'hum' ? 'Humidity' : key == 'so2' ? 'SO 2' : key == 'no2' ? 'NO 2' : key == 'o3' ? 'O 3' : key)) : null;
	        });
	      })))));
	    }
	  }]);

	  return Analytics;
	}(_react.Component);

	exports.default = Analytics;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx("div", {
	  className: "home-top-content row"
	}, void 0, _jsx("span", {
	  className: "col-sm-6 col-xs-6"
	}, void 0, "95 data sources"), _jsx("span", {
	  className: "col-sm-6 col-xs-6"
	}, void 0, "Please select one"));

	var _ref2 = _jsx("div", {
	  className: "aqiinfo"
	}, void 0, _jsx("img", {
	  src: "assets/img/aqiinfo.png",
	  className: "aqiinfo-img"
	}), _jsx("div", {
	  className: "home-label"
	}, void 0, _jsx("span", {}, void 0, "Air ", _jsx("br", {}), " Quality ", _jsx("br", {}), " Index")), _jsx("p", {
	  className: "imp-of-aqi"
	}, void 0, "Significance of AQI"));

	var _ref3 = _jsx("div", {
	  className: "aqirange"
	}, void 0, _jsx("img", {
	  src: "assets/images/aqi-range.png",
	  className: "aqirange-img"
	}));

	var Dashboardhome = function (_Component) {
	  _inherits(Dashboardhome, _Component);

	  function Dashboardhome() {
	    _classCallCheck(this, Dashboardhome);

	    return _possibleConstructorReturn(this, (Dashboardhome.__proto__ || Object.getPrototypeOf(Dashboardhome)).apply(this, arguments));
	  }

	  _createClass(Dashboardhome, [{
	    key: "render",
	    value: function render() {
	      return _jsx("div", {
	        className: "dashboard-home"
	      }, void 0, _ref, _jsx("div", {
	        className: "home-bottom-content"
	      }, void 0, _ref2, _ref3, _jsx("div", {
	        style: { padding: '9px' }
	      })));
	    }
	  }]);

	  return Dashboardhome;
	}(_react.Component);

	exports.default = Dashboardhome;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx('div', {
	  className: 'dashboard-home'
	}, void 0, _jsx('div', {
	  className: 'home-top-content row'
	}, void 0, _jsx('span', {
	  className: 'col-sm-6 col-xs-6'
	}, void 0, 'Outdoor'), _jsx('span', {
	  className: 'col-sm-6 col-xs-6'
	})), _jsx('div', {
	  className: 'home-bottom-content'
	}, void 0, _jsx('div', {
	  className: 'aqiinfo'
	}, void 0, _jsx('svg', {
	  version: '1.1',
	  id: 'Default',
	  xmlns: 'http://www.w3.org/2000/svg',
	  xmlnsXlink: 'http://www.w3.org/1999/xlink',
	  x: '0px',
	  y: '0px',
	  width: '272px',
	  height: '228px',
	  viewBox: '0 0 272 228',
	  className: 'svg-center aqiinfo-svgimg',
	  enableBackground: 'new 0 0 272 228',
	  xmlSpace: 'preserve'
	}, void 0, _jsx('g', {
	  id: 'ARC_1_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M191.404,187.424l8.573,11.171c20.739-15.914,34.309-39.416,37.721-65.335l-13.961-1.838\n                  C220.813,153.638,209.183,173.782,191.404,187.424z'
	})), _jsx('g', {
	  id: 'ARC_2_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M88.799,187.424l-8.573,11.171c-20.739-15.914-34.309-39.416-37.721-65.335l13.961-1.838\n                  C59.391,153.638,71.021,173.782,88.799,187.424z'
	})), _jsx('g', {
	  id: 'ARC_3_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M224.2,127.022l14.038,1.104c2.051-26.061-6.335-51.871-23.313-71.75l-10.708,9.145\n                  C218.77,82.562,225.958,104.684,224.2,127.022z'
	})), _jsx('g', {
	  id: 'ARC_5_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M211.472,52.542l-10.214,9.693c-15.425-16.254-36.675-25.715-59.075-26.302l0.369-14.077\n                  C168.686,22.542,193.477,33.579,211.472,52.542z'
	})), _jsx('g', {
	  id: 'ARC_7_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M78.686,62.235l-10.215-9.693c17.995-18.963,42.787-30.001,68.92-30.686l0.369,14.077\n                  C115.359,36.521,94.109,45.981,78.686,62.235z'
	})), _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M41.703,128.129c-2.027-25.758,6.14-51.643,23.315-71.751l10.708,9.145\n                  c-14.553,17.039-21.741,39.162-19.983,61.5l-14.038,1.104'
	})))));

	var _ref2 = _jsx('span', {
	  className: 'col-sm-6 col-xs-6'
	}, void 0, 'Outdoor');

	var _ref3 = _jsx('svg', {
	  version: '1.1',
	  id: 'Default',
	  xmlns: 'http://www.w3.org/2000/svg',
	  xmlnsXlink: 'http://www.w3.org/1999/xlink',
	  x: '0px',
	  y: '0px',
	  width: '272px',
	  height: '228px',
	  viewBox: '0 0 272 228',
	  className: 'svg-center aqiinfo-svgimg',
	  enableBackground: 'new 0 0 272 228',
	  xmlSpace: 'preserve'
	}, void 0, _jsx('g', {
	  id: 'ARC_1_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M191.404,187.424l8.573,11.171c20.739-15.914,34.309-39.416,37.721-65.335l-13.961-1.838\n                        C220.813,153.638,209.183,173.782,191.404,187.424z'
	})), _jsx('g', {
	  id: 'ARC_2_'
	}, void 0, _jsx('path', {
	  fill: '#6ecc58',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M88.799,187.424l-8.573,11.171c-20.739-15.914-34.309-39.416-37.721-65.335l13.961-1.838\n                        C59.391,153.638,71.021,173.782,88.799,187.424z'
	})), _jsx('g', {
	  id: 'ARC_3_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M224.2,127.022l14.038,1.104c2.051-26.061-6.335-51.871-23.313-71.75l-10.708,9.145\n                        C218.77,82.562,225.958,104.684,224.2,127.022z'
	})), _jsx('g', {
	  id: 'ARC_5_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M211.472,52.542l-10.214,9.693c-15.425-16.254-36.675-25.715-59.075-26.302l0.369-14.077\n                        C168.686,22.542,193.477,33.579,211.472,52.542z'
	})), _jsx('g', {
	  id: 'ARC_7_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M78.686,62.235l-10.215-9.693c17.995-18.963,42.787-30.001,68.92-30.686l0.369,14.077\n                        C115.359,36.521,94.109,45.981,78.686,62.235z'
	})), _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M41.703,128.129c-2.027-25.758,6.14-51.643,23.315-71.751l10.708,9.145\n                          c-14.553,17.039-21.741,39.162-19.983,61.5l-14.038,1.104'
	}));

	var _ref4 = _jsx('svg', {
	  version: '1.1',
	  id: 'Default',
	  xmlns: 'http://www.w3.org/2000/svg',
	  xmlnsXlink: 'http://www.w3.org/1999/xlink',
	  x: '0px',
	  y: '0px',
	  width: '272px',
	  height: '228px',
	  viewBox: '0 0 272 228',
	  className: 'svg-center aqiinfo-svgimg',
	  enableBackground: 'new 0 0 272 228',
	  xmlSpace: 'preserve'
	}, void 0, _jsx('g', {
	  id: 'ARC_1_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M191.404,187.424l8.573,11.171c20.739-15.914,34.309-39.416,37.721-65.335l-13.961-1.838\n                        C220.813,153.638,209.183,173.782,191.404,187.424z'
	})), _jsx('g', {
	  id: 'ARC_2_'
	}, void 0, _jsx('path', {
	  fill: '#bbcf4c',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M88.799,187.424l-8.573,11.171c-20.739-15.914-34.309-39.416-37.721-65.335l13.961-1.838\n                        C59.391,153.638,71.021,173.782,88.799,187.424z'
	})), _jsx('g', {
	  id: 'ARC_3_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M224.2,127.022l14.038,1.104c2.051-26.061-6.335-51.871-23.313-71.75l-10.708,9.145\n                        C218.77,82.562,225.958,104.684,224.2,127.022z'
	})), _jsx('g', {
	  id: 'ARC_5_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M211.472,52.542l-10.214,9.693c-15.425-16.254-36.675-25.715-59.075-26.302l0.369-14.077\n                        C168.686,22.542,193.477,33.579,211.472,52.542z'
	})), _jsx('g', {
	  id: 'ARC_7_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M78.686,62.235l-10.215-9.693c17.995-18.963,42.787-30.001,68.92-30.686l0.369,14.077\n                        C115.359,36.521,94.109,45.981,78.686,62.235z'
	})), _jsx('path', {
	  fill: '#bbcf4c',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M41.703,128.129c-2.027-25.758,6.14-51.643,23.315-71.751l10.708,9.145\n                          c-14.553,17.039-21.741,39.162-19.983,61.5l-14.038,1.104'
	}));

	var _ref5 = _jsx('svg', {
	  version: '1.1',
	  id: 'Default',
	  xmlns: 'http://www.w3.org/2000/svg',
	  xmlnsXlink: 'http://www.w3.org/1999/xlink',
	  x: '0px',
	  y: '0px',
	  width: '272px',
	  height: '228px',
	  viewBox: '0 0 272 228',
	  className: 'svg-center aqiinfo-svgimg',
	  enableBackground: 'new 0 0 272 228',
	  xmlSpace: 'preserve'
	}, void 0, _jsx('g', {
	  id: 'ARC_1_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M191.404,187.424l8.573,11.171c20.739-15.914,34.309-39.416,37.721-65.335l-13.961-1.838\n                        C220.813,153.638,209.183,173.782,191.404,187.424z'
	})), _jsx('g', {
	  id: 'ARC_2_'
	}, void 0, _jsx('path', {
	  fill: '#eac736',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M88.799,187.424l-8.573,11.171c-20.739-15.914-34.309-39.416-37.721-65.335l13.961-1.838\n                        C59.391,153.638,71.021,173.782,88.799,187.424z'
	})), _jsx('g', {
	  id: 'ARC_3_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M224.2,127.022l14.038,1.104c2.051-26.061-6.335-51.871-23.313-71.75l-10.708,9.145\n                        C218.77,82.562,225.958,104.684,224.2,127.022z'
	})), _jsx('g', {
	  id: 'ARC_5_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M211.472,52.542l-10.214,9.693c-15.425-16.254-36.675-25.715-59.075-26.302l0.369-14.077\n                        C168.686,22.542,193.477,33.579,211.472,52.542z'
	})), _jsx('g', {
	  id: 'ARC_7_'
	}, void 0, _jsx('path', {
	  fill: '#eac736',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M78.686,62.235l-10.215-9.693c17.995-18.963,42.787-30.001,68.92-30.686l0.369,14.077\n                        C115.359,36.521,94.109,45.981,78.686,62.235z'
	})), _jsx('path', {
	  fill: '#eac736',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M41.703,128.129c-2.027-25.758,6.14-51.643,23.315-71.751l10.708,9.145\n                          c-14.553,17.039-21.741,39.162-19.983,61.5l-14.038,1.104'
	}));

	var _ref6 = _jsx('svg', {
	  version: '1.1',
	  id: 'Default',
	  xmlns: 'http://www.w3.org/2000/svg',
	  xmlnsXlink: 'http://www.w3.org/1999/xlink',
	  x: '0px',
	  y: '0px',
	  width: '272px',
	  height: '228px',
	  viewBox: '0 0 272 228',
	  className: 'svg-center aqiinfo-svgimg',
	  enableBackground: 'new 0 0 272 228',
	  xmlSpace: 'preserve'
	}, void 0, _jsx('g', {
	  id: 'ARC_1_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M191.404,187.424l8.573,11.171c20.739-15.914,34.309-39.416,37.721-65.335l-13.961-1.838\n                        C220.813,153.638,209.183,173.782,191.404,187.424z'
	})), _jsx('g', {
	  id: 'ARC_2_'
	}, void 0, _jsx('path', {
	  fill: '#ed9a2e',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M88.799,187.424l-8.573,11.171c-20.739-15.914-34.309-39.416-37.721-65.335l13.961-1.838\n                        C59.391,153.638,71.021,173.782,88.799,187.424z'
	})), _jsx('g', {
	  id: 'ARC_3_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M224.2,127.022l14.038,1.104c2.051-26.061-6.335-51.871-23.313-71.75l-10.708,9.145\n                        C218.77,82.562,225.958,104.684,224.2,127.022z'
	})), _jsx('g', {
	  id: 'ARC_5_'
	}, void 0, _jsx('path', {
	  fill: '#ed9a2e',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M211.472,52.542l-10.214,9.693c-15.425-16.254-36.675-25.715-59.075-26.302l0.369-14.077\n                        C168.686,22.542,193.477,33.579,211.472,52.542z'
	})), _jsx('g', {
	  id: 'ARC_7_'
	}, void 0, _jsx('path', {
	  fill: '#ed9a2e',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M78.686,62.235l-10.215-9.693c17.995-18.963,42.787-30.001,68.92-30.686l0.369,14.077\n                        C115.359,36.521,94.109,45.981,78.686,62.235z'
	})), _jsx('path', {
	  fill: '#ed9a2e',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M41.703,128.129c-2.027-25.758,6.14-51.643,23.315-71.751l10.708,9.145\n                          c-14.553,17.039-21.741,39.162-19.983,61.5l-14.038,1.104'
	}));

	var _ref7 = _jsx('svg', {
	  version: '1.1',
	  id: 'Default',
	  xmlns: 'http://www.w3.org/2000/svg',
	  xmlnsXlink: 'http://www.w3.org/1999/xlink',
	  x: '0px',
	  y: '0px',
	  width: '272px',
	  height: '228px',
	  viewBox: '0 0 272 228',
	  className: 'svg-center aqiinfo-svgimg',
	  enableBackground: 'new 0 0 272 228',
	  xmlSpace: 'preserve'
	}, void 0, _jsx('g', {
	  id: 'ARC_1_'
	}, void 0, _jsx('path', {
	  fill: 'transparent',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M191.404,187.424l8.573,11.171c20.739-15.914,34.309-39.416,37.721-65.335l-13.961-1.838\n                        C220.813,153.638,209.183,173.782,191.404,187.424z'
	})), _jsx('g', {
	  id: 'ARC_2_'
	}, void 0, _jsx('path', {
	  fill: '#e8633a',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M88.799,187.424l-8.573,11.171c-20.739-15.914-34.309-39.416-37.721-65.335l13.961-1.838\n                        C59.391,153.638,71.021,173.782,88.799,187.424z'
	})), _jsx('g', {
	  id: 'ARC_3_'
	}, void 0, _jsx('path', {
	  fill: '#e8633a',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M224.2,127.022l14.038,1.104c2.051-26.061-6.335-51.871-23.313-71.75l-10.708,9.145\n                        C218.77,82.562,225.958,104.684,224.2,127.022z'
	})), _jsx('g', {
	  id: 'ARC_5_'
	}, void 0, _jsx('path', {
	  fill: '#e8633a',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M211.472,52.542l-10.214,9.693c-15.425-16.254-36.675-25.715-59.075-26.302l0.369-14.077\n                        C168.686,22.542,193.477,33.579,211.472,52.542z'
	})), _jsx('g', {
	  id: 'ARC_7_'
	}, void 0, _jsx('path', {
	  fill: '#e8633a',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M78.686,62.235l-10.215-9.693c17.995-18.963,42.787-30.001,68.92-30.686l0.369,14.077\n                        C115.359,36.521,94.109,45.981,78.686,62.235z'
	})), _jsx('path', {
	  fill: '#e8633a',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M41.703,128.129c-2.027-25.758,6.14-51.643,23.315-71.751l10.708,9.145\n                          c-14.553,17.039-21.741,39.162-19.983,61.5l-14.038,1.104'
	}));

	var _ref8 = _jsx('svg', {
	  version: '1.1',
	  id: 'Default',
	  xmlns: 'http://www.w3.org/2000/svg',
	  xmlnsXlink: 'http://www.w3.org/1999/xlink',
	  x: '0px',
	  y: '0px',
	  width: '272px',
	  height: '228px',
	  viewBox: '0 0 272 228',
	  className: 'svg-center aqiinfo-svgimg',
	  enableBackground: 'new 0 0 272 228',
	  xmlSpace: 'preserve'
	}, void 0, _jsx('g', {
	  id: 'ARC_1_'
	}, void 0, _jsx('path', {
	  fill: '#d63636',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M191.404,187.424l8.573,11.171c20.739-15.914,34.309-39.416,37.721-65.335l-13.961-1.838\n                        C220.813,153.638,209.183,173.782,191.404,187.424z'
	})), _jsx('g', {
	  id: 'ARC_2_'
	}, void 0, _jsx('path', {
	  fill: '#d63636',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M88.799,187.424l-8.573,11.171c-20.739-15.914-34.309-39.416-37.721-65.335l13.961-1.838\n                        C59.391,153.638,71.021,173.782,88.799,187.424z'
	})), _jsx('g', {
	  id: 'ARC_3_'
	}, void 0, _jsx('path', {
	  fill: '#d63636',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M224.2,127.022l14.038,1.104c2.051-26.061-6.335-51.871-23.313-71.75l-10.708,9.145\n                        C218.77,82.562,225.958,104.684,224.2,127.022z'
	})), _jsx('g', {
	  id: 'ARC_5_'
	}, void 0, _jsx('path', {
	  fill: '#d63636',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M211.472,52.542l-10.214,9.693c-15.425-16.254-36.675-25.715-59.075-26.302l0.369-14.077\n                        C168.686,22.542,193.477,33.579,211.472,52.542z'
	})), _jsx('g', {
	  id: 'ARC_7_'
	}, void 0, _jsx('path', {
	  fill: '#d63636',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M78.686,62.235l-10.215-9.693c17.995-18.963,42.787-30.001,68.92-30.686l0.369,14.077\n                        C115.359,36.521,94.109,45.981,78.686,62.235z'
	})), _jsx('path', {
	  fill: '#d63636',
	  stroke: '#ffffff',
	  strokeWidth: '0.7087',
	  strokeLinecap: 'round',
	  strokeLinejoin: 'round',
	  strokeMiterlimit: '10',
	  d: 'M41.703,128.129c-2.027-25.758,6.14-51.643,23.315-71.751l10.708,9.145\n                          c-14.553,17.039-21.741,39.162-19.983,61.5l-14.038,1.104'
	}));

	var _ref9 = _jsx('br', {});

	var _ref10 = _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/do.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/n_baby_out.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Take baby out')));

	var _ref11 = _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/prefferd.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/p_dinner_out.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Take dinner out')));

	var _ref12 = _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/do.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/p_pet_walk.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Take pet for walk')));

	var _ref13 = _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/prefferd.png'
	}));

	var _ref14 = _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/p_photography.png'
	}));

	var _ref15 = _jsx('span', {}, void 0, 'Explore nature by photography');

	var _ref16 = _jsx('div', {
	  className: 'realtime-data'
	}, void 0, _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/do.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/p_cycling.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Cycling'))), _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/do.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/p_jogging.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Jogging'))), _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/prefferd.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/p_plantation.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Take pet for walk'))), _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/do.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/n_use_two_wheeler.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Use two wheeler'))));

	var _ref17 = _jsx('div', {
	  className: 'realtime-data'
	}, void 0, _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/dont.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/n_baby_out.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Take baby out'))), _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/do.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/y_use_public_transport.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Use public transport'))), _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/dont.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/n_smoking.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Smoking'))), _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/dont.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/n_fire.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Fire light'))));

	var _ref18 = _jsx('div', {
	  className: 'realtime-data'
	}, void 0, _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/do.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/y_use_mask.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Use mask'))), _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/do.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/y_use_public_transport.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Use public transport'))), _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/dont.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/n_use_two_wheeler.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Use two wheeler'))), _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/dont.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/n_baby_out.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Take baby out'))));

	var _ref19 = _jsx('div', {
	  className: 'realtime-data'
	}, void 0, _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/do.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/y_use_mask.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Use mask'))), _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/do.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/y_wear_protective_eye_glasses.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Wear protective eye glasses'))), _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/dont.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/n_use_two_wheeler.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Use two wheeler'))), _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/do.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/y_use_public_transport.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Use public transport'))));

	var _ref20 = _jsx('div', {
	  className: 'realtime-data'
	}, void 0, _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/do.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/y_use_mask.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Use mask'))), _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/dont.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/n_use_two_wheeler.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Use two wheeler'))), _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/dont.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/n_smoking.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Smoking'))), _jsx('ul', {
	  className: 'realtime-data-list'
	}, void 0, _jsx('li', {
	  className: 'sign'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/do.png'
	})), _jsx('li', {
	  className: 'activity-icon'
	}, void 0, _jsx('img', {
	  src: 'assets/images/icons/y_use_public_transport.png'
	})), _jsx('li', {
	  className: 'activity-title'
	}, void 0, _jsx('span', {}, void 0, 'Use public transport'))));

	var Realtime = function (_Component) {
	  _inherits(Realtime, _Component);

	  function Realtime(props) {
	    _classCallCheck(this, Realtime);

	    var _this = _possibleConstructorReturn(this, (Realtime.__proto__ || Object.getPrototypeOf(Realtime)).call(this, props));

	    _this.displayTime = _this.displayTime.bind(_this);
	    return _this;
	  }

	  _createClass(Realtime, [{
	    key: 'displayTime',
	    value: function displayTime() {
	      var a = new Date(this.props.timeStamp * 1000);

	      var year = a.getFullYear().toString().substr(2, 2);
	      var month = a.getMonth() + 1;
	      var date = a.getDate();
	      var hour = a.getHours();
	      var min = a.getMinutes();
	      var ampm = hour >= 12 ? 'pm' : 'am';
	      var displayTime = date + '-' + month + "-" + year + ' ' + hour + ':' + min + ampm;
	      return displayTime;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.loadingState == true ? _ref : _jsx('div', {
	        className: 'dashboard-home'
	      }, void 0, _jsx('div', {
	        className: 'home-top-content row'
	      }, void 0, _ref2, _jsx('span', {
	        className: 'col-sm-6 col-xs-6'
	      }, void 0, 'as of: ', this.displayTime())), _jsx('div', {
	        className: 'home-bottom-content'
	      }, void 0, _jsx('div', {
	        className: 'aqiinfo'
	      }, void 0, this.props.realtimeData[0].aqi <= 50 ? _ref3 : this.props.realtimeData[0].aqi > 50 && this.props.realtimeData[0].aqi < 101 ? _ref4 : this.props.realtimeData[0].aqi > 100 && this.props.realtimeData[0].aqi < 201 ? _ref5 : this.props.realtimeData[0].aqi > 200 && this.props.realtimeData[0].aqi < 301 ? _ref6 : this.props.realtimeData[0].aqi > 300 && this.props.realtimeData[0].aqi < 401 ? _ref7 : _ref8, _jsx('div', {
	        className: 'realtime-label'
	      }, void 0, _jsx('span', {
	        style: { color: 'white', fontSize: '56px', fontFamily: 'Bebasneues' }
	      }, void 0, this.props.realtimeData[0].aqi), _ref9, _jsx('span', {
	        style: { color: 'white', fontSize: '20px' }
	      }, void 0, this.props.realtimeData[0].aqi <= 50 ? 'Good' : this.props.realtimeData[0].aqi > 50 && this.props.realtimeData[0].aqi < 101 ? 'Satisfactory' : this.props.realtimeData[0].aqi > 100 && this.props.realtimeData[0].aqi < 201 ? 'Moderate' : this.props.realtimeData[0].aqi > 200 && this.props.realtimeData[0].aqi < 301 ? 'Poor' : this.props.realtimeData[0].aqi > 300 && this.props.realtimeData[0].aqi < 401 ? 'Very Poor' : 'Severe'))), this.props.realtimeData[0].aqi <= 50 ? _jsx('div', {
	        className: 'realtime-data'
	      }, void 0, _ref10, _ref11, _ref12, _jsx('ul', {
	        className: 'realtime-data-list'
	      }, void 0, _ref13, _ref14, _jsx('li', {
	        className: 'activity-title',
	        style: { padding: '12px 5px 15px' }
	      }, void 0, _ref15))) : this.props.realtimeData[0].aqi > 50 && this.props.realtimeData[0].aqi < 101 ? _ref16 : this.props.realtimeData[0].aqi > 100 && this.props.realtimeData[0].aqi < 201 ? _ref17 : this.props.realtimeData[0].aqi > 200 && this.props.realtimeData[0].aqi < 301 ? _ref18 : this.props.realtimeData[0].aqi > 300 && this.props.realtimeData[0].aqi < 401 ? _ref19 : _ref20));
	    }
	  }]);

	  return Realtime;
	}(_react.Component);

	exports.default = Realtime;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Navbar = __webpack_require__(1);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Footer = __webpack_require__(2);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx('div', {
	  className: 'about'
	}, void 0, _jsx(_Navbar2.default, {}), _jsx('div', {
	  className: 'about-styles text-center '
	}, void 0, _jsx('div', {
	  className: 'overlay'
	}, void 0, _jsx('img', {
	  src: '../assets/images/devices.jpg',
	  className: 'img-header'
	}), _jsx('div', {
	  className: 'middle-title'
	}, void 0, _jsx('div', {
	  className: 'title-container'
	}, void 0, _jsx('h1', {
	  className: 'white bold '
	}, void 0, '\u201CIf you cannot measure it, You cannot improve it.\u201D'))))), _jsx('div', {
	  className: 'bg-white'
	}, void 0, _jsx('div', {
	  className: 'container airowl-container'
	}, void 0, _jsx('h2', {
	  className: 'text-center bold '
	}, void 0, 'AirOwl'), _jsx('div', {
	  className: 'row'
	}, void 0, _jsx('div', {
	  className: 'col-md-6'
	}, void 0, _jsx('img', {
	  className: 'devices-img img-responsive',
	  src: 'assets/images/devices-airowl.png'
	})), _jsx('div', {
	  className: 'col-md-6 text-center'
	}, void 0, _jsx('div', {
	  className: 'vertical-center'
	}, void 0, _jsx('p', {}, void 0, 'Airowl is a D-i-Y (Do-it-Yourself) kit which helps you to build your own personal Air Quality Monitoring device. The device would give you real-time air quality data on the app and update you of the air that you are breathing.')))))), _jsx('div', {
	  className: 'bg-gray'
	}, void 0, _jsx('div', {
	  className: 'container emk-container'
	}, void 0, _jsx('h2', {
	  className: 'text-center bold '
	}, void 0, 'Environment Monitoring Kit (EMK)'), _jsx('div', {
	  className: 'row'
	}, void 0, _jsx('div', {
	  className: 'col-md-6 text-center'
	}, void 0, _jsx('div', {
	  className: 'vertical-center'
	}, void 0, _jsx('p', {}, void 0, 'The Environment Monitoring Kit (EMK) is a device which assesses different parameters of air-quality. The device has been assembled with an aim of being cost-effective and easily scalable. The design of the device is such that it requires to be mounted onto a wall in a semi-open space to assess the air-quality of the region. The device is equipped with a solar panel and has a battery backup upto 3 hours. The shape of the box is designed to make it water resistant (incase of rainfall). The device is also equipped with GPS, GPRS and WIFI capabilities to transmit the data and location to the servers. The device, however requires a power source of 5 VA power through any USB compatible device or charger, making it less power hungry during its functioning.'))), _jsx('div', {
	  className: 'col-md-6'
	}, void 0, _jsx('img', {
	  className: 'devices-img img-responsive',
	  src: 'assets/images/devices-ioda.png'
	}))))), _jsx(_Footer2.default, {}));

	var Device = function (_Component) {
	  _inherits(Device, _Component);

	  function Device() {
	    _classCallCheck(this, Device);

	    return _possibleConstructorReturn(this, (Device.__proto__ || Object.getPrototypeOf(Device)).apply(this, arguments));
	  }

	  _createClass(Device, [{
	    key: 'render',
	    value: function render() {
	      return _ref;
	    }
	  }]);

	  return Device;
	}(_react.Component);

	exports.default = Device;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Navbar = __webpack_require__(1);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Footer = __webpack_require__(2);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx(_Navbar2.default, {});

	var _ref2 = _jsx('div', {
	  className: 'about-styles text-center '
	}, void 0, _jsx('div', {
	  className: 'overlay'
	}, void 0, _jsx('img', {
	  src: '../assets/images/api.jpg',
	  className: 'img-header'
	})));

	var _ref3 = _jsx('h2', {
	  className: 'text-center'
	}, void 0, 'Use Public API');

	var _ref4 = _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'You can use our \u2018Outgoing APIs\u2019 to call in the data from our servers for any kind of use under the CC: BY-SA license. We are still developing the \'Incoming APIs\' and will release it very soon.');

	var _ref5 = _jsx('div', {
	  className: 'text-center consume-api'
	}, void 0, _jsx('a', {
	  href: 'https://www.mashape.com/sohil4932/open-environment-data-project?&utm_campaign=mashape5-embed&utm_medium=button&utm_source=open-environment-data-project&utm_content=anchorlink&utm_term=icon-light',
	  target: '_blank'
	}, void 0, _jsx('img', {
	  src: 'https://d1g84eaw0qjo7s.cloudfront.net/images/badges/badge-icon-light-9e8eba63.png',
	  width: '143',
	  height: '38',
	  alt: 'Mashape'
	})));

	var _ref6 = _jsx('br', {});

	var _ref7 = _jsx('a', {
	  rel: 'license',
	  href: 'http://creativecommons.org/licenses/by-sa/4.0/',
	  target: '_blank'
	}, void 0, 'Creative Commons Attribution-ShareAlike 4.0 International License');

	var _ref8 = _jsx('br', {});

	var _ref9 = _jsx('div', {
	  className: 'bg-gray'
	}, void 0, _jsx('div', {
	  className: 'container api-container'
	}, void 0, _jsx('h2', {
	  className: 'text-center'
	}, void 0, 'Contact Us'), _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'If you wish to share your air-quality monitoring data to our servers then kindly contact us on the below address:'), _jsx('div', {
	  className: 'col-sm-12 col-lg-10 col-lg-offset-1 text-center margin-bottom-default'
	}, void 0, _jsx('p', {
	  className: 'primary-black'
	}, void 0, '212 (2nd Floor), Qutab Plaza, DLF Phase 1,', _jsx('br', {}), 'Sector 26 Gurgaon, Haryana \u2013 122002', _jsx('br', {}), '(M) +91-97171-33445', _jsx('br', {}), '(O) +91-124-4102642', _jsx('br', {}), _jsx('br', {}), 'Mrutyunjay (m2@ioda.in)', _jsx('br', {}), 'Namit (namit@ioda.in)'))));

	var _ref10 = _jsx(_Footer2.default, {});

	var Openapi = function (_Component) {
	  _inherits(Openapi, _Component);

	  function Openapi() {
	    _classCallCheck(this, Openapi);

	    return _possibleConstructorReturn(this, (Openapi.__proto__ || Object.getPrototypeOf(Openapi)).apply(this, arguments));
	  }

	  _createClass(Openapi, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: 'about'
	      }, void 0, _ref, _ref2, _jsx('div', {
	        className: 'bg-white'
	      }, void 0, _jsx('div', {
	        className: 'container api-container margin-bottom-50'
	      }, void 0, _ref3, _ref4, _ref5, _jsx('div', {
	        className: 'text-center license-api'
	      }, void 0, _ref6, 'This work is licensed under a \xA0', _ref7, _ref8, _jsx('a', {
	        rel: 'license',
	        href: 'http://creativecommons.org/licenses/by-sa/4.0/',
	        target: '_blank'
	      }, void 0, _jsx('img', {
	        style: { paddingTop: '20px', borderWidth: 0 },
	        alt: 'Creative Commons License',
	        src: 'https://i.creativecommons.org/l/by-sa/4.0/88x31.png'
	      }))))), _ref9, _ref10);
	    }
	  }]);

	  return Openapi;
	}(_react.Component);

	exports.default = Openapi;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Navbar = __webpack_require__(1);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Footer = __webpack_require__(2);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx(_Navbar2.default, {});

	var _ref2 = _jsx('div', {
	  className: 'about-styles text-center '
	}, void 0, _jsx('div', {
	  className: 'overlay'
	}, void 0, _jsx('img', {
	  src: '../assets/images/partners.jpg',
	  className: 'img-header'
	}), _jsx('div', {
	  className: 'middle-title'
	}, void 0, _jsx('div', {
	  className: 'title-container'
	}, void 0, _jsx('h1', {
	  className: 'white bold '
	}, void 0, 'Coming together is a beginning; keeping together is progress; working together is success')))));

	var _ref3 = _jsx('div', {
	  className: 'bg-white'
	}, void 0, _jsx('div', {
	  className: 'container partner-container margin-bottom-50'
	}, void 0, _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'Our journey so far, has brought us closer to many concerned individuals and organisations who have extended their help in developing a possible solution. We would like to acknowledge all our partners -- the individuals who are playing an active advisory role and the organisations that are supporting us in building the foundation.'), _jsx('p', {
	  className: 'primary-black'
	}, void 0, 'The list below is not a static list. It is expected to expand. We request you to help us in expanding it by adding yourself as a concerned partner. If you wish to run side-by -side with us or provide valuable advice through your unique capabilities & experiences, then join hands with us to help in building the existing idea or shaping up a new idea which can contribute to a positive change within the society. Kindly click here and help us know you better and how you can support us in this initiative. Please suggest us the activities, take ownership and drive the initiative for a revolutionary change.')));

	var _ref4 = _jsx('div', {
	  className: 'bg-gray'
	}, void 0, _jsx('div', {
	  className: 'container partner-container margin-bottom-50'
	}, void 0, _jsx('p', {
	  className: 'primary-black bold'
	}, void 0, 'We are specifically looking for support on the following fronts:'), _jsx('ul', {
	  className: 'partners-list'
	}, void 0, _jsx('li', {}, void 0, 'Anything you feel we have unconsciously missed or not addressed properly.'), _jsx('li', {}, void 0, 'Spreading awareness amongst the citizens about the air-quality problem and how their monitoring can possibly help in developing knowledge and driving action.'), _jsx('li', {}, void 0, 'Making the dream of having 1000s of AirOwls or any other open source monitoring devices installed across the country and sending minute by minute data to the platform, a reality.'), _jsx('li', {}, void 0, 'Sharing the existing solutions in the public space to other makers worldwide to further improve the hardware design and to bring down the cost and promote adoption of the idea.'), _jsx('li', {}, void 0, 'Inform the environmental scientists, opinion leaders, politicians, policy makers, media activists and anyone else who is relevant to utilize the data, freely available for their respective use.'))));

	var _ref5 = _jsx('h3', {
	  className: 'text-center margin-bottom-25 '
	}, void 0, 'Partners');

	var _ref6 = _jsx('img', {
	  className: 'img-responsive partner-img',
	  src: 'assets/images/partners/arunverma.gif'
	});

	var _ref7 = _jsx('p', {
	  className: 'partner-title'
	}, void 0, 'Arun Verma, Design Studio, Noida');

	var _ref8 = _jsx('p', {
	  className: 'partner-role'
	}, void 0, 'Digital & Print Design/Storytelling');

	var _ref9 = _jsx('div', {
	  className: 'col-md-3'
	}, void 0, _jsx('div', {
	  className: 'partner-img-container'
	}, void 0, _jsx('img', {
	  className: 'img-responsive partner-img',
	  src: 'assets/images/partners/bold.png'
	})), _jsx('p', {
	  className: 'partner-title'
	}, void 0, 'Bold Kiln, Noida'), _jsx('p', {
	  className: 'partner-role'
	}, void 0, 'Marketing Support'));

	var _ref10 = _jsx('div', {
	  className: 'col-md-3'
	}, void 0, _jsx('div', {
	  className: 'partner-img-container'
	}, void 0, _jsx('img', {
	  className: 'img-responsive partner-img',
	  src: 'assets/images/partners/jamia.jpg'
	})), _jsx('p', {
	  className: 'partner-title'
	}, void 0, 'CCMG, Jamia Milia Islamia, Delhi'), _jsx('p', {
	  className: 'partner-role'
	}, void 0, 'Academic Partner'));

	var _ref11 = _jsx('div', {
	  className: 'col-md-3'
	}, void 0, _jsx('div', {
	  className: 'partner-img-container'
	}, void 0, _jsx('img', {
	  className: 'img-responsive partner-img',
	  src: 'assets/images/partners/cmee.png'
	})), _jsx('p', {
	  className: 'partner-title'
	}, void 0, 'CMEE, IIM Lucknow'), _jsx('p', {
	  className: 'partner-role'
	}, void 0, 'Corporate Front Ending & Marketing Advisory Partner'));

	var _ref12 = _jsx('img', {
	  className: 'img-responsive partner-img',
	  src: 'assets/images/partners/smartmandate.png'
	});

	var _ref13 = _jsx('p', {
	  className: 'partner-title'
	}, void 0, 'Juxt Smart Mandate');

	var _ref14 = _jsx('p', {
	  className: 'partner-role'
	}, void 0, 'Data Analytics/Seed Fund');

	var _ref15 = _jsx('div', {
	  className: 'col-md-3'
	}, void 0, _jsx('div', {
	  className: 'partner-img-container'
	}, void 0, _jsx('img', {
	  className: 'img-responsive partner-img',
	  src: 'assets/images/partners/oizom-about.svg'
	})), _jsx('p', {
	  className: 'partner-title'
	}, void 0, 'Oizom Instruments'), _jsx('p', {
	  className: 'partner-role'
	}, void 0, 'Makers - Hardware Assembly, Data Visualisation Platform, Mobile App (V1)'));

	var _ref16 = _jsx('img', {
	  className: 'img-responsive partner-img',
	  src: 'assets/images/partners/seedstudio.png'
	});

	var _ref17 = _jsx('p', {
	  className: 'partner-title'
	}, void 0, 'Seeed Studio, ShenZhen');

	var _ref18 = _jsx('p', {
	  className: 'partner-role'
	}, void 0, 'Opensource Hardware Components/Sensors Sourcing');

	var _ref19 = _jsx('img', {
	  className: 'img-responsive partner-img',
	  src: 'assets/images/partners/urja.jpg'
	});

	var _ref20 = _jsx('p', {
	  className: 'partner-title'
	}, void 0, 'URJA, Delhi');

	var _ref21 = _jsx('p', {
	  className: 'partner-role'
	}, void 0, 'RWA, Delhi Local Community Activation');

	var _ref22 = _jsx('div', {
	  className: 'container partner-container margin-bottom-50'
	}, void 0, _jsx('h3', {
	  className: 'text-center margin-bottom-25 '
	}, void 0, 'Advisors'), _jsx('table', {
	  className: 'table table-stripped'
	}, void 0, _jsx('thead', {}, void 0, _jsx('tr', {}, void 0, _jsx('th', {
	  className: ''
	}, void 0, ' Name '), _jsx('th', {
	  className: 'text-left'
	}, void 0, ' Organization '), _jsx('th', {
	  className: 'text-center'
	}, void 0, ' Profile '))), _jsx('tbody', {}, void 0, _jsx('tr', {}, void 0, _jsx('td', {}, void 0, ' Ashutosh Dikshit '), _jsx('td', {
	  className: 'text-left'
	}, void 0, ' CEO, URJA '), _jsx('td', {
	  className: 'text-center'
	}, void 0, ' ', _jsx('a', {
	  href: 'https://in.linkedin.com/in/ashutosh-dikshit-a0733bb',
	  target: '_blank'
	}, void 0, _jsx('i', {
	  className: 'fa fa-linkedin primary-black'
	})))), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, ' Deepak Chaudhary '), _jsx('td', {
	  className: 'text-left'
	}, void 0, ' Renowned Pulmonologist '), _jsx('td', {
	  className: 'text-center'
	}, void 0, ' ', _jsx('a', {
	  href: 'https://www.practo.com/delhi/clinic/dr-deepak-chaudhary-clinic-defence-colony ',
	  target: '_blank'
	}, void 0, _jsx('i', {
	  className: 'fa fa-user-md primary-black'
	})))), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, ' Jai Dhar Gupta '), _jsx('td', {
	  className: 'text-left'
	}, void 0, ' Founder, Nirvanabeing '), _jsx('td', {
	  className: 'text-center'
	}, void 0, ' ', _jsx('a', {
	  href: 'http://starparents.org/jai-dhar-gupta/',
	  target: '_blank'
	}, void 0, _jsx('i', {
	  className: 'fa fa-user primary-black'
	})))), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, ' Krishna Kumar '), _jsx('td', {
	  className: 'text-left'
	}, void 0, ' COO, 9.9 Tech '), _jsx('td', {
	  className: 'text-center'
	}, void 0, ' ', _jsx('a', {
	  href: 'https://in.linkedin.com/in/kkumarkg ',
	  target: '_blank'
	}, void 0, _jsx('i', {
	  className: 'fa fa-linkedin primary-black'
	})))), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, ' Laveesh Bhandari '), _jsx('td', {
	  className: 'text-left'
	}, void 0, ' Economist '), _jsx('td', {
	  className: 'text-center'
	}, void 0, ' ', _jsx('a', {
	  href: 'https://in.linkedin.com/in/laveeshbhandari',
	  target: '_blank'
	}, void 0, _jsx('i', {
	  className: 'fa fa-linkedin primary-black'
	})))), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, ' Nikhil Pahwa '), _jsx('td', {
	  className: 'text-left'
	}, void 0, ' Founder, Editor and Publisher, Medianama '), _jsx('td', {
	  className: 'text-center'
	}, void 0, ' ', _jsx('a', {
	  href: 'https://www.linkedin.com/in/nikhilpahwa',
	  target: '_blank'
	}, void 0, _jsx('i', {
	  className: 'fa fa-linkedin primary-black'
	})))), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, ' Mehmood Khan '), _jsx('td', {
	  className: 'text-left'
	}, void 0, ' Former Global Innovation Leader, Unilever Trustee, Rasuli Kanwar Khan Trust '), _jsx('td', {
	  className: 'text-center'
	}, void 0, ' ', _jsx('a', {
	  href: 'http://forbesindia.com/article/person-of-the-year-09/the-maverick/8142/2',
	  target: '_blank'
	}, void 0, _jsx('i', {
	  className: 'fa fa-user primary-black'
	})))), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, ' Pradeep Panigrahi '), _jsx('td', {
	  className: 'text-left'
	}, void 0, ' Environmental Science Expert '), _jsx('td', {
	  className: 'text-center'
	}, void 0, ' ', _jsx('a', {
	  href: 'https://www.linkedin.com/in/dr-pradeep-panigrahi-4383081b',
	  target: '_blank'
	}, void 0, _jsx('i', {
	  className: 'fa fa-linkedin primary-black'
	})))), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, ' Sanjay Sindhwani '), _jsx('td', {
	  className: 'text-left'
	}, void 0, ' Businesshead, Economic Times'), _jsx('td', {
	  className: 'text-center'
	}, void 0, ' ', _jsx('a', {
	  href: 'https://in.linkedin.com/in/sindhwani ',
	  target: '_blank'
	}, void 0, _jsx('i', {
	  className: 'fa fa-linkedin primary-black'
	})))), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, ' Sidharth Rao '), _jsx('td', {
	  className: 'text-left'
	}, void 0, ' CEO & Co-founder, WebChutney Studio (Leading Digital Marketing Co.)'), _jsx('td', {
	  className: 'text-center'
	}, void 0, ' ', _jsx('a', {
	  href: 'https://in.linkedin.com/in/sidharthrao  ',
	  target: '_blank'
	}, void 0, _jsx('i', {
	  className: 'fa fa-linkedin primary-black'
	})))), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, ' Dr Sunita Purushottam '), _jsx('td', {
	  className: 'text-left'
	}, void 0, ' Expert, Air quality and GHG emissions'), _jsx('td', {
	  className: 'text-center'
	}, void 0, ' ', _jsx('a', {
	  href: 'https://www.linkedin.com/in/sunitapurushottam ',
	  target: '_blank'
	}, void 0, _jsx('i', {
	  className: 'fa fa-linkedin primary-black'
	})))), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, ' Thejesh GN'), _jsx('td', {
	  className: 'text-left'
	}, void 0, ' Co-founder, DataMeet'), _jsx('td', {
	  className: 'text-center'
	}, void 0, ' ', _jsx('a', {
	  href: 'https://www.linkedin.com/in/thejeshgn',
	  target: '_blank'
	}, void 0, _jsx('i', {
	  className: 'fa fa-linkedin primary-black'
	})))), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, ' Ulrike Reinhard'), _jsx('td', {
	  className: 'text-left'
	}, void 0, ' Digital Nomad & Futurist'), _jsx('td', {
	  className: 'text-center'
	}, void 0, ' ', _jsx('a', {
	  href: 'http://www.ulrikereinhard.com/',
	  target: '_blank'
	}, void 0, _jsx('i', {
	  className: 'fa fa-globe primary-black'
	})))))));

	var _ref23 = _jsx(_Footer2.default, {});

	var Partner = function (_Component) {
	  _inherits(Partner, _Component);

	  function Partner() {
	    _classCallCheck(this, Partner);

	    return _possibleConstructorReturn(this, (Partner.__proto__ || Object.getPrototypeOf(Partner)).apply(this, arguments));
	  }

	  _createClass(Partner, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: 'about'
	      }, void 0, _ref, _ref2, _ref3, _ref4, _jsx('div', {
	        className: 'bg-white'
	      }, void 0, _jsx('div', {
	        className: 'container partner-container'
	      }, void 0, _ref5, _jsx('div', {
	        className: 'row margin-bottom-50'
	      }, void 0, _jsx('div', {
	        className: 'col-md-3'
	      }, void 0, _jsx('div', {
	        className: 'partner-img-container',
	        style: { paddingTop: '40px' }
	      }, void 0, _ref6), _ref7, _ref8), _ref9, _ref10, _ref11), _jsx('div', {
	        className: 'row margin-bottom-50'
	      }, void 0, _jsx('div', {
	        className: 'col-md-3'
	      }, void 0, _jsx('div', {
	        className: 'partner-img-container',
	        style: { paddingTop: '40px' }
	      }, void 0, _ref12), _ref13, _ref14), _ref15, _jsx('div', {
	        className: 'col-md-3'
	      }, void 0, _jsx('div', {
	        className: 'partner-img-container',
	        style: { paddingTop: '40px' }
	      }, void 0, _ref16), _ref17, _ref18), _jsx('div', {
	        className: 'col-md-3'
	      }, void 0, _jsx('div', {
	        className: 'partner-img-container',
	        style: { paddingTop: '40px' }
	      }, void 0, _ref19), _ref20, _ref21))), _ref22), _ref23);
	    }
	  }]);

	  return Partner;
	}(_react.Component);

	exports.default = Partner;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(11);

	// Import Reducers


	// Combine all reducers into one root reducer
	exports.default = (0, _redux.combineReducers)({}); /**
	                                                    * Root Reducer
	                                                    */

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Webpack Requirements


	var _express = __webpack_require__(20);

	var _express2 = _interopRequireDefault(_express);

	var _compression = __webpack_require__(19);

	var _compression2 = _interopRequireDefault(_compression);

	var _bodyParser = __webpack_require__(18);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _path = __webpack_require__(21);

	var _path2 = _interopRequireDefault(_path);

	var _webpack = __webpack_require__(6);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpackConfig = __webpack_require__(16);

	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

	var _webpackDevMiddleware = __webpack_require__(23);

	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

	var _webpackHotMiddleware = __webpack_require__(24);

	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

	var _store = __webpack_require__(13);

	var _reactRedux = __webpack_require__(5);

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(22);

	var _reactRouter = __webpack_require__(3);

	var _reactHelmet = __webpack_require__(4);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _routes = __webpack_require__(12);

	var _routes2 = _interopRequireDefault(_routes);

	var _fetchData = __webpack_require__(15);

	var _config = __webpack_require__(14);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Initialize the Express App
	var app = new _express2.default();

	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}

	// React And Redux Setup


	// Import required modules


	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));

	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();

	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);
	  var refManifest = __webpack_require__(17);
	  var styleSrc = '/' + refManifest['main.css'];
	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">\n        <link rel="shortcut icon" href="./assets/images/favicon.ico" type="image/png" />\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">\n        <link rel="stylesheet" href=\'' + (process.env.NODE_ENV === 'production' ? styleSrc : '/main.css') + '\' type="text/css" media="screen" charset="utf-8">\n        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing&key=AIzaSyBr3jBMT0Q4j0TnWxajkWt159n5lROYsh0"></script>      \n</head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};

	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};

	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }

	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }

	    if (!renderProps) {
	      return next();
	    }

	    var store = (0, _store.configureStore)();

	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps)));
	      var finalState = store.getState();

	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});

	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});

	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }

	    return Promise.resolve(results);
	  };

	  return runner();
	}

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = [
		{
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#343434"
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#000000"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [
				{
					"color": "#e1e8ea"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#cbdde2"
				},
				{
					"lightness": 5
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#dce1e2"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#dce1e2"
				},
				{
					"lightness": 25
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#f7fbfb"
				},
				{
					"lightness": 16
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
				{
					"color": "#ace7f6"
				}
			]
		}
	];

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/FormControl");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/FormGroup");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/Nav");

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/NavItem");

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/Navbar");

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("react-google-maps/lib/addons/MarkerClusterer");

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("react-helmet/lib/Helmet");

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("react-highcharts/dist/ReactHighcharts.js");

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("react-router-bootstrap/lib/LinkContainer");

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("react-tabs/lib/components/Tab");

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = require("react-tabs/lib/components/TabList");

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("react-tabs/lib/components/TabPanel");

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("react-tabs/lib/components/Tabs");

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = require("superagent");

/***/ }
/******/ ]);