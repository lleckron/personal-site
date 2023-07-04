exports.id = 361;
exports.ids = [361];
exports.modules = {

/***/ 4005:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2288))

/***/ }),

/***/ 2288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(1338);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 192 modules
var motion = __webpack_require__(2314);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/menu-modal.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function MenuModal(props) {
    const { setShowMenuModal } = props;
    const menuItems = [
        {
            id: "home",
            link: "/",
            displayText: "HOME"
        },
        {
            id: "tools",
            link: "/tools",
            displayText: "PORTFOLIO - TOOLS"
        },
        {
            id: "projects",
            link: "/projects",
            displayText: "PORTFOLIO - PROJECTS"
        },
        {
            id: "contact",
            link: "/contact",
            displayText: "CONTACT ME"
        }
    ];
    const menuAnimation = {
        initial: {
            width: 0,
            opacity: 0
        },
        animate: {
            width: "300px",
            opacity: 1
        },
        exit: {
            width: 0,
            opacity: 0
        },
        transition: {
            duration: .2,
            ease: "easeInOut"
        }
    };
    return /*#__PURE__*/ (0,react_.createElement)(motion/* motion */.E.div, {
        ...menuAnimation,
        key: "menu-modal",
        className: "flex justify-center items-start absolute bottom-0 z-10 w-[300px] h-full-minus-nav bg-menu-gray",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                className: "flex justify-center items-center absolute left-[85%] w-10 h-10 mt-[6px] pb-[2px] bg-gray text-white text-2xl text-center font-bold rounded-full hover:cursor-pointer",
                onClick: ()=>setShowMenuModal(false),
                onKeyDown: (event)=>{
                    event.key === "Enter" && setShowMenuModal(false);
                },
                tabIndex: 0,
                children: "X"
            }, "close-div"),
            /*#__PURE__*/ (0,react_.createElement)(motion/* motion */.E.ul, {
                ...menuAnimation,
                key: "menu-ul",
                className: "flex flex-col w-full mt-12",
                tabIndex: -1
            }, menuItems.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: item.link,
                    onClick: ()=>setShowMenuModal(false),
                    onKeyDown: (event)=>{
                        event.key === "Enter" && setShowMenuModal(false);
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "flex justify-center items-center w-full h-14 text-center text-white hover:cursor-pointer hover:bg-hover-gray hover:font-bold",
                        children: item.displayText
                    })
                }, item.id)))
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 5 modules
var AnimatePresence = __webpack_require__(4338);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/ll-logo.png
/* harmony default export */ const ll_logo = ({"src":"/_next/static/media/ll-logo.4fcaced2.png","height":638,"width":696,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAyElEQVR42mMAgaajD7MaTz1rZwCCNasOMDFAwSwlZkaIgrOvlnccvPN/GQNDMQMQrLS3YtmpzcLIAAMtJ58tbj7z8tJyBoYjSw2VcxmgYLYSIzdEwYkny5vPvz23hIFBeLmh8pNFlkZOy9S59i1WYWyHKDj1bHHriSc3GYBgOQND2AoGhu9LuRiKmv1C2RlAoPnk08VtZ1/9Byo803L6+cXWw/dee3/4L8MAA/WH70UDFa1oOfl0KdA9y5pOv1jRuPW8FgMDAwMA5T1Tz6s1T3EAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./app/header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Header(props) {
    const { showMenuModal, setShowMenuModal } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "flex justify-center relative w-full min-w-[300px] h-12 bg-off-white shadow-md z-10",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "flex flex-row justify-between items-center w-3/4 h-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex h-full w-5",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "flex flex-col justify-center items-center relative w-full [&>*:nth-child(2)]:mt-1 [&>*:nth-child(2)]:mb-1",
                        onClick: ()=>setShowMenuModal(!showMenuModal),
                        "aria-label": "Menu",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "bg-black w-full h-[3px] rounded-sm"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "bg-black w-full h-[3px] rounded-sm"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "bg-black w-full h-[3px] rounded-sm"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center items-center h-full w-10",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "w-8 h-8",
                        src: ll_logo,
                        alt: "logo",
                        priority: true
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/client/components/noop-head.js
var noop_head = __webpack_require__(1824);
var noop_head_default = /*#__PURE__*/__webpack_require__.n(noop_head);
;// CONCATENATED MODULE: ./app/headData.tsx



function HeadData() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((noop_head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Luke Leckron - Web Developer"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: "Generated by create next app"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function RootLayout({ children }) {
    const [showMenuModal, setShowMenuModal] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeadData, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                        showMenuModal: showMenuModal,
                        setShowMenuModal: setShowMenuModal
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                        children: showMenuModal && /*#__PURE__*/ jsx_runtime_.jsx(MenuModal, {
                            setShowMenuModal: setShowMenuModal
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/bethleckron/Desktop/Website Templates/personal-site/personal-site/app/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 1338:
/***/ (() => {



/***/ })

};
;