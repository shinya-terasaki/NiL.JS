/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.16/15.4.4.16-1-10.js
 * @description Array.prototype.every applied to the Math object
 */


function testcase() {
        function callbackfn(val, idx, obj) {
            return ('[object Math]' !== Object.prototype.toString.call(obj));
        }

        try {
            Math.length = 1;
            Math[0] = 1;
            return !Array.prototype.every.call(Math, callbackfn);
        } finally {
            delete Math[0];
            delete Math.length;
        }
    }
runTestCase(testcase);
