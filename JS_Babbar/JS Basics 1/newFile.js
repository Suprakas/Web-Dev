// line below is used to print content in the console window, 
//user experience good korbar jnno script tag amra last a add kori.
console.log('me2');
console.log('this is js file');

console.log("33")
const accountId = 14556
let accountEmail = "supr@google.com"
var accountPassword = "12367"
accountCity = "kolkata"
let accountState;
// accountId = 2

console.log(accountId);

accountEmail ="rg@yu.com"
accountPassword ="45678"
accountCity = "pune"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
prefer no to use var, because of issue in block scope and functional scope
*/

// variables

let a =5;
console.log(a);
let b = true;
console.log(b);
// difference bet using let and var is : scope of var is global, scope of let is : inside the function.
var c = 36;
console.log(c);
// we declare vaiables by this rules: 1. name should not be reservered key word. 2. name should be in camel case. 
// 3. there should not be a underscore or $ or number.

let myName = " babai ";
console.log(myName);

// dynamic typing ->

let firstName = " babai ";
console.log(firstName);

firstName = 3;

console.log(firstName);

// data types

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

// **** Type Conversion in JS **** /


let point= "33aaa"

console.log(typeof point);
console.log((typeof point));

let valueInNumber = Number(point)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let point1= null

console.log(typeof point2);
console.log((typeof point2));

let point3= null

console.log(typeof point3);
console.log((typeof point3));

//"33" => number
//"33aaa"=>NaN
//true => 1; false => 0

let isLoggedIn = "er"

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1=> true ; 0 => false
//""=> false
// "rt" => true

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);

console.log(typeof stringNumber)

// ********* operations ************

let value = 3

let negValue = -value
console.log(negValue);

let str1 ="New"
let str2 = " String"

let str3 = str1 + str2

console.log(str3)

console.log("1"+2)
console.log(1+"2")

console.log("1"+"2")

console.log("1"+2+3)

console.log(1+2+"3") // important


console.log(+true) // 1

console.log(+ "") // 0

// Arithmatic operators

let x = 12;
let y= 5;

let z = 12%5;

console.log(z);

// equality operator -> 1. loose equality (==) -> only value check  2. strict equality (===) -> both data and value check

// ternary operator => cond.? val1: val2

let age = 18;

let response = (age >= 18 ) ? "yes vote":" no vote";

console.log(response);

// logical operator -> AND ( && ), OR ( || ), NOT ( ! )

// Bitwise operator ->  AND ( & ), OR ( | )

// Falsy value -> undefined, null, 0, false, NaN, ' '

// Truthy value -> Anthing that is not falsy.

console.log(null == 0)
console.log(null >= 0)
console.log(null > 0)

console.log(undefined == 0)
console.log(undefined >= 0)
console.log(undefined > 0)

console.log(NaN == 0)
console.log(NaN >= 0)
console.log(NaN > 0)

// comparison of different data types, above codes, usually we avoid this type of comparisons

console.log("2" === 2)

// strict check => === , also checks datatypes not only the values

// ***** Control Statements => 1. If-Else 2. Switch ****

// 1. if-else

let marks = 41;

if(marks >= 95 ) {
    console.log('O');
}
else if(marks >= 90) {
    console.log('AA');
}
else if ( marks >= 80) {
    console.log('A');
}
else if ( marks >= 70) {
    console.log('B');
}

else if(marks >= 60 ) {
    console.log('C');
}
else if (marks >= 45 ) {
    console.log('D');
}
else {
    console.log('failed!!');
}

// 2. switch case

let i=5;

switch(i) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    case 4: console.log('D');
    break;
    case 5: console.log('E');
    break;
    case 6: console.log('F');
    break;
    default:console.log('Z');
}

// *** Loops *** There are different types of loops are present in JS.
/* 

1. For loop
2. While loop
3. Do-while loop
4. For-each loop
5. For-of loop
6. For-in loop

*/

// 1.   For loop ->

for( let i=0; i<=6; i++)
{
    console.log('RAM'+ i );
}

// 2. While loop

let t=2;
while(t<=5){
    console.log("ok"+t);
    t++;
}

// 3. Do-while loop

let j=0;

do{
    console.log(j);
    j++;
}while(j<6);

// Objects -> object oriented programming

let rectangle = {
    length : 1,
    breadth : 2,

    draw: function(){
        console.log('drawing rectangle');
    }
}

// object creation => 1. Factory Function 2. Contructor Function

// 1. factory function > CamelCase

function createRectangle(len, bre) {

    return rectangle = {
    length : len,
    breadth : bre,

    draw: function(){
        console.log('drawing rectangle');
         }
    };
}

// Object creation using Factory Function =>

let rectangleObj1 = createRectangle(7,9);
let rectangleObj2 = createRectangle(1,3);
let rectangleObj3 = createRectangle(4,6);


//rectangle.length; -> return object literals
//rectangle.breadth; -> return object literals
//rectangle.draw(); -> returns object methods

// 2. constructor function => Pascal Notation -> first letter of every word is capital. => properties/methods -> Initialized/Define.

function Rectangle1(len,bre) {

    this.length = len,
    this.breadth = bre,
    this.draw = function(){
    console.log('This is a Rectangle');
    }
};

// Object creation using Constructor Function =>

let rectangleObject = new Rectangle1(4,6);

// dynamic nature of objects :

rectangleObject.color = 'yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);


// Constructor property for objects ->

// rectangleObject.constructor

let Rectangle2 = new Function(
    'length1', 'breadth1',
    `this.length = length1, 
    this.breadth = breadth1,
    this.draw = function() {
        console.log('Construct a object with constructor function');
    }`);

//Object creation using Rectangle1 ---> backtick character (``) is required to write down the fuction code.

let rect = new Rectangle2(2,4);

console.log(rect);


// let p = 10;
// let q = p;
// p++;
// console.log(p); // p = 11 
// console.log(q); // q = 10 -> creates a copy of p

// let p = {value : 10};
// let q = p;

// p.value++;

// console.log(p.value); // p.value = 11
// console.log(q.value); // q.value = 11 , since it receives the same address that p object already have, they are pointing to 
// ... same memory location, so both returns 11 value.

// Note : Primitives are copied by their values, References are copied by their address/reference. 

// let p = 10;
// function inc(p){
//     p++;
// }

// inc(p);
// console.log(p); // it will print 10 as we are passing the value 10 to the function and it increament it to 11, still the p 
// // ... remains 10 in original global variable therefore it gives the output as 10 => pass by value concept.

// let p = {value : 10};

// function inc(p){
//     p.value++;
// }

// inc(p);
// console.log(p.value); // p.value = 11, pass by reference concept.

// Iterating through objects : 2 loops -> for of loop => for iterables(araays, maps), for in loop => for objects

let rectangle3 = {
    length : 2,
    breadth : 4,
};

// for in loop

// for(let key in rectangle3){
//     console.log(key, rectangle3[key]);
// }

// for of loop => used for iterables i.e. arrays and maps.

for(let key of Object.keys(rectangle3)) {
    console.log(key);
}

for(let key of Object.entries(rectangle3)){
    console.log(key);
}

// find a property is present in the object or not ->

if ('length' in rectangle3){

    console.log('present');
}
else{
    console.log('absent');
}

// Object Cloning -> 1. Iteration 2. Spread 3. Assign

// Object Cloning using "Iteration" method =>

// let src = {
//     a : 10,
//     b : 20,
//     c : 30
// };

// let dest ={};

// for(let key in src){
//     dest[key]=src[key];
// }

// console.log(dest);

// src.a++;

// console.log(dest);

// Object cloning using " Assign " method =>


// let src = {
//          a : 10,
//          b : 20,
//        c : 30
//     };

//     let src2 = {
//         value : 22
//     };

//     let dest = Object.assign({},src,src2);

//     console.log(dest);

//     src.a++;
//     console.log(dest);


// Object cloning using "Spread" method =>

let src = {
    a:1,
    b:2,
    c:4
};

let dest = {...src};

console.log(src);

src.a++;

console.log(dest);

// we will clone the object dest value will not change but src will change


// **** Math : Inbuild Object in JS ****


// Math works with the Number type. It doesn't work with BigInt.

// Unlike most global objects, Math is not a constructor. 
//You cannot use it with the new operator or invoke the Math object as a function. All properties and methods of Math are static.

// Math.random(); -> Generates a random number.

// Math.PI -> Generates value of PI.

// Math.round(8.5) => 9

// Math.max(2,4,6,7,8) => 8, Math.min(2,4,56,7)=>2

// Math.abs(-3.5) => 3.5

// Math.pow(2,4) => 2^4 = 16

// Math.cos(0) => 1

const min = 10;

const max = 20;

console.log(Math.floor(Math.random() * (max-min+1))+min); 

const Balance = 500

let Bal1 = new Number(100)

console.log(Balance);

console.log(Bal1); // number object

console.log(Bal1.toString().length)

let Bal2 = new Number(100)

console.log(Bal1.toFixed(2)) // Will show precision value upto 2 decimal place.

let otherNum = 23.5678

console.log(otherNum.toPrecision(3)); // 23.6
console.log(otherNum.toPrecision(4)); // 23.57

let otherNum1 = 1123.5678

console.log(otherNum1.toPrecision(3)); // 1.12e+3

console.log(otherNum1.toPrecision(5)); // 1123.6

const hundreds = 1000000000;

console.log(hundreds.toLocaleString('en-IN'));


//  *** Strings *** => There are 2 types of Strings, 1. Primitive String 2. Object String


let LastName = 'Ballav'

let FirstName = new String('Suprakash')

let url = "https://mysirg%20newwebsite.com"

console.log(url);

console.log(url.replace('%20','-'))

// typeof(LastName)
// 'string'
// typeof(FirstName)
// 'object'


// If we use a dot (.) operator after the primitive string variable, it will act as Object String. 

// Lastname.length => Primitive String act as Object String = 6

// LastName[0]
// 'B'

// LastName.includes('Bal')
// true
// LastName.startsWith('Sup')
// false
// LastName.endsWith('AV')
// false
// LastName.endsWith('AV') --> CASE SENSITIVE, HENCE FALSE
// false
// LastName.endsWith('av')
// true
// LastName.indexOf('v')
// 5
// LastName.toUpperCase();
// 'BALLAV'
// FirstName.toLowerCase();
// 'suprakash'
// LastName.trim();
// 'Ballav'
// LastName.replace('Ball', 'Mall');
// 'Mallav'
// trimStart(), trimEnd() , indexOf()

let message = "This is my first message.";

let words = message.split(' ');

console.log(words);

// ['This', 'is', 'my', 'first', 'message.']

// message.replace('message','email');
// 'This is my first email.'

let message1 = `Hello ${FirstName}, 

Good day !!

Thanks for your update.
We will proceed accordingly.

Regards,
Mads. `; 

// $( var_name) => to take input .
// ` ..... ` => backtick character, used to print paragraph as it is.

console.log(message1);


// Object literal => { }
// Template literal => `...`
// String literal => ' ... '

// ***** Date and Time *****

let date = new Date ();

console.log(date); // Sun May 12 2024 10:55:30 GMT+0530 (India Standard Time)

console.log(date.toUTCString()); // converts date and time to UTC timezone . Sun, 12 May 2024 06:13:05 GMT
console.log(date.toDateString()); // Only provide the date not the time. Sun May 12 2024
console.log(date.toISOString()); // Returns to date time string format. 2024-05-12T06:13:05.822Z
console.log(date.toJSON()); //  used to convert a Date object into a string representation.
// Specifically, it returns the date in the same ISO format as toISOString(). 2024-05-12T06:13:05.822Z
console.log(date.toLocaleDateString()); // only provides local date. 5/12/2024
console.log(date.toLocaleString()); // Provides date and time in local date time format. 5/12/2024, 11:43:05 AM
console.log(date.toLocaleTimeString()); // only provides local time . 11:43:05 AM
console.log(date.getTimezoneOffset()); // Get the difference between UTC time and local time in minutes. -330
console.log(typeof date); // Object -> interview question.

