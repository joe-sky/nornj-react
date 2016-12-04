(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("nornj"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["nornj", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["NornJReact"] = factory(require("nornj"), require("react"), require("react-dom"));
	else
		root["NornJReact"] = factory(root["nj"], root["React"], root["ReactDom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

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
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var njr = __webpack_require__(1),
	  nj = __webpack_require__(2),
	  React = __webpack_require__(3),
	  renderComponents = __webpack_require__(4),
	  registerTmpl = __webpack_require__(6),
	  docReady = __webpack_require__(7);

	njr.registerTmpl = registerTmpl;
	njr.docReady = docReady;
	nj.assign(njr, renderComponents);

	//Set createElement function for NornJ
	nj.config({ createElement: React.createElement });

	var global;
	if (typeof self !== 'undefined') {
	  global = self;

	  //Initial render templates
	  docReady(function () {
	    njr.renderComponents(njr.initialData, null, true);
	  });
	}
	else {
	  global = this;
	}

	module.exports = global.NornJReact = global.njr = njr;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var njr = {
	  initialData: null
	};

	module.exports = njr;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var njr = __webpack_require__(1),
	  nj = __webpack_require__(2),
	  ReactDOM = __webpack_require__(5);

	//渲染内联标签组件
	function renderComponents(data, selector, isAuto) {
	  var tags = getComponents(selector, isAuto),
	    ret = [];

	  nj.each(tags, function (tag) {
	    var tmpl = nj.compileH(tag.innerHTML, tag.id),
	      parentNode = tag.parentNode;

	    ret.push(ReactDOM.render(tmpl(data), parentNode));
	  }, false, true);

	  return ret;
	}

	//获取全部内联组件
	function getComponents(selector, isAuto) {
	  if (!selector) {
	    selector = 'script[type="text/nornj"]' + (isAuto ? '[autorender]' : '');
	  }

	  return document.querySelectorAll(selector);
	}

	//Set initial data for inline component
	function setInitialData(data) {
	  njr.initialData = data;
	}

	module.exports = {
	  renderComponents: renderComponents,
	  getComponents: getComponents,
	  setInitialData: setInitialData
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nj = __webpack_require__(2);

	//注册模板装饰器
	function registerTmpl(name, template) {
	  if (tools.isObject(name)) {
	    template = name.template;
	    name = name.name;
	  }

	  return function (target) {
	    //注册组件
	    if(name != null) {
	      nj.registerComponent(name, target);
	    }

	    //创建模板函数
	    if(template) {
	      target.prototype.template = nj.compileH(template, name);
	    }
	  };
	}

	module.exports = registerTmpl;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (callback) {
	  var doc = document;
	  if (doc.addEventListener) {
	    doc.addEventListener("DOMContentLoaded", callback, false);
	  }
	  else {
	    self.attachEvent("onload", callback);
	  }
	};

/***/ }
/******/ ])
});
;