(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{1416:function(e,t,o){Promise.resolve().then(o.bind(o,2793))},2793:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return r}});var a=o(9268),n=o(6006);function r(){let e=(0,n.useRef)(null);function t(){let t=e.current,o=document.createElement("canvas");if(t){o.width=t.videoWidth,o.height=t.videoHeight;let a=o.getContext("2d",{willReadFrequently:!0});if(a){a.drawImage(t,0,0,o.width,o.height);let n=a.getImageData(0,0,1,o.width),r=a.getImageData(o.height-1,0,1,o.width);console.log("DataTop data: ".concat(n.data," \n")),console.log("DataBottom data: ".concat(n.data," \n")),function(t,o){let a=0,n=0,r=0,c=0;for(let e=0;e<t.length;e+=4)a+=t[e],n+=t[e+1],r+=t[e+2],c+=1;for(let e=0;e<o.length;e+=4)a+=o[e],n+=o[e+1],r+=o[e+2],c+=1;console.log("r: ".concat(a," \n")),console.log("g: ".concat(n," \n")),console.log("b: ".concat(r," \n")),console.log("denominator: ".concat(c," \n")),function(t,o,a,n){var r;let c=Math.floor(t/n),s=Math.floor(o/n),l=Math.floor(a/n);e.current&&(e.current.style.boxShadow="\n      0 0 20px rgba(".concat(c,",").concat(s,",").concat(l,", 0.2),\n      0 0 40px rgba(").concat(c,",").concat(s,",").concat(l,", 0.4),\n      0 0 60px rgba(").concat(c,",").concat(s,",").concat(l,", 0.6),\n      0 0 80px rgba(").concat(c,",").concat(s,",").concat(l,", 0.8),\n      0 0 110px rgba(").concat(c,",").concat(s,",").concat(l,", 1)\n      ")),console.log("Box shadow: ".concat(null===(r=e.current)||void 0===r?void 0:r.style.boxShadow))}(a,n,r,c)}(n.data,r.data)}}}let o=()=>!!e.current&&void 0!==e.current.autoplay;return(0,a.jsx)(function(){let n=o();return(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center pt-14 relative w-full",children:[(0,a.jsx)("video",{className:"h-[198px] w-[350px] md:h-[445px] md:w-[790px] transition-shadow",id:"ambient-video",src:"https://leckron-17032.web.app/ambient-480p.mp4",ref:e,loop:!0,muted:!0,controls:!n,autoPlay:n,onTimeUpdate:t}),(0,a.jsxs)("article",{className:"flex flex-col justify-center items-center w-[90%] md:w-3/4 mt-10 mb-10 relative",children:[(0,a.jsxs)("p",{className:"text-white md:text-lg w-[75%]",children:[(0,a.jsx)("span",{className:"ml-10"}),"This is a nice and simple effect to bring a little extra detail to videos on pages where the video is supposed to be the main focus, but other elements can take away from that. This was inspired by how YouTube displays browser videos in dark mode."]}),(0,a.jsxs)("p",{className:"text-white md:text-lg w-[75%] mt-5",children:[(0,a.jsx)("span",{className:"ml-10"}),"This works by taking the RGB values of the pixels in three rows: the top, middle, and bottom rows of the video. These are added up and averaged, and then the shadow is set. The process is fast, generally consuming only 7-8ms total on the system load. I also a small shadow transition effect, to make the change from color to color a bit nicer."]}),(0,a.jsx)("div",{className:"absolute h-full left-0 border-l-4 border-l-off-white"}),(0,a.jsx)("div",{className:"absolute h-full right-0 border-r-4 border-r-off-white"})]})]})},{})}},3177:function(e,t,o){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=o(6006),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,o){var a,r={},i=null,d=null;for(a in void 0!==o&&(i=""+o),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,a)&&!l.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:n,type:e,key:i,ref:d,props:r,_owner:s.current}}t.Fragment=r,t.jsx=i,t.jsxs=i},9268:function(e,t,o){"use strict";e.exports=o(3177)}},function(e){e.O(0,[253,769,744],function(){return e(e.s=1416)}),_N_E=e.O()}]);