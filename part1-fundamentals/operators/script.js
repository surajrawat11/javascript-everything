//Arithmetic,logical,comparison,assignment,,unary,ternary

/*
+ - / % * **
= == ===
< > <= >= ! != !== !!
&& ||
?:
*/


// Arithmetic Operators
console.log("Addition:", 5 + 3);                  // 8
console.log("Concatenation:", "Hello" + "World"); // HelloWorld
console.log("Subtraction:", 10 - 4);              // 6
console.log("Negation:", -7);                     // -7
console.log("Multiplication:", 6 * 7);            // 42
console.log("Division:", 20 / 5);                 // 4
console.log("Floating Division:", 7 / 2);         // 3.5
console.log("Modulus:", 10 % 3);                  // 1
console.log("Even/Odd check:", 7 % 2 === 1);      // true
console.log("Exponentiation:", 2 ** 3);           // 8
console.log("Square root:", 9 ** 0.5);            // 3

// Assignment & Comparison
let x = 5;
let y = "5";
console.log("Assignment:", x);                    // 5
console.log("Loose equality:", x == y);           // true
console.log("Strict equality:", x === y);         // false
console.log("Loose inequality:", x != 6);         // true
console.log("Strict inequality:", x !== "5");     // true
console.log("Less than:", 3 < 5);                 // true
console.log("Greater than:", 10 > 2);             // true
console.log("Less than or equal:", 5 <= 5);       // true
console.log("Greater than or equal:", 7 >= 7);    // true

// Logical Operators
console.log("NOT:", !true);                       // false
console.log("NOT comparison:", !(x > 10));        // true
console.log("Double NOT truthy:", !!"text");      // true
console.log("Double NOT falsy:", !!0);            // false
console.log("AND:", true && false);               // false
console.log("AND condition:", (x > 3 && y == "5"));// true
console.log("OR:", true || false);                // true
console.log("OR fallback:", (null || "Guest"));   // Guest

// Conditional (Ternary)
let score = 45;
console.log("Ternary:", score >= 50 ? "Pass" : "Fail"); // Fail

