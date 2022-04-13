"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    const onChange = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: 100\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {\n            direction: \"vertical\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    type: \"primary\",\n                    children: \"Primary Button\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Computer Science\\\\_Projects\\\\_blockchain\\\\ethereum_solidity\\\\4_kickstarter\\\\pages\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    type: \"ghost\",\n                    children: \"Ghost Button\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Computer Science\\\\_Projects\\\\_blockchain\\\\ethereum_solidity\\\\4_kickstarter\\\\pages\\\\index.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.DatePicker, {\n                    onChange: onChange\n                }, void 0, false, {\n                    fileName: \"D:\\\\Computer Science\\\\_Projects\\\\_blockchain\\\\ethereum_solidity\\\\4_kickstarter\\\\pages\\\\index.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.CiCircleFilled, {}, void 0, false, {\n                    fileName: \"D:\\\\Computer Science\\\\_Projects\\\\_blockchain\\\\ethereum_solidity\\\\4_kickstarter\\\\pages\\\\index.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Computer Science\\\\_Projects\\\\_blockchain\\\\ethereum_solidity\\\\4_kickstarter\\\\pages\\\\index.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Computer Science\\\\_Projects\\\\_blockchain\\\\ethereum_solidity\\\\4_kickstarter\\\\pages\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}; /**\r\n \r\nimport React from \"react\";\r\nimport factory from \"../ethereum/factory\";\r\n\r\nclass CampaignIndex extends React.Component {\r\n  // get data from the ethereum contract and set it as props\r\n // the function should resolve to an object   \r\n  static async getInitialProps() {\r\n    // get the deployd campaign array from the factory contract\r\n    const campaigns = await factory.methods.getDeployedContracts().call();\r\n    console.log(campaigns);\r\n    //  return the data\r\n     return (campaigns);\r\n  }\r\n\r\n \r\n\r\n  render() {\r\n    return <div>{this.props.campaings}</div>;\r\n  }\r\n}\r\n\r\nexport default CampaignIndex;\r\n*/ \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTtBQUEwQjtBQUM2QjtBQUNKO0FBRXBDLFNBQVNNLElBQUksR0FBRztJQUM3QixNQUFNQyxRQUFRLEdBQUcsSUFBTSxFQUFFO0lBQ3pCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLEtBQUssRUFBRTtZQUFFQyxPQUFPLEVBQUUsR0FBRztTQUFFO2tCQUMxQiw0RUFBQ1IsdUNBQUs7WUFBQ1MsU0FBUyxFQUFDLFVBQVU7OzhCQUN6Qiw4REFBQ1Ysd0NBQU07b0JBQUNXLElBQUksRUFBQyxTQUFTOzhCQUFDLGdCQUFjOzs7Ozt3QkFBUzs4QkFDOUMsOERBQUNYLHdDQUFNO29CQUFDVyxJQUFJLEVBQUMsT0FBTzs4QkFBQyxjQUFZOzs7Ozt3QkFBUzs4QkFDMUMsOERBQUNULDRDQUFVO29CQUFDSSxRQUFRLEVBQUVBLFFBQVE7Ozs7O3dCQUFJOzhCQUNsQyw4REFBQ0YsNkRBQWM7Ozs7d0JBQUc7Ozs7OztnQkFDWjs7Ozs7WUFDSixDQUNOO0NBQ0gsRUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2V0aGVyZXVtX2JvaWxlcnBsYXRlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIFNwYWNlLCBEYXRlUGlja2VyLCBDYXJkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IENpQ2lyY2xlRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBvbkNoYW5nZSA9ICgpID0+IHt9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDEwMCB9fT5cclxuICAgICAgPFNwYWNlIGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPlByaW1hcnkgQnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZ2hvc3RcIj5HaG9zdCBCdXR0b248L0J1dHRvbj5cclxuICAgICAgICA8RGF0ZVBpY2tlciBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgPENpQ2lyY2xlRmlsbGVkIC8+XHJcbiAgICAgIDwvU3BhY2U+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbi8qKlxyXG4gXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcclxuXHJcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIC8vIGdldCBkYXRhIGZyb20gdGhlIGV0aGVyZXVtIGNvbnRyYWN0IGFuZCBzZXQgaXQgYXMgcHJvcHNcclxuIC8vIHRoZSBmdW5jdGlvbiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QgICBcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgLy8gZ2V0IHRoZSBkZXBsb3lkIGNhbXBhaWduIGFycmF5IGZyb20gdGhlIGZhY3RvcnkgY29udHJhY3RcclxuICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENvbnRyYWN0cygpLmNhbGwoKTtcclxuICAgIGNvbnNvbGUubG9nKGNhbXBhaWducyk7XHJcbiAgICAvLyAgcmV0dXJuIHRoZSBkYXRhXHJcbiAgICAgcmV0dXJuIChjYW1wYWlnbnMpO1xyXG4gIH1cclxuXHJcbiBcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+e3RoaXMucHJvcHMuY2FtcGFpbmdzfTwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7XHJcbiovIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiU3BhY2UiLCJEYXRlUGlja2VyIiwiQ2FyZCIsIkNpQ2lyY2xlRmlsbGVkIiwiSG9tZSIsIm9uQ2hhbmdlIiwiZGl2Iiwic3R5bGUiLCJwYWRkaW5nIiwiZGlyZWN0aW9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();