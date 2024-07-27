<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Array Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a function which tests if every element in an array passes a test condition.



<section class="usage">

## Usage

```javascript
import arrayfcn from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-tools-array-function@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/assert-tools-array-function/tags). For example,

```javascript
import arrayfcn from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-tools-array-function@v0.2.2-esm/index.mjs';
```

<a name="arrayfcn"></a>

#### arrayfcn( predicate )

Returns a function which tests if every element in an [`array`][mdn-array] passes a test condition. Given an input [`array`][mdn-array], the function returns `true` if all elements pass the test and `false` otherwise.

```javascript
import isOdd from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-odd@esm/index.mjs';

var arr1 = [ 1, 3, 5, 7 ];
var arr2 = [ 3, 5, 8 ];

var f = arrayfcn( isOdd );

var bool = f( arr1 );
// returns true

bool = f( arr2 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The returned function will return `false` if **not** provided an [`array`][mdn-array].
-   The returned function will return `false` if provided an empty [`array`][mdn-array].
-   A `predicate` function should accept a single argument: an [`array`][mdn-array] element. If the [`array`][mdn-array] element satisfies a test condition, the `predicate` function should return `true`; otherwise, the `predicate` function should return `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import isEven from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-even@esm/index.mjs';
import arrayfcn from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-tools-array-function@esm/index.mjs';

var arr1;
var arr2;
var bool;
var f;
var i;

arr1 = new Array( 25 );
for ( i = 0; i < arr1.length; i++ ) {
    arr1[ i ] = i;
}

arr2 = new Array( 25 );
for ( i = 0; i < arr2.length; i++ ) {
    arr2[ i ] = 2 * i;
}

f = arrayfcn( isEven );

bool = f( arr1 );
// returns false

bool = f( arr2 );
// returns true

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-tools-array-function.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-tools-array-function

[test-image]: https://github.com/stdlib-js/assert-tools-array-function/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/assert-tools-array-function/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-tools-array-function/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-tools-array-function?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-tools-array-function.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-tools-array-function/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-tools-array-function/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-tools-array-function/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-tools-array-function/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-tools-array-function/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-tools-array-function/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-tools-array-function/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-tools-array-function/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-tools-array-function/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

</section>

<!-- /.links -->
