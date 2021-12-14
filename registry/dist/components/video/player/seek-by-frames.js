!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/seek-by-frames"]=t():e["video/player/seek-by-frames"]=t()}(self,(function(){return function(){"use strict";var e,t,n={730:function(e){e.exports=coreApis.componentApis.video.playerAgent}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return n[e](a,a.exports,o),a.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var a=Object.create(null);o.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return n[e]}}));return i.default=function(){return n},o.d(a,i),a},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){o.d(a,{component:function(){return c}});var e=coreApis.componentApis.video.videoControlBar,t=coreApis.observer,n=coreApis.utils,r=coreApis.utils.urls,i=coreApis.pluginApis.data;const s="seek-by-frame-disable",c={name:"seekByFrames",displayName:"启用逐帧调整",tags:[componentsTags.video],description:{"zh-CN":"在播放器的时间右边增加两个按钮, 用于**较精细**调整视频时间. 装有 `快捷键扩展` 时支持键盘快捷键<kbd>Shift</kbd>+<kbd>←</kbd>/<kbd>→</kbd>.\n\n> 注: `视频的实际播放帧率`跟`视频本身的帧率`和`显示器的刷新率`有关, 很难计算一个精准的数值, 部分视频仍然会有暂停不到那种一闪而过的图的情况."},entry:async()=>{await(0,n.playerReady)();const{playerAgent:r}=await Promise.resolve().then(o.t.bind(o,730,23));(0,i.addData)("ui.icons",(e=>{e["seek-left"]='<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- Generator: Adobe Illustrator 24.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<svg version="1.1" id="图层_2_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"\n\t y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n<g>\n\t<path d="M15.5,20.3c-0.4,0-0.7-0.1-1-0.4l-8.3-7.5c-0.3-0.3-0.5-0.7-0.5-1.1c0-0.4,0.2-0.8,0.5-1.1l8.3-7.5\n\t\tc0.6-0.6,1.6-0.5,2.1,0.1c0.6,0.6,0.5,1.6-0.1,2.1l-7.1,6.3l7.1,6.4c0.6,0.6,0.7,1.5,0.1,2.1C16.3,20.2,15.9,20.3,15.5,20.3z"/>\n</g>\n<circle cx="16.8" cy="11.3" r="2.4"/>\n</svg>\n',e["seek-right"]='<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- Generator: Adobe Illustrator 24.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<svg version="1.1" id="图层_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n<g>\n\t<path d="M8.2,20.3c0.4,0,0.7-0.1,1-0.4l8.3-7.5c0.3-0.3,0.5-0.7,0.5-1.1c0-0.4-0.2-0.8-0.5-1.1L9.2,2.7C8.6,2.2,7.7,2.2,7.1,2.9\n\t\tC6.6,3.5,6.6,4.4,7.3,5l7.1,6.3l-7.1,6.4c-0.6,0.6-0.7,1.5-0.1,2.1C7.4,20.2,7.8,20.3,8.2,20.3z"/>\n</g>\n<circle cx="7" cy="11.3" r="2.4"/>\n</svg>\n'}));let a=0;(0,t.attributesSubtree)(`${r.query.control.buttons.quality.selector} ul`,(()=>{const e=dq(`${r.query.control.buttons.quality.selector} .bui-select-item-active, ${r.query.control.buttons.quality.selector} .active`),t=e?parseInt(e.getAttribute("data-value")):0,n=(()=>{switch(t){case 116:case 74:return 6e4/1001;default:return 3e4/1001}})();a=1/n}));const s=e=>{r.changeTime(e*a)};(0,e.addControlBarButton)({name:"seekPrevFrame",displayName:"上一帧",icon:"seek-left",order:1,action:()=>{s(-1)}}),(0,e.addControlBarButton)({name:"seekNextFrame",displayName:"下一帧",icon:"seek-right",order:2,action:()=>{s(1)}})},reload:()=>document.body.classList.remove(s),unload:()=>document.body.classList.add(s),urlInclude:r.playerUrls,plugin:{displayName:"逐帧调整 - 快捷键支持",setup:()=>{(0,i.addData)("keymap.actions",(e=>{e.previousFrame={displayName:"上一帧",run:e=>{const{clickElement:t}=e;return t('.be-video-control-bar-extend [data-name="seekPrevFrame"]',e)}},e.nextFrame={displayName:"下一帧",run:e=>{const{clickElement:t}=e;return t('.be-video-control-bar-extend [data-name="seekNextFrame"]',e)}}})),(0,i.addData)("keymap.presets",(e=>{e.previousFrame="shift arrowLeft",e.nextFrame="shift arrowRight"}))}},commitHash:"a2dc6949ac3522f9c097380644c0648402bf02d4"}}(),a=a.component}()}));