(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{1416:function(e,t,a){Promise.resolve().then(a.bind(a,2793))},2793:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r}});var o=a(9268),n=a(6006);function r(){let e=(0,n.useRef)(null);function t(){let t=e.current,a=document.createElement("canvas");if(t){a.width=t.videoWidth,a.height=t.videoHeight;let o=a.getContext("2d",{willReadFrequently:!0});if(o){o.drawImage(t,0,0,a.width,a.height);let n=o.getImageData(0,0,1,a.width),r=o.getImageData(a.height-1,0,1,a.width);!function(t,a){let o=0,n=0,r=0,s=0;for(let e=0;e<t.length;e+=4)o+=t[e],n+=t[e+1],r+=t[e+2],s+=1;for(let e=0;e<a.length;e+=4)o+=a[e],n+=a[e+1],r+=a[e+2],s+=1;!function(t,a,o,n){let r=Math.floor(t/n),s=Math.floor(a/n),l=Math.floor(o/n);e.current&&(e.current.style.boxShadow="\n      0 0 20px rgba(".concat(r,",").concat(s,",").concat(l,", 0.2),\n      0 0 40px rgba(").concat(r,",").concat(s,",").concat(l,", 0.4),\n      0 0 60px rgba(").concat(r,",").concat(s,",").concat(l,", 0.6),\n      0 0 80px rgba(").concat(r,",").concat(s,",").concat(l,", 0.8),\n      0 0 110px rgba(").concat(r,",").concat(s,",").concat(l,", 1)\n      "))}(o,n,r,s)}(n.data,r.data)}}}let a=()=>!!e.current&&void 0!==e.current.autoplay;return(0,o.jsx)(function(){let n=a();return(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center pt-14 relative w-full",children:[(0,o.jsx)("video",{className:"h-[198px] w-[350px] md:h-[445px] md:w-[790px] transition-shadow",id:"ambient-video",src:"https://leckron-17032.web.app/ambient-480p.mp4",ref:e,loop:!0,muted:!0,controls:!n,autoPlay:n,playsInline:!0,onTimeUpdate:t}),(0,o.jsxs)("article",{className:"flex flex-col justify-center items-center w-[90%] md:w-3/4 mt-10 mb-10 relative",children:[(0,o.jsxs)("p",{className:"text-white md:text-lg w-[75%]",children:[(0,o.jsx)("span",{className:"ml-5 md:ml-10"}),"This is a nice and simple effect to bring a little extra detail to videos on pages where the video is supposed to be the main focus, but other elements can take away from that. This was inspired by how YouTube displays browser videos in dark mode."]}),(0,o.jsxs)("p",{className:"text-white md:text-lg w-[75%] mt-5",children:[(0,o.jsx)("span",{className:"ml-5 md:ml-10"}),"This works by taking the RGB values of the pixels in three rows: the top, middle, and bottom rows of the video. These are added up and averaged, and then the shadow is set. The process is fast, generally consuming only 7-8ms total on the system load. I also a small shadow transition effect, to make the change from color to color a bit nicer."]}),(0,o.jsx)("div",{className:"absolute h-full left-0 border-l-4 border-l-off-white"}),(0,o.jsx)("div",{className:"absolute h-full right-0 border-r-4 border-r-off-white"})]})]})},{})}},3177:function(e,t,a){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=a(6006),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var o,r={},c=null,d=null;for(o in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,o)&&!i.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:n,type:e,key:c,ref:d,props:r,_owner:l.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},9268:function(e,t,a){"use strict";e.exports=a(3177)}},function(e){e.O(0,[253,769,744],function(){return e(e.s=1416)}),_N_E=e.O()}]);