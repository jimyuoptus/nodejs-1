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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Book; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction Book(param) {\n    let { data } = param;\n    _s();\n    const [name, setName] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(data.name);\n    const [genre, setGenre] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(data.genre);\n    const [price, setPrice] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(data.price);\n    const handleNameChange = (event)=>{\n        setName(event.target.value);\n    };\n    const handleGenreChange = (event)=>{\n        setGenre(event.target.value);\n    };\n    const handlePriceChange = (event)=>{\n        setPrice(event.target.value);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const updatedBook = {\n            name,\n            genre,\n            price\n        };\n        const client = (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.createRequest)();\n        try {\n            await client.put(\"books/\".concat(data.id), updatedBook);\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block\",\n                    children: [\n                        \"Name:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: name,\n                            onChange: handleNameChange,\n                            className: \"border border-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block\",\n                    children: [\n                        \"Genre:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: genre,\n                            onChange: handleGenreChange,\n                            className: \"border border-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block\",\n                    children: [\n                        \"Price:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: price,\n                            onChange: handlePriceChange,\n                            className: \"border border-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                    children: \"Update\"\n                }, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                    href: \"/\",\n                    className: \"text-blue-500 hover:underline\",\n                    children: \"Back\"\n                }, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Book, \"fxISEEmXt7pbklpeusALkg9X0yI=\");\n_c = Book;\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lZGl0L1tpZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNzQjs7QUFlakMsU0FBU0UsS0FBSyxLQUE2QjtRQUE3QixFQUFFQyxJQUFJLEVBQXVCLEdBQTdCOztJQUMzQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wscURBQWMsQ0FBQ0csS0FBS0MsSUFBSTtJQUNoRCxNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR1IscURBQWMsQ0FBQ0csS0FBS0ksS0FBSztJQUNuRCxNQUFNLENBQUNFLE9BQU9DLFNBQVMsR0FBR1YscURBQWMsQ0FBQ0csS0FBS00sS0FBSztJQUVuRCxNQUFNRSxtQkFBbUIsQ0FBQ0M7UUFDeEJQLFFBQVFPLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUM1QjtJQUVBLE1BQU1DLG9CQUFvQixDQUFDSDtRQUN6QkosU0FBU0ksTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzdCO0lBRUEsTUFBTUUsb0JBQW9CLENBQUNKO1FBQ3pCRixTQUFTRSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxNQUFNRyxlQUFlLE9BQU9MO1FBQzFCQSxNQUFNTSxjQUFjO1FBQ3BCLE1BQU1DLGNBQWM7WUFDbEJmO1lBQ0FHO1lBQ0FFO1FBQ0Y7UUFFQSxNQUFNVyxTQUFTbkIseURBQWFBO1FBQzVCLElBQUk7WUFDRixNQUFNbUIsT0FBT0MsR0FBRyxDQUFDLFNBQWlCLE9BQVJsQixLQUFLbUIsRUFBRSxHQUFJSDtRQUN2QyxFQUFFLE9BQU9JLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDLFVBQVVGO1FBQ3hCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7a0JBQ0MsNEVBQUNDO1lBQUtDLFVBQVVYOzs4QkFDZCw4REFBQ1k7b0JBQU1DLFdBQVU7O3dCQUFRO3NDQUV2Qiw4REFBQ0M7NEJBQ0NDLE1BQUs7NEJBQ0xsQixPQUFPVjs0QkFDUDZCLFVBQVV0Qjs0QkFDVm1CLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ0k7Ozs7OzhCQUNELDhEQUFDTDtvQkFBTUMsV0FBVTs7d0JBQVE7c0NBRXZCLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTGxCLE9BQU9QOzRCQUNQMEIsVUFBVWxCOzRCQUNWZSxXQUFVOzs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNJOzs7Ozs4QkFDRCw4REFBQ0w7b0JBQU1DLFdBQVU7O3dCQUFRO3NDQUV2Qiw4REFBQ0M7NEJBQ0NDLE1BQUs7NEJBQ0xsQixPQUFPTDs0QkFDUHdCLFVBQVVqQjs0QkFDVmMsV0FBVTs7Ozs7Ozs7Ozs7OzhCQUdkLDhEQUFDSTs7Ozs7OEJBQ0QsOERBQUNDO29CQUNDSCxNQUFLO29CQUNMRixXQUFVOzhCQUNYOzs7Ozs7OEJBR0QsOERBQUNJOzs7Ozs4QkFDRCw4REFBQ0U7b0JBQUtDLE1BQUs7b0JBQUlQLFdBQVU7OEJBQWdDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRTtHQS9Fd0I1QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9lZGl0L1tpZF0udHN4Pzc4N2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdCB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIjtcbmltcG9ydCB7IEJvb2tBdHRycyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2Jvb2tcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzPHtcbiAgZGF0YTogQm9va0F0dHJzO1xufT4gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBwYXJhbXM7XG5cbiAgY29uc3QgY2xpZW50ID0gY3JlYXRlUmVxdWVzdCgpO1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoYGJvb2tzLyR7aWR9YCk7XG4gIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9vayh7IGRhdGEgfTogeyBkYXRhOiBCb29rQXR0cnMgfSkge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSBSZWFjdC51c2VTdGF0ZShkYXRhLm5hbWUpO1xuICBjb25zdCBbZ2VucmUsIHNldEdlbnJlXSA9IFJlYWN0LnVzZVN0YXRlKGRhdGEuZ2VucmUpO1xuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IFJlYWN0LnVzZVN0YXRlKGRhdGEucHJpY2UpO1xuXG4gIGNvbnN0IGhhbmRsZU5hbWVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUdlbnJlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldEdlbnJlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJpY2VDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0UHJpY2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1cGRhdGVkQm9vayA9IHtcbiAgICAgIG5hbWUsXG4gICAgICBnZW5yZSxcbiAgICAgIHByaWNlLFxuICAgIH07XG5cbiAgICBjb25zdCBjbGllbnQgPSBjcmVhdGVSZXF1ZXN0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNsaWVudC5wdXQoYGJvb2tzLyR7ZGF0YS5pZH1gLCB1cGRhdGVkQm9vayk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOYW1lQ2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ibGFja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgIEdlbnJlOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e2dlbnJlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUdlbnJlQ2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ibGFja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgIFByaWNlOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVByaWNlQ2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ibGFja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIFVwZGF0ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJyIC8+IFxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgQmFja1xuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSZXF1ZXN0IiwiQm9vayIsImRhdGEiLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwiZ2VucmUiLCJzZXRHZW5yZSIsInByaWNlIiwic2V0UHJpY2UiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUdlbnJlQ2hhbmdlIiwiaGFuZGxlUHJpY2VDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZWRCb29rIiwiY2xpZW50IiwicHV0IiwiaWQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiYnIiLCJidXR0b24iLCJMaW5rIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/edit/[id].tsx\n"));

/***/ })

});