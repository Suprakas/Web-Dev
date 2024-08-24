// 2 types 1. Primitive 2. Reference or Non Primitive

// Primitive -- > Boolean, Number, Symbol, String, Undefined, null, BigInt (total 7 types)

// Reference --> Array, Object, Functions

const score= 100
const scoreValue = 100.3

const isLoggingIn = false

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')


console.log(anotherid === id)

const bigNumber = 345566698523232323232n // bigInt datatype

const arr =["a","b","c"];

let myobj = {
    name: "babai",
    age: 26,
}

const myfun = function(){
    console.log("hello world");
}

// Special primitive data type is Symbol
const schoolId = Symbol('123')
const examId = Symbol('123')
console.log(schoolId === examId); // O/P = false bcz we use Symbol datatype with 
// Basically Symbol datatype providing uniqueness to same value of different variable that's why return type 
// Symbol datatype is different
console.log(typeof schoolId);
console.log(typeof examId);

// "Null" er datatype Object hy -> interview question



// There are mainly 2 types of datatypes :
// 1. Primitive ( call by value = copy version ):
// - string =>  string 
// - number => number
// - Boolean => boolean
// - null => object
// - undefined => undefined 
// - symbol => symbol
// - Bigint  => Bigint

// 2. Non-Primitive ( reference type ):
// - Array => object 
// - Object => object
// - Function => Object Function


// There are two categories of data types:

// 1)Primitive: These are call-by-value. 
// The types of primitive data types include String, Number, Boolean, Null, Undefined, Symbol, and BigInt.
//  Note that Symbols uniquely identify variables, even if two variables have the same data and data type. 
//  Primitive variables datatype is same but null datatype is object 

// 2) Non-primitive: These are call-by-reference. The types of non-primitive data types are Array, Object, and Function.
//  The data type for these is 'object,' but for functions, they return a data type of 'function,' 
//  though they also have an object data type.

//JavaScript is "Dynamically typed language" because all type checks are being performed during Runtime .




