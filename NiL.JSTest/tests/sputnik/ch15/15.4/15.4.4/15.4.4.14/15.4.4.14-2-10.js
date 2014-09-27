/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-2-10.js
 * @description Array.prototype.indexOf - 'length' is inherited accessor property
 */


function testcase() {

        var proto = {};
        Object.defineProperty(proto, "length", {
            get: function () {
                return 2;
            },
            configurable: true
        });

        var Con = function () {};
        Con.prototype = proto;

        var childOne = new Con();
        childOne[1] = true;
        var childTwo = new Con();
        childTwo[2] = true;

        return Array.prototype.indexOf.call(childOne, true) === 1 &&
            Array.prototype.indexOf.call(childTwo, true) === -1;
    }
runTestCase(testcase);
