/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Compute the coversed sine of a single-precision floating-point number (in radians).
*
* @module @stdlib/math-base-special-coversinf
*
* @example
* var coversinf = require( '@stdlib/math-base-special-coversinf' );
*
* var v = coversinf( 0.0 );
* // returns 1.0
*
* v = coversinf( 3.141592653589793/2.0 );
* // returns 0.0
*
* v = coversinf( -3.141592653589793/6.0 );
* // returns 1.5
*
* v = coversinf( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