let date2 = new Date('June 20 1998 07:15 PM')

console.log(date2); // Sat Jun 20 1998 19:15:00 GMT+0530 (India Standard Time)

let date3 = new Date(1997, 10, 9, 6);

console.log(date3); // Sun Nov 09 1997 06:00:00 GMT+0530 (India Standard Time) => month starts from 0 -> 11

date3.setFullYear(1957); // set the year to 1957

console.log(date3); 

let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 5:30:00 AM

let myTimeStamp = Date.now() // 1715496071637 milisecond value

console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000)); // interview ques : convert the current time into seconds and upto the decimal point.

let newDate = new Date();

console.log(newDate.getDate()); // 13
console.log(newDate.getMonth()+1); // 5
console.log(newDate.getMinutes()); // 24

// `${newDate.getDay()} and the time`

console.log(newDate.toLocaleString('default', {
    weekday : "long"
})) // Monday

// ****** Arrays ******

let numbers = [1,4,5,7];

// or let numbers = new Array(1,4,5,7);

console.log(numbers)



// 1. Insertion an element in an array. ->  At Begining, at end, at middle.

// 1.a. Insert an element at end. ->

// console.log(numbers) ->
// [1, 4, 5, 7]

// numbers.push(9); -> Inserting an element at end of Array.
// 5
// console.log(numbers) -> printing the new Array.
// [1, 4, 5, 7, 9]

// 1.b Insert an element at the begining.

// numbers.unshift(2)
// 5
// console.log(numbers)
// [2, 1, 4, 5, 7]

// 1.c. Insert at the middle.

// numbers.splice(2,0,'a','b','c'); -> 2 => at position where insertion will happen, 0 => no of deleted items from this position,
// 'a','b','c' => Characters to be inserted on this position.

// console.log(numbers); => [2,1,'a','b','c',4,5,7]

// ***Summary => insert at end => push(); , insert at begining => unshift(); ,
// insert at middle => splice(at position,#deleted items, inserted elements) ***

console.log(numbers);

// 2. Seaching an element in an Array ->

console.log(numbers.indexOf(7)); // 3

console.log(numbers.indexOf(10)); // -1, since 10 is not present in the array.

// 2.a To check if the number present in an array or not.

if(numbers.indexOf(7) != -1){
    console.log("Present.")
} // present -> not a good practice. Best practice ->

console.log(numbers.includes(9)); // if it is present -> true, doesn't present -> False

console.log(numbers.indexOf(4,2)); // Search 4 from the index 2 till the end of array.

// for objects ->

let courses = [
    {no:1, naam: 'DBMS'},
    {no:2, naam : 'Maths'}
];

console.log(courses);

console.log(courses.indexOf({no:1, naam: 'DBMS'})); // It gives the o/p as -1, i.e. not present because, indexOf and includes func.
// is not working for object arrays, as the address of both the elements is different here.

// *** Here we use Call Back Functions. (important)

/*  Callback Function def : A callback function is a function passed into another function as an argument,
 which is then invoked inside the outer function to complete some kind of routine or action. */

 let course = courses.find(function(course) {
                return course.naam == 'DBMS'
                });

console.log(course); // find() => Predicate func. takes the input of array obj and returns the array obj.

/* To increase the readibility we can use Arrow function instead of Callback Functions, in some conditions.
=> Important. */

let course1 = courses.find(course => course.naam == 'Maths'); /* For single parameter and single return type we can convert
callback function into Arrow Function. */

console.log(course1);

// 3. Removing an element from an Array ->

let numbers1 = [1,2,3,4,5,6,7,8,9];

console.log(numbers1);

numbers1.pop(); // Remove the number from end of the Array.
numbers1.shift(); // Remove the number from begining of the Array.
numbers1.splice(3,2)// Removes consecutive 2 elements from the 3rd index of Array. [2, 3, 4, 7, 8]

console.log(numbers1);

// 4. Emptying an Array ->

