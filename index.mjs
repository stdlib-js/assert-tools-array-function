// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var n=r,e=t;var i=function(r){if("function"!=typeof r)throw new TypeError(e("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,i;if(!n(t))return!1;if(0===(e=t.length))return!1;for(i=0;i<e;i++)if(!1===r(t[i]))return!1;return!0}};export{i as default};
//# sourceMappingURL=index.mjs.map
