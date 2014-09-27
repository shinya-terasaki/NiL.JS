/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-427.js
 * @description ES5 Attributes - success to update [[Set]] attribute of accessor property ([[Get]] is undefined, [[Set]] is undefined, [[Enumerable]] is true, [[Configurable]] is true) to different value
 */


function testcase() {
        var obj = {};
        var verifySetFunc = "data";
        var setFunc = function (value) {
            verifySetFunc = value;
        };

        Object.defineProperty(obj, "prop", {
            get: undefined,
            set: undefined,
            enumerable: true,
            configurable: true
        });

        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        Object.defineProperty(obj, "prop", {
            set: setFunc
        });

        obj.prop = "overrideData";
        var propertyDefineCorrect = obj.hasOwnProperty("prop");
        var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

        return propertyDefineCorrect && typeof desc1.set === "undefined" && desc2.set === setFunc && verifySetFunc === "overrideData";
    }
runTestCase(testcase);
