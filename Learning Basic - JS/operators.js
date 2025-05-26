/* Operators in JavaScript */

// 1. Arithmetic Operators

console.log( 5 + 3 ); // Addition

console.log( 5 - 3 ); // Subtraction

console.log( 5 * 3 ); // Multiplication

console.log( 5 / 3 ); // Division ==> Quotient => 1.6666666666666667

console.log( 5 % 4 ); // Modulus ==> Remainder => 2

console.log( 5 ** 3 ); // Exponentiation ==> Power => 125

// Increment and Decrement Operators
// let num = 5;

// num = num + 1; // Increment

// console.log( num );

// Increment ( ++ )

let num = 15;
num++; // Post Increment ==> num = num + 1
++num; // pre Increment ==> num = num + 1
console.log( num ); 

// Decrement ( -- )

let num1 = 20;

num1--; // Post Decrement ==> num1 = num1 - 1

--num1; // Pre Decrement ==> num1 = num1 - 1

console.log( num1 );

// Post Increment

/*
 1. Substitute
 2. Operation
 3. Increment
*/

let num2 = 10;
let num3 = num2++;

console.log( num3, num2 ); // 10, 11

let number = 10;

let number1 = number++;

console.log( number, number1 ); // 12, 21

// Pre Increment

let newNumber = 10;

//let newNumber1 = ++newNumber;

let newNumber1 = ++newNumber + ++newNumber

console.log( newNumber, newNumber1 ); // 11, 11