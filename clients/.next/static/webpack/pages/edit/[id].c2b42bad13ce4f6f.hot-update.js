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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Book; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSP = true;\nfunction Book(param) {\n    let { data } = param;\n    _s();\n    const [name, setName] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(data.name);\n    const [genre, setGenre] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(data.genre);\n    const [price, setPrice] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(data.price);\n    const handleNameChange = (event)=>{\n        setName(event.target.value);\n    };\n    const handleGenreChange = (event)=>{\n        setGenre(event.target.value);\n    };\n    const handlePriceChange = (event)=>{\n        // const priceValue = parseFloat(event.target.value);\n        setPrice(event.target.value);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const updatedBook = {\n            name,\n            genre,\n            price\n        };\n        const client = (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.createRequest)();\n        try {\n            await client.put(\"books/\".concat(data.id), updatedBook);\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block\",\n                    children: [\n                        \"Name:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: name,\n                            onChange: handleNameChange,\n                            className: \"border border-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block\",\n                    children: [\n                        \"Genre:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: genre,\n                            onChange: handleGenreChange,\n                            className: \"border border-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block\",\n                    children: [\n                        \"Price:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: price,\n                            onChange: handlePriceChange,\n                            className: \"border border-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                    children: \"Update\"\n                }, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    className: \"text-blue-500 hover:underline\",\n                    children: \"Back\"\n                }, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(Book, \"fxISEEmXt7pbklpeusALkg9X0yI=\");\n_c = Book;\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lZGl0L1tpZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3NCO0FBSW5COztBQWFkLFNBQVNHLEtBQUssS0FBNkI7UUFBN0IsRUFBRUMsSUFBSSxFQUF1QixHQUE3Qjs7SUFDM0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLHFEQUFjLENBQUNJLEtBQUtDLElBQUk7SUFDaEQsTUFBTSxDQUFDRyxPQUFPQyxTQUFTLEdBQUdULHFEQUFjLENBQUNJLEtBQUtJLEtBQUs7SUFDbkQsTUFBTSxDQUFDRSxPQUFPQyxTQUFTLEdBQUdYLHFEQUFjLENBQUNJLEtBQUtNLEtBQUs7SUFJbkQsTUFBTUUsbUJBQW1CLENBQUNDO1FBQ3hCUCxRQUFRTyxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDNUI7SUFFQSxNQUFNQyxvQkFBb0IsQ0FBQ0g7UUFDekJKLFNBQVNJLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QjtJQUVBLE1BQU1FLG9CQUFvQixDQUFDSjtRQUN6QixxREFBcUQ7UUFDckRGLFNBQVNFLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QjtJQUVBLE1BQU1HLGVBQWUsT0FBT0w7UUFDMUJBLE1BQU1NLGNBQWM7UUFDcEIsTUFBTUMsY0FBYztZQUNsQmY7WUFDQUc7WUFDQUU7UUFDRjtRQUVBLE1BQU1XLFNBQVNwQix5REFBYUE7UUFDNUIsSUFBSTtZQUNGLE1BQU1vQixPQUFPQyxHQUFHLENBQUMsU0FBaUIsT0FBUmxCLEtBQUttQixFQUFFLEdBQUlIO1FBQ3ZDLEVBQUUsT0FBT0ksT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUMsVUFBVUY7UUFDeEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRztrQkFDQyw0RUFBQ0M7WUFBS0MsVUFBVVg7OzhCQUNkLDhEQUFDWTtvQkFBTUMsV0FBVTs7d0JBQVE7c0NBRXZCLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTGxCLE9BQU9WOzRCQUNQNkIsVUFBVXRCOzRCQUNWbUIsV0FBVTs7Ozs7Ozs7Ozs7OzhCQUdkLDhEQUFDSTs7Ozs7OEJBQ0QsOERBQUNMO29CQUFNQyxXQUFVOzt3QkFBUTtzQ0FFdkIsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMbEIsT0FBT1A7NEJBQ1AwQixVQUFVbEI7NEJBQ1ZlLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ0k7Ozs7OzhCQUNELDhEQUFDTDtvQkFBTUMsV0FBVTs7d0JBQVE7c0NBRXZCLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTGxCLE9BQU9MOzRCQUNQd0IsVUFBVWpCOzRCQUNWYyxXQUFVOzs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNJOzs7Ozs4QkFDRCw4REFBQ0M7b0JBQ0NILE1BQUs7b0JBQ0xGLFdBQVU7OEJBQ1g7Ozs7Ozs4QkFHRCw4REFBQ0k7Ozs7OzhCQUNELDhEQUFDakMsa0RBQUlBO29CQUFDbUMsTUFBSztvQkFBSU4sV0FBVTs4QkFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpFO0dBbEZ3QjVCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2VkaXQvW2lkXS50c3g/Nzg3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2FwaVwiO1xuaW1wb3J0IHsgQm9va0F0dHJzIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvYm9va1wiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wczx7XG4gIGRhdGE6IEJvb2tBdHRycztcbn0+ID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xuXG4gIGNvbnN0IGNsaWVudCA9IGNyZWF0ZVJlcXVlc3QoKTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KGBib29rcy8ke2lkfWApO1xuICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2soeyBkYXRhIH06IHsgZGF0YTogQm9va0F0dHJzIH0pIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gUmVhY3QudXNlU3RhdGUoZGF0YS5uYW1lKTtcbiAgY29uc3QgW2dlbnJlLCBzZXRHZW5yZV0gPSBSZWFjdC51c2VTdGF0ZShkYXRhLmdlbnJlKTtcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSBSZWFjdC51c2VTdGF0ZShkYXRhLnByaWNlKTtcblxuICBcblxuICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVHZW5yZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRHZW5yZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByaWNlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIC8vIGNvbnN0IHByaWNlVmFsdWUgPSBwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0UHJpY2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1cGRhdGVkQm9vayA9IHtcbiAgICAgIG5hbWUsXG4gICAgICBnZW5yZSxcbiAgICAgIHByaWNlLFxuICAgIH07XG5cbiAgICBjb25zdCBjbGllbnQgPSBjcmVhdGVSZXF1ZXN0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNsaWVudC5wdXQoYGJvb2tzLyR7ZGF0YS5pZH1gLCB1cGRhdGVkQm9vayk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOYW1lQ2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ibGFja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgIEdlbnJlOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e2dlbnJlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUdlbnJlQ2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ibGFja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgIFByaWNlOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVByaWNlQ2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ibGFja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIFVwZGF0ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJyIC8+IFxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgQmFja1xuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSZXF1ZXN0IiwiTGluayIsIkJvb2siLCJkYXRhIiwibmFtZSIsInNldE5hbWUiLCJ1c2VTdGF0ZSIsImdlbnJlIiwic2V0R2VucmUiLCJwcmljZSIsInNldFByaWNlIiwiaGFuZGxlTmFtZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVHZW5yZUNoYW5nZSIsImhhbmRsZVByaWNlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVkQm9vayIsImNsaWVudCIsInB1dCIsImlkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJyIiwiYnV0dG9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/edit/[id].tsx\n"));

/***/ })

});