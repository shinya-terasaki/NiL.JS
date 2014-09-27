/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-187.js
 * @description Object.defineProperties - 'O' is an Array, 'P' is an array index named property, 'P' is inherited data property  (15.4.5.1 step 4.c)
 */


function testcase() {
        try {
            Object.defineProperty(Array.prototype, "0", {
                value: 11,
                configurable: true
            });

            var arr = [];

            Object.defineProperties(arr, {
                "0": {
                    configurable: false
                }
            });
            return arr.hasOwnProperty("0") && typeof arr[0] === "undefined" && Array.prototype[0] === 11;
        } finally {
            delete Array.prototype[0];
        }
    }
runTestCase(testcase);
