/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-558.js
 * @description ES5 Attributes - [[Set]] attribute of accessor property ([[Get]] is a Function, [[Set]] is a Function, [[Enumerable]] is false, [[Configurable]] is false) is the expected function
 */


function testcase() {
        var obj = {};

        var getFunc = function () {
            return 1001;
        };

        var verifySetFunc = "data";
        var setFunc = function (value) {
            verifySetFunc = value;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: setFunc,
            enumerable: false,
            configurable: false
        });

        obj.prop = "overrideData";
        var propertyDefineCorrect = obj.hasOwnProperty("prop");
        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return propertyDefineCorrect && desc.set === setFunc && verifySetFunc === "overrideData";
    }
runTestCase(testcase);
