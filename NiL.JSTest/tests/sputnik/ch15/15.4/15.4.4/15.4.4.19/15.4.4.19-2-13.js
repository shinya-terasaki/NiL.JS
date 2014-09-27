/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.19/15.4.4.19-2-13.js
 * @description Array.prototype.map - applied to the Array-like object when 'length' is inherited accessor property without a get function
 */


function testcase() {

        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        var proto = {};
        Object.defineProperty(proto, "length", {
            set: function () { },
            configurable: true
        });

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child[0] = 11;
        child[1] = 12;

        var testResult = Array.prototype.map.call(child, callbackfn);

        return 0 === testResult.length;
    }
runTestCase(testcase);
