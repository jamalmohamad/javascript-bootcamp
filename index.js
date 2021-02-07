"use strict";


// hoisting
var age ;
console.log(age);
age = 26;


console.log("Hello World!");


// camelCased
// variables

var firstName = "John";
console.log(firstName);

// 1)  names only contain letters, numbers, symbol $ _
// 2) first character must not be a number



// message = "Hello World!";
// // browser - window
// // server  - global
// console.log(window.message);




// 1) sloppy mode - normal mode - default in scripts
// 2) strict mode - throws more errors, prevents pitfalls


// let  / const
console.log(age);

// Temporal dead zone

// let age = 26;
// let age = 26;   // will get syntax error for duplicate


 const weight = 150;
 const moonWeight = `You weight  ${weight * 0.165} pounds on the moon`
 console.log(moonWeight);


 // template literal ` `



let isModalVisisble = true;

if(isModalVisisble) {
    // do something
}


let isLoading;

let hasPosition;

const COLOR_RED = '#f00';
