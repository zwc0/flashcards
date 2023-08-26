/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ b),
/* harmony export */   Fragment: () => (/* binding */ k),
/* harmony export */   cloneElement: () => (/* binding */ F),
/* harmony export */   createContext: () => (/* binding */ G),
/* harmony export */   createElement: () => (/* binding */ y),
/* harmony export */   createRef: () => (/* binding */ _),
/* harmony export */   h: () => (/* binding */ y),
/* harmony export */   hydrate: () => (/* binding */ E),
/* harmony export */   isValidElement: () => (/* binding */ t),
/* harmony export */   options: () => (/* binding */ l),
/* harmony export */   render: () => (/* binding */ D),
/* harmony export */   toChildArray: () => (/* binding */ C)
/* harmony export */ });
var n,l,u,t,i,o,r,f,e,c={},s=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(n,l){for(var u in l)n[u]=l[u];return n}function p(n){var l=n.parentNode;l&&l.removeChild(n)}function y(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d(l,f,i,o,null)}function d(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=l.vnode&&l.vnode(f),f}function _(){return{current:null}}function k(n){return n.children}function b(n,l){this.props=n,this.context=l}function g(n,l){if(null==l)return n.__?g(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?g(n):null}function m(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return m(n)}}function w(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!x.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(x)}function x(){var n,l,u,t,o,r,e,c,s;for(i.sort(f);n=i.shift();)n.__d&&(l=i.length,t=void 0,o=void 0,r=void 0,c=(e=(u=n).__v).__e,(s=u.__P)&&(t=[],o=[],(r=v({},e)).__v=e.__v+1,L(s,e,r,u.__n,void 0!==s.ownerSVGElement,null!=e.__h?[c]:null,t,null==c?g(e):c,e.__h,o),M(t,e,o),e.__e!=c&&m(e)),i.length>l&&i.sort(f));x.__r=0}function P(n,l,u,t,i,o,r,f,e,a,v){var p,y,_,b,m,w,x,P,C,H=0,I=t&&t.__k||s,T=I.length,j=T,z=l.length;for(u.__k=[],p=0;p<z;p++)null!=(b=u.__k[p]=null==(b=l[p])||"boolean"==typeof b||"function"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?d(null,b,null,null,b):h(b)?d(k,{children:b},null,null,null):b.__b>0?d(b.type,b.props,b.key,b.ref?b.ref:null,b.__v):b)?(b.__=u,b.__b=u.__b+1,-1===(P=A(b,I,x=p+H,j))?_=c:(_=I[P]||c,I[P]=void 0,j--),L(n,b,_,i,o,r,f,e,a,v),m=b.__e,(y=b.ref)&&_.ref!=y&&(_.ref&&O(_.ref,null,b),v.push(y,b.__c||m,b)),null!=m&&(null==w&&(w=m),(C=_===c||null===_.__v)?-1==P&&H--:P!==x&&(P===x+1?H++:P>x?j>z-x?H+=P-x:H--:H=P<x&&P==x-1?P-x:0),x=p+H,"function"!=typeof b.type||P===x&&_.__k!==b.__k?"function"==typeof b.type||P===x&&!C?void 0!==b.__d?(e=b.__d,b.__d=void 0):e=m.nextSibling:e=S(n,m,e):e=$(b,e,n),"function"==typeof u.type&&(u.__d=e))):(_=I[p])&&null==_.key&&_.__e&&(_.__e==e&&(e=g(_)),q(_,_,!1),I[p]=null);for(u.__e=w,p=T;p--;)null!=I[p]&&("function"==typeof u.type&&null!=I[p].__e&&I[p].__e==u.__d&&(u.__d=I[p].__e.nextSibling),q(I[p],I[p]))}function $(n,l,u){for(var t,i=n.__k,o=0;i&&o<i.length;o++)(t=i[o])&&(t.__=n,l="function"==typeof t.type?$(t,l,u):S(u,t.__e,l));return l}function C(n,l){return l=l||[],null==n||"boolean"==typeof n||(h(n)?n.some(function(n){C(n,l)}):l.push(n)),l}function S(n,l,u){return null==u||u.parentNode!==n?n.insertBefore(l,null):l==u&&null!=l.parentNode||n.insertBefore(l,u),l.nextSibling}function A(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type)return u;if(t>(null!=e?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&i==e.key&&o===e.type)return r;r--}if(f<l.length){if((e=l[f])&&i==e.key&&o===e.type)return f;f++}}return-1}function H(n,l,u,t,i){var o;for(o in u)"children"===o||"key"===o||o in l||T(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||T(n,o,l[o],u[o],t)}function I(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a.test(l)?u:u+"px"}function T(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||I(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||I(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/,"$1")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t||n.addEventListener(l,o?z:j,o):n.removeEventListener(l,o?z:j,o);else if("dangerouslySetInnerHTML"!==l){if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u))}}function j(n){return this.l[n.type+!1](l.event?l.event(n):n)}function z(n){return this.l[n.type+!0](l.event?l.event(n):n)}function L(n,u,t,i,o,r,f,e,c,s){var a,p,y,d,_,g,m,w,x,$,C,S,A,H,I,T=u.type;if(void 0!==u.constructor)return null;null!=t.__h&&(c=t.__h,e=u.__e=t.__e,u.__h=null,r=[e]),(a=l.__b)&&a(u);n:if("function"==typeof T)try{if(w=u.props,x=(a=T.contextType)&&i[a.__c],$=a?x?x.props.value:a.__:i,t.__c?m=(p=u.__c=t.__c).__=p.__E:("prototype"in T&&T.prototype.render?u.__c=p=new T(w,$):(u.__c=p=new b(w,$),p.constructor=T,p.render=B),x&&x.sub(p),p.props=w,p.state||(p.state={}),p.context=$,p.__n=i,y=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=T.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=v({},p.__s)),v(p.__s,T.getDerivedStateFromProps(w,p.__s))),d=p.props,_=p.state,p.__v=u,y)null==T.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==T.getDerivedStateFromProps&&w!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(w,$),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(w,p.__s,$)||u.__v===t.__v)){for(u.__v!==t.__v&&(p.props=w,p.state=p.__s,p.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u)}),C=0;C<p._sb.length;C++)p.__h.push(p._sb[C]);p._sb=[],p.__h.length&&f.push(p);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(w,p.__s,$),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,_,g)})}if(p.context=$,p.props=w,p.__P=n,p.__e=!1,S=l.__r,A=0,"prototype"in T&&T.prototype.render){for(p.state=p.__s,p.__d=!1,S&&S(u),a=p.render(p.props,p.state,p.context),H=0;H<p._sb.length;H++)p.__h.push(p._sb[H]);p._sb=[]}else do{p.__d=!1,S&&S(u),a=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++A<25);p.state=p.__s,null!=p.getChildContext&&(i=v(v({},i),p.getChildContext())),y||null==p.getSnapshotBeforeUpdate||(g=p.getSnapshotBeforeUpdate(d,_)),P(n,h(I=null!=a&&a.type===k&&null==a.key?a.props.children:a)?I:[I],u,t,i,o,r,f,e,c,s),p.base=u.__e,u.__h=null,p.__h.length&&f.push(p),m&&(p.__E=p.__=null)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,t)}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=N(t.__e,u,t,i,o,r,f,c,s);(a=l.diffed)&&a(u)}function M(n,u,t){for(var i=0;i<t.length;i++)O(t[i],t[++i],t[++i]);l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function N(l,u,t,i,o,r,f,e,s){var a,v,y,d=t.props,_=u.props,k=u.type,b=0;if("svg"===k&&(o=!0),null!=r)for(;b<r.length;b++)if((a=r[b])&&"setAttribute"in a==!!k&&(k?a.localName===k:3===a.nodeType)){l=a,r[b]=null;break}if(null==l){if(null===k)return document.createTextNode(_);l=o?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,_.is&&_),r=null,e=!1}if(null===k)d===_||e&&l.data===_||(l.data=_);else{if(r=r&&n.call(l.childNodes),v=(d=t.props||c).dangerouslySetInnerHTML,y=_.dangerouslySetInnerHTML,!e){if(null!=r)for(d={},b=0;b<l.attributes.length;b++)d[l.attributes[b].name]=l.attributes[b].value;(y||v)&&(y&&(v&&y.__html==v.__html||y.__html===l.innerHTML)||(l.innerHTML=y&&y.__html||""))}if(H(l,_,d,o,e),y)u.__k=[];else if(P(l,h(b=u.props.children)?b:[b],u,t,i,o&&"foreignObject"!==k,r,f,r?r[0]:t.__k&&g(t,0),e,s),null!=r)for(b=r.length;b--;)null!=r[b]&&p(r[b]);e||("value"in _&&void 0!==(b=_.value)&&(b!==l.value||"progress"===k&&!b||"option"===k&&b!==d.value)&&T(l,"value",b,d.value,!1),"checked"in _&&void 0!==(b=_.checked)&&b!==l.checked&&T(l,"checked",b,d.checked,!1))}return l}function O(n,u,t){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,t)}}function q(n,u,t){var i,o;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||O(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=null,n.__c=void 0}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&q(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||p(n.__e),n.__=n.__e=n.__d=void 0}function B(n,l,u){return this.constructor(n,u)}function D(u,t,i){var o,r,f,e;l.__&&l.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],L(t,u=(!o&&i||t).__k=y(k,null,[u]),r||c,c,void 0!==t.ownerSVGElement,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),M(f,u,e)}function E(n,l){D(n,l,E)}function F(l,u,t){var i,o,r,f,e=v({},l.props);for(r in l.type&&l.type.defaultProps&&(f=l.type.defaultProps),u)"key"==r?i=u[r]:"ref"==r?o=u[r]:e[r]=void 0===u[r]&&void 0!==f?f[r]:u[r];return arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),d(l.type,e,i||l.key,o||l.ref,null)}function G(n,l){var u={__c:l="__cC"+e++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,w(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=s.slice,l={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l}throw n}},u=0,t=function(n){return null!=n&&void 0===n.constructor},b.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof n&&(n=n(v({},u),this.props)),n&&v(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),w(this))},b.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w(this))},b.prototype.render=k,i=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},x.__r=0,e=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCallback: () => (/* binding */ T),
/* harmony export */   useContext: () => (/* binding */ q),
/* harmony export */   useDebugValue: () => (/* binding */ x),
/* harmony export */   useEffect: () => (/* binding */ p),
/* harmony export */   useErrorBoundary: () => (/* binding */ P),
/* harmony export */   useId: () => (/* binding */ V),
/* harmony export */   useImperativeHandle: () => (/* binding */ A),
/* harmony export */   useLayoutEffect: () => (/* binding */ y),
/* harmony export */   useMemo: () => (/* binding */ F),
/* harmony export */   useReducer: () => (/* binding */ s),
/* harmony export */   useRef: () => (/* binding */ _),
/* harmony export */   useState: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,r,u,i,o=0,f=[],c=[],e=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,v=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,l=preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,m=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function d(t,u){preact__WEBPACK_IMPORTED_MODULE_0__.options.__h&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function h(n){return o=1,s(B,n)}function s(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},r.shouldComponentUpdate=f}return o.__N||o.__}function p(u,i){var o=d(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o))}function y(u,i){var o=d(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__h.push(o))}function _(n){return o=5,F(function(){return{current:n}},[])}function A(n,t,r){o=6,y(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))}function F(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T(n,t){return o=8,F(function(){return n},t)}function q(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function x(t,r){preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(r?r(t):t)}function P(n){var u=d(t++,10),i=h();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function V(){var n=d(t++,11);if(!n.__){for(var u=r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w),t.__H.__h=[]}catch(r){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,t.__v)}}preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){r=null,e&&e(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0})):(i.__h.forEach(k),i.__h.forEach(w),i.__h=[],t=0)),u=r},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame||((i=preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame)||j)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c})),u=r=null},preact__WEBPACK_IMPORTED_MODULE_0__.options.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return!n.__||w(n)})}catch(u){r.some(function(n){n.__h&&(n.__h=[])}),r=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,t.__v)}}),l&&l(t,r)},preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n)}catch(n){r=n}}),u.__H=void 0,r&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,u.__v))};var g="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r))}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function w(n){var t=r;n.__c=n.__(),r=t}function z(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   jsx: () => (/* binding */ o),
/* harmony export */   jsxDEV: () => (/* binding */ o),
/* harmony export */   jsxs: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var _=0;function o(o,e,n,t,f,l){var s,u,a={};for(u in e)"ref"==u?s=e[u]:a[u]=e[u];var i={type:o,props:a,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--_,__source:f,__self:l};if("function"==typeof o&&(s=o.defaultProps))for(u in s)void 0===a[u]&&(a[u]=s[u]);return preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode&&preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode(i),i}
//# sourceMappingURL=jsxRuntime.module.js.map