let nums = [2,4,5,6,7,8]

let nums2 = nums;

// nums = []; // in this case, nums will be empty but nums2 will print the array, hence an aleternative is needed.

// nums.length = 0; // In this case, both the arrays will remove all elements.

nums.splice(0,nums.length); // In this case as well, both the arrays will remove all elements.

console.log(nums);

console.log(nums2);

/* Interview question : Difference b/w Slice() and Splice() method ?

-> Slice method doesn't modifies the original array but the splice method do. 
-> In Slice() the ending index value of the declared slice range  will not be printed but in Splice() the ending index value will be printed.
-> In Slice() it returns a Sub array value that need to be assigned in another array but in Splice() we do not need to assigned it to another array
as it modifies the actual array.

*/

// 4. Combining and Slicing of an Array ->

let first = [1,2,3];

let second = [4,5,6];

let combined = first.concat(second);

// Another way is by using Spread Operator ->

let together = [...first, 'a', 'b', true, ...second, 'c', 'd'];

console.log(combined);

console.log(together);

let marks3 = [10,20,30,40,50,60,70,80,90,100];

// let sliced = marks3.slice(2,6); // [30, 40, 50, 60] -> last index will be excluded*.

//let sliced = marks3.slice(2); //  [30, 40, 50, 60, 70, 80, 90, 100] -> starting index value will be excluded.

let sliced = marks3.slice(); //  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] -> returns original array.

console.log(sliced); 

// 5. Coping an array ->

let another = [...combined];

console.log(another);

/* Interview question : Array copy operations always creates Shallow copies.

-> JavaScript arrays are resizable and can contain a mix of different data types.

-> Shallow Copy : 

A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) 
as those of the source object from which the copy was made. As a result, when you change either the source or the copy, 
you may also cause the other object to change too. 

More formally, two objects o1 and o2 are shallow copies if:

-> They are not the same object (o1 !== o2).
-> The properties of o1 and o2 have the same names in the same order.
-> The values of their properties are equal.
-> Their prototype chains are equal.

-> Deep copy :

A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) 
as those of the source object from which the copy was made. 
As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.

*/

// 6. Iterating an Array ->

let arr1 = [10,20,30,40,50,60];

for(let value of arr1){
    console.log(value);
}

arr1.forEach(function(number){
    console.log(number)
}); // Using For Each loop, here we use Callback Function.

arr1.forEach(number => console.log(number)); // Using For Each loop, here we use Arrow Function.

// 7. Joining and Spliting of Arrays ->

let arra = [10,20,30,40,50,60];

let joined = arra.join('$'); // Joining

console.log(joined);

let mess = 'This is my first Message.';

let parts = mess.split(' '); // Spliting

console.log(parts);

let joined1 = parts.join(' ');

console.log(joined1);

/* split()-> to split a String.

join() -> joining strings to form an array of strings. */

// 8. Sorting an Array ->

let nums3 = [10,33,26,76,58,39,2];

nums3.sort(); // [10, 2, 26, 33, 39, 58, 76] -> It gives this value as it converts the array of integers 
// to strings internally and then sorts it.That's why we need to convert it to integer first then use sort function.

console.log(nums3);

nums3.reverse();

console.log(nums3);

// 9. Filtering an Array ->

let vals = [2,5,-5,-3];

let filtered = vals.filter(function(val){ // Filter method using Callback function.

        return val >= 0;
});

console.log(filtered);

let filtered1 = vals.filter( val => val >= 0); // Filter method using Arrow function.

console.log(filtered1);

// 10 . Mapping of an Array ->

let numbers2 = [3,7,8,9];

let mapped = numbers2.map( val => 'Student_no' + val);

console.log(mapped);

// *** Mapping with Objects ->

let numbers3 = [2,5,-9,3];

let filtered2 = numbers3.filter(value => value>=0); // [2,5,3]

let mapped2 = filtered2.map(function(value){
    return {num : value};
});

console.log(mapped2); 

/* (3) [{…}, {…}, {…}]

0 : {num: 2}

1 : {num: 5}

2 : {num: 3}

*/

// **** Functions ****

/* 
Basic Syntax ->

function function_name( input parameters ){
    block of codes.
    return ......;
};

*/

ball(); // Function call or invoke.

function ball (){ // Function declaration.
    console.log("It is a ball.")
};

/* ** Hoisting -> JavaScript Hoisting refers to the process whereby the interpreter appears to
 move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code, 
 by JS Engine ( For Mozila firebox -> JS engine is SpiderMonkey).
 It is not applicable for Named Function assignment.  */

// 1. Named Function Declaration ->

 let stand = function run(){
    console.log('running.');
 }

 stand(); // running.

 /* run(); -> It will throw error, saying that the function is not declared.
  We need to call stand(); everytime, to invoke the function. */

  let jump = stand;

  jump(); //  running.

// 2. Anonymous Function Declaration -> 

  let stand2 = function(){
    console.log('running.');
 }

 stand2(); // running.

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(2,3)); -> 5
// console.log(sum(2)); -> NaN
// console.log(sum()); -> NaN
// console.log(sum(1,2,3,4,5)); -> 3

function sum(a,b){

    let total=0;

   /* console.log(arguments);

   0:2
   1:3
   2:4
   3:5
   4:6

   */
   
    for(value of arguments){
    total = total + value
    }
    return total;
}

let ans = sum(2,3,4,5,6);

console.log(ans); // 20

// Rest Operator -> Spread Operator -> Used to copy, concatenate operations in Array.

function add(...args){
    console.log(arguments);
}

add(1,2,3,4,5,6,7,8,9);

/*

function add(val,a,i, ...args, val2 ){
    console.log(arguments);
}

add(1,2,3,4,5,6,7,8,9);

---> In this case val=1, a=2, i=3, rest of the arguments will pass to ...args
---> If wwe declare val2 after ...args, it will throw error, as rest operator should be last declared* parameter in a function.
*/

// Default Parameters ->

function interest(p,t,r){
    return p*t*r/100;
}

console.log(interest(1000,2,3));

/* If we do not pass any arguments to the function, in that case the function can take a default value from its parameters.
We need to declare that default parameter value. Function will take that value and return the results. */

function interest1(p1,t1=3,r1=8){
    return p1*t1*r1/100;
}

//console.log(interest1(1000,undefined,NaN));//NaN
console.log(interest1(1000,undefined,2));//60

/* If we declare a function parameter as a default parameter, 
we need to declare rest of the right side parameters as default one. */

// Getter Setter properties ->

// Getter -> Access properties

// Setter -> Change or Mutate properties



let Person = {
    fName : 'Suprakash',
    lName : 'Ballav'
};

console.log(Person);

console.log(Object.keys(Person)); // Returns all keys in Person object
console.log(Object.entries(Person)); // Returns all values in keys on Person object
console.log(Object.values(Person)); // Returns all key values in person object as an array format
console.log(Person.hasOwnProperty('isLoggedIn')); // isloggedIn property is present on not in person object


function fullName(){
    return `${Person.fName}     ${Person.lName}`;
}

// issue -> read only

// Concept of Getter and Setter ->

console.log(fullName());

let Person1 = {
    fName1 : 'John',
    lName1 : 'wick',

    get fullName1(){
        return `${Person1.fName1} ${Person1.lName1}`;
    },

    set fullName1(value){
        if(typeof value !== String){
            throw new Error("You have not sent a String !! ")
        }
        let parts = Person1.split(' ');
        this.fName1 = parts[0];
        this.lName1 = parts[1];
        
    }
};

console.log(Person1); // John Wick

// Try and Catch -> Error Handling

try{
    Person1.fullName1 = true; // You have not sent a String !! -> since we pass a boolean value to the setter func.
}
catch(e){
    alert(e);
}

// 10. Reducing an Array ->

let demo = [1,2,3,4];

// let total = 0;

/* for(let value of demo){
    total=value+total;
}

console.log(total);//10, we can do the same thing by using reduce function as discussed below.

*/

let totalSum = demo.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0 ); // 0 is the initial value of accumulator

console.log(totalSum); // 10

// Some more Array methods need to study -> from(), of(), flat()

/*

from() -> The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

of() ->

The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

onsole.log(Array.of('foo', 2, 'bar', true));
// Expected output: Array ["foo", 2, "bar", true]

console.log(Array.of());
// Expected output: Array []

flat() ->

The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

isArray() ->

The Array.isArray() static method determines whether the passed value is an Array.

console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray('[]'));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false

*/

// Interview questiom ->  Declare a Symbol datatype var, pass it to an object and access it. =>

let mySym = Symbol("key"); // Declaration of Symbol datatype

const myObj1 = {
    Name : 'Suprakash',
    [mySym] : 'Ballav' // Passing a Symbol var inside a object
}

console.log(myObj1);

console.log(myObj1[mySym]); // Correct way to fetch a object instance ( of symbo, datatype)

// Object De-structuring =>

    const Course1 = {

        courseId : "113",

        courseName : "DBMS",

        Price : "999",

        Instructor : "Suprakash",
    };

    console.log(Course1);

    console.log(Course1.courseName);
    console.log(Course1.Price);

    // So if we want to destrucre the object there is a way as given below ->

    const {Instructor : Ins} = Course1; // Syntax : var/const { key : shortcutname } = Object_Name

    console.log(Ins); // Suprakash

    const {courseName : Name} = Course1;

    console.log(Name); // DBMS

    // Passing Object and Array to a function =>

        // a. Object passing =>

            function myNewObj(Course1){

                console.log(`${Course1.Instructor} is the instructor of course ${Name}`);
            }

            myNewObj(Course1);

        // b. Array passing =>

            const testArr = [100,200,3000,499];

            function PassArray(newPass){

                return newPass;
            }

           console.log(PassArray(testArr));


/// *** More about functions **** =>

    // a. Arrow Function =>

        const user1 = {

            userName : " Babai ",
            price : " free ",
            welcomeMessage : function(){
                console.log(`${this.userName}, welcome to our page.`) // this refers to current context, here it user1 object.
            },
        }

        user1.welcomeMessage(); //  Babai , welcome to our page.
        user1.userName = "Sam";
        user1.welcomeMessage(); // Sam, welcome to our page.

        console.log(this); // in browser it returns window. in node environment returns empty object {}.

        // important (this line and the below code and comments) -> We do not use this keyword inside an arrow function.

        function chai(){
            let userid = "999"
            console.log(this.userid); // undefined, since this only works inside object not in function that's why it doesn't return the userid value.
        }

        chai();

        // Basic Syntax of Arrow Function => ( ) => { }

           const addTwo = (num1, num2) => {
                return num1 + num2 ;
            };

            console.log(addTwo(2,4)); // 6

            // or We can declare the arrow function that returns implicitely. => Implicit return

            const addTwo1 = (num1 , num2) => ( num1 + num2 );

            console.log(addTwo1(3,4)); // 7

            /* Important concept : In arrow function if we use curly braces {}, we need to mention return keyword to get the results,
                but if we use square brakets, we need not to mention return keyword. */

            
            
            const addtwo2 = (num1,num2) => ({userName : "tom"}); // here we do not use function parameters instead return an object.

            console.log(addtwo2(3,9));

// b. IIFE -> Immediately Invoked function Expression

// Syntax : (function declaration)(function call);

(function chai(){ // Named IIFE
    console.log("DB Connected."); // DB Connected.
})();


( () => { // Unnamed IIFE
    console.log("DB connected 2 ."); // In case of IIFE we can declarre Arrow Function inside it, but we need to end prevition code  by using a ;
})();

/*Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. 
They are typically used to create a local scope for variables to prevent them from polluting the global scope.  
Here, the function is immediately invoked after its declaration, and the code inside it runs immediately.
 This pattern helps in keeping variables within a local scope and avoids conflicts with variables in the global scope. */

( (name) => {
    console.log(`DB connected 2 ${name}.`); // DB connected 2 Babai.
})('Babai'); // We can pass an argument inside the IIFE arrow function like this way.





















