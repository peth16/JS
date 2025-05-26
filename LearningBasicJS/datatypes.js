// Primitive Data Types - Number, String, Boolean, Undefined, Null

// Non-Primitive Data Types - Object, Array, Function, Date, RegExp

// Primitive Data Types

// Number

var num = 120;

var num = 120.5;

console.log( num ); 

//string

let userName = "Peth Aravind";

userName = 'Java is a Single Threaded Language';

console.log( userName );

// Boolean

let condition = true;

condition = false;

console.log( condition );

// undefined

let userAge;

userAge = undefined;

console.log( userAge );

// null

let emptyValue = null;

console.log( emptyValue );

// Single Line Comment

/* 
  Multiple Line Comment
  JavaScript
*/

/*  Non-Primitive Data Types or Reference Types  */

// Array

let multipleUserNames = [ "Javascript", "Java", "Python", "C++" ];
// Index                    0         1       2        3

console.log( multipleUserNames );

console.log( multipleUserNames[0], multipleUserNames[3] ); // Accessing first element

console.log( multipleUserNames.length ); // Length of the array

console.log( multipleUserNames.length-1 ); // Last value of the string in the array

console.log( multipleUserNames[multipleUserNames.length-1] ); // Accessing last element

// Object - Key-Value Pair

let vechicle = { 
    name: "Car",
    model: "BMW",
    year: 2020,
    color: "Black"
 }

 console.log( vechicle );

 console.log( vechicle.name ); // Accessing object value using key
 console.log( vechicle["model"] ); // Accessing object value using key
