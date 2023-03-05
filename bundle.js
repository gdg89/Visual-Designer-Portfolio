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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://Visual_Designer_Pnortfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Visual_Designer_Pnortfolio/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menuMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menuMobile */ \"./src/modules/menuMobile.js\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n\n\n(0,_modules_menuMobile__WEBPACK_IMPORTED_MODULE_0__.showMenuMobile)();\n\n//# sourceURL=webpack://Visual_Designer_Pnortfolio/./src/index.js?");

/***/ }),

/***/ "./src/modules/menuMobile.js":
/*!***********************************!*\
  !*** ./src/modules/menuMobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMenuMobile\": () => (/* binding */ showMenuMobile)\n/* harmony export */ });\nvar mediaQueries = window.matchMedia(\"(max-width: 767px)\");\nvar body = document.body;\nvar menubtn = document.querySelector('.menu-btn');\nvar burger = document.querySelector('.menu-btn__burger');\nvar menu = document.querySelector('.menu');\nvar menuLink = document.querySelectorAll('.menu-nav__link');\nfunction showMenuMobile() {\n  //open/close menu on click button \n  menubtn.addEventListener('click', function () {\n    menu.classList.toggle('open');\n    burger.classList.toggle('open');\n    body.classList.toggle('overflow-hidden');\n  });\n\n  //close menu on click link menu \n  menuLink.forEach(function (link) {\n    link.addEventListener('click', function () {\n      menu.classList.toggle('open');\n      burger.classList.toggle('open');\n      body.classList.remove('overflow-hidden');\n    });\n  });\n\n  //hide/show scroll bar on screen resize\n  mediaQueries.addEventListener('change', function () {\n    var menuOpen = menu.classList.contains('open');\n    if (!mediaQueries.matches) body.classList.remove('overflow-hidden');\n    if (mediaQueries.matches && menuOpen) body.classList.add('overflow-hidden');\n  });\n}\n;\n\n//# sourceURL=webpack://Visual_Designer_Pnortfolio/./src/modules/menuMobile.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,300;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Google Fonts*/\\n*,\\n*:after,\\n*:before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  text-decoration: none;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\nbody {\\n  font-size: 100%;\\n  list-style-type: none;\\n  line-height: 1;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\na:hover, button:hover {\\n  cursor: pointer;\\n}\\n\\n/*========\\n    Fonts\\n==========*/\\n/*==============\\n    text color\\n================*/\\n/*===========\\n backgrounds\\n=============*/\\n/* ==========\\n    HEADER \\n   ==========*/\\nheader {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  position: fixed;\\n  width: 100%;\\n}\\nheader .header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n  height: 60px;\\n  padding: 10px 20px;\\n  background: black;\\n}\\nheader .header .brand a {\\n  font-size: 1.8rem;\\n  color: rgb(146, 146, 146);\\n}\\nheader .header .menu-btn {\\n  position: relative;\\n  margin-top: 5px;\\n  height: 30px;\\n  width: 30px;\\n  background: none;\\n  transition: all 0.5s ease-in-out;\\n}\\nheader .header .menu-btn__burger {\\n  position: absolute;\\n  right: 0;\\n  top: 0.5;\\n  width: 28px;\\n  height: 3px;\\n  background: white;\\n  transition: all 0.5s ease-in-out;\\n}\\nheader .header .menu-btn__burger::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: -8px;\\n  right: 0;\\n  width: 28px;\\n  height: 3px;\\n  background: white;\\n  transition: all 0.5s ease-in-out;\\n}\\nheader .header .menu-btn__burger::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 8px;\\n  right: 0;\\n  width: 20px;\\n  height: 3px;\\n  background: white;\\n  transition: all 0.5s ease-in-out;\\n}\\nheader .header .menu-btn__burger.open {\\n  transform: rotate(720deg);\\n  background: transparent;\\n}\\nheader .header .menu-btn__burger.open::before {\\n  transform: rotate(45deg) translate(5px, 8px);\\n}\\nheader .header .menu-btn__burger.open::after {\\n  width: 28px;\\n  transform: rotate(-45deg) translate(3px, -7px);\\n}\\nheader .menu {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  transition: all 0.5s ease-in-out;\\n  position: fixed;\\n  height: 100%;\\n  width: 100%;\\n  left: 0;\\n  top: 50px;\\n  transform: translateY(-100%);\\n  z-index: -1;\\n}\\nheader .menu.open {\\n  transform: translateY(0);\\n}\\nheader .menu .menu-nav {\\n  transition: all 0.5s ease-in-out;\\n  display: flex;\\n  justify-content: start;\\n  align-items: center;\\n  flex-direction: column;\\n  padding-top: 30px;\\n  height: 100%;\\n  width: 100%;\\n  font-size: 1.3rem;\\n  background-color: #202020;\\n}\\nheader .menu .menu-nav__item {\\n  padding: 15px;\\n}\\nheader .menu .menu-nav__link:hover {\\n  color: rgb(146, 146, 146);\\n}\\n\\n/* ==========\\n    HERO \\n   ==========*/\\n.hero {\\n  height: 80vh;\\n  padding: 30px;\\n  display: grid;\\n  grid-template-columns: auto 20%;\\n}\\n.hero .banner-img__container {\\n  grid-column: 1/6;\\n  display: flex;\\n  align-items: center;\\n  overflow: hidden;\\n}\\n.hero .banner-img__container .banner-img {\\n  display: flex;\\n  justify-content: end;\\n}\\n.hero .banner-img__container .banner-img img {\\n  width: 90%;\\n  min-width: 380px;\\n}\\n.hero .banner-container {\\n  grid-column: 6/12;\\n  display: flex;\\n  align-items: center;\\n}\\n.hero .banner {\\n  width: 70%;\\n  margin-left: 20px;\\n  font-weight: 400;\\n}\\n.hero .banner span {\\n  color: #d00d00;\\n  font-size: 1.4rem;\\n}\\n.hero .banner h1 {\\n  font-size: 4.3rem;\\n  font-weight: bold;\\n  padding-top: 5px;\\n}\\n.hero .banner .banner__description {\\n  margin-top: 10px;\\n  font-weight: 200;\\n  line-height: 25px;\\n}\\n.hero .banner .about-me-btn {\\n  width: 150px;\\n  height: 50px;\\n  font-size: 0.9rem;\\n  font-weight: 400;\\n  padding: 15px 20px;\\n  text-transform: uppercase;\\n  color: #e8e8e8;\\n  background-color: #d00d00;\\n  margin-top: 20px;\\n}\\n\\n/* ==========\\n   SKILLS & EXPERIENCE \\n   ==========*/\\n.skills-contanier {\\n  display: grid;\\n  grid-template-columns: 80%;\\n  align-items: center;\\n  justify-content: center;\\n  background: linear-gradient(90deg, #191919 50%, black 50%);\\n  padding: 100px;\\n}\\n.skills-contanier .skills-content {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  column-gap: 20px;\\n  display: grid;\\n}\\n.skills-contanier .skills-content .skills-item {\\n  grid-row: 1/6;\\n  padding: 50px 30px;\\n  margin-bottom: 40px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n}\\n.skills-contanier .skills-content .skills-item i {\\n  font-size: 3rem;\\n}\\n.skills-contanier .skills-content .skills-item h3 {\\n  font-size: 1.8rem;\\n  padding: 25px 0px;\\n}\\n.skills-contanier .skills-content .skills-item p {\\n  font-weight: 200;\\n  line-height: 25px;\\n}\\n.skills-contanier .skills-content .skills-item span {\\n  font-size: 1.2rem;\\n  padding: 20px 0px;\\n}\\n.skills-contanier .skills-content .skills-item__1 {\\n  background-color: #202020;\\n}\\n.skills-contanier .skills-content .skills-item__1 i,\\n.skills-contanier .skills-content .skills-item__1 a {\\n  color: #d00d00;\\n}\\n.skills-contanier .skills-content .skills-item__1 span i {\\n  font-size: 16px;\\n  padding-left: 5px;\\n}\\n.skills-contanier .skills-content .skills-item__2 {\\n  background-color: #d00d00;\\n}\\n.skills-contanier .skills-content .skills-item__2 span i {\\n  font-size: 16px;\\n  padding-left: 5px;\\n}\\n.skills-contanier .skills-content .experience-item {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  margin-bottom: 20px;\\n  padding: 40px;\\n  background: #202020;\\n}\\n.skills-contanier .skills-content .experience-item :nth-child(1) {\\n  font-size: 1.5rem;\\n  color: #d00d00;\\n  font-weight: bold;\\n  padding-bottom: 5px;\\n}\\n.skills-contanier .skills-content .exp-item1 {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  grid-row: 6/12;\\n  font-size: 1.5rem;\\n  background: none;\\n}\\n.skills-contanier .skills-content .exp-item1 :first-child {\\n  font-size: 5rem;\\n}\\n\\n/*============\\n    PROJECTS\\n===============*/\\n#projects {\\n  background: linear-gradient(180deg, black 80%, #191919 20%);\\n  padding-bottom: 50px;\\n}\\n\\n.projects-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 80%;\\n  height: 100%;\\n  flex-direction: column;\\n  margin: 0 auto;\\n  padding: 30px;\\n}\\n\\n.projects-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n  padding: 20px 0;\\n}\\n.projects-header .projects-title {\\n  width: 60%;\\n}\\n.projects-header .projects-title h2 {\\n  font-size: 2rem;\\n  text-transform: uppercase;\\n  font-weight: bold;\\n  margin-bottom: 10px;\\n}\\n.projects-header .projects-title p {\\n  font-weight: 300;\\n  color: rgb(146, 146, 146);\\n}\\n.projects-header .view-all-btn {\\n  width: 150px;\\n  height: 50px;\\n  font-size: 0.9rem;\\n  font-weight: 400;\\n  padding: 15px 20px;\\n  text-transform: uppercase;\\n  color: #e8e8e8;\\n  background-color: #d00d00;\\n}\\n\\n.projects-content {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  gap: 5%;\\n  margin: 30px 0;\\n}\\n\\n.projects-item .img-project__container {\\n  padding: 40px;\\n  background: #202020;\\n}\\n.projects-item .img-project__container img {\\n  width: 100%;\\n  box-shadow: 6px 8px 15px black;\\n}\\n.projects-item .project-name {\\n  margin-top: 20px;\\n}\\n.projects-item .project-name h3 {\\n  font-size: 1.3rem;\\n  font-weight: 600;\\n}\\n.projects-item .project-name .know-more-link {\\n  color: #d00d00;\\n}\\n.projects-item .project-name .know-more-link i {\\n  font-size: 16px;\\n  padding-left: 3px;\\n}\\n\\n/*============\\n    Contact\\n==============*/\\n#contact {\\n  background: linear-gradient(180deg, #191919 50%, black 50%);\\n  padding-bottom: 50px;\\n}\\n\\n.contact-item {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 80%;\\n  margin: 0 auto;\\n  padding: 80px 50px;\\n  background: #202020;\\n}\\n.contact-item .contact-content {\\n  display: flex;\\n  flex-direction: column;\\n  width: 60%;\\n}\\n.contact-item .contact-content h3 {\\n  font-size: 2.8rem;\\n  font-weight: 600;\\n}\\n.contact-item .contact-content p {\\n  margin-top: 20px;\\n  padding: 5px;\\n  font-weight: 300;\\n  color: rgb(146, 146, 146);\\n}\\n.contact-item .contact-btn-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 40%;\\n}\\n.contact-item .contact-btn {\\n  width: 150px;\\n  height: 50px;\\n  font-size: 0.9rem;\\n  font-weight: 400;\\n  padding: 15px 20px;\\n  text-transform: uppercase;\\n  color: #e8e8e8;\\n  background-color: #d00d00;\\n}\\n\\n.footer-nav {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100px;\\n  padding: 10px;\\n  background: black;\\n}\\n.footer-nav-bar ul {\\n  display: flex;\\n  gap: 20px;\\n}\\n.footer-nav-bar a:hover {\\n  color: rgb(146, 146, 146);\\n}\\n\\n.footer-content-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100px;\\n  padding: 10px 30px;\\n  background: #191919;\\n  border-top: 2px solid #202020;\\n}\\n.footer-content-container a {\\n  color: rgb(146, 146, 146);\\n}\\n.footer-content-container .footer-content {\\n  width: 80%;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  padding: 20px;\\n}\\n.footer-content-container .brand {\\n  display: flex;\\n  align-items: center;\\n  font-size: 1.8rem;\\n}\\n.footer-content-container .social {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 20px;\\n}\\n.footer-content-container .dev-signature {\\n  display: flex;\\n  flex-direction: column;\\n  text-align: end;\\n}\\n.footer-content-container .dev-signature p {\\n  font-weight: 300;\\n  color: rgb(146, 146, 146);\\n}\\n.footer-content-container .dev-signature a {\\n  color: #d00d00;\\n}\\n.footer-content-container .dev-signature a:hover {\\n  color: white;\\n  font-weight: 200px;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  header {\\n    position: static;\\n  }\\n  header .menu-btn {\\n    display: none;\\n  }\\n  header .menu {\\n    position: static;\\n    top: 0;\\n    z-index: 0;\\n    transform: translateY(0);\\n  }\\n  header .menu .menu-nav {\\n    display: flex;\\n    justify-content: end;\\n    align-items: center;\\n    flex-direction: row;\\n    gap: 30px;\\n    top: 0;\\n    padding-top: 0;\\n    background: transparent;\\n    text-transform: uppercase;\\n    font-size: 1rem;\\n  }\\n  header .menu .menu-nav__item {\\n    padding: 5px;\\n  }\\n}\\nbody {\\n  background-color: black;\\n  color: #e8e8e8;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\nbody a {\\n  color: white;\\n}\\n\\n.container {\\n  width: 100%;\\n}\\n\\n.overflow-hidden {\\n  overflow: hidden;\\n}\\n\\n.hidden {\\n  display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Visual_Designer_Pnortfolio/./src/sass/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Visual_Designer_Pnortfolio/./src/sass/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Visual_Designer_Pnortfolio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Visual_Designer_Pnortfolio/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Visual_Designer_Pnortfolio/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Visual_Designer_Pnortfolio/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Visual_Designer_Pnortfolio/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Visual_Designer_Pnortfolio/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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