// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * First expression is evaluated first, and then second expression
 *
 * @path ch11/11.7/11.7.2/S11.7.2_A2.4_T1.js
 * @description Checking with "="
 */

//CHECK#1
var x = 0; 
if ((x = 1) >> x !== 0) {
  $ERROR('#1: var x = 0; (x = 1) >> x === 0. Actual: ' + ((x = 1) >> x));
}

//CHECK#2
var x = -4; 
if (x >> (x = 1) !== -2) {
  $ERROR('#2: var x = -4; x >> (x = 1) === -2. Actual: ' + (x >> (x = 1)));
}