/***/ }),

/***/ "./src/components/PWABanner.tsx":
/*!**************************************!*\
  !*** ./src/components/PWABanner.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");


let refreshing;
if (navigator?.serviceWorker)
    navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (refreshing)
            return;
        window.location.reload();
        refreshing = true;
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    const [waitingWorker, setWaitingWorker] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!('serviceWorker' in navigator))
            return;
        navigator.serviceWorker.register('sw.js').then(reg => {
            if (reg.waiting)
                return setWaitingWorker(reg.waiting);
            reg.addEventListener('updatefound', () => {
                const newWorker = reg.installing;
                if (!newWorker)
                    return;
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller)
                        setWaitingWorker(newWorker);
                });
            });
        });
    }, []);
    const reloadPage = () => {
        if (!waitingWorker)
            return;
        waitingWorker.postMessage({ type: 'SKIP_WAITING' });
    };
    if (!waitingWorker)
        return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'sticky bottom-0 p-1 mt-4 bg-blue-500 text-white text-center', children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Update available. " }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: reloadPage, className: "font-bold underline", children: "Click here" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: " to install." })] });
});


/***/ }),

/***/ "./src/pages/Cards.tsx":
/*!*****************************!*\
  !*** ./src/pages/Cards.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cards)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");


function CardItem({ deck, card, setList }) {
    const [isEdit, setIsEdit] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [newTitle, setNewTitle] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(card.question);
    const [newAnswer, setAnswer] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(card.answer);
    const saveNewTitle = (e) => {
        // e.stopPropagation();
        // e.preventDefault();
        // setList(p=>{
        //     const arr = structuredClone(p);
        //     const item = arr.find(x=>x.name === deck.name);
        //     if (item)
        //         item.name = newTitle;
        //     return arr;
        // });
        // setIsEdit(false);
    };
    const remove = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setList(p => {
            const index = p.findIndex(x => x === deck);
            const arr = [...p];
            arr[index] = { ...deck, cards: deck.cards.filter(x => x !== card) };
            return arr;
        });
    };
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { class: 'flex gap-2 items-center', onSubmit: saveNewTitle, children: [isEdit
                ? (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { class: 'grow border border-blue-800 rounded-md text-black', value: newTitle, onInput: ({ currentTarget }) => setNewTitle(currentTarget.value) })
                : (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: 'grow', children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: card.question }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: card.answer })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "min-w-fit", children: [isEdit
                        ? (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "submit", class: 'bg-blue-800 rounded-md p-1 px-2 mr-4 text-white', children: "Save" })
                        : (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", class: 'bg-blue-800 rounded-md p-1 px-2 mr-4 text-white', onClick: (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setIsEdit(true);
                            }, children: "Edit" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", class: 'bg-red-600 rounded-md p-1 px-2 text-white', onClick: remove, children: "Delete" })] })] }));
}
function Cards({ deck, setList, setDeck }) {
    const [title, setTitle] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [answer, setAnswer] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: 'flex gap-2 items-center', children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", class: 'bg-blue-800 rounded-md p-1 px-2 mr-4 text-white', onClick: () => setDeck(''), children: "Back" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { class: 'grow', children: deck.name })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: deck.cards.map(x => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardItem, { card: x, deck: deck, setList: setList }))) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { class: 'flex gap-4 pt-2', onSubmit: (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setList(p => {
                        const arr = [...p];
                        const index = p.findIndex(x => x === deck);
                        arr[index] = { ...deck, cards: [...deck.cards, { question: title, answer }] };
                        return arr;
                    });
                    setTitle('');
                    setAnswer('');
                }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: 'grow', children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { class: 'w-full border border-blue-800 rounded-md text-black', value: title, onChange: ({ currentTarget }) => { setTitle(currentTarget.value); } }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", { class: 'w-full border border-blue-800 rounded-md text-black', value: answer, onChange: ({ currentTarget }) => { setAnswer(currentTarget.value); } })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "submit", class: 'bg-blue-800 rounded-md p-1 px-2 text-white', children: "Add Card" })] })] }));
}


/***/ }),

