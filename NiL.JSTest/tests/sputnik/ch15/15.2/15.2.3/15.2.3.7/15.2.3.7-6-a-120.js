/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-120.js
 * @description Object.defineProperties - 'O' is an Array, 'P' is the length property of 'O', the [[Value]] field of 'desc' is absent, test updating the [[Writable]] attribute of the length property from true to false (15.4.5.1 step 3.a.i)
 */


function testcase() {

        var arr = [];

        try {
            Object.defineProperties(arr, {
                length: { writable: false }
            });

            return dataPropertyAttributesAreCorrect(arr, "length", 0, false, false, false);
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);
