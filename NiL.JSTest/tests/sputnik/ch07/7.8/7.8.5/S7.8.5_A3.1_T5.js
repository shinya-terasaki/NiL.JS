// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * RegularExpressionFlags :: IdentifierPart
 *
 * @path ch07/7.8/7.8.5/S7.8.5_A3.1_T5.js
 * @description IdentifierPart :: mg
 */

//CHECK#1
var regexp = /(?:)/mg; 
if (regexp.global !== true) {
  $ERROR('#1: var regexp = /(?:)/g; regexp.global === true. Actual: ' + (regexp.global));
}

//CHECK#2 
if (regexp.ignoreCase !== false) {
  $ERROR('#2: var regexp = /(?:)/g; regexp.ignoreCase === false. Actual: ' + (regexp.ignoreCase));
}

//CHECK#3
if (regexp.multiline !== true) {
  $ERROR('#3: var regexp = /(?:)/g; regexp.multiline === true. Actual: ' + (regexp.multiline));
}                            

