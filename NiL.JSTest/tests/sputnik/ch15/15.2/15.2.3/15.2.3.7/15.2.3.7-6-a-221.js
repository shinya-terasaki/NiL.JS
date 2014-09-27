/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-221.js
 * @description Object.defineProperties - 'O' is an Array, 'P' is an array index property, the [[Get]] field of 'desc' and the [[Get]] attribute value of 'P' are two objects which refer to the same object  (15.4.5.1 step 4.c)
 */


function testcase() {
        var arr = [];

        function get_func() {
            return 10;
        }

        Object.defineProperty(arr, "0", {
            get: get_func
        });

        Object.defineProperties(arr, {
            "0": {
                get: get_func
            }
        });
        return accessorPropertyAttributesAreCorrect(arr, "0", get_func, undefined, undefined, false, false);
    }
runTestCase(testcase);
