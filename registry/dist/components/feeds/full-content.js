!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["feeds/full-content"]=n():t["feeds/full-content"]=n()}(self,(function(){return function(){var t,n,e={521:function(t,n,e){var o=e(645)((function(t){return t[1]}));o.push([t.id,".card .main-content .expand-btn,\n.card .main-content .content-ellipsis {\n  display: none !important;\n}\n.card .main-content .content-full {\n  display: block !important;\n  height: auto !important;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
n.i=function(t,e,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var u=0;u<t.length;u++){var f=[].concat(t[u]);o&&r[f[0]]||(e&&(f[2]?f[2]="".concat(e," and ").concat(f[2]):f[2]=e),n.push(f))}},n}},223:function(t,n,e){var o=e(521);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var i=o[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}n=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var i=Object.create(null);r.r(i);var c={};t=t||[null,n({}),n([]),n(n)];for(var u=2&o&&e;"object"==typeof u&&!~t.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},r.d(i,c),i},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return e}});var t=coreApis.componentApis.styledComponent,n=coreApis.utils.urls;const e={...(0,t.toggleStyle)("fullFeedsContent",(()=>Promise.resolve().then(r.t.bind(r,223,23)))),displayName:"展开动态内容",description:{"zh-CN":"不管内容多长, 总是完全展开动态的内容."},tags:[componentsTags.style,componentsTags.feeds],urlInclude:n.feedsUrlsWithoutDetail,commitHash:"a2dc6949ac3522f9c097380644c0648402bf02d4"}}(),i=i.component}()}));