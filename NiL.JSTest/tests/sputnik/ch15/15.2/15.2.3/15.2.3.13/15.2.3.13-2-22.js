/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.13/15.2.3.13-2-22.js
 * @description Object.isExtensible returns true if 'O' is extensible
 */


function testcase() {

        var obj = {};
        return Object.isExtensible(obj);
    }
runTestCase(testcase);
