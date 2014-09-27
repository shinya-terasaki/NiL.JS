/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch07/7.6/7.6.1/7.6.1-8-5.js
 * @description Allow reserved words as property names by set function within an object, accessed via indexing: finally, return, void
 */


function testcase() {
        var test0 = 0, test1 = 1, test2 = 2;
        var tokenCodes  = {
            set finally(value){
                test0 = value;
            },
            get finally(){
                return test0;
            },
            set return(value){
                test1 = value;
            },
            get return(){
                return test1;
            },
            set void(value){
                test2 = value;
            },
            get void(){
                return test2;
            }
        }; 
        var arr = [
            'finally', 
            'return', 
            'void'
        ];
        for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);
