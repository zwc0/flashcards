/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"flashcards","version":"1.0.0.0","description":"Flash Cards","scripts":{"watch:webpack":"npx webpack --config webpack.config.js -w","watch:tailwind":"npx tailwindcss -i ./src/styles/app.css -o ./dist/app.css --watch","watch":"npm start watch:webpack && npm start watch:tailwind","build:webpack":"npx webpack --config webpack.config.js --mode production","build:tailwind":"npx tailwindcss -i ./src/styles/app.css -o ./dist/app.css --minify","build":"npm run build:webpack && npm run build:tailwind"},"repository":{"type":"git","url":"git+https://github.com/zwc0/flashcards.git"},"devDependencies":{"preact":"^10.17.1","tailwindcss":"^3.3.3","typescript":"^5.2.2","webpack":"^5.88.2","webpack-cli":"^5.1.4"},"dependencies":{"ts-loader":"^9.4.4"}}');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./src/sw.ts ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ "./package.json");
/// <reference lib="webworker" />

const cacheName = 'v' + _package_json__WEBPACK_IMPORTED_MODULE_0__.version;
const cacheFiles = [
    './dist/app.css',
    './dist/app.js',
    './index.html'
];
const addCache = () => caches.open(cacheName)
    .then(cache => cache.addAll(cacheFiles));
self.addEventListener('install', event => {
    event.waitUntil(addCache);
});
const fetchResponse = async (event) => {
    const keys = await caches.keys();
    Promise.allSettled(keys.map(k => k !== cacheName && caches.delete(k)));
    if (!keys.includes(cacheName))
        await addCache();
    const response = await caches.match(event.request, { cacheName });
    if (response)
        return response;
    return fetch(event.request, { cache: 'no-cache' });
};
self.addEventListener('fetch', (event) => {
    event.respondWith(fetchResponse(event));
});
self.addEventListener('message', async (event) => {
    if (event.data.type !== 'SKIP_WAITING')
        return;
    //@ts-ignore
    return self.skipWaiting();
});

})();

/******/ })()
;