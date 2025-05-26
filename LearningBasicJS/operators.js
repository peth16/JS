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


/* Assignment Operator */

let age1 = 20;

//age1 = age1 + 10;
//age1 += 10;  // ==> Same as Above

//age1 -= 10

//age1 *=2

//age1 /=2

//age1 %=2

age1 **=2

console.log( age1 );


// Relational Operator  or Comparision Operator


console.log( 10 < 20 ); //Less Than

console.log( 20 <= 20 ) // Less than Equal

console.log( 20 > 19 ); // Greater than

console.log( 40 <= 40 )  // Greater than or Equal to

console.log ( 50 == '50' ) // Equalto

console.log( 50 === '50' ); // Strict Equalto  ==> Both Data Type should Same or else should be False

console.log( 40 != '20' ) // Not Equal

console.log( 40 !== '40' ); // Strict Not Equal


// Logical Operators

// Logical AND  (  &&  )

/* cond1 cond2 Result
    true true  true
    true false false
    false true false
    false false false
*/

let uAge = 18;

console.log( uAge>=18 && uAge<=30 ); // true && true

let uAge1 = 35;

console.log( uAge1>=18 && uAge1<=30 ); // true && false

let uAge2 = 16;

console.log( uAge2>=18 && uAge2<=30 ); // flase && true


let IDProof = "Aadhaar";

console.log( IDProof=="PAN Card" && IDProof=="Licence" ); // false && false

// Logical OR  ( || )

/* cond1 cond2 Result
    true true  true
    true false true
    false true true
    false false false
*/

let pwd_input = "12345"

console.log( pwd_input== "12345" || pwd_input=="54321" );  // true || false

console.log( pwd_input== "54321" || pwd_input=="12345" );  // false || true

let username = "ABC";

console.log( pwd_input== "12345" || username=="ABC" );  // true || true

console.log( pwd_input== "54321" || username=="ABCD" );  // false || false

// Logical Not ( ! )

console.log( !10 > 4 );

console.log( !false );


