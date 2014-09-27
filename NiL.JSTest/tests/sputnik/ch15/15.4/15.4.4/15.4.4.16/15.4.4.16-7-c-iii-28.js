/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.16/15.4.4.16-7-c-iii-28.js
 * @description Array.prototype.every - false prevents further side effects
 */


function testcase() {

        var result = false;
        var obj = { length: 20 };

        function callbackfn(val, idx, obj) {
            if (idx > 1) {
                result = true;
            }
            return val > 10;
        }

        Object.defineProperty(obj, "0", {
            get: function () {
                return 11;
            },
            configurable: true
        });

        Object.defineProperty(obj, "1", {
            get: function () {
                return 8;
            },
            configurable: true
        });

        Object.defineProperty(obj, "2", {
            get: function () {
                result = true;
                return 8;
            },
            configurable: true
        });

        return !Array.prototype.every.call(obj, callbackfn) && !result;
    }
runTestCase(testcase);
