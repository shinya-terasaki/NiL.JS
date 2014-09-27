/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-274.js
 * @description Object.create - 'set' property of one property in 'Properties' is own accessor property that overrides an inherited data property (8.10.5 step 8.a)
 */


function testcase() {
        var data1 = "data";
        var data2 = "data";

        var proto = {};
        proto.set = function (value) {
            data2 = value;
        };

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var child = new ConstructFun();
        Object.defineProperty(child, "set", {
            get: function () {
                return function (value) {
                    data1 = value;
                };
            }
        });

        var newObj = Object.create({}, {
            prop: child 
        });

        var hasProperty = newObj.hasOwnProperty("prop");

        newObj.prop = "overrideData";

        return hasProperty && data1 === "overrideData" && data2 === "data";
    }
runTestCase(testcase);