/***/ "./src/pages/Decks.tsx":
/*!*****************************!*\
  !*** ./src/pages/Decks.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Decks)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");


function DeckItem({ deck, setDeck, setList }) {
    const [isEdit, setIsEdit] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [newTitle, setNewTitle] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(deck.name);
    const saveNewTitle = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setList(p => {
            const arr = structuredClone(p);
            const item = arr.find(x => x.name === deck.name);
            if (item)
                item.name = newTitle;
            return arr;
        });
        setIsEdit(false);
    };
    const removeDeck = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setList(p => p.filter(x => x !== deck));
    };
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { class: 'flex gap-2 items-center', onSubmit: saveNewTitle, children: [isEdit
                ? (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { class: 'grow border border-blue-800 rounded-md text-black', value: newTitle, onInput: ({ currentTarget }) => setNewTitle(currentTarget.value) })
                : (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: 'grow', onClick: () => setDeck(deck.name), children: deck.name }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "min-w-fit", children: [isEdit
                        ? (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "submit", class: 'bg-blue-800 rounded-md p-1 px-2 mr-4 text-white', children: "Save" })
                        : (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", class: 'bg-blue-800 rounded-md p-1 px-2 mr-4 text-white', onClick: (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setIsEdit(true);
                            }, children: "Edit" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", class: 'bg-red-600 rounded-md p-1 px-2 text-white', onClick: removeDeck, children: "Delete" })] })] }));
}
function Decks({ list, setList, setDeck }) {
    const [title, setTitle] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: list.map(d => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DeckItem, { deck: d, setDeck: setDeck, setList: setList }))) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { class: 'flex gap-4 pt-2', onSubmit: (e) => {
                    e.preventDefault();
                    setList(p => [...p, { name: title, cards: [] }]);
                    setDeck(title);
                    setTitle('');
                }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { class: 'grow border border-blue-800 rounded-md text-black', value: title, onChange: ({ currentTarget }) => { setTitle(currentTarget.value); } }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "submit", class: 'bg-blue-800 rounded-md p-1 px-2 text-white', children: "Add Item" })] })] }));
}


/***/ }),

