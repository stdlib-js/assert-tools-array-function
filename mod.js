// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol.toStringTag:"";var e=r&&"symbol"==typeof Symbol.toStringTag?function(r){var e,a,l,f,u;if(null==r)return t.call(r);a=r[n],u=n,e=null!=(f=r)&&o.call(f,u);try{r[n]=void 0}catch(o){return t.call(r)}return l=t.call(r),e?r[n]=a:delete r[n],l}:function(r){return t.call(r)};var a=Array.isArray?Array.isArray:function(r){return"[object Array]"===e(r)};function l(r){if("function"!=typeof r)throw new TypeError(function(){var r,t=arguments,o="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)o+="&arg[]="+encodeURIComponent(t[r]);return o}("05Z3V",r));return function(t){var o,n;if(!a(t))return!1;if(0===(o=t.length))return!1;for(n=0;n<o;n++)if(!1===r(t[n]))return!1;return!0}}export{l as default};
//# sourceMappingURL=mod.js.map
