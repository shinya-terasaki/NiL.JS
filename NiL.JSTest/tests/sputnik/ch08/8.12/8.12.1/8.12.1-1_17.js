/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch08/8.12/8.12.1/8.12.1-1_17.js
 * @description Properties - [[HasOwnProperty]] (writable, non-configurable, enumerable inherited value property)
 */

function testcase() {

    var base = {};
    Object.defineProperty(base, "foo", {value: 42, writable:true, enumerable:true});
    var o = Object.create(base);
    return o.hasOwnProperty("foo")===false;

}
runTestCase(testcase);
