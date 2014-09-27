/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-108.js
 * @description Object.create - 'configurable' property of one property in 'Properties' is own accessor property that overrides an inherited accessor property (8.10.5 step 4.a)
 */


function testcase() {

        var proto = {};
        Object.defineProperty(proto, "configurable", {
            get: function () {
                return true;
            }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var descObj = new ConstructFun();

        Object.defineProperty(descObj, "configurable", {
            get: function () {
                return false;
            }
        });

        var newObj = Object.create({}, {
            prop: descObj 
        });
        var result1 = newObj.hasOwnProperty("prop");
        delete newObj.prop;
        var result2 = newObj.hasOwnProperty("prop");

        return result1 === true && result2 === true;
    }
runTestCase(testcase);
