/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/simple-notify/dist/simple-notify.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/simple-notify/dist/simple-notify.es.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Notify)\n/* harmony export */ });\nvar fadeIn = function (self) {\r\n    self.wrapper.classList.add('notify--fade');\r\n    setTimeout(function () {\r\n        self.wrapper.classList.add('notify--fadeIn');\r\n    }, 100);\r\n};\r\nvar fadeOut = function (self) {\r\n    self.wrapper.classList.remove('notify--fadeIn');\r\n    setTimeout(function () {\r\n        self.wrapper.remove();\r\n    }, self.speed);\r\n};\r\nvar slideIn = function (self) {\r\n    self.wrapper.classList.add('notify--slide');\r\n    setTimeout(function () {\r\n        self.wrapper.classList.add('notify--slideIn');\r\n    }, 100);\r\n};\r\nvar slideOut = function (self) {\r\n    self.wrapper.classList.remove('notify--slideIn');\r\n    setTimeout(function () {\r\n        self.wrapper.remove();\r\n    }, self.speed);\r\n};\n\nvar stringToHTML = function (strHTML) {\r\n    var parser = new DOMParser(), content = 'text/html', DOM = parser.parseFromString(strHTML, content);\r\n    return DOM.body.childNodes[0];\r\n};\n\nvar Notify = /** @class */ (function () {\r\n    function Notify(args) {\r\n        var _this = this;\r\n        this.notifyOut = function (callback) {\r\n            callback(_this);\r\n        };\r\n        var status = args.status, _a = args.type, type = _a === void 0 ? 1 : _a, title = args.title, text = args.text, _b = args.showIcon, showIcon = _b === void 0 ? true : _b, _c = args.customIcon, customIcon = _c === void 0 ? '' : _c, _d = args.customClass, customClass = _d === void 0 ? '' : _d, _e = args.speed, speed = _e === void 0 ? 500 : _e, _f = args.effect, effect = _f === void 0 ? 'fade' : _f, _g = args.showCloseButton, showCloseButton = _g === void 0 ? true : _g, _h = args.autoclose, autoclose = _h === void 0 ? false : _h, _j = args.autotimeout, autotimeout = _j === void 0 ? 3000 : _j, _k = args.gap, gap = _k === void 0 ? 20 : _k, _l = args.distance, distance = _l === void 0 ? 20 : _l, _m = args.position, position = _m === void 0 ? 'right top' : _m, _o = args.customWrapper, customWrapper = _o === void 0 ? '' : _o;\r\n        this.customWrapper = customWrapper;\r\n        this.status = status;\r\n        this.title = title;\r\n        this.text = text;\r\n        this.showIcon = showIcon;\r\n        this.customIcon = customIcon;\r\n        this.customClass = customClass;\r\n        this.speed = speed;\r\n        this.effect = effect;\r\n        this.showCloseButton = showCloseButton;\r\n        this.autoclose = autoclose;\r\n        this.autotimeout = autotimeout;\r\n        this.gap = gap;\r\n        this.distance = distance;\r\n        this.type = type;\r\n        this.position = position;\r\n        if (!this.checkRequirements()) {\r\n            console.error(\"You must specify 'title' or 'text' at least.\");\r\n            return;\r\n        }\r\n        // set outer container for all Notify's\r\n        this.setContainer();\r\n        // set wrapper for each Notify\r\n        this.setWrapper();\r\n        this.setPosition();\r\n        // set icon in the left\r\n        if (this.showIcon)\r\n            this.setIcon();\r\n        // set close button\r\n        if (this.showCloseButton)\r\n            this.setCloseButton();\r\n        // set title, text\r\n        this.setContent();\r\n        // add the Notify to our container\r\n        this.container.prepend(this.wrapper);\r\n        // init effect\r\n        this.setEffect();\r\n        this.notifyIn(this.selectedNotifyInEffect);\r\n        // init autoclose\r\n        if (this.autoclose)\r\n            this.autoClose();\r\n        // check whether Notify is visible\r\n        this.setObserver();\r\n    }\r\n    Notify.prototype.checkRequirements = function () {\r\n        return !!(this.title || this.text);\r\n    };\r\n    Notify.prototype.setContainer = function () {\r\n        var container = document.querySelector('.notifications-container');\r\n        if (container) {\r\n            this.container = container;\r\n        }\r\n        else {\r\n            this.container = document.createElement('div');\r\n            this.container.classList.add('notifications-container');\r\n            document.body.appendChild(this.container);\r\n        }\r\n        this.container.style.setProperty('--distance', this.distance + \"px\");\r\n    };\r\n    Notify.prototype.setPosition = function () {\r\n        var prefix = 'notify-is-';\r\n        this.position === 'center' ? this.container.classList.add(prefix + \"center\") : this.container.classList.remove(prefix + \"center\");\r\n        this.position.includes('left') ? this.container.classList.add(prefix + \"left\") : this.container.classList.remove(prefix + \"left\");\r\n        this.position.includes('right') ? this.container.classList.add(prefix + \"right\") : this.container.classList.remove(prefix + \"right\");\r\n        this.position.includes('x-center') ? this.container.classList.add(prefix + \"x-center\") : this.container.classList.remove(prefix + \"x-center\");\r\n        this.position.includes('top') ? this.container.classList.add(prefix + \"top\") : this.container.classList.remove(prefix + \"top\");\r\n        this.position.includes('bottom') ? this.container.classList.add(prefix + \"bottom\") : this.container.classList.remove(prefix + \"bottom\");\r\n        this.position.includes('y-center') ? this.container.classList.add(prefix + \"y-center\") : this.container.classList.remove(prefix + \"y-center\");\r\n    };\r\n    Notify.prototype.setCloseButton = function () {\r\n        var _this = this;\r\n        var icon_close = '<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m8.94 8 4.2-4.193a.67.67 0 0 0-.947-.947L8 7.06l-4.193-4.2a.67.67 0 1 0-.947.947L7.06 8l-4.2 4.193a.667.667 0 0 0 .217 1.093.666.666 0 0 0 .73-.146L8 8.94l4.193 4.2a.665.665 0 0 0 .947 0 .665.665 0 0 0 0-.947L8.94 8Z\" fill=\"currentColor\"/></svg>';\r\n        var closeWrapper = document.createElement('div');\r\n        closeWrapper.classList.add('notify__close');\r\n        closeWrapper.innerHTML = icon_close;\r\n        this.wrapper.appendChild(closeWrapper);\r\n        closeWrapper.addEventListener('click', function () {\r\n            _this.close();\r\n        });\r\n    };\r\n    Notify.prototype.setWrapper = function () {\r\n        if (this.customWrapper) {\r\n            this.wrapper = stringToHTML(this.customWrapper);\r\n        }\r\n        else {\r\n            this.wrapper = document.createElement('div');\r\n        }\r\n        this.wrapper.style.setProperty('--gap', this.gap + \"px\");\r\n        this.wrapper.style.transitionDuration = this.speed + \"ms\";\r\n        // set classes\r\n        this.wrapper.classList.add('notify');\r\n        this.wrapper.classList.add(\"notify--type-\" + this.type);\r\n        this.wrapper.classList.add(\"notify--\" + this.status);\r\n        if (this.autoclose)\r\n            this.wrapper.style.setProperty('--timeout', \"\" + (this.autotimeout + this.speed));\r\n        if (this.autoclose)\r\n            this.wrapper.classList.add(\"notify-autoclose\");\r\n        if (this.customClass)\r\n            this.wrapper.classList.add(this.customClass);\r\n    };\r\n    Notify.prototype.setContent = function () {\r\n        var contentWrapper = document.createElement('div');\r\n        contentWrapper.classList.add('notify-content');\r\n        var titleElement, textElement;\r\n        if (this.title) {\r\n            titleElement = document.createElement('div');\r\n            titleElement.classList.add('notify__title');\r\n            titleElement.textContent = this.title;\r\n            if (!this.showCloseButton)\r\n                titleElement.style.paddingRight = '0';\r\n        }\r\n        if (this.text) {\r\n            textElement = document.createElement('div');\r\n            textElement.classList.add('notify__text');\r\n            textElement.innerHTML = this.text.trim();\r\n            if (!this.title)\r\n                textElement.style.marginTop = '0';\r\n        }\r\n        this.wrapper.appendChild(contentWrapper);\r\n        if (this.title)\r\n            contentWrapper.appendChild(titleElement);\r\n        if (this.text)\r\n            contentWrapper.appendChild(textElement);\r\n    };\r\n    Notify.prototype.setIcon = function () {\r\n        var icon_success = '<svg height=\"32\" width=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" d=\"m19.627 11.72-5.72 5.733-2.2-2.2a1.335 1.335 0 0 0-2.255.381 1.334 1.334 0 0 0 .375 1.5l3.133 3.146a1.333 1.333 0 0 0 1.88 0l6.667-6.667a1.334 1.334 0 1 0-1.88-1.893ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z\"/></svg>';\r\n        var icon_error = '<svg height=\"32\" width=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" d=\"M16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24A10.667 10.667 0 0 1 5.333 16a10.56 10.56 0 0 1 2.254-6.533l14.946 14.946A10.56 10.56 0 0 1 16 26.667Zm8.413-4.134L9.467 7.587A10.56 10.56 0 0 1 16 5.333 10.667 10.667 0 0 1 26.667 16a10.56 10.56 0 0 1-2.254 6.533Z\"/></svg>';\r\n        var icon_warning = '<svg height=\"32\" width=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" d=\"M13.666 15A1.333 1.333 0 0 0 15 13.667V8.334a1.333 1.333 0 0 0-2.665 0v5.333A1.333 1.333 0 0 0 13.666 15Zm-.507 5.227c.325.134.69.134 1.014 0 .164-.064.314-.159.44-.28a1.56 1.56 0 0 0 .28-.44c.075-.158.111-.332.106-.507a1.333 1.333 0 0 0-.386-.946 1.53 1.53 0 0 0-.44-.28A1.333 1.333 0 0 0 12.334 19a1.4 1.4 0 0 0 .386.947c.127.121.277.216.44.28ZM13.666 27a13.333 13.333 0 1 0 0-26.667 13.333 13.333 0 0 0 0 26.667Zm0-24a10.667 10.667 0 1 1 0 21.333 10.667 10.667 0 0 1 0-21.333Z\"/></svg>';\r\n        var icon_info = '<svg height=\"32\" width=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" d=\"M16 14.667A1.333 1.333 0 0 0 14.667 16v5.333a1.333 1.333 0 1 0 2.666 0V16A1.333 1.333 0 0 0 16 14.667Zm.507-5.227a1.333 1.333 0 0 0-1.014 0 1.334 1.334 0 0 0-.44.28c-.117.13-.212.278-.28.44a1.12 1.12 0 0 0-.106.507 1.333 1.333 0 0 0 .386.946c.13.118.279.213.44.28a1.333 1.333 0 0 0 1.84-1.226 1.4 1.4 0 0 0-.386-.947 1.334 1.334 0 0 0-.44-.28ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z\"/></svg>';\r\n        var computedIcon = function (status) {\r\n            switch (status) {\r\n                case 'success':\r\n                    return icon_success;\r\n                case 'warning':\r\n                    return icon_warning;\r\n                case 'error':\r\n                    return icon_error;\r\n                case 'info':\r\n                    return icon_info;\r\n            }\r\n        };\r\n        var iconWrapper = document.createElement('div');\r\n        iconWrapper.classList.add('notify__icon');\r\n        iconWrapper.innerHTML = this.customIcon || computedIcon(this.status);\r\n        if (this.status || this.customIcon)\r\n            this.wrapper.appendChild(iconWrapper);\r\n    };\r\n    Notify.prototype.setObserver = function () {\r\n        var _this = this;\r\n        var observer = new IntersectionObserver(function (entries) {\r\n            if (!(entries[0].intersectionRatio <= 0)) {\r\n                return;\r\n            }\r\n            else {\r\n                _this.close();\r\n            }\r\n        }, {\r\n            threshold: 0\r\n        });\r\n        setTimeout(function () {\r\n            observer.observe(_this.wrapper);\r\n        }, this.speed);\r\n    };\r\n    Notify.prototype.notifyIn = function (callback) {\r\n        callback(this);\r\n    };\r\n    Notify.prototype.autoClose = function () {\r\n        var _this = this;\r\n        setTimeout(function () {\r\n            _this.close();\r\n        }, this.autotimeout + this.speed);\r\n    };\r\n    Notify.prototype.close = function () {\r\n        this.notifyOut(this.selectedNotifyOutEffect);\r\n    };\r\n    Notify.prototype.setEffect = function () {\r\n        switch (this.effect) {\r\n            case 'fade':\r\n                this.selectedNotifyInEffect = fadeIn;\r\n                this.selectedNotifyOutEffect = fadeOut;\r\n                break;\r\n            case 'slide':\r\n                this.selectedNotifyInEffect = slideIn;\r\n                this.selectedNotifyOutEffect = slideOut;\r\n                break;\r\n            default:\r\n                this.selectedNotifyInEffect = fadeIn;\r\n                this.selectedNotifyOutEffect = fadeOut;\r\n        }\r\n    };\r\n    return Notify;\r\n}());\n\n\n\n\n//# sourceURL=webpack://ozon/./node_modules/simple-notify/dist/simple-notify.es.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\r\n    const cartBtn = document.getElementById('cart')\r\n    const cartModal = document.querySelector('.cart')\r\n    const cartCloseBtn = cartModal.querySelector('.cart-close')\r\n\r\n    const openCart = () => {\r\n        cartModal.style.display = 'flex'\r\n    }\r\n\r\n    const closeCart = () => {\r\n        cartModal.style.display = ''\r\n    }\r\n\r\n    cartBtn.addEventListener('click', openCart)\r\n    cartCloseBtn.addEventListener('click', closeCart)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n    const btnCatalog = document.querySelector('.catalog-button > button')\r\n    const catalogModal = document.querySelector('.catalog')\r\n    const catalogModalItems = document.querySelectorAll('.catalog li')\r\n\r\n    // console.dir(catalogModalItems);\r\n\r\n\r\n    let isOpen = false\r\n\r\n    btnCatalog.addEventListener('click', () => {\r\n        isOpen = !isOpen\r\n\r\n        if(isOpen) {\r\n            catalogModal.style.display = 'block'\r\n        } else {\r\n            catalogModal.style.display = ''\r\n        }\r\n\r\n    })\r\n\r\n    catalogModalItems.forEach(item => {\r\n        item.addEventListener('click', () => {    \r\n            const text = item.textContent\r\n            // console.log(text);\r\n\r\n            ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n                ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text))\r\n            }) \r\n        });\r\n    })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),\n/* harmony export */   searchFilter: () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n  // console.log(goods);\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.title.toLowerCase().includes(value.toLowerCase());\r\n  });\r\n};\r\n\r\nconst categoryFilter = (goods, value) => {\r\n    // console.log(goods);\r\n    return goods.filter((goodsItem) => {\r\n      return goodsItem.category === value\r\n    });\r\n  };\n\n//# sourceURL=webpack://ozon/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var simple_notify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-notify */ \"./node_modules/simple-notify/dist/simple-notify.es.js\");\n\r\n\r\nconst getData = (str) => {\r\n    return fetch(`https://ozonbd-46860-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)\r\n    .then((response) => {\r\n        // new Notify({\r\n        //     status: 'success',\r\n        //     title: 'Firebase работает',\r\n        //     text: 'notify text',\r\n        //     effect: 'slide',\r\n        //     type: 3,\r\n        //     autoclose: true\r\n        // })\r\n        if (response.ok) {\r\n            return response.json()\r\n        } else {\r\n            throw new Error('Ошибка запроса')\r\n        }        \r\n    })\r\n    .catch(Error => {  \r\n        new simple_notify__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n            status: 'error',\r\n            title: 'Ошибка!',\r\n            text: Error.message,\r\n            effect: 'slide',\r\n            type: 3,\r\n            autoclose: true\r\n        });\r\n    })\r\n        \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/helper.js":
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: () => (/* binding */ debounce)\n/* harmony export */ });\nconst debounce = (func, ms = 300) => {\r\n    let timer\r\n    return (...args) => {\r\n        clearTimeout(timer)\r\n        timer = setTimeout(() => {func.apply(undefined, args)}, ms)\r\n    }\r\n}\n\n//# sourceURL=webpack://ozon/./src/modules/helper.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\nconst load = () => {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\r\n    })  \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://ozon/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n  const goodsWrapper = document.querySelector(\".goods\");\r\n  // console.log(goodsWrapper);     // для проверки\r\n\r\n  goodsWrapper.innerHTML = \"\";\r\n\r\n  goods.forEach((goodsItem) => {\r\n    goodsWrapper.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `\r\n            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"card\">                   \r\n                    ${\r\n                      goodsItem.sale\r\n                        ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>'\r\n                        : \"\"\r\n                    }\r\n                    <div class=\"card-img-wrapper\">\r\n                        <span class=\"card-img-top\"\r\n                            style=\"background-image: url('${\r\n                              goodsItem.img\r\n                            }')\"></span>\r\n                    </div>\r\n                    <div class=\"card-body justify-content-between\">\r\n                        <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n                        <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                        <button class=\"btn btn-primary\">В корзину</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        `\r\n    );\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ \"./src/modules/helper.js\");\n\r\n\r\n\r\n\r\n\r\nconst search = () => {\r\n    const searchInput = document.querySelector(\".search-wrapper_input\");\r\n\r\n    const debounceSearch = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.debounce)((event) => {\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, event.target.value))\r\n        }) \r\n    }, 2000)\r\n\r\n    searchInput.addEventListener(\"input\", debounceSearch);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;