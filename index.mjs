// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n){if("function"!=typeof n)throw new TypeError(t("invalid argument. Must provide a function. Value: `%s`.",n));return function(t){var e,i;if(!r(t))return!1;if(0===(e=t.length))return!1;for(i=0;i<e;i++)if(!1===n(t[i]))return!1;return!0}}export{n as default};
//# sourceMappingURL=index.mjs.map