/***/ "./src/pages/Home.tsx":
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../package.json */ "./package.json");
/* harmony import */ var _Decks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Decks */ "./src/pages/Decks.tsx");
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cards */ "./src/pages/Cards.tsx");





const tryParseJson = (json) => {
    try {
        if (typeof json !== 'string')
            return null;
        return JSON.parse(json);
    }
    catch (e) {
        return null;
    }
};
const initList = () => tryParseJson(localStorage.getItem('flashcards.decks')) || [];
function Home() {
    const [list, setList] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(initList());
    const [isDark, setIsDark] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(tryParseJson(localStorage.getItem('flashcards.dark') || false) || false);
    const [deck, setDeck] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const refInputAdd = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        document.body.classList.toggle('dark', isDark);
        localStorage.setItem('flashcards.dark', `${isDark}`);
    }, [isDark]);
    // const addItem = (e) => {
    //     e.preventDefault();
    //     if (!newTitle)
    //         return;
    //     const newList = structuredClone(list);
    //     const newCurrList = getCurrList(indexArr, newList);
    //     if (newCurrList.some(l=>l.title === newTitle))
    //         return;
    //     newCurrList.push({done: false, title: newTitle, children: []});
    //     setList(newList);
    //     setNewTitle('');
    //     refInputAdd.current?.focus();
    // }
    // const removeItem = ({title}) => {
    //     const doDelete = confirm(`Delete item (${title})?`);
    //     if (!doDelete)
    //         return;
    //     const newList = clone(list);
    //     const newCurrList = getCurrList(indexArr, newList);
    //     const index = newCurrList.findIndex(x=>x.title === title);
    //     newCurrList.splice(index, 1);
    //     setList(newList);
    // }
    // const editTitle = (title: string, newTitle: string) => {
    //     const newList = clone(list);
    //     const newCurrList = getCurrList(indexArr, newList);
    //     const item = newCurrList.find(l=>l.title === title);
    //     if (!item || newCurrList.some(l=>l.title === newTitle))
    //         return;
    //     item.title = newTitle;
    //     setList(newList);
    // }
    // const onChangeDone = ({title, done}) =>{
    //     const newList = clone(list);
    //     const newCurrList = getCurrList(indexArr, newList);
    //     const item = newCurrList.find(l=>l.title === title);
    //     if (!item)
    //         return newCurrList;
    //     item.done = done;
    //     setList(newList);
    // }
    // const onClickTitle = ({title}) => {
    //     setIndexArr(p => {
    //         const newArr = clone(p);
    //         newArr.push(title);
    //         return newArr;
    //     });
    // }
    // const back = () => {
    //     const newArr = clone(indexArr);
    //     newArr.pop();
    //     setIndexArr(newArr);
    // }
    // function exportList(){
    //     const a = document.createElement('a');
    // 	a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(currList)));
    // 	a.setAttribute('download', 'ShoppingList.json');
    // 	a.style.display = 'none';
    // 	document.body.appendChild(a);
    // 	a.click();
    // 	document.body.removeChild(a);
    // }
    // async function importList(e: JSXInternal.TargetedEvent<HTMLInputElement, Event>){
    // 	//@ts-ignore
    // 	const clearInput = () => {e.target.value = null};
    // 	try{
    // 		const file = e.currentTarget.files?.[0];
    // 		if (!file)
    // 			return clearInput();
    // 		const text = await file.text();
    // 		const json = JSON.parse(text);
    // 		if (
    // 			!Array.isArray(json) || !json.length
    // 			|| !json.every(
    // 				e => (
    // 					'done' in e && typeof e.done ==='boolean'
    // 					&& 'title' in e && typeof e.title === 'string'
    // 					&& 'children' in e && Array.isArray(e.children)
    // 				)
    // 			)
    // 		){throw 'invalid object keys';}
    // 		const wasConfirmed = confirm('Are you sure you want to import the items from this file?');
    // 		if (!wasConfirmed)
    // 			return clearInput();
    // 		const newList = clone(list);
    // 		const newCurrList = getCurrList(indexArr, newList);
    // 		let anyFailed = false;
    // 		json.forEach(e=>{
    // 			if (newCurrList.some(l=>l.title === e.title))
    // 				return anyFailed = true;
    // 			newCurrList.push(e);
    // 		});
    // 		setList(newList);
    // 		if (anyFailed)
    // 			alert('One or more items could not be imported as an item already exists with the same name.');
    // 	}catch(e){
    // 		console.error(e);
    // 		return alert('Unable to import. File data invalid.');
    // 	}
    // 	clearInput();
    // }
    localStorage.setItem('flashcards.decks', JSON.stringify(list));
    const deckItem = list.find(x => x.name === deck);
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: 'flex flex-wrap items-center mb-2', children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", { class: "grow text-center", children: ["v", _package_json__WEBPACK_IMPORTED_MODULE_2__.version] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { onClick: () => setIsDark(!isDark), class: 'w-6 h-6 block dark:hidden', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z", fill: "#1C274C" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM3.66865 3.71609C3.94815 3.41039 4.42255 3.38915 4.72825 3.66865L6.95026 5.70024C7.25596 5.97974 7.2772 6.45413 6.9977 6.75983C6.7182 7.06553 6.2438 7.08677 5.9381 6.80727L3.71609 4.77569C3.41039 4.49619 3.38915 4.02179 3.66865 3.71609ZM20.3314 3.71609C20.6109 4.02179 20.5896 4.49619 20.2839 4.77569L18.0619 6.80727C17.7562 7.08677 17.2818 7.06553 17.0023 6.75983C16.7228 6.45413 16.744 5.97974 17.0497 5.70024L19.2718 3.66865C19.5775 3.38915 20.0518 3.41039 20.3314 3.71609ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM17.0255 17.0252C17.3184 16.7323 17.7933 16.7323 18.0862 17.0252L20.3082 19.2475C20.6011 19.5404 20.601 20.0153 20.3081 20.3082C20.0152 20.6011 19.5403 20.601 19.2475 20.3081L17.0255 18.0858C16.7326 17.7929 16.7326 17.3181 17.0255 17.0252ZM6.97467 17.0253C7.26756 17.3182 7.26756 17.7931 6.97467 18.086L4.75244 20.3082C4.45955 20.6011 3.98468 20.6011 3.69178 20.3082C3.39889 20.0153 3.39889 19.5404 3.69178 19.2476L5.91401 17.0253C6.2069 16.7324 6.68177 16.7324 6.97467 17.0253ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z", fill: "#1C274C" })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { onClick: () => setIsDark(!isDark), class: 'w-6 h-6 hidden dark:block', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "currentColor" }) })] }), deckItem
                ? (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Cards__WEBPACK_IMPORTED_MODULE_4__["default"], { deck: deckItem, setList: setList, setDeck: setDeck })
                : (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Decks__WEBPACK_IMPORTED_MODULE_3__["default"], { list: list, setList: setList, setDeck: setDeck })] }));
}


/***/ }),

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.tsx");
/* harmony import */ var _components_PWABanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PWABanner */ "./src/components/PWABanner.tsx");




const App = () => {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PWABanner__WEBPACK_IMPORTED_MODULE_3__["default"], {})] }));
};
(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(App, {}), document.getElementById('app'));

})();

/******/ })()
;