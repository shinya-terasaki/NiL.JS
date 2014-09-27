// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Embedded "if/else" constructions are allowed
 *
 * @path ch12/12.5/S12.5_A12_T1.js
 * @description Using embedded "if/else" into "if/else" constructions
 */

//CHECK# 1
if(true)
  if (false)
    $ERROR('#1.1: At embedded "if/else" constructions engine must select right branches');
  else
    ;
else 
  if (true)
    $ERROR('#1.2: At embedded "if/else" constructions engine must select right branches');
  else
    $ERROR('#1.3: At embedded "if/else" constructions engine must select right branches');

//CHECK# 2
if(true)
  if (true)
    ;
  else
    $ERROR('#2.1: At embedded "if/else" constructions engine must select right branches');
else 
  if (true)
    $ERROR('#2.2: At embedded "if/else" constructions engine must select right branches');
  else
    $ERROR('#2.3: At embedded "if/else" constructions engine must select right branches');

//CHECK# 3
if(false)
  if (true)
    $ERROR('#3.1: At embedded "if/else" constructions engine must select right branches');
  else
    $ERROR('#3.2: At embedded "if/else" constructions engine must select right branches');
else 
  if (true)
    ;
  else
    $ERROR('#3.3: At embedded "if/else" constructions engine must select right branches');

//CHECK# 4
if(false)
  if (true)
    $ERROR('#4.1: At embedded "if/else" constructions engine must select right branches');
  else
    $ERROR('#4.2: At embedded "if/else" constructions engine must select right branches');
else 
  if (false)
    $ERROR('#4.3: At embedded "if/else" constructions engine must select right branches');
  else
    ;

