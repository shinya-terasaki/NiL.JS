// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Blocks within "for" braces are not allowed
 *
 * @path ch12/12.6/12.6.3/S12.6.3_A8_T2.js
 * @description Checking if execution of "for(index=0; {index++;index<100;}; index*2;) {  arr.add(""+index);}" fails
 * @negative
 */

var arr = [];

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
for(index=0; {index++;index<100;}; index*2;) {	arr.add(""+index);};
//
//////////////////////////////////////////////////////////////////////////////

