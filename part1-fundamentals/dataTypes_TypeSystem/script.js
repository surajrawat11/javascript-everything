// types of data

// primitive -> when you copy a primitive, you get a new independent value
//              (string,boolean,number,undefined,null,symbol,BigInt)

//reference ->  when you copy a reference type, you don’t get a new object — 
//              you just get another pointer to the same object in memory
//              (object,array,function)

/*Primitive → copy of value → independent.

Reference → copy of reference → shared object*/
// () {} []

let a = 19;
b = a;

let c = [3,6,7];
d = c;
d.pop;

//null in JavaScript is a primitive value that represents the intentional absence of any object.
let student = null;

//undefined in JavaScript is a primitive value that means a variable has been declared 
// but not assigned any value yet
let i;

//symbol -> unique immutable value

// Symbol in JavaScript is a primitive data type introduced in ES6 
// that creates unique and immutable identifiers, often used as object keys 
// to avoid property name conflicts.

let obj = {
    uid: 1,
    name: "suraj",   // Using Symbol as a unique key in object
    age: 19,         // 'uid' (string) and Symbol("uid") are different keys
    email: "xyz@gmail.com",    
};

let u1 = Symbol("uid");  // Ensures no property name conflict, keeps data hidden/unique
obj[u1] = "001";


// BigInt is a primitive type in JS used to represent integers 
// larger than Number.MAX_SAFE_INTEGER with arbitrary precision.

// Normal number limit
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// BigInt example
const big = 123456789012345678901234567890n;
console.log(big); // 123456789012345678901234567890n

// Operations
const a = 1254151235230n;
const b = 214134134340n;
console.log(a + b);  //1468285369570n


// Dynamic typing means variables in JS can change type at runtime 
// based on the value assigned, without explicit type declaration.
let x = 10;       // x is a Number
x = "Suraj";      // now x is a String
x = true;         // now x is a Boolean


// JavaScript is dynamically typed, meaning variables can change type at runtime.
// This flexibility causes quirks like type coercion, NaN !== NaN, typeof null === "object",
// and loose equality (==) producing unexpected results.


//Type coercion in JavaScript means the language automatically converts one data type into another 
// when needed during operations or comparisons.

console.log(1 + "2");     // "12"   (number → string)
console.log(1 - "2");     // -1     (string → number)
console.log(true + true); // 2      (boolean → number)
console.log("5" * "2");   // 10     (strings → numbers)
console.log("" == 0);     // true   (empty string → number)

// Truthy vs Falsy values
// Truthy values evaluate to true in boolean context.
// Falsy values (false, 0, -0, 0n, "", null, undefined, NaN) evaluate to false.

// check !!before a value to check value is truthy or falsy



//common truthy and falsy values

// Falsy values
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(0n));        // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// Truthy values
console.log(Boolean(true));        // true
console.log(Boolean(42));          // true (non-zero number)
console.log(Boolean("hello"));     // true (non-empty string)
console.log(Boolean("0"));         // true (string with zero)
console.log(Boolean("false"));     // true (string with text "false")
console.log(Boolean([]));          // true (array)
console.log(Boolean({}));          // true (object)
console.log(Boolean(function(){})); // true (function)
console.log(Boolean(123n));        // true (non-zero BigInt)



