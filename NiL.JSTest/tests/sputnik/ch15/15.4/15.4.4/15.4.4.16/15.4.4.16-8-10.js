/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.16/15.4.4.16-8-10.js
 * @description Array.prototype.every - subclassed array when length is reduced
 */


function testcase() {
  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();
  f.length = 2;
  
  function cb(val)
  {
    if(val>2)
      return false;
    else
      return true;    
  }
  var i = f.every(cb);
  
  if (i === true) {
    return true;
  }
 }
runTestCase(testcase);
