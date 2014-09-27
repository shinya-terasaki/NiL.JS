// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Check For Statement for automatic semicolon insertion.
 * If automatic insertion semicolon would become one of the two semicolons in the header of a For Statement.
 * Use one semicolon
 *
 * @path ch07/7.9/S7.9_A6.2_T8.js
 * @description For header is (false \n semicolon false \n)
 * @negative
 */

//CHECK#1
for(false
    ;false
) {
  break;
}

