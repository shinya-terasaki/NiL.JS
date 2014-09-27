/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-8-b-iii-1-16.js
 * @description Array.prototype.reduceRight - element to be retrieved is inherited accessor property on an Array
 */


function testcase() {

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === 2);
            }
        }

        try {
            Object.defineProperty(Array.prototype, "2", {
                get: function () {
                    return 2;
                },
                configurable: true
            });

            var arr = [0, 1, , ];

            arr.reduceRight(callbackfn);
            return testResult;

        } finally {
            delete Array.prototype[2];
        }
    }
runTestCase(testcase);
