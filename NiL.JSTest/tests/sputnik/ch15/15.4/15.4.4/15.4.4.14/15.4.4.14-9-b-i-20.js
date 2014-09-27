/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-9-b-i-20.js
 * @description Array.prototype.indexOf - element to be retrieved is own accessor property without a get function that overrides an inherited accessor property on an Array-like object
 */


function testcase() {

        var proto = {};
        Object.defineProperty(proto, "0", {
            get: function () {
                return 2;
            },
            configurable: true
        });

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child.length = 1;

        Object.defineProperty(child, "0", {
            set: function () { },
            configurable: true
        });

        return Array.prototype.indexOf.call(child, undefined) === 0;
    }
runTestCase(testcase);
