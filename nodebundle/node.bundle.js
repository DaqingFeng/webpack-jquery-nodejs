require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _throwError = __webpack_require__(2);
	
	var _throwError2 = _interopRequireDefault(_throwError);
	
	var _account = __webpack_require__(3);
	
	var _account2 = _interopRequireDefault(_account);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Logger = function () {
	    function Logger() {
	        _classCallCheck(this, Logger);
	
	        console.log(_account2.default);
	    }
	
	    _createClass(Logger, [{
	        key: 'log',
	        value: function log(msg) {
	            console.log('[webpack-node]', msg);
	        }
	    }]);
	
	    return Logger;
	}();
	
	var logger = new Logger();
	logger.log('hi, from webpack\'d node');
	logger.log('I\'m gonna throw an error in 3 seconds...');
	setTimeout(function () {
	    return logger.log('3...');
	}, 1000);
	setTimeout(function () {
	    return logger.log('2...');
	}, 2000);
	setTimeout(function () {
	    return logger.log('wait, like, right on 3 or like, after 3?');
	}, 3000);
	setTimeout(function () {
	    return (0, _throwError2.default)();
	}, 4000);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = throwError;
	function throwError(msg) {
	  throw new Error(msg);
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var account = function () {
	    function account() {
	        _classCallCheck(this, account);
	
	        this.transactions = [];
	    }
	
	    _createClass(account, [{
	        key: "getTopTransactions",
	        value: function getTopTransactions() {
	            var getSortKey = function getSortKey(transaction) {
	                return -Math.abs(transaction.amount);
	            };
	            var sortedTransactions = sortBy(this.transactions, getSortKey);
	            return first(sortedTransactions, 3);
	        }
	    }, {
	        key: "deposit",
	        value: function deposit(amount, date) {
	            this.transactions.push({
	                amount: amount,
	                date: date
	            });
	        }
	    }, {
	        key: "withdraw",
	        value: function withdraw(amount, date) {
	            this.transactions.push({
	                amount: -amount,
	                date: date
	            });
	        }
	    }]);
	
	    return account;
	}();
	
	;
	exports.default = account;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2ExZjc3YTljMGNjY2E4MThjNDgiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZXhjZXB0aW9uL3Rocm93RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci9hY2NvdW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7Ozs7O0tBQ00sTTtBQUNGLHVCQUFjO0FBQUE7O0FBQ1YsaUJBQVEsR0FBUjtBQUNIOzs7OzZCQUNHLEcsRUFBSztBQUNMLHFCQUFRLEdBQVIsQ0FBWSxnQkFBWixFQUE4QixHQUE5QjtBQUNIOzs7Ozs7QUFFTCxLQUFNLFNBQVMsSUFBSSxNQUFKLEVBQWY7QUFDQSxRQUFPLEdBQVAsQ0FBVywwQkFBWDtBQUNBLFFBQU8sR0FBUCxDQUFXLDJDQUFYO0FBQ0EsWUFBVztBQUFBLFlBQU0sT0FBTyxHQUFQLENBQVcsTUFBWCxDQUFOO0FBQUEsRUFBWCxFQUFxQyxJQUFyQztBQUNBLFlBQVc7QUFBQSxZQUFNLE9BQU8sR0FBUCxDQUFXLE1BQVgsQ0FBTjtBQUFBLEVBQVgsRUFBcUMsSUFBckM7QUFDQSxZQUFXO0FBQUEsWUFBTSxPQUFPLEdBQVAsQ0FBVywwQ0FBWCxDQUFOO0FBQUEsRUFBWCxFQUF5RSxJQUF6RTtBQUNBLFlBQVc7QUFBQSxZQUFNLDJCQUFOO0FBQUEsRUFBWCxFQUErQixJQUEvQixFOzs7Ozs7Ozs7OzttQkNoQndCLFU7QUFBVCxVQUFTLFVBQVQsQ0FBb0IsR0FBcEIsRUFBeUI7QUFDdEMsU0FBTSxJQUFJLEtBQUosQ0FBVSxHQUFWLENBQU47QUFDRCxFOzs7Ozs7Ozs7Ozs7Ozs7O0tDRkssTztBQUNGLHdCQUFjO0FBQUE7O0FBQ1YsY0FBSyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0g7Ozs7OENBQ29CO0FBQ2pCLGlCQUFJLGFBQWEsU0FBYixVQUFhO0FBQUEsd0JBQWUsQ0FBQyxLQUFLLEdBQUwsQ0FBVSxZQUFZLE1BQXRCLENBQWhCO0FBQUEsY0FBakI7QUFDQSxpQkFBSSxxQkFBcUIsT0FBUSxLQUFLLFlBQWIsRUFBMkIsVUFBM0IsQ0FBekI7QUFDQSxvQkFBTyxNQUFPLGtCQUFQLEVBQTJCLENBQTNCLENBQVA7QUFDSDs7O2lDQUNRLE0sRUFBUSxJLEVBQU87QUFDcEIsa0JBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QjtBQUNuQix5QkFBUyxNQURVO0FBRW5CLHVCQUFTO0FBRlUsY0FBdkI7QUFJSDs7O2tDQUNTLE0sRUFBUSxJLEVBQU87QUFDckIsa0JBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QjtBQUNuQix5QkFBUyxDQUFDLE1BRFM7QUFFbkIsdUJBQVM7QUFGVSxjQUF2QjtBQUlIOzs7Ozs7QUFDSjttQkFDYyxPIiwiZmlsZSI6Ii4vbm9kZWJ1bmRsZS9ub2RlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgY2ExZjc3YTljMGNjY2E4MThjNDhcbiAqKi8iLCJpbXBvcnQgdGhyb3dFcnJvciBmcm9tICcuLi9leGNlcHRpb24vdGhyb3dFcnJvcidcclxuaW1wb3J0IGFjY291bnQgZnJvbSAnLi4vY29udHJvbGxlci9hY2NvdW50LmpzJ1xyXG5jbGFzcyBMb2dnZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWNjb3VudCk7XHJcbiAgICB9XHJcbiAgICBsb2cobXNnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1t3ZWJwYWNrLW5vZGVdJywgbXNnKVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoKVxyXG5sb2dnZXIubG9nKCdoaSwgZnJvbSB3ZWJwYWNrXFwnZCBub2RlJylcclxubG9nZ2VyLmxvZygnSVxcJ20gZ29ubmEgdGhyb3cgYW4gZXJyb3IgaW4gMyBzZWNvbmRzLi4uJylcclxuc2V0VGltZW91dCgoKSA9PiBsb2dnZXIubG9nKCczLi4uJyksIDEwMDApXHJcbnNldFRpbWVvdXQoKCkgPT4gbG9nZ2VyLmxvZygnMi4uLicpLCAyMDAwKVxyXG5zZXRUaW1lb3V0KCgpID0+IGxvZ2dlci5sb2coJ3dhaXQsIGxpa2UsIHJpZ2h0IG9uIDMgb3IgbGlrZSwgYWZ0ZXIgMz8nKSwgMzAwMClcclxuc2V0VGltZW91dCgoKSA9PiB0aHJvd0Vycm9yKCksIDQwMDApXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zZXJ2aWNlL0FwcC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm93RXJyb3IobXNnKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKG1zZylcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4Y2VwdGlvbi90aHJvd0Vycm9yLmpzXG4gKiovIiwiY2xhc3MgYWNjb3VudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IFtdO1xyXG4gICAgfVxyXG4gICAgZ2V0VG9wVHJhbnNhY3Rpb25zKCkge1xyXG4gICAgICAgIHZhciBnZXRTb3J0S2V5ID0gdHJhbnNhY3Rpb24gPT4gLU1hdGguYWJzKCB0cmFuc2FjdGlvbi5hbW91bnQgKTtcclxuICAgICAgICB2YXIgc29ydGVkVHJhbnNhY3Rpb25zID0gc29ydEJ5KCB0aGlzLnRyYW5zYWN0aW9ucywgZ2V0U29ydEtleSApO1xyXG4gICAgICAgIHJldHVybiBmaXJzdCggc29ydGVkVHJhbnNhY3Rpb25zLCAzICk7XHJcbiAgICB9XHJcbiAgICBkZXBvc2l0KCBhbW91bnQsIGRhdGUgKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMucHVzaCh7IFxyXG4gICAgICAgICAgICBhbW91bnQgOiBhbW91bnQsXHJcbiAgICAgICAgICAgIGRhdGUgICA6IGRhdGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHdpdGhkcmF3KCBhbW91bnQsIGRhdGUgKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMucHVzaCh7IFxyXG4gICAgICAgICAgICBhbW91bnQgOiAtYW1vdW50LFxyXG4gICAgICAgICAgICBkYXRlICAgOiBkYXRlXHJcbiAgICAgICAgfSk7ICAgIFxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBhY2NvdW50O1xyXG4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb250cm9sbGVyL2FjY291bnQuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9