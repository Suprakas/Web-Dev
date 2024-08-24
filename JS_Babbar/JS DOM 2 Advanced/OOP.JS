const user = {
    username : "Babai",
    loginCount : 8,
    signedIN : true,

    getUserDetails : function(){
        console.log("Got user data from dataabase.");
        console.log(`username is : ${this.username}`);
        console.log(this); // returns current context
    }
};

console.log(user.username);
console.log(user.getUserDetails()); // undefined
console.log(this); // window

// Constructor function -> new keyword use kore function create kora

// const promisenew = new promiseFive();
// const date = new date();

function User(username, logincount, isloggedIn){
    this.username = username;
    this.logincount = logincount; // User function er local variable holo left er ta, this bole access hy
    // r right ta holo predefined object literals.
    this.isloggedIn = isloggedIn;

    return this; 
}

const userOne = new User("Babai", 8, true); 
const userTwo = new User("chaiaurcode", 11, false);
console.log(userOne);
console.log(userTwo);
console.log(userTwo.constructor);



// 1. new keyword use korle akta empty object instance toiri hy
// 2. akta constructor function call hy new er jnno
// 3. this operation perform hy || current context access hy object instance er.
// 4. print hy

// Prototypal behaviour of JS ----> inherits the property from parent prototype

// Array -> object -> null
// String -> Object -> null
// Function -. object -> null

function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {} --> object

// JS objects and this, new keyword  ---->

function createUser(username, score){
    this.username = username;
    this.score = score; // this current context ke refer kore chai function a pass kora scope r tea function
    // a pass kora score konta use korbe ai confusion ta remove kore, 2 to function er jnnoi separate
    // current context consider kore fun run kore value dey.
    // this use na korle kon score value ta function a pass hbe ai confusion thekei jeto.
}

createUser.prototype.increament = function(){ // createUser function er moddhe new akta function inject kora holo
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

// const chai = createUser("chai", 25);
const chai = new createUser("chai", 25);
// const tea = createUser("tea", 250);
const tea = new createUser("tea", 250);

chai.printMe(); // toh ami new keyword chara jdi chai r tea function pass kori
// again akta confusion toiri hbr je kon score value ta pass hye print hbe.

// ekhane new use kore 2 to function instance banale ai confusion ta r thakbe na

/* Important --->

Here's what happened behind the scenes when the new keyword is used :

A new object is created : The new keyword initiates the creation of a new JS object.

A prototype is linked : The newly created object gets linked to the prototype property of the constructor function,
this means that it has access to properties and methods defined on constructor's prototype.

The constructor is called : The constructor function is called with the specified arguments and this is bound
to the newly created object. If no explicit return value is specified from the construcutor
, JS assumes this, newly created return value, to be the intended return value.

The new object is returned : After the constructor function has been called,
if it doesn't return a non-primitive value ( object, array, function etc.),
the newly created object is returned.

*/

// Prototypes ----->

let myHeros = ["thor", "spiderman"];

let heropower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Babai = function(){
    console.log(`Babai is present in all objects`);
} // Amra direct high level object prototype a Babai er function inject kore diyechi
// sejnno Babai all other function diyeo accessible.


heropower.Babai();
myHeros.Babai();


Array.prototype.heyBabai = function(){
    console.log(`Babai says hello`);
}

myHeros.heyBabai() // since it is an array, it can access heyBabai
// heropower.heyBabai() //since it is not an array, it can not access heyBabai

// inheritance ---->

const User5 = {
    name : "chai",
    email : "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    _proto_: TeachingSupport
}

Teacher._proto_ = User5

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength();
"hitesh".trueLength();
"icetea".trueLength();

  

