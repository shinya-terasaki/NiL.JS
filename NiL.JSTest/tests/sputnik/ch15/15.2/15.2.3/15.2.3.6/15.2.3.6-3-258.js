/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-258.js
 * @description Object.defineProperty - 'Attributes' is an Arguments object which implements its own [[Get]] method to access the 'set' property (8.10.5 step 8.a)
 */


function testcase() {
        var obj = {};
        var data = "data";
        var argObj = (function () { return arguments; })();
        argObj.set = function (value) {
            data = value;
        };

        Object.defineProperty(obj, "property", argObj);
        obj.property = "overrideData";

        return obj.hasOwnProperty("property") && data === "overrideData";
    }
runTestCase(testcase);
