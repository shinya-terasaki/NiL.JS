/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-153.js
 * @description Object.defineProperty - 'writable' property in 'Attributes' is not present  (8.10.5 step 6)
 */


function testcase() {
        var obj = {};

        var attr = {
            value: 100
        };

        Object.defineProperty(obj, "property", attr);

        var beforeWrite = obj.hasOwnProperty("property");

        obj.property = "isWritable";

        var afterWrite = (obj.property === "isWritable");

        return beforeWrite === true && afterWrite === false;
    }
runTestCase(testcase);
