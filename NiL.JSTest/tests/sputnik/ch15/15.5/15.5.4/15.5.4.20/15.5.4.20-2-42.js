/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.5/15.5.4/15.5.4.20/15.5.4.20-2-42.js
 * @description String.prototype.trim - TypeError exception was thrown  when 'this' is an object that both toString and valueOf wouldn't return primitive value.
 */


function testcase() {
        var toStringAccessed = false;
        var valueOfAccessed = false;
        var obj = {
            toString: function () {
                toStringAccessed = true;
                return {};
            },
            valueOf: function () {
                valueOfAccessed = true;
                return {};
            }
        };
        try {
            String.prototype.trim.call(obj);
            return false;
        } catch (e) {
            return valueOfAccessed && toStringAccessed && (e instanceof TypeError);
        }
    }
runTestCase(testcase);
