// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The toString function is not generic, it cannot be transferred
 * to other kinds of objects for use as a method and there is should be
 * a TypeError exception if its this value is not a Number object
 *
 * @path ch15/15.7/15.7.4/15.7.4.2/S15.7.4.2_A4_T04.js
 * @description transferring to the Object objects
 */

//CHECK#1
try{
  var s1 = new Object();
  s1.toString = Number.prototype.toString;
  var v1 = s1.toString(); 
  $ERROR('#1: Number.prototype.toString on not a Number object should throw TypeError');
}
catch(e){
  if(!(e instanceof TypeError)){
    $ERROR('#1: Number.prototype.toString on not a Number object should throw TypeError, not '+e);
  }
}

//CHECK#2
try{
  var s2 = new Object();
  s2.myToString = Number.prototype.toString;
  var v2 = s2.myToString(); 
  $ERROR('#2: Number.prototype.toString on not a Number object should throw TypeError');
}
catch(e){
  if(!(e instanceof TypeError)){
    $ERROR('#2: Number.prototype.toString on not a Number object should throw TypeError, not '+e);
  }
}


