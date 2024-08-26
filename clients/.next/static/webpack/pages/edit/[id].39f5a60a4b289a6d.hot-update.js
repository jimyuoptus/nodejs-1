"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/edit/[id]",{

/***/ "./pages/edit/[id].tsx":
/*!*****************************!*\
  !*** ./pages/edit/[id].tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Book; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction Book(param) {\n    let { data } = param;\n    _s();\n    const [name, setName] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(data.name);\n    const [genre, setGenre] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(data.genre);\n    const [price, setPrice] = (react__WEBPACK_IMPORTED_MODULE_1___default().useState) > data.price;\n    const handleNameChange = (event)=>{\n        setName(event.target.value);\n    };\n    const handleGenreChange = (event)=>{\n        setGenre(event.target.value);\n    };\n    const handlePriceChange = (event)=>{\n        setPrice(parseFloat(event.target.value));\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const updatedBook = {\n            name,\n            genre,\n            price\n        };\n        const client = (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.createRequest)();\n        try {\n            await client.put(\"books/\".concat(data.id), updatedBook);\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block\",\n                    children: [\n                        \"Name:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: name,\n                            onChange: handleNameChange,\n                            className: \"border border-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block\",\n                    children: [\n                        \"Genre:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: genre,\n                            onChange: handleGenreChange,\n                            className: \"border border-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block\",\n                    children: [\n                        \"Price:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: price,\n                            onChange: handlePriceChange,\n                            className: \"border border-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                    children: \"Update\"\n                }, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Book, \"Gw/7b2haHtgmUMiVa7eODa5jnts=\");\n_c = Book;\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lZGl0L1tpZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNzQjs7QUFlakMsU0FBU0UsS0FBSyxLQUE2QjtRQUE3QixFQUFFQyxJQUFJLEVBQXVCLEdBQTdCOztJQUMzQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wscURBQWMsQ0FBQ0csS0FBS0MsSUFBSTtJQUNoRCxNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR1IscURBQWMsQ0FBQ0csS0FBS0ksS0FBSztJQUNuRCxNQUFNLENBQUNFLE9BQU9DLFNBQVMsR0FBR1YsdURBQWMsR0FBRUcsS0FBS00sS0FBSztJQUVwRCxNQUFNRSxtQkFBbUIsQ0FBQ0M7UUFDeEJQLFFBQVFPLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUM1QjtJQUVBLE1BQU1DLG9CQUFvQixDQUFDSDtRQUN6QkosU0FBU0ksTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzdCO0lBRUEsTUFBTUUsb0JBQW9CLENBQUNKO1FBQ3pCRixTQUFTTyxXQUFXTCxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDeEM7SUFFQSxNQUFNSSxlQUFlLE9BQU9OO1FBQzFCQSxNQUFNTyxjQUFjO1FBQ3BCLE1BQU1DLGNBQWM7WUFDbEJoQjtZQUNBRztZQUNBRTtRQUNGO1FBRUEsTUFBTVksU0FBU3BCLHlEQUFhQTtRQUM1QixJQUFJO1lBQ0YsTUFBTW9CLE9BQU9DLEdBQUcsQ0FBQyxTQUFpQixPQUFSbkIsS0FBS29CLEVBQUUsR0FBSUg7UUFDdkMsRUFBRSxPQUFPSSxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQyxVQUFVRjtRQUN4QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO2tCQUNDLDRFQUFDQztZQUFLQyxVQUFVWDs7OEJBQ2QsOERBQUNZO29CQUFNQyxXQUFVOzt3QkFBUTtzQ0FFdkIsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMbkIsT0FBT1Y7NEJBQ1A4QixVQUFVdkI7NEJBQ1ZvQixXQUFVOzs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNJOzs7Ozs4QkFDRCw4REFBQ0w7b0JBQU1DLFdBQVU7O3dCQUFRO3NDQUV2Qiw4REFBQ0M7NEJBQ0NDLE1BQUs7NEJBQ0xuQixPQUFPUDs0QkFDUDJCLFVBQVVuQjs0QkFDVmdCLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ0k7Ozs7OzhCQUNELDhEQUFDTDtvQkFBTUMsV0FBVTs7d0JBQVE7c0NBRXZCLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTG5CLE9BQU9MOzRCQUNQeUIsVUFBVWxCOzRCQUNWZSxXQUFVOzs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNJOzs7Ozs4QkFDRCw4REFBQ0M7b0JBQ0NILE1BQUs7b0JBQ0xGLFdBQVU7OEJBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0EzRXdCN0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdC9baWRdLnRzeD83ODdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCI7XG5pbXBvcnQgeyBCb29rQXR0cnMgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9ib29rXCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wczx7IGRhdGE6IEJvb2tBdHRycyB9PiA9IGFzeW5jICh7XG4gIHBhcmFtcyxcbn0pID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xuXG4gIGNvbnN0IGNsaWVudCA9IGNyZWF0ZVJlcXVlc3QoKTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KGBib29rcy8ke2lkfWApO1xuICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2soeyBkYXRhIH06IHsgZGF0YTogQm9va0F0dHJzIH0pIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gUmVhY3QudXNlU3RhdGUoZGF0YS5uYW1lKTtcbiAgY29uc3QgW2dlbnJlLCBzZXRHZW5yZV0gPSBSZWFjdC51c2VTdGF0ZShkYXRhLmdlbnJlKTtcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSBSZWFjdC51c2VTdGF0ZT4oZGF0YS5wcmljZSk7XG5cbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlR2VucmVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0R2VucmUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmljZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRQcmljZShwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVwZGF0ZWRCb29rID0ge1xuICAgICAgbmFtZSxcbiAgICAgIGdlbnJlLFxuICAgICAgcHJpY2UsXG4gICAgfTtcblxuICAgIGNvbnN0IGNsaWVudCA9IGNyZWF0ZVJlcXVlc3QoKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY2xpZW50LnB1dChgYm9va3MvJHtkYXRhLmlkfWAsIHVwZGF0ZWRCb29rKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgTmFtZTpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU5hbWVDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsYWNrXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgR2VucmU6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17Z2VucmV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlR2VucmVDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsYWNrXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgUHJpY2U6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUHJpY2VDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsYWNrXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIlxuICAgICAgICA+XG4gICAgICAgICAgVXBkYXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUmVxdWVzdCIsIkJvb2siLCJkYXRhIiwibmFtZSIsInNldE5hbWUiLCJ1c2VTdGF0ZSIsImdlbnJlIiwic2V0R2VucmUiLCJwcmljZSIsInNldFByaWNlIiwiaGFuZGxlTmFtZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVHZW5yZUNoYW5nZSIsImhhbmRsZVByaWNlQ2hhbmdlIiwicGFyc2VGbG9hdCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlZEJvb2siLCJjbGllbnQiLCJwdXQiLCJpZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJiciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/edit/[id].tsx\n"));

/***/ })

});