/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-108.js
 * @description Object.defineProperties - 'P' is accessor property, P.configurable is true and properties.configurable is false
 */


function testcase() {

        var obj = {};

        function get_func() {
            return 10;
        }
        function set_func(value) {
            obj.setVerifyHelpProp = value;
        }

        Object.defineProperty(obj, "foo", {
            get: get_func,
            set: set_func,
            enumerable: true,
            configurable: true
        });

        Object.defineProperties(obj, {
            foo: {
                configurable: false
            }
        });
        return accessorPropertyAttributesAreCorrect(obj, "foo", get_func, set_func, "setVerifyHelpProp", true, false);
    }
runTestCase(testcase);
