/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-210.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property, 'name' makes no change if every field in 'desc' is absent (name is data property) (15.4.5.1 step 4.c)
 */


function testcase() {
        var arrObj = [];

        arrObj[0] = 101; // default value of attributes: writable: true, configurable: true, enumerable: true

        Object.defineProperty(arrObj, "0", {});
        return dataPropertyAttributesAreCorrect(arrObj, "0", 101, true, true, true);
    }
runTestCase(testcase);
