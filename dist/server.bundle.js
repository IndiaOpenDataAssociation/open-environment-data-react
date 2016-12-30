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

	var _Navbar = __webpack_require__(51);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Nav = __webpack_require__(49);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _NavItem = __webpack_require__(50);

	var _NavItem2 = _interopRequireDefault(_NavItem);

	var _LinkContainer = __webpack_require__(56);

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

	module.exports = require("superagent");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Navbar = __webpack_require__(1);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _FormGroup = __webpack_require__(48);

	var _FormGroup2 = _interopRequireDefault(_FormGroup);

	var _FormControl = __webpack_require__(47);

	var _FormControl2 = _interopRequireDefault(_FormControl);

	var _LatestDevice = __webpack_require__(35);

	var _LatestDevice2 = _interopRequireDefault(_LatestDevice);

	var _superagent = __webpack_require__(4);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _LoadingMap = __webpack_require__(32);

	var _LoadingMap2 = _interopRequireDefault(_LoadingMap);

	var _index = __webpack_require__(9);

	var _index2 = _interopRequireDefault(_index);

	var _reactDatetime = __webpack_require__(52);

	var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var toDate = void 0,
	    fromDate = void 0;

	var _ref = _jsx(_Navbar2.default, {});

	var _ref2 = _jsx(_LoadingMap2.default, {});

	var _ref3 = _jsx(_Navbar2.default, {});

	var _ref4 = _jsx('option', {
	  value: 'India'
	}, void 0, 'India');

	var _ref5 = _jsx('i', {
	  className: 'fa fa-navicon'
	});

	var _ref6 = _jsx('img', {
	  src: '../../assets/images/CPCB.png'
	});

	var _ref7 = _jsx('img', {
	  src: '../../assets/images/AIROWL3G.png'
	});

	var _ref8 = _jsx('img', {
	  src: '../../assets/images/POLLUDRON_PUBLIC.png'
	});

	var _ref9 = _jsx('br', {});

	var _ref10 = _jsx('br', {});

	var _ref11 = _jsx('small', {}, void 0, 'From');

	var _ref12 = _jsx('small', {}, void 0, 'To');

	var _ref13 = _jsx('i', {
	  className: 'fa fa-arrow-right'
	});

	var _ref14 = _jsx('i', {
	  className: 'fa fa-close'
	});

	var _ref15 = _jsx('div', {
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
	    _this.handleMarkerClick = _this.handleMarkerClick.bind(_this);
	    _this.handleMarkerClose = _this.handleMarkerClose.bind(_this);
	    _this.handleFromDt = _this.handleFromDt.bind(_this);
	    _this.handleToDt = _this.handleToDt.bind(_this);
	    _this.handleDtChange = _this.handleDtChange.bind(_this);
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
	        analyticsdataLoading: true,
	        city_label: '',
	        device_type: '',
	        time: '',
	        no_records: false,
	        iscity_changed: false,
	        city_list: [],
	        marker_id: '',
	        fromDate: '',
	        toDate: ''
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
	      this.setState({
	        // disable_tab: boolean,
	        // active_tab: 'realtime',
	        show_panel: true,
	        city_label: label,
	        // device_type: deviceType
	        analyticsData: [],
	        realTimeData: [],
	        analyticsdataLoading: true,
	        realTimedataLoading: true

	      });
	    }
	  }, {
	    key: 'realTimeData',
	    value: function realTimeData(id, time) {
	      _superagent2.default.get('https://openenvironment.p.mashape.com/all/public/data/cur/' + id).set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
	        this.setState({ realTimeData: res.body, time: time, marker_id: id });
	        this.setState({ realTimedataLoading: false });
	      }.bind(this));
	    }
	  }, {
	    key: 'analyticsData',
	    value: function analyticsData(id, time) {
	      var lte = new Date().getTime() / 1000;
	      var today = new Date();
	      var gte = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).getTime() / 1000;
	      _superagent2.default.get('https://openenvironment.p.mashape.com/all/public/data/range/' + id + '?gte=' + gte + '&lte=' + lte).set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
	        this.setState({ analyticsData: res.body, time: time, no_records: false });
	        this.setState({ analyticsdataLoading: false });
	      }.bind(this));
	    }
	  }, {
	    key: 'handleMarkerClick',
	    value: function handleMarkerClick(targetMarker, index) {

	      this.setState({
	        markers: this.state.markers.map(function (marker) {
	          if (marker === targetMarker) {
	            return _extends({}, marker, {
	              showInfo: true
	            });
	          }
	          return marker;
	        })
	      });
	    }
	  }, {
	    key: 'handleMarkerClose',
	    value: function handleMarkerClose(targetMarker) {
	      this.setState({
	        markers: this.state.markers.map(function (marker) {
	          if (marker === targetMarker) {
	            return _extends({}, marker, {
	              showInfo: false
	            });
	          }
	          return marker;
	        })
	      });
	    }
	  }, {
	    key: 'handleFromDt',
	    value: function handleFromDt(obj) {

	      fromDate = obj.format('Do/MM/YYYY');
	    }
	  }, {
	    key: 'handleToDt',
	    value: function handleToDt(obj) {
	      toDate = obj.format('Do/MM/YYYY');
	    }
	  }, {
	    key: 'handleDtChange',
	    value: function handleDtChange() {
	      this.setState({ toDate: toDate });
	      this.setState({ fromDate: fromDate });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, this.state.loading ? _jsx('div', {
	        style: { marginTop: '50px' }
	      }, void 0, _ref, _ref2) : _jsx('div', {}, void 0, _ref3, _jsx('section', {
	        className: 'dashboard'
	      }, void 0, _jsx(_index2.default, {
	        markers: this.state.markers,
	        cityValue: this.state.city,
	        cityChanged: this.state.iscity_changed,
	        setDisable: this.changeDisable,
	        callRealtime: this.realTimeData,
	        callAnalytics: this.analyticsData,
	        callTimeRange: this.timeRange,
	        cities: this.state.city_list,
	        onMarkerClick: this.handleMarkerClick,
	        onMarkerClose: this.handleMarkerClose
	      }), _jsx('div', {
	        className: 'select-cities-box'
	      }, void 0, _jsx(_FormGroup2.default, {
	        controlId: 'formControlsSelect'
	      }, void 0, _react2.default.createElement(
	        _FormControl2.default,
	        { componentClass: 'select', placeholder: 'select', ref: 'cityList', className: 'select-cities',
	          onChange: this.changeCities },
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
	      }, void 0, _ref5)), this.state.show_panel ? this.state.realTimedataLoading == false && this.state.analyticsdataLoading == false ? _jsx('div', {
	        className: 'review-panel'
	      }, void 0, _jsx('div', {
	        className: 'panel panel-default'
	      }, void 0, _jsx('div', {
	        className: 'panel-heading '
	      }, void 0, _jsx('div', {
	        className: 'row'
	      }, void 0, _jsx('div', {
	        className: 'col-sm-11 col-xs-11'
	      }, void 0, _jsx('div', {
	        className: 'col-sm-5',
	        style: { position: 'relative' }
	      }, void 0, _jsx('div', {
	        className: 'blot'
	      }, void 0, this.state.realTimeData[0].type == 'CPCB' ? _ref6 : this.state.realTimeData[0].type == 'AIROWL3G' || this.state.realTimeData[0].type == 'AIROWLWI' ? _ref7 : _ref8), _jsx('span', {
	        className: 'device-label'
	      }, void 0, this.state.realTimeData[0].label, ', ', this.state.realTimeData[0].city, ', ', this.state.realTimeData[0].country), _ref9, _jsx('small', {
	        className: 'device-type'
	      }, void 0, this.state.realTimeData[0].type), _ref10), _jsx('div', {
	        className: 'col-sm-7 dtpicker'
	      }, void 0, _ref11, _jsx(_reactDatetime2.default, {
	        className: 'fromDt',
	        onChange: this.handleFromDt
	      }), _ref12, _jsx(_reactDatetime2.default, {
	        className: 'toDt',
	        onChange: this.handleToDt
	      }), _jsx('button', {
	        onClick: this.handleDtChange
	      }, void 0, _ref13))), _jsx('span', {
	        className: 'col-sm-1 col-xs-1 text-right close-panel',
	        onClick: this.closePanel
	      }, void 0, _ref14))), _jsx('div', {
	        className: 'panel-body'
	      }, void 0, _jsx(_LatestDevice2.default, {
	        analysisData: this.state.analyticsData,
	        realtimeData: this.state.realTimeData,
	        time: this.state.time,
	        markerId: this.state.marker_id,
	        fromDate: this.state.fromDate,
	        toDate: this.state.toDate
	      })))) : null : null)), _ref15);
	    }
	  }]);

	  return Dashboard;
	}(_react.Component);

	exports.default = Dashboard;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Mapstyle = __webpack_require__(10);

	var _Mapstyle2 = _interopRequireDefault(_Mapstyle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Map = function (_Component) {
	  _inherits(Map, _Component);

	  function Map(props) {
	    _classCallCheck(this, Map);

	    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

	    _this.state = { lat: 22.9734, lng: 78.6569, zoom: 5, cityChanged: _this.props.cityChanged };
	    _this.renderMarkers = _this.renderMarkers.bind(_this);
	    _this.renderInfoWindow = _this.renderInfoWindow.bind(_this);
	    return _this;
	  }

	  _createClass(Map, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {

	      //updating center of map on dropdown change
	      if (this.props.cityValue != nextProps.cityValue) {
	        this.setState({ cityChanged: nextProps.cityChanged });
	        if (nextProps.cities[nextProps.cityValue] != undefined) {

	          var nextLatitude = nextProps.cities[nextProps.cityValue].latitude;
	          var nextLongitude = nextProps.cities[nextProps.cityValue].longitude;
	          this.map.setCenter({ lat: nextLatitude, lng: nextLongitude });
	          this.map.setZoom(11);
	        } else {
	          this.map.setCenter({ lat: 22.9734, lng: 78.6569 });
	          this.map.setZoom(5);
	        }
	      }
	    }
	  }, {
	    key: 'mapCenterLatLng',
	    value: function mapCenterLatLng() {
	      return new google.maps.LatLng(22.9734, 78.6569);
	    }
	  }, {
	    key: 'renderMarkers',
	    value: function renderMarkers(markers, map) {
	      var _this2 = this;

	      var infowindow = new google.maps.InfoWindow();
	      var pins = markers.map(function (marker) {
	        var loc = new google.maps.LatLng(marker.latitude, marker.longitude);
	        var pin = new google.maps.Marker({
	          position: loc,
	          map: map,
	          icon: _this2.getMarkerImage(marker.aqi)
	        });
	        pin.addListener('mouseover', function () {
	          infowindow.setContent(this.renderInfoWindow(marker));
	          infowindow.open(pin.get('map'), pin);
	        }.bind(_this2));
	        pin.addListener('click', function () {
	          this.props.setDisable(false, marker.loc, marker.deviceType);
	          this.props.callRealtime(marker.deviceId, marker.t);
	          this.props.callAnalytics(marker.deviceId, marker.t);
	        }.bind(_this2));
	        return pin;
	      });

	      //render cluster
	      var markerCluster = new MarkerClusterer(this.map, pins);
	    }
	  }, {
	    key: 'renderInfoWindow',
	    value: function renderInfoWindow(marker) {
	      var html = '<div class="infowindow-content">' + '<div class="infowindow-head">' + '<strong>' + marker.label + '</strong>' + '</div>' + '<div class="infowindow-body">' + '<div class="left-content">' + '<div><i class="fa fa-map-marker"></i>' + marker.type + '</div>' + '<div><i class="fa fa-map-marker"></i>' + marker.city + '</div>' + '<div><i class="fa fa-home"></i>' + this.getIndoor(marker.deviceType) + ' <span style="margin-left: 20px;"> <i class="fa fa-circle" aria-hidden="true" style="color: #73C076;"></i>Online</span></div>' + '<div class="aqi">' + '<div class="progress-pie-chart ' + this.getClass250(marker.aqi) + ' ' + this.renderClass(marker.aqi) + '" id="ppc" > <div class="ppc-progress"> <div class="ppc-progress-fill ' + this.renderClass(marker.aqi) + '" style="transform: rotate(' + this.getDegree(marker.aqi).deg + 'deg)"></div> </div> <div class="ppc-percents"> <div class="pcc-percents-wrapper"> <span>' + marker.aqi + '</span></div></div></div>' + '</div></div></div></div>';
	      return html;
	    }
	  }, {
	    key: 'getIndoor',
	    value: function getIndoor(device) {
	      if (device == 'AIROWLWI' || device == 'AIROWL3G') {
	        return 'Indoor';
	      } else {
	        return 'Outdoor';
	      }
	    }
	  }, {
	    key: 'getClass250',
	    value: function getClass250(aqi) {
	      if (aqi > 250) {
	        return 'gt-250';
	      } else {
	        return '';
	      }
	    }
	  }, {
	    key: 'renderClass',
	    value: function renderClass(aqi) {
	      if (aqi <= 50) {
	        return 'good';
	      } else if (aqi > 50 && aqi < 101) {
	        return 'satisfactory';
	      } else if (aqi > 100 && aqi < 201) {
	        return 'moderate';
	      } else if (aqi > 200 && aqi < 301) {
	        return 'poor';
	      } else if (aqi > 300 && aqi < 401) {
	        return 'very-poor';
	      } else {
	        return 'severe';
	      }
	    }
	  }, {
	    key: 'getMarkerImage',
	    value: function getMarkerImage(aqi) {
	      //rendering images as per aqi's valye
	      if (aqi <= 50) {
	        return 'assets/images/pins/good.svg';
	      } else if (aqi > 50 && aqi < 101) {
	        return 'assets/images/pins/satisfactory.svg';
	      } else if (aqi > 100 && aqi < 201) {
	        return 'assets/images/pins/moderate.svg';
	      } else if (aqi > 200 && aqi < 301) {
	        return 'assets/images/pins/poor.svg';
	      } else if (aqi > 300 && aqi < 401) {
	        return 'assets/images/pins/very-poor.svg';
	      } else {
	        return 'assets/images/pins/severe.svg';
	      }
	    }
	  }, {
	    key: 'getDegree',
	    value: function getDegree(aqi) {
	      var percent = aqi,
	          deg = 360 * percent / 500;
	      return { percent: percent, deg: deg };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {

	      var mapOptions = {
	        center: this.mapCenterLatLng(),
	        zoom: this.state.zoom,
	        styles: _Mapstyle2.default,
	        zoomControl: true,
	        zoomControlOptions: {
	          style: google.maps.ZoomControlStyle.LARGE,
	          position: google.maps.ControlPosition.LEFT_CENTER
	        },
	        mapTypeControl: false,
	        scaleControl: false,
	        streetViewControl: false,
	        rotateControl: false,
	        fullscreenControl: false
	      };
	      this.map = new google.maps.Map(this.refs.map, mapOptions);
	      {
	        this.renderMarkers(this.props.markers, this.map);
	      }
	      this.setState({ map: this.map });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { ref: 'map', style: { height: '92vh', width: '100%' } });
	    }
	  }]);

	  return Map;
	}(_react.Component);

	exports.default = Map;

/***/ },
/* 10 */
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
/* 11 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/DropdownButton");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/MenuItem");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 14 */
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

	var _App = __webpack_require__(29);

	var _App2 = _interopRequireDefault(_App);

	var _Dashboard = __webpack_require__(8);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	var _About = __webpack_require__(27);

	var _About2 = _interopRequireDefault(_About);

	var _Community = __webpack_require__(31);

	var _Community2 = _interopRequireDefault(_Community);

	var _Openapi = __webpack_require__(37);

	var _Openapi2 = _interopRequireDefault(_Openapi);

	var _Device = __webpack_require__(36);

	var _Device2 = _interopRequireDefault(_Device);

	var _Partners = __webpack_require__(38);

	var _Partners2 = _interopRequireDefault(_Partners);

	var _Airowl = __webpack_require__(28);

	var _Airowl2 = _interopRequireDefault(_Airowl);

	var _index = __webpack_require__(9);

	var _index2 = _interopRequireDefault(_index);

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
	  __webpack_require__(8);
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
	}), _jsx(_reactRouter.Route, {
	  path: '/demo',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, _index2.default);
	    }).bind(null, __webpack_require__));
	  }
	}));

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;

	var _redux = __webpack_require__(13);

	var _reduxThunk = __webpack_require__(64);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _DevTools = __webpack_require__(30);

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
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var webpack = __webpack_require__(7);
	var cssnext = __webpack_require__(44);
	var postcssFocus = __webpack_require__(45);
	var postcssReporter = __webpack_require__(46);

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
/* 19 */
/***/ function(module, exports) {

	module.exports = {
		"main.css": "main-5217761ad2.css"
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 27 */
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
/* 28 */
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

	var _Helmet = __webpack_require__(55);

	var _Helmet2 = _interopRequireDefault(_Helmet);

	var _Tab = __webpack_require__(57);

	var _Tab2 = _interopRequireDefault(_Tab);

	var _TabList = __webpack_require__(58);

	var _TabList2 = _interopRequireDefault(_TabList);

	var _Tabs = __webpack_require__(60);

	var _Tabs2 = _interopRequireDefault(_Tabs);

	var _TabPanel = __webpack_require__(59);

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
/* 29 */
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

	var _reactRedux = __webpack_require__(6);

	var _App = {
	  "container": "App__container__4uEyK"
	};

	var _App2 = _interopRequireDefault(_App);

	var _reactHelmet = __webpack_require__(5);

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
	        title: 'Open Environment Data Project - India Open Data Association',
	        titleTemplate: '%s',
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reduxDevtools = __webpack_require__(61);

	var _reduxDevtoolsLogMonitor = __webpack_require__(63);

	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

	var _reduxDevtoolsDockMonitor = __webpack_require__(62);

	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 31 */
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

	var _GoogleMapLoader = __webpack_require__(54);

	var _GoogleMapLoader2 = _interopRequireDefault(_GoogleMapLoader);

	var _GoogleMap = __webpack_require__(53);

	var _GoogleMap2 = _interopRequireDefault(_GoogleMap);

	var _Mapstyle = __webpack_require__(10);

	var _Mapstyle2 = _interopRequireDefault(_Mapstyle);

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
	    // componentWillReceiveProps(nextProps){
	    //   if(this.props.cityValue != nextProps.cityValue){
	    //     if(cities[nextProps.cityValue] != undefined) {
	    //       this.setState({lat: cities[nextProps.cityValue].latitude, lng: cities[nextProps.cityValue].longitude, zoom: 11})
	    //     } else {
	    //       this.setState(this.getState())
	    //     }
	    //   }
	    //
	    // }

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
	          onClick: this.props.onMapClick,
	          defaultOptions: { styles: _Mapstyle2.default }
	        }, void 0)
	      }));
	    }
	  }]);

	  return LoadingMap;
	}(_react.Component);

	exports.default = LoadingMap;

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

	var _DropdownButton = __webpack_require__(11);

	var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

	var _MenuItem = __webpack_require__(12);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _superagent = __webpack_require__(4);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import data from '../components/pollution.json'


	var heatmap = void 0,
	    displaydate = [],
	    time = [],
	    array = [],
	    dateUniq = [];

	var _ref = _jsx('div', {
	  className: 'chart-indicator'
	}, void 0, _jsx('table', {}, void 0, _jsx('tbody', {}, void 0, _jsx('tr', {}, void 0, _jsx('td', {}, void 0, _jsx('span', {})), _jsx('td', {}, void 0, _jsx('span', {
	  className: 'good'
	})), _jsx('td', {}, void 0, _jsx('span', {
	  className: 'satisfactory'
	})), _jsx('td', {}, void 0, _jsx('span', {
	  className: 'moderate'
	})), _jsx('td', {}, void 0, _jsx('span', {
	  className: 'poor'
	})), _jsx('td', {}, void 0, _jsx('span', {
	  className: 'vpoor'
	})), _jsx('td', {}, void 0, _jsx('span', {
	  className: 'severe'
	}))), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, '0'), _jsx('td', {}, void 0, '50'), _jsx('td', {}, void 0, '100'), _jsx('td', {}, void 0, '200'), _jsx('td', {}, void 0, '300'), _jsx('td', {}, void 0, '400'), _jsx('td', {}, void 0, '500')))));

	var _ref2 = _jsx('img', {
	  src: '../../../assets/images/icons/analytics_w.png'
	});

	var _ref3 = _jsx('img', {
	  src: './../../assets/images/calendar_w.png'
	});

	var _ref4 = _jsx('div', {
	  className: 'gases-info'
	}, void 0, _jsx('p', {}, void 0, 'An air quality index (AQI) is a number used by government agencies to communicate to the public how polluted the air currently is or how polluted it is forecast to become. As the AQI increases, an increasingly large percentage of the population is likely to experience increasingly severe adverse health effects.'));

	var _ref5 = _jsx('div', {
	  className: 'gases-info'
	}, void 0, _jsx('h5', {}, void 0, 'Carbon Oxides :'), _jsx('p', {}, void 0, 'Carbon Monoxide (CO), Carbon Dioxide (CO2)'), _jsx('h5', {}, void 0, 'Importance of Carbon Dioxide / Monoxide Monitoring :'), _jsx('p', {}, void 0, 'Carbon monoxide (CO) is an extremely toxic gas resulting from incomplete combustion of carbon and carbonaceous products. Carbon Dioxide (CO2) is present in the atmosphere but it is not a toxic gas.'), _jsx('h5', {}, void 0, 'Sources of Carbon Dioxide / Monoxide :'), _jsx('p', {}, void 0, 'Thermal Power Plants, Vehicle Fuel Emission, Open Fire, Solid Waste Sites etc.'), _jsx('h5', {}, void 0, 'Health Hazard of Carbon Dioxide / Monoxide :'), _jsx('p', {}, void 0, 'Carbon monoxide is colorless, odorless, and tasteless, but highly toxic. It combines with hemoglobin to produce carboxyhemoglobin, which usurps the space in hemoglobin that normally carries oxygen, but is ineffective for delivering oxygen to bodily tissues.'));

	var _ref6 = _jsx('div', {
	  className: 'gases-info'
	}, void 0, _jsx('h5', {}, void 0, 'Importance of Nitrides Monitoring :'), _jsx('p', {}, void 0, 'Nitric oxide (NO), Nitrogen Dioxide (NO2), Ammonia (NH3) The nitric oxide (NO) molecule is quite reactive and unstable. In ambient air, it reacts with oxygen to form the toxic nitrogen dioxide (NO2). Ammonia (NH3) is present in the atmosphere naturally as well as an industrial pollution.'), _jsx('h5', {}, void 0, 'Sources of Nitrides :'), _jsx('p', {}, void 0, 'Thermal Power Plants, Vehicle Fuel Emission, Industries, Fertilizers, Nitrogenous animal and vegetable matter.'), _jsx('h5', {}, void 0, 'Health Hazard of Nitrides :'), _jsx('p', {}, void 0, 'Respiratory disease, such as emphysema and bronchitis, and can aggravate existing heart disease, leading to increased hospital admissions and premature death. Nitrogen oxide causes a multitude of symptoms, primarily in the lungs but also in other organs such as the spleen and liver.'), _jsx('h5', {}, void 0, 'Regulations for Nitrides :'), _jsx('p', {}, void 0, 'The U. S. Occupational Safety and Health Administration (OSHA) has set a 15-minute exposure limit for gaseous ammonia of 35 ppm by volume in the environmental air and an 8-hour exposure limit of 25 ppm by volume. The U.S. Environmental Protection Agency (EPA) has set safety levels for environmental exposure to NO2 at 100 ppb, averaged over one hour, and 53 ppb, averaged annually.'));

	var _ref7 = _jsx('div', {
	  className: 'gases-info'
	}, void 0, _jsx('h5', {}, void 0, 'Importance of Sulfide Monitoring :'), _jsx('p', {}, void 0, 'Sulfur Dioxide (SO2), Hydrogen Sulfide (H2S)Sulfur dioxide (SO2) is an acid-forming, colorless, foul-smelling and toxic gas. The toxicity of Hydrogen Sulfide (H2S) is comparable with that of carbon monoxide.'), _jsx('h5', {}, void 0, 'Sources of Sulfides :'), _jsx('p', {}, void 0, 'Industrial Waste, Petroleum Refineries, Vehicle Emission, Volcanos etc.'), _jsx('h5', {}, void 0, 'Health Hazard of Sulfides :'), _jsx('p', {}, void 0, 'Sulfides poison several different systems in the body, although the nervous system is most affected. It causes increased respiratory symptoms and disease, difficulty in breathing, and premature death.'), _jsx('h5', {}, void 0, 'Regulations for Sulfides :'), _jsx('p', {}, void 0, '10 ppm is the U. S. Occupational Safety and Health Administration (OSHA) permissible exposure limit (PEL) (8 hour time-weighted average) for H2S and 5 ppm (13 mg/m3) time-weighted average for SO2.'));

	var _ref8 = _jsx('div', {
	  className: 'gases-info'
	}, void 0, _jsx('h5', {}, void 0, 'Importance of Ozone Monitoring :'), _jsx('p', {}, void 0, 'Ozone (O3) is a highly toxic corrosive substance and a common pollutant. In low concentration it is a normal component of ambient air. Highly concentrated it is an aggressive irritant gas and at ground level it affects humans and nature.'), _jsx('h5', {}, void 0, 'Sources of Ozone :'), _jsx('p', {}, void 0, 'Naturally through reaction of nitrogen oxides, hydrocarbons, and sunlight; Industrial and vehicular emission.'), _jsx('h5', {}, void 0, 'Health Hazard of Ozone :'), _jsx('p', {}, void 0, 'Ground level ozone harms lung function and irritate the respiratory system. It also causes premature death, asthma, bronchitis, heart attack, and other cardiopulmonary problems.'), _jsx('h5', {}, void 0, 'Regulations for Ozone :'), _jsx('p', {}, void 0, 'U.S. Occupational Safety and Health Administration (OSHA) has established a permissible exposure limit (PEL) of 0.1 umol/mol calculated as an 8-hour time weighted average. Higher concentrations are especially hazardous and National Institute for Occupational Safety and Health (NIOSH) has established an Immediately Dangerous to Life and Health Limit (IDLH) of 5 umol/mol'));

	var _ref9 = _jsx('div', {
	  className: 'gases-info'
	}, void 0, _jsx('h5', {}, void 0, 'Importance of HydroCarbons Monitoring :'), _jsx('p', {}, void 0, 'Hydrocarbon monitoring like Methane (CH4), Propane (C3H8), Butane (C4H10) presence has an important role in ambient Air-Quality Monitoring and Environmental Assessment. Presence of Hydrocarbons in environment reveals important informations about the source of pollution.'), _jsx('h5', {}, void 0, 'Sources of HydroCarbons :'), _jsx('p', {}, void 0, 'Biological Decomposition, Natural Sources, Industrial Emission, Vehicular Emission etc.'), _jsx('h5', {}, void 0, 'Regulations for HydroCarbons :'), _jsx('p', {}, void 0, 'Methane is also one of the principal components in natural gas. These days, methaneis often in the news because it is one of the primary "greenhouse gases." It is second only to carbon dioxide in its contribution to global warming.'));

	var CalendarView = function (_Component) {
	  _inherits(CalendarView, _Component);

	  function CalendarView(props) {
	    _classCallCheck(this, CalendarView);

	    var _this = _possibleConstructorReturn(this, (CalendarView.__proto__ || Object.getPrototypeOf(CalendarView)).call(this, props));

	    _this.state = {
	      dailyData: [],
	      dailyDataLoading: true,
	      noDailyData: false,
	      gasesInfo: 'AQI'
	    };

	    var lte = new Date().getTime() / 1000;
	    var today = new Date();
	    var gte = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).getTime() / 1000;
	    _superagent2.default.get('https://openenvironment.p.mashape.com/all/public/analytics/range/' + _this.props.markerId + '?gte=' + gte + '&lte=' + lte).set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
	      if (res.statusText != "Not Found") {
	        this.setState({ dailyData: res.body });
	        this.setState({ dailyDataLoading: false });
	        array = [];
	        this.state.dailyData.map(function (e) {
	          var a = new Date(e.time * 1000);
	          var month = a.getMonth();
	          var date = a.getDate();
	          var hour = a.getHours();
	          var min = a.getMinutes();
	          if (min < 10) {
	            min = '0' + min;
	          }
	          var Time = hour + ':' + min;
	          if (hour >= 12) {
	            time.push(Time + 'pm');
	          } else {
	            time.push(Time + 'am');
	          }
	          if (displaydate.indexOf(date) === -1) {
	            displaydate.push(date);
	          }
	          array.push([hour, date, e.aqi]);
	        });

	        // let theme = Highcharts.theme = {
	        //   // colors: ['#0C6657', '#60E5D7'],
	        //
	        //   // colors: ['red', 'blue', 'yellow', 'orange', 'white', 'green', 'gray'],
	        // };

	        // Highcharts.setOptions(theme)

	        heatmap = Highcharts.chart(this.refs.heatmap, {
	          chart: {
	            type: 'heatmap',
	            backgroundColor: 'transparent',
	            width: 600,
	            height: 300,
	            plotBorderWidth: 1,
	            marginTop: 90
	          },

	          title: {
	            text: ''
	          },

	          xAxis: {
	            categories: time,
	            labels: {
	              style: {
	                color: '#E0E0E3'
	              }
	            },
	            gridLineColor: 'transparent'
	          },

	          yAxis: {
	            title: null,
	            categories: displaydate,
	            labels: {
	              style: {
	                color: '#E0E0E3'
	              }
	            },
	            gridLineColor: 'transparent'
	          },

	          // colors: ['#6ecc58', '#bbcf4c', '#eac736', '#ed9a2e', '#e8633a', '#d63636'],
	          colorAxis: {
	            dataClasses: [{
	              from: 0,
	              to: 50,
	              color: '#6ecc58',
	              name: 'good'
	            }, {
	              from: 50,
	              to: 100,
	              color: '#bbcf4c',
	              name: 'satisfactory'
	            }, {
	              from: 100,
	              to: 200,
	              color: '#eac736',
	              name: 'moderate'
	            }, {
	              from: 200,
	              to: 300,
	              color: '#ed9a2e',
	              name: 'poor'
	            }, {
	              from: 300,
	              to: 400,
	              color: '#e8633a',
	              name: 'verypoor'
	            }, {
	              from: 400,
	              to: 500,
	              color: '#d63636',
	              name: 'severe'
	            }, {
	              from: 500,
	              to: 1000,
	              color: '#d63636',
	              name: 'extreme'
	            }]
	          },

	          // colorAxis: {
	          // min: 0,
	          // max: 600,
	          // stops: [
	          //   [0.1,'green'],
	          //   [0.5,'orange'],
	          //   [0.9,'red']
	          // ],
	          // minColor: Highcharts.getOptions().colors[1],
	          // maxColor: Highcharts.getOptions().colors[0]
	          // },

	          legend: {
	            enabled: false
	          },
	          series: [{
	            name: 'AQI per day',
	            borderWidth: 1,
	            borderColor: '#eee',
	            data: array,
	            dataLabels: {
	              enabled: false,
	              color: 'black',
	              style: {
	                textShadow: 'none'
	              }
	            }
	          }]

	        });

	        heatmap.yAxis[0].setTitle({ text: "Date" });
	      } else {
	        this.setState({ noDailyData: true });
	      }
	    }.bind(_this));
	    return _this;
	  }

	  _createClass(CalendarView, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _jsx('div', {}, void 0, _jsx('div', {
	        className: 'analytics-div'
	      }, void 0, _jsx('div', {
	        className: 'analytics-chart'
	      }, void 0, this.state.noDailyData == false ? this.state.dailyDataLoading ? _jsx('div', {
	        style: { height: '300px' }
	      }, void 0, _jsx('i', {
	        className: 'fa fa-spinner fa-spin',
	        style: { fontSize: '30px', color: '#00B3BF', lineHeight: '300px' }
	      })) : _react2.default.createElement('div', { className: 'heatmap', ref: 'heatmap' }) : _jsx('div', {
	        style: { fontSize: '30px', color: '#00B3BF', lineHeight: '400px' }
	      }, void 0, 'No data available'), _ref, _jsx('div', {
	        className: 'chart-btn-group'
	      }, void 0, _jsx('a', {
	        className: this.props.activeGraph == 'graphview' ? 'active' : '',
	        onClick: function onClick() {
	          _this2.props.changeGraphData('graphview');
	        }
	      }, void 0, _ref2), _jsx('a', {
	        className: this.props.activeGraph == 'calendarview' ? 'active' : '',
	        onClick: function onClick() {
	          _this2.props.changeGraphData('calendarview');
	        }
	      }, void 0, _ref3))), _jsx('div', {
	        className: 'chart-description'
	      }, void 0, _jsx(_DropdownButton2.default, {
	        title: this.state.gasesInfo,
	        id: 'chart-info-dropdown'
	      }, void 0, _jsx(_MenuItem2.default, {
	        eventKey: '1',
	        onSelect: function onSelect() {
	          _this2.setState({ gasesInfo: 'AQI' });
	        }
	      }, void 0, 'AQI'), _jsx(_MenuItem2.default, {
	        eventKey: '2',
	        onSelect: function onSelect() {
	          _this2.setState({ gasesInfo: 'Carbon Oxides' });
	        }
	      }, void 0, 'Carbon Oxides'), _jsx(_MenuItem2.default, {
	        eventKey: '3',
	        onSelect: function onSelect() {
	          _this2.setState({ gasesInfo: 'Nitrides' });
	        }
	      }, void 0, 'Nitrides'), _jsx(_MenuItem2.default, {
	        eventKey: '4',
	        onSelect: function onSelect() {
	          _this2.setState({ gasesInfo: 'Sulfides' });
	        }
	      }, void 0, 'Sulfides'), _jsx(_MenuItem2.default, {
	        eventKey: '6',
	        onSelect: function onSelect() {
	          _this2.setState({ gasesInfo: 'Ozone' });
	        }
	      }, void 0, 'Ozone'), _jsx(_MenuItem2.default, {
	        eventKey: '7',
	        onSelect: function onSelect() {
	          _this2.setState({ gasesInfo: 'HydroCarbons' });
	        }
	      }, void 0, 'HydroCarbons')), this.state.gasesInfo == 'AQI' ? _ref4 : this.state.gasesInfo == 'Carbon Oxides' ? _ref5 : this.state.gasesInfo == 'Nitrides' ? _ref6 : this.state.gasesInfo == 'Sulfides' ? _ref7 : this.state.gasesInfo == 'Ozone' ? _ref8 : this.state.gasesInfo == 'HydroCarbons' ? _ref9 : null)));
	    }
	  }]);

	  return CalendarView;
	}(_react.Component);

	exports.default = CalendarView;

/***/ },
/* 34 */
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

	var _DropdownButton = __webpack_require__(11);

	var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

	var _MenuItem = __webpack_require__(12);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _moment = __webpack_require__(43);

	var _moment2 = _interopRequireDefault(_moment);

	var _lodash = __webpack_require__(42);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var arr = { 'AQI': [] },
	    timeArr = [],
	    newTime = void 0,
	    chart = void 0,
	    diffDayArray = [];

	var _ref = _jsx('img', {
	  src: '../../../assets/images/icons/analytics_w.png'
	});

	var _ref2 = _jsx('img', {
	  src: './../../assets/images/calendar_w.png'
	});

	var _ref3 = _jsx('div', {
	  className: 'gases-info'
	}, void 0, _jsx('p', {}, void 0, 'An air quality index (AQI) is a number used by government agencies to communicate to the public how polluted the air currently is or how polluted it is forecast to become. As the AQI increases, an increasingly large percentage of the population is likely to experience increasingly severe adverse health effects.'));

	var _ref4 = _jsx('div', {
	  className: 'gases-info'
	}, void 0, _jsx('h5', {}, void 0, 'Carbon Oxides :'), _jsx('p', {}, void 0, 'Carbon Monoxide (CO), Carbon Dioxide (CO2)'), _jsx('h5', {}, void 0, 'Importance of Carbon Dioxide / Monoxide Monitoring :'), _jsx('p', {}, void 0, 'Carbon monoxide (CO) is an extremely toxic gas resulting from incomplete combustion of carbon and carbonaceous products. Carbon Dioxide (CO2) is present in the atmosphere but it is not a toxic gas.'), _jsx('h5', {}, void 0, 'Sources of Carbon Dioxide / Monoxide :'), _jsx('p', {}, void 0, 'Thermal Power Plants, Vehicle Fuel Emission, Open Fire, Solid Waste Sites etc.'), _jsx('h5', {}, void 0, 'Health Hazard of Carbon Dioxide / Monoxide :'), _jsx('p', {}, void 0, 'Carbon monoxide is colorless, odorless, and tasteless, but highly toxic. It combines with hemoglobin to produce carboxyhemoglobin, which usurps the space in hemoglobin that normally carries oxygen, but is ineffective for delivering oxygen to bodily tissues.'));

	var _ref5 = _jsx('div', {
	  className: 'gases-info'
	}, void 0, _jsx('h5', {}, void 0, 'Importance of Nitrides Monitoring :'), _jsx('p', {}, void 0, 'Nitric oxide (NO), Nitrogen Dioxide (NO2), Ammonia (NH3) The nitric oxide (NO) molecule is quite reactive and unstable. In ambient air, it reacts with oxygen to form the toxic nitrogen dioxide (NO2). Ammonia (NH3) is present in the atmosphere naturally as well as an industrial pollution.'), _jsx('h5', {}, void 0, 'Sources of Nitrides :'), _jsx('p', {}, void 0, 'Thermal Power Plants, Vehicle Fuel Emission, Industries, Fertilizers, Nitrogenous animal and vegetable matter.'), _jsx('h5', {}, void 0, 'Health Hazard of Nitrides :'), _jsx('p', {}, void 0, 'Respiratory disease, such as emphysema and bronchitis, and can aggravate existing heart disease, leading to increased hospital admissions and premature death. Nitrogen oxide causes a multitude of symptoms, primarily in the lungs but also in other organs such as the spleen and liver.'), _jsx('h5', {}, void 0, 'Regulations for Nitrides :'), _jsx('p', {}, void 0, 'The U. S. Occupational Safety and Health Administration (OSHA) has set a 15-minute exposure limit for gaseous ammonia of 35 ppm by volume in the environmental air and an 8-hour exposure limit of 25 ppm by volume. The U.S. Environmental Protection Agency (EPA) has set safety levels for environmental exposure to NO2 at 100 ppb, averaged over one hour, and 53 ppb, averaged annually.'));

	var _ref6 = _jsx('div', {
	  className: 'gases-info'
	}, void 0, _jsx('h5', {}, void 0, 'Importance of Sulfide Monitoring :'), _jsx('p', {}, void 0, 'Sulfur Dioxide (SO2), Hydrogen Sulfide (H2S)Sulfur dioxide (SO2) is an acid-forming, colorless, foul-smelling and toxic gas. The toxicity of Hydrogen Sulfide (H2S) is comparable with that of carbon monoxide.'), _jsx('h5', {}, void 0, 'Sources of Sulfides :'), _jsx('p', {}, void 0, 'Industrial Waste, Petroleum Refineries, Vehicle Emission, Volcanos etc.'), _jsx('h5', {}, void 0, 'Health Hazard of Sulfides :'), _jsx('p', {}, void 0, 'Sulfides poison several different systems in the body, although the nervous system is most affected. It causes increased respiratory symptoms and disease, difficulty in breathing, and premature death.'), _jsx('h5', {}, void 0, 'Regulations for Sulfides :'), _jsx('p', {}, void 0, '10 ppm is the U. S. Occupational Safety and Health Administration (OSHA) permissible exposure limit (PEL) (8 hour time-weighted average) for H2S and 5 ppm (13 mg/m3) time-weighted average for SO2.'));

	var _ref7 = _jsx('div', {
	  className: 'gases-info'
	}, void 0, _jsx('h5', {}, void 0, 'Importance of Ozone Monitoring :'), _jsx('p', {}, void 0, 'Ozone (O3) is a highly toxic corrosive substance and a common pollutant. In low concentration it is a normal component of ambient air. Highly concentrated it is an aggressive irritant gas and at ground level it affects humans and nature.'), _jsx('h5', {}, void 0, 'Sources of Ozone :'), _jsx('p', {}, void 0, 'Naturally through reaction of nitrogen oxides, hydrocarbons, and sunlight; Industrial and vehicular emission.'), _jsx('h5', {}, void 0, 'Health Hazard of Ozone :'), _jsx('p', {}, void 0, 'Ground level ozone harms lung function and irritate the respiratory system. It also causes premature death, asthma, bronchitis, heart attack, and other cardiopulmonary problems.'), _jsx('h5', {}, void 0, 'Regulations for Ozone :'), _jsx('p', {}, void 0, 'U.S. Occupational Safety and Health Administration (OSHA) has established a permissible exposure limit (PEL) of 0.1 umol/mol calculated as an 8-hour time weighted average. Higher concentrations are especially hazardous and National Institute for Occupational Safety and Health (NIOSH) has established an Immediately Dangerous to Life and Health Limit (IDLH) of 5 umol/mol'));

	var _ref8 = _jsx('div', {
	  className: 'gases-info'
	}, void 0, _jsx('h5', {}, void 0, 'Importance of HydroCarbons Monitoring :'), _jsx('p', {}, void 0, 'Hydrocarbon monitoring like Methane (CH4), Propane (C3H8), Butane (C4H10) presence has an important role in ambient Air-Quality Monitoring and Environmental Assessment. Presence of Hydrocarbons in environment reveals important informations about the source of pollution.'), _jsx('h5', {}, void 0, 'Sources of HydroCarbons :'), _jsx('p', {}, void 0, 'Biological Decomposition, Natural Sources, Industrial Emission, Vehicular Emission etc.'), _jsx('h5', {}, void 0, 'Regulations for HydroCarbons :'), _jsx('p', {}, void 0, 'Methane is also one of the principal components in natural gas. These days, methaneis often in the news because it is one of the primary "greenhouse gases." It is second only to carbon dioxide in its contribution to global warming.'));

	var GraphView = function (_Component) {
	  _inherits(GraphView, _Component);

	  function GraphView(props) {
	    _classCallCheck(this, GraphView);

	    // this.maxAqi = this.maxAqi.bind(this)

	    var _this = _possibleConstructorReturn(this, (GraphView.__proto__ || Object.getPrototypeOf(GraphView)).call(this, props));

	    _this.state = {
	      aqiArray: { 'AQI': [], 'CO2': [], 'SO2': [], 'NO2': [], 'PM10': [], 'PM25': [] },
	      chartList: ['aqi', 'co', 'so2', 'no2', 'pm10', 'pm25'],
	      gasesInfo: 'AQI'
	    };
	    _this.displayGraph = _this.displayGraph.bind(_this);
	    return _this;
	  }

	  _createClass(GraphView, [{
	    key: 'mapAnalysis',
	    value: function mapAnalysis() {}
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (this.props.analysisData.length > 0) {
	        (function () {
	          var temp = _this2.state.aqiArray;
	          var todayDt = parseInt(new Date().getTime() / 1000);
	          _this2.props.analysisData.map(function (e) {
	            var a = new Date(e.payload.d.t * 1000);
	            var month = a.getMonth();
	            var date = a.getDate() + 'th';
	            var year = a.getFullYear();
	            var hour = a.getHours();
	            var min = a.getMinutes();
	            if (min < 10) {
	              min = '0' + min;
	            }
	            var Time = hour + ':' + min;
	            if (hour >= 12) {
	              timeArr.unshift(Time + 'pm');
	            } else {
	              timeArr.unshift(Time + 'am');
	            }
	            var fullDate = date + '/' + month + '/' + year;

	            if ((0, _moment2.default)().format('Do') == date) {
	              temp.AQI.unshift(e.aqi);
	              temp.CO2.unshift(e.payload.d.co);
	              temp.SO2.unshift(e.payload.d.so2);
	              temp.NO2.unshift(e.payload.d.no2);
	              temp.PM10.unshift(e.payload.d.pm10);
	              temp.PM25.unshift(e.payload.d.pm25);
	            }

	            if (e.payload.d.pm10 == undefined) {
	              var i = _this2.state.chartList.indexOf("pm10");
	              if (i != -1) {
	                _this2.state.chartList.splice(i, 1);
	              }
	            }
	            if (e.payload.d.co == undefined) {
	              var i = _this2.state.chartList.indexOf("co");
	              if (i != -1) {
	                _this2.state.chartList.splice(i, 1);
	              }
	            }
	            if (e.payload.d.so2 == undefined) {
	              var i = _this2.state.chartList.indexOf("so2");
	              if (i != -1) {
	                _this2.state.chartList.splice(i, 1);
	              }
	            }
	            if (e.payload.d.no2 == undefined) {
	              var i = _this2.state.chartList.indexOf("no2");
	              if (i != -1) {
	                _this2.state.chartList.splice(i, 1);
	              }
	            }
	            if (e.payload.d.pm25 == undefined) {
	              var i = _this2.state.chartList.indexOf("pm25");
	              if (i != -1) {
	                _this2.state.chartList.splice(i, 1);
	              }
	            }
	          });
	          _this2.setState({ aqiArray: temp });

	          chart = Highcharts.chart(_this2.refs.highchart, {
	            chart: {
	              backgroundColor: 'transparent',
	              width: 600,
	              height: 300,
	              type: 'column'
	            },
	            colors: ['#00b3bf'],

	            title: {
	              text: 'Analytics',
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
	              gridLineColor: '#2b313a',
	              gridLineWidth: 1,
	              labels: {
	                style: {
	                  color: '#FFF'
	                }
	              }
	            },

	            yAxis: {
	              gridLineWidth: 1,
	              gridLineColor: '#2b313a',
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
	              name: 'aqi',
	              data: _this2.state.aqiArray.AQI,
	              fillColor: 'rgba(255,255,255, 0.1)',
	              marker: {
	                enabled: false
	              }
	            }, {
	              name: 'co',
	              data: _this2.state.aqiArray.CO2,
	              fillColor: 'rgba(255,255,255, 0.1)',
	              marker: {
	                enabled: false
	              },
	              visible: false
	            }, {
	              name: 'so2',
	              data: _this2.state.aqiArray.SO2,
	              fillColor: 'rgba(255,255,255, 0.1)',
	              marker: {
	                enabled: false
	              },
	              visible: false
	            }, {
	              name: 'no2',
	              data: _this2.state.aqiArray.NO2,
	              fillColor: 'rgba(255,255,255, 0.1)',
	              marker: {
	                enabled: false
	              },
	              visible: false
	            }, {
	              name: 'pm10',
	              data: _this2.state.aqiArray.PM10,
	              fillColor: 'rgba(255,255,255, 0.1)',
	              marker: {
	                enabled: false
	              },
	              visible: false
	            }, {
	              name: 'pm25',
	              data: _this2.state.aqiArray.PM25,
	              fillColor: 'rgba(255,255,255, 0.1)',
	              marker: {
	                enabled: false
	              },
	              visible: false
	            }]
	          });
	        })();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {

	      var diff = (0, _moment2.default)(nextProps.toDate, "DD/MM/YYYY").diff((0, _moment2.default)(nextProps.fromDate, "DD/MM/YYYY"));
	      diff = _moment2.default.duration(diff);
	      var diffN = diff.asDays();
	      var temp = this.state.aqiArray;
	      if (diff.asDays() > 1) {
	        diffDayArray = [];
	        for (var i = 0; i < diffN; i++) {
	          var incre = (0, _moment2.default)(nextProps.fromDate, "DD-MM-YYYY").add(i, 'days');
	          diffDayArray.push(incre.format('Do/MM/YYYY'));
	        }

	        this.props.analysisData.map(function (e) {
	          var a = new Date(e.payload.d.t * 1000);
	          var month = a.getMonth();
	          var date = a.getDate() + 'th';
	          var year = a.getFullYear();
	          var hour = a.getHours();
	          var min = a.getMinutes();
	          if (min < 10) {
	            min = '0' + min;
	          }
	          var Time = hour + ':' + min;
	          if (hour >= 12) {
	            timeArr.unshift(Time + 'pm');
	          } else {
	            timeArr.unshift(Time + 'am');
	          }
	          var fullDate = date + '/' + month + '/' + year;
	          var pos = diffDayArray.indexOf(fullDate);
	          if (pos > -1) {
	            temp.AQI.unshift(e.aqi);
	            temp.CO2.unshift(e.payload.d.co);
	            temp.SO2.unshift(e.payload.d.so2);
	            temp.NO2.unshift(e.payload.d.no2);
	            temp.PM10.unshift(e.payload.d.pm10);
	            temp.PM25.unshift(e.payload.d.pm25);
	          } else {
	            temp.AQI = [];
	            temp.CO2 = [];
	            temp.SO2 = [];
	            temp.NO2 = [];
	            temp.PM10 = [];
	            temp.PM25 = [];
	          }
	        });
	        this.setState({ aqiArray: temp });
	        chart = Highcharts.chart(this.refs.highchart, {
	          chart: {
	            backgroundColor: 'transparent',
	            width: 600,
	            height: 300,
	            type: 'column'
	          },
	          colors: ['#00b3bf'],

	          title: {
	            text: 'Analytics',
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
	            gridLineColor: '#2b313a',
	            gridLineWidth: 1,
	            labels: {
	              style: {
	                color: '#FFF'
	              }
	            }
	          },

	          yAxis: {
	            gridLineWidth: 1,
	            gridLineColor: '#2b313a',
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
	            name: 'aqi',
	            data: this.state.aqiArray.AQI,
	            fillColor: 'rgba(255,255,255, 0.1)',
	            marker: {
	              enabled: false
	            }
	          }, {
	            name: 'co',
	            data: this.state.aqiArray.CO2,
	            fillColor: 'rgba(255,255,255, 0.1)',
	            marker: {
	              enabled: false
	            },
	            visible: false
	          }, {
	            name: 'so2',
	            data: this.state.aqiArray.SO2,
	            fillColor: 'rgba(255,255,255, 0.1)',
	            marker: {
	              enabled: false
	            },
	            visible: false
	          }, {
	            name: 'no2',
	            data: this.state.aqiArray.NO2,
	            fillColor: 'rgba(255,255,255, 0.1)',
	            marker: {
	              enabled: false
	            },
	            visible: false
	          }, {
	            name: 'pm10',
	            data: this.state.aqiArray.PM10,
	            fillColor: 'rgba(255,255,255, 0.1)',
	            marker: {
	              enabled: false
	            },
	            visible: false
	          }, {
	            name: 'pm25',
	            data: this.state.aqiArray.PM25,
	            fillColor: 'rgba(255,255,255, 0.1)',
	            marker: {
	              enabled: false
	            },
	            visible: false
	          }]
	        });
	      }
	    }
	  }, {
	    key: 'displayGraph',
	    value: function displayGraph(tabName) {
	      this.state.chartList.map(function (e) {
	        if (tabName === e) {
	          document.getElementById(tabName).className = 'active';
	        } else {
	          document.getElementById(e).className = '';
	        }
	      });

	      chart.series.map(function (e) {
	        if (e.name == tabName) {
	          e.setVisible(true);
	        } else {
	          e.setVisible(false);
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _jsx('div', {}, void 0, _jsx('div', {
	        className: 'analytics-div'
	      }, void 0, _jsx('div', {
	        className: 'analytics-chart'
	      }, void 0, Object.keys(this.state.aqiArray).length > 0 ? _react2.default.createElement('div', { ref: 'highchart' }) : null, _jsx('ul', {
	        className: 'chart-list list-inline',
	        id: 'c-list'
	      }, void 0, this.state.chartList.map(function (list, index) {
	        return _jsx('li', {
	          onClick: function onClick() {
	            _this3.displayGraph(list);
	          },
	          id: list,
	          className: index === 0 ? 'active' : ''
	        }, list, list == 'co' ? list + '2' : list);
	      })), _jsx('div', {
	        className: 'chart-btn-group'
	      }, void 0, _jsx('a', {
	        className: this.props.activeGraph == 'graphview' ? 'active' : '',
	        onClick: function onClick() {
	          _this3.props.changeGraphData('graphview');
	        }
	      }, void 0, _ref), _jsx('a', {
	        className: this.props.activeGraph == 'calendarview' ? 'active' : '',
	        onClick: function onClick() {
	          _this3.props.changeGraphData('calendarview');
	        }
	      }, void 0, _ref2))), _jsx('div', {
	        className: 'chart-description'
	      }, void 0, _jsx(_DropdownButton2.default, {
	        title: this.state.gasesInfo,
	        id: 'chart-info-dropdown'
	      }, void 0, _jsx(_MenuItem2.default, {
	        eventKey: '1',
	        onSelect: function onSelect() {
	          _this3.setState({ gasesInfo: 'AQI' });
	        }
	      }, void 0, 'AQI'), _jsx(_MenuItem2.default, {
	        eventKey: '2',
	        onSelect: function onSelect() {
	          _this3.setState({ gasesInfo: 'Carbon Oxides' });
	        }
	      }, void 0, 'Carbon Oxides'), _jsx(_MenuItem2.default, {
	        eventKey: '3',
	        onSelect: function onSelect() {
	          _this3.setState({ gasesInfo: 'Nitrides' });
	        }
	      }, void 0, 'Nitrides'), _jsx(_MenuItem2.default, {
	        eventKey: '4',
	        onSelect: function onSelect() {
	          _this3.setState({ gasesInfo: 'Sulfides' });
	        }
	      }, void 0, 'Sulfides'), _jsx(_MenuItem2.default, {
	        eventKey: '6',
	        onSelect: function onSelect() {
	          _this3.setState({ gasesInfo: 'Ozone' });
	        }
	      }, void 0, 'Ozone'), _jsx(_MenuItem2.default, {
	        eventKey: '7',
	        onSelect: function onSelect() {
	          _this3.setState({ gasesInfo: 'HydroCarbons' });
	        }
	      }, void 0, 'HydroCarbons')), this.state.gasesInfo == 'AQI' ? _ref3 : this.state.gasesInfo == 'Carbon Oxides' ? _ref4 : this.state.gasesInfo == 'Nitrides' ? _ref5 : this.state.gasesInfo == 'Sulfides' ? _ref6 : this.state.gasesInfo == 'Ozone' ? _ref7 : this.state.gasesInfo == 'HydroCarbons' ? _ref8 : null)));
	    }
	  }]);

	  return GraphView;
	}(_react.Component);

	exports.default = GraphView;

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

	var _GraphView = __webpack_require__(34);

	var _GraphView2 = _interopRequireDefault(_GraphView);

	var _CalendarView = __webpack_require__(33);

	var _CalendarView2 = _interopRequireDefault(_CalendarView);

	var _superagent = __webpack_require__(4);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx('p', {}, void 0, 'Current AQI');

	var _ref2 = _jsx('span', {
	  className: 'ppc-title'
	}, void 0, 'CO', _jsx('sub', {}, void 0, '2'));

	var _ref3 = _jsx('small', {}, void 0, '(ug/m3)');

	var _ref4 = _jsx('span', {
	  className: 'ppc-title'
	}, void 0, 'SO', _jsx('sub', {}, void 0, '2'));

	var _ref5 = _jsx('small', {}, void 0, '(ug/m3)');

	var _ref6 = _jsx('span', {
	  className: 'ppc-title'
	}, void 0, 'NO', _jsx('sub', {}, void 0, '2'));

	var _ref7 = _jsx('small', {}, void 0, '(ug/m3)');

	var _ref8 = _jsx('span', {
	  className: 'ppc-title'
	}, void 0, 'PM10');

	var _ref9 = _jsx('small', {}, void 0, '(ug/m3)');

	var _ref10 = _jsx('span', {
	  className: 'ppc-title'
	}, void 0, 'PM2.5');

	var _ref11 = _jsx('small', {}, void 0, '(ug/m3)');

	var LatestDevice = function (_Component) {
	  _inherits(LatestDevice, _Component);

	  function LatestDevice(props) {
	    _classCallCheck(this, LatestDevice);

	    var _this = _possibleConstructorReturn(this, (LatestDevice.__proto__ || Object.getPrototypeOf(LatestDevice)).call(this, props));

	    _this.state = { activeGraph: 'graphview', limits: [] };
	    _this.changeGraphData = _this.changeGraphData.bind(_this);
	    _this.displayTime = _this.displayTime.bind(_this);
	    return _this;
	  }

	  _createClass(LatestDevice, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _superagent2.default.get('https://openenvironment.p.mashape.com/limits').set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
	        this.setState({ limits: res.body });
	      }.bind(this));
	    }
	  }, {
	    key: 'displayTime',
	    value: function displayTime() {
	      var a = new Date(this.props.time * 1000);

	      var year = a.getFullYear().toString().substr(2, 2);
	      var month = a.getMonth() + 1;
	      var date = a.getDate();
	      var hour = a.getHours();
	      var min = a.getMinutes();
	      var ampm = hour >= 12 ? 'pm' : 'am';
	      var displayTime = hour + ':' + min + " " + ampm + " " + date + "-" + month + "-" + year;
	      return displayTime;
	    }
	  }, {
	    key: 'getCODegree',
	    value: function getCODegree(co) {
	      var obj = {};
	      if (co > 25) {
	        obj.class = 'gt-50';
	      }
	      var percent = co,
	          deg = 360 * percent / 50;
	      obj.percent = percent;
	      obj.deg = deg;
	      return obj;
	    }
	  }, {
	    key: 'getSODegree',
	    value: function getSODegree(so) {
	      var obj = {};
	      if (so > 800) {
	        obj.class = 'gt-50';
	      }
	      var percent = so,
	          deg = 360 * percent / 1600;
	      obj.percent = percent;
	      obj.deg = deg;
	      return obj;
	    }
	  }, {
	    key: 'getNODegree',
	    value: function getNODegree(no) {
	      var obj = {};
	      if (no > 250) {
	        obj.class = 'gt-50';
	      }
	      var percent = no,
	          deg = 360 * percent / 500;
	      obj.percent = percent;
	      obj.deg = deg;
	      return obj;
	    }
	  }, {
	    key: 'getPM10Degree',
	    value: function getPM10Degree(pm10) {
	      var obj = {};
	      if (pm10 > 215) {
	        obj.class = 'gt-50';
	      }
	      var percent = pm10,
	          deg = 360 * percent / 430;
	      obj.percent = percent;
	      obj.deg = deg;
	      return obj;
	    }
	  }, {
	    key: 'getPM25Degree',
	    value: function getPM25Degree(pm25) {
	      var obj = {};
	      if (pm25 > 125) {
	        obj.class = 'gt-50';
	      }
	      var percent = pm25,
	          deg = 360 * percent / 250;
	      obj.percent = percent;
	      obj.deg = deg;
	      return obj;
	    }
	  }, {
	    key: 'changeGraphData',
	    value: function changeGraphData(graph) {
	      this.setState({ activeGraph: graph });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var latestDevice = this.props.realtimeData[0];
	      return _jsx('div', {
	        className: 'dashboard-home'
	      }, void 0, _jsx('div', {
	        className: 'row'
	      }, void 0, _jsx('div', {
	        className: 'col-sm-4 text-center',
	        style: { padding: '30px 0px 30px 20px', position: 'relative' }
	      }, void 0, _jsx('div', {
	        className: 'aqi-status'
	      }, void 0, _ref, _jsx('strong', {
	        className: latestDevice.aqi <= 50 ? 'good' : latestDevice.aqi > 50 && latestDevice.aqi < 101 ? 'satisfactory' : latestDevice.aqi > 100 && latestDevice.aqi < 201 ? 'moderate' : latestDevice.aqi > 200 && latestDevice.aqi < 301 ? 'poor' : latestDevice.aqi > 300 && latestDevice.aqi < 401 ? 'vpoor' : 'severe'
	      }, void 0, latestDevice.aqi), _jsx('p', {
	        className: 'aqi-grade\n                ' + (latestDevice.aqi <= 50 ? 'good' : latestDevice.aqi > 50 && latestDevice.aqi < 101 ? 'satisfactory' : latestDevice.aqi > 100 && latestDevice.aqi < 201 ? 'moderate' : latestDevice.aqi > 200 && latestDevice.aqi < 301 ? 'poor' : latestDevice.aqi > 300 && latestDevice.aqi < 401 ? 'vpoor' : 'severe')
	      }, void 0, latestDevice.aqi <= 50 ? 'Good' : latestDevice.aqi > 50 && latestDevice.aqi < 101 ? 'Satisfactory' : latestDevice.aqi > 100 && latestDevice.aqi < 201 ? 'Moderate' : latestDevice.aqi > 200 && latestDevice.aqi < 301 ? 'Poor' : latestDevice.aqi > 300 && latestDevice.aqi < 401 ? 'Very Poor' : 'Severe'), _jsx('div', {
	        className: 'last-updated'
	      }, void 0, _jsx('span', {}, void 0, 'Last Updated: ', this.displayTime()))), _jsx('div', {
	        className: 'gases-details'
	      }, void 0, _jsx('div', {
	        className: 'row'
	      }, void 0, latestDevice.payload.d.co != undefined ? _jsx('div', {
	        className: 'col-md-3 text-center'
	      }, void 0, _jsx('div', {
	        className: 'progress-pie-chart-gas ' + this.getCODegree(latestDevice.payload.d.co).class
	      }, void 0, _jsx('div', {
	        className: 'ppc-progress-gas'
	      }, void 0, _jsx('div', {
	        className: 'ppc-progress-fill-gas',
	        style: { transform: 'rotate(' + this.getCODegree(latestDevice.payload.d.co).deg + 'deg)' }
	      })), _jsx('div', {
	        className: 'ppc-percents-gas'
	      }, void 0, _jsx('div', {
	        className: 'pcc-percents-wrapper-gas'
	      }, void 0, _jsx('span', {}, void 0, latestDevice.payload.d.co)))), _ref2, _ref3) : null, latestDevice.payload.d.so2 != undefined ? _jsx('div', {
	        className: 'col-md-3'
	      }, void 0, _jsx('div', {
	        className: 'progress-pie-chart-gas ' + this.getSODegree(latestDevice.payload.d.so2).class
	      }, void 0, _jsx('div', {
	        className: 'ppc-progress-gas'
	      }, void 0, _jsx('div', {
	        className: 'ppc-progress-fill-gas',
	        style: { transform: 'rotate(' + this.getSODegree(latestDevice.payload.d.so2).deg + 'deg)' }
	      }, void 0)), _jsx('div', {
	        className: 'ppc-percents-gas'
	      }, void 0, _jsx('div', {
	        className: 'pcc-percents-wrapper-gas'
	      }, void 0, _jsx('span', {}, void 0, latestDevice.payload.d.so2)))), _ref4, _ref5) : null, latestDevice.payload.d.no2 != undefined ? _jsx('div', {
	        className: 'col-md-3'
	      }, void 0, _jsx('div', {
	        className: 'progress-pie-chart-gas ' + this.getNODegree(latestDevice.payload.d.no2).class
	      }, void 0, _jsx('div', {
	        className: 'ppc-progress-gas'
	      }, void 0, _jsx('div', {
	        className: 'ppc-progress-fill-gas',
	        style: { transform: 'rotate(' + this.getNODegree(latestDevice.payload.d.no2).deg + 'deg)' }
	      }, void 0)), _jsx('div', {
	        className: 'ppc-percents-gas'
	      }, void 0, _jsx('div', {
	        className: 'pcc-percents-wrapper-gas'
	      }, void 0, _jsx('span', {}, void 0, latestDevice.payload.d.no2)))), _ref6, _ref7) : null, latestDevice.payload.d.pm10 != undefined ? _jsx('div', {
	        className: 'col-md-3'
	      }, void 0, _jsx('div', {
	        className: 'progress-pie-chart-gas ' + this.getPM10Degree(latestDevice.payload.d.pm10).class
	      }, void 0, _jsx('div', {
	        className: 'ppc-progress-gas'
	      }, void 0, _jsx('div', {
	        className: 'ppc-progress-fill-gas',
	        style: { transform: 'rotate(' + this.getPM10Degree(latestDevice.payload.d.pm10).deg + 'deg)' }
	      }, void 0)), _jsx('div', {
	        className: 'ppc-percents-gas'
	      }, void 0, _jsx('div', {
	        className: 'pcc-percents-wrapper-gas'
	      }, void 0, _jsx('span', {}, void 0, latestDevice.payload.d.pm10)))), _ref8, _ref9) : null, latestDevice.payload.d.pm25 != undefined ? _jsx('div', {
	        className: 'col-md-3'
	      }, void 0, _jsx('div', {
	        className: 'progress-pie-chart-gas ' + this.getPM25Degree(latestDevice.payload.d.pm25).class
	      }, void 0, _jsx('div', {
	        className: 'ppc-progress-gas'
	      }, void 0, _jsx('div', {
	        className: 'ppc-progress-fill-gas',
	        style: { transform: 'rotate(' + this.getPM25Degree(latestDevice.payload.d.pm25).deg + 'deg)' }
	      }, void 0)), _jsx('div', {
	        className: 'ppc-percents-gas'
	      }, void 0, _jsx('div', {
	        className: 'pcc-percents-wrapper-gas'
	      }, void 0, _jsx('span', {}, void 0, latestDevice.payload.d.pm25)))), _ref10, _ref11) : null))), _jsx('div', {
	        className: 'col-sm-8',
	        style: { padding: '20px' }
	      }, void 0, this.state.activeGraph === 'graphview' ? _jsx(_GraphView2.default, {
	        analysisData: this.props.analysisData,
	        time: this.props.time,
	        activeGraph: this.state.activeGraph,
	        changeGraphData: this.changeGraphData,
	        fromDate: this.props.fromDate,
	        toDate: this.props.toDate
	      }) : _jsx(_CalendarView2.default, {
	        changeGraphData: this.changeGraphData,
	        activeGraph: this.state.activeGraph,
	        markerId: this.props.markerId
	      }))));
	    }
	  }]);

	  return LatestDevice;
	}(_react.Component);

	exports.default = LatestDevice;

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

	var _redux = __webpack_require__(13);

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


	var _express = __webpack_require__(22);

	var _express2 = _interopRequireDefault(_express);

	var _compression = __webpack_require__(21);

	var _compression2 = _interopRequireDefault(_compression);

	var _bodyParser = __webpack_require__(20);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _path = __webpack_require__(23);

	var _path2 = _interopRequireDefault(_path);

	var _webpack = __webpack_require__(7);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpackConfig = __webpack_require__(18);

	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

	var _webpackDevMiddleware = __webpack_require__(25);

	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

	var _webpackHotMiddleware = __webpack_require__(26);

	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

	var _store = __webpack_require__(15);

	var _reactRedux = __webpack_require__(6);

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(24);

	var _reactRouter = __webpack_require__(3);

	var _reactHelmet = __webpack_require__(5);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _routes = __webpack_require__(14);

	var _routes2 = _interopRequireDefault(_routes);

	var _fetchData = __webpack_require__(17);

	var _config = __webpack_require__(16);

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
	  var refManifest = __webpack_require__(19);
	  var styleSrc = '/' + refManifest['main.css'];
	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">\n        <link rel="shortcut icon" href="./assets/images/favicon.ico" type="image/png" />\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">\n        <link rel="stylesheet" href=\'' + (process.env.NODE_ENV === 'production' ? styleSrc : '/main.css') + '\' type="text/css" media="screen" charset="utf-8">\n        \n        <script src=\'https://maps.googleapis.com/maps/api/js?key=AIzaSyAnK8lYEkj7mwTu7AWDP4GwiWI8SX9QHwM&extension=.js\'></script>\n        <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>\n        <script src="http://code.highcharts.com/highcharts.js"></script>\n        <script src="http://code.highcharts.com/modules/heatmap.js" ></script>\n        <script src="http://code.highcharts.com/modules/exporting.js"></script>\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
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

	module.exports = require("lodash");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/FormControl");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/FormGroup");

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/Nav");

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/NavItem");

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/Navbar");

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("react-datetime");

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("react-google-maps/lib/GoogleMap");

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("react-google-maps/lib/GoogleMapLoader");

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("react-helmet/lib/Helmet");

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = require("react-router-bootstrap/lib/LinkContainer");

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("react-tabs/lib/components/Tab");

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("react-tabs/lib/components/TabList");

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = require("react-tabs/lib/components/TabPanel");

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("react-tabs/lib/components/Tabs");

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ }
/******/ ]);