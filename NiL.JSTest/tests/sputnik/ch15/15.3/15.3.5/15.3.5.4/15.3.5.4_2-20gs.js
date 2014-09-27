/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.3/15.3.5/15.3.5.4/15.3.5.4_2-20gs.js
 * @description Strict mode - checking access to strict function caller from non-strict function (New'ed object from Anonymous FunctionExpression includes strict directive prologue)
 * @noStrict
 * @negative TypeError
 */


var obj = new (function () {
    "use strict";
    return gNonStrict();
});


function gNonStrict() {
    return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}

