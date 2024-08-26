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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Book; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction Book(param) {\n    let { data } = param;\n    _s();\n    const [name, setName] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(data.name);\n    const [genre, setGenre] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(data.genre);\n    const [price, setPrice] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(data.price);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const redirectToHome = ()=>{\n        router.push(\"/\");\n    };\n    const handleNameChange = (event)=>{\n        setName(event.target.value);\n    };\n    const handleGenreChange = (event)=>{\n        setGenre(event.target.value);\n    };\n    const handlePriceChange = (event)=>{\n        // const priceValue = parseFloat(event.target.value);\n        setPrice(event.target.value);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const updatedBook = {\n            name,\n            genre,\n            price\n        };\n        const client = (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.createRequest)();\n        try {\n            await client.put(\"books/\".concat(data.id), updatedBook);\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block\",\n                    children: [\n                        \"Name:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: name,\n                            onChange: handleNameChange,\n                            className: \"border border-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block\",\n                    children: [\n                        \"Genre:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: genre,\n                            onChange: handleGenreChange,\n                            className: \"border border-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block\",\n                    children: [\n                        \"Price:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: price,\n                            onChange: handlePriceChange,\n                            className: \"border border-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                    children: \"Update\"\n                }, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    onClick: redirectToHome,\n                    className: \"text-blue-500 hover:underline\",\n                    children: \"Back\"\n                }, void 0, false, {\n                    fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jimyu/Exec/node.js/mongodb_crud/clients/pages/edit/[id].tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Book, \"mHlgI4VgTCCtRBxbVEKJSb/0TNk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Book;\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lZGl0L1tpZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDc0I7QUFJbkI7QUFDVzs7QUFZekIsU0FBU0ksS0FBSyxLQUE2QjtRQUE3QixFQUFFQyxJQUFJLEVBQXVCLEdBQTdCOztJQUMzQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AscURBQWMsQ0FBQ0ssS0FBS0MsSUFBSTtJQUNoRCxNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR1YscURBQWMsQ0FBQ0ssS0FBS0ksS0FBSztJQUNuRCxNQUFNLENBQUNFLE9BQU9DLFNBQVMsR0FBR1oscURBQWMsQ0FBQ0ssS0FBS00sS0FBSztJQUVuRCxNQUFNRSxTQUFTVixzREFBU0E7SUFFeEIsTUFBTVcsaUJBQWlCO1FBQ3JCRCxPQUFPRSxJQUFJLENBQUM7SUFDZDtJQUVBLE1BQU1DLG1CQUFtQixDQUFDQztRQUN4QlYsUUFBUVUsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzVCO0lBRUEsTUFBTUMsb0JBQW9CLENBQUNIO1FBQ3pCUCxTQUFTTyxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxNQUFNRSxvQkFBb0IsQ0FBQ0o7UUFDekIscURBQXFEO1FBQ3JETCxTQUFTSyxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxNQUFNRyxlQUFlLE9BQU9MO1FBQzFCQSxNQUFNTSxjQUFjO1FBQ3BCLE1BQU1DLGNBQWM7WUFDbEJsQjtZQUNBRztZQUNBRTtRQUNGO1FBRUEsTUFBTWMsU0FBU3hCLHlEQUFhQTtRQUM1QixJQUFJO1lBQ0YsTUFBTXdCLE9BQU9DLEdBQUcsQ0FBQyxTQUFpQixPQUFSckIsS0FBS3NCLEVBQUUsR0FBSUg7UUFDdkMsRUFBRSxPQUFPSSxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQyxVQUFVRjtRQUN4QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO2tCQUNDLDRFQUFDQztZQUFLQyxVQUFVWDs7OEJBQ2QsOERBQUNZO29CQUFNQyxXQUFVOzt3QkFBUTtzQ0FFdkIsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMbEIsT0FBT2I7NEJBQ1BnQyxVQUFVdEI7NEJBQ1ZtQixXQUFVOzs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNJOzs7Ozs4QkFDRCw4REFBQ0w7b0JBQU1DLFdBQVU7O3dCQUFRO3NDQUV2Qiw4REFBQ0M7NEJBQ0NDLE1BQUs7NEJBQ0xsQixPQUFPVjs0QkFDUDZCLFVBQVVsQjs0QkFDVmUsV0FBVTs7Ozs7Ozs7Ozs7OzhCQUdkLDhEQUFDSTs7Ozs7OEJBQ0QsOERBQUNMO29CQUFNQyxXQUFVOzt3QkFBUTtzQ0FFdkIsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMbEIsT0FBT1I7NEJBQ1AyQixVQUFVakI7NEJBQ1ZjLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ0k7Ozs7OzhCQUNELDhEQUFDQztvQkFDQ0gsTUFBSztvQkFDTEYsV0FBVTs4QkFDWDs7Ozs7OzhCQUdELDhEQUFDSTs7Ozs7OEJBQ0QsOERBQUNyQyxrREFBSUE7b0JBQUN1QyxTQUFTM0I7b0JBQWdCcUIsV0FBVTs4QkFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpGO0dBdEZ3Qi9COztRQUtQRCxrREFBU0E7OztLQUxGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9lZGl0L1tpZF0udHN4Pzc4N2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdCB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIjtcbmltcG9ydCB7IEJvb2tBdHRycyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2Jvb2tcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHM8e1xuICBkYXRhOiBCb29rQXR0cnM7XG59PiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcblxuICBjb25zdCBjbGllbnQgPSBjcmVhdGVSZXF1ZXN0KCk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldChgYm9va3MvJHtpZH1gKTtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29rKHsgZGF0YSB9OiB7IGRhdGE6IEJvb2tBdHRycyB9KSB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IFJlYWN0LnVzZVN0YXRlKGRhdGEubmFtZSk7XG4gIGNvbnN0IFtnZW5yZSwgc2V0R2VucmVdID0gUmVhY3QudXNlU3RhdGUoZGF0YS5nZW5yZSk7XG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gUmVhY3QudXNlU3RhdGUoZGF0YS5wcmljZSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgcmVkaXJlY3RUb0hvbWUgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5hbWVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUdlbnJlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldEdlbnJlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJpY2VDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgLy8gY29uc3QgcHJpY2VWYWx1ZSA9IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQcmljZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVwZGF0ZWRCb29rID0ge1xuICAgICAgbmFtZSxcbiAgICAgIGdlbnJlLFxuICAgICAgcHJpY2UsXG4gICAgfTtcblxuICAgIGNvbnN0IGNsaWVudCA9IGNyZWF0ZVJlcXVlc3QoKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY2xpZW50LnB1dChgYm9va3MvJHtkYXRhLmlkfWAsIHVwZGF0ZWRCb29rKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgTmFtZTpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU5hbWVDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsYWNrXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgR2VucmU6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17Z2VucmV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlR2VucmVDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsYWNrXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgUHJpY2U6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUHJpY2VDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsYWNrXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIlxuICAgICAgICA+XG4gICAgICAgICAgVXBkYXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnIgLz4gXG4gICAgICAgIDxMaW5rIG9uQ2xpY2s9e3JlZGlyZWN0VG9Ib21lfSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgIEJhY2tcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUmVxdWVzdCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJCb29rIiwiZGF0YSIsIm5hbWUiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJnZW5yZSIsInNldEdlbnJlIiwicHJpY2UiLCJzZXRQcmljZSIsInJvdXRlciIsInJlZGlyZWN0VG9Ib21lIiwicHVzaCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlR2VucmVDaGFuZ2UiLCJoYW5kbGVQcmljZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlZEJvb2siLCJjbGllbnQiLCJwdXQiLCJpZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/edit/[id].tsx\n"));

/***/ })

});