/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-584.js
 * @description ES5 Attributes - Failed to add property into object (Date instance)
 */


function testcase() {
        var data = "data";
        try {
            Object.defineProperty(Date.prototype, "prop", {
                get: function () {
                    return data;
                },
                set: function (value) {
                    data = value;
                },
                enumerable: true,
                configurable: true
            });
            var dateObj = new Date();
            dateObj.prop = "myOwnProperty";

            return !dateObj.hasOwnProperty("prop") && dateObj.prop === "myOwnProperty" && data === "myOwnProperty";
        } finally {
            delete Date.prototype.prop;
        }
    }
runTestCase(testcase);
