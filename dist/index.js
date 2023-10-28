/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var e,t,n,r,o,a,i,c,s,u,p,l,f,d,h={977:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,".carousel-container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n.carousel-wrapper {\n    box-sizing: border-box;\n    white-space: nowrap;\n    overflow-x: auto;\n    flex: 200;\n    display: flex;\n    overflow: hidden;\n    margin-left: 0px;\n    transition: margin-left 0.2s ease;\n    z-index: 1;\n    position: relative;\n}\n\n.carousel-slider {\n    padding: 2px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.carousel-slider-btns {\n    position: absolute;\n    top: 48%;\n    display: flex;\n    width: 95%;\n    justify-content: space-between;\n    z-index: 9999999;\n}\n\n.carousel-slider-btns-actions {\n    height: 20px;\n    cursor: pointer;\n}\n\n.img-container {\n    display: inline-block;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.carousel-img {\n    max-height: 100%;\n    object-fit: contain;\n    max-width: 100%;\n}\n\n/* ///////////////// */\n.ImageCarouselApp-container {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\n\n.carousel-dot {\n    height: 9px;\n    width: 9px;\n    margin: 2px;\n    border-radius: 20px;\n    background-color: gray;\n\n    border: 1px solid #000000;\n    background-color: #ffffff;\n    color: #000000;\n}\n\n.active {\n    background-color: gray;\n}\n\n.carousel-indicator-component {\n    display: flex;\n    justify-content: center;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},408:(e,t)=>{Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var n={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r=Object.assign,o={};function a(e,t,r){this.props=e,this.context=t,this.refs=o,this.updater=r||n}function i(){}function c(e,t,r){this.props=e,this.context=t,this.refs=o,this.updater=r||n}a.prototype.isReactComponent={},a.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=a.prototype;var s=c.prototype=new i;s.constructor=c,r(s,a.prototype),s.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty},294:(e,t,n)=>{n(408)},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var f=n(l),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(d);else{var h=o(d,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var p=n(a[u]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},m={};function y(e){var t=m[e];if(void 0!==t)return t.exports;var n=m[e]={id:e,exports:{}};return h[e](n,n.exports,y),n.exports}y.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return y.d(t,{a:t}),t},y.d=(e,t)=>{for(var n in t)y.o(t,n)&&!y.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},y.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),y.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;y.g.importScripts&&(e=y.g.location+"");var t=y.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),y.p=e})(),y.nc=void 0,e=y(379),t=y.n(e),n=y(795),r=y.n(n),o=y(569),a=y.n(o),i=y(565),c=y.n(i),s=y(216),u=y.n(s),p=y(589),l=y.n(p),f=y(977),(d={}).styleTagTransform=l(),d.setAttributes=c(),d.insert=a().bind(null,"head"),d.domAPI=r(),d.insertStyleElement=u(),t()(f.Z,d),f.Z&&f.Z.locals&&f.Z.locals,y(294),y.p,y.p})();