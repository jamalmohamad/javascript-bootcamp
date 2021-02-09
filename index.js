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


// const 
const COLOR_RED = '#f00';


const colorMode = 'solarized';

switch (colorMode) {
    case "solarized":
        console.log('solarized mode set!');
        document.body.style.background = 'palegoldenrod';
        break;
    case 'dark':
        console.log('dark mode set!');
        document.body.style.background = 'black';
        break;
    default:
        console.log('light mode set!');
        document.body.style.background = 'ghostwhite';
}



/* javascript data types
 Primitive types

 string
 number
 boolean
 undefined
 null
 symbol

 everything else - Object type


*/


let m = 'some string';

console.log(typeof window);

// 1) Explicit type conversion

// Boolean(value)
// 2) Implicit type conversion (coercion)
//  console.log('1' * '2');

// console.log('10' + 20);  == 1020 lol


/*
falsy values
false
0
''
null
undefined
NaN
*/

// 1) avoid direct comparisions in conditionals

if (!username) {
    console.log('no user');
}

// 2) use triple equals === (strict equals operator)
if(null === undefined) {
    console.log('equals');

} else {
    console.log('not equals');
}


// 3)  convert to real Boolean values where needed
if(Boolean(NaN) === Boolean(NaN)) {
    console.log('equal')
} else {
    console.log('not equals');
}




const isAuthenticated = false;
let cartItemCount = 0;

if (isAuthenticated) {
    // add item to cart
    cartItemCount = 1;
} else {
    // tell user to login
    // console.log("Please log in");
    cartItemCount = 0;
}

// terinery operator
const cartItemCount = isAuthenticated ? 1 : 0;
console.log(cartItemCount);


const age = 26;
const greeting = age < 10 ? "Hey there" : "That's an intern"



const isEmailVerified = false;

const email = isEmailVerified && 'reed@gmail.com';
console.log(email)