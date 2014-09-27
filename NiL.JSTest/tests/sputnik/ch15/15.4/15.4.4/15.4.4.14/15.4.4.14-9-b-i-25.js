/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-9-b-i-25.js
 * @description Array.prototype.indexOf applied to Arguments object which implements its own property get method (number of arguments is less than number of parameters)
 */


function testcase() {

        var func = function (a, b) {
            return 0 === Array.prototype.indexOf.call(arguments, arguments[0]) &&
            -1 === Array.prototype.indexOf.call(arguments, arguments[1]);
        };

        return func(true);
    }
runTestCase(testcase);
