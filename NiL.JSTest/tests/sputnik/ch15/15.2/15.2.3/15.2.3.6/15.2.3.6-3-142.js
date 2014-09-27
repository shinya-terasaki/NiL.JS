/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-142.js
 * @description Object.defineProperty - 'Attributes' is a Boolean object that uses Object's [[Get]] method to access the 'value' property  (8.10.5 step 5.a)
 */


function testcase() {
        var obj = { };

        var boolObj = new Boolean(true);

        boolObj.value = "Boolean";

        Object.defineProperty(obj, "property", boolObj);

        return obj.property === "Boolean";
    }
runTestCase(testcase);
