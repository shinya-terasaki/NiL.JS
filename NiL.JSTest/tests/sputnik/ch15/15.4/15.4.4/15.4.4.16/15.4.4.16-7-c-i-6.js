/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.16/15.4.4.16-7-c-i-6.js
 * @description Array.prototype.every - element to be retrieved is own data property that overrides an inherited accessor property on an Array
 */


function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return val === 11;
        }

        try {
            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return 9;
                },
                configurable: true
            });
            return [11].every(callbackfn) && accessed;
        } finally {
            delete Array.prototype[0];
        }
    }
runTestCase(testcase);
