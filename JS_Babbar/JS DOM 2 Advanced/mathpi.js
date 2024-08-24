const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);

/*
{value: 3.141592653589793, writable: false, enumerable: false, configurable: false}
configurable: false
enumerable: false
value: 3.141592653589793
writable: false
[[Prototype]]: Object
*/

const chai = {
    name : "ginger tea",
    price : "10",
    isAvailable : "true"
};

console.log(Object.getOwnPropertyDescriptor(chai, "price"));

/*

{value: '10', writable: true, enumerable: true, configurable: true}
configurable: true
enumerable: true
value: "10"
writable: true
[[Prototype]]: Object

*/

Object.defineProperty(chai, 'name', {
    writable : false,
    enumerable : false
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

/*
{value: 'ginger tea', writable: false, enumerable: false, configurable: true}
configurable: true
enumerable: false
value: "ginger tea"
writable: false
[[Prototype]]: Object
*/

for(let [key,value] of Object.entries(chai)){
    if (typeof(value) !== 'function'){
    
        console.log(`${key} : ${value}`);

    }
}

/*
price : 10
isAvailable : true

since name is not enumerable , hence we get 2 attributes of the chai object. 
*/
