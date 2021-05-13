//before use of strict mode
t=10;
console.log(t); 

//use of strict mode
"use strict";
x= 10;
console.log(x);
var x;

//Hoisting
y= 10;
if(true){
    z=2;
}
var y,z;
console.log(`Y = ${y} and Z = ${z} .`);