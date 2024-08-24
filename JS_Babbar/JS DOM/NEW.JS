

// Window -> It is a global Object created by browser that represents browser window.

// In window we have -> DOM, BOM, JS Core.

// DOM -> document object model, BOM -> Browser object model

// DOM -> Converts whole HTML code into a JS Object, we can access it as a document -> the whole model is called DOM.

// BOM -> the way JS communicates with Browser that model is BOM.

// document.addEventListener('click',function(){
// console.log("I have clicked on the web page.");
// });

/* Alternative :

function EventFun(){
    console.log("this is an event");
};

document.addEventListener('click', EventFun); */


// document.removeEventListener('click', function(){
//     console.log("I have clicked on the web page.");
// });

// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(event) {
//     console.log(event);
// });

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log("Amazing, it worked.");
// });


// Need to study some more events from interview perspectives ----> (important) 

// type, timestamp, defaultPrevented
//target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// Event propagation, Bubbling, Event Capturing


// let myDiv = document.createElement('div');

// function paraClick(query){
//     console.log('I have clicked on a paragraph ' + query.target.textContent);
// }
// myDiv.addEventListener('click', paraClick );

// for(let i = 0; i<100; i++){
//     let myElement = document.createElement('p');
//     myElement.textContent = 'This is my Para ' + i;
//     myDiv.appendChild(myElement);
// }

// document.body.appendChild(myDiv);


// let element = document.querySelector('#wrapper');

// element.addEventListener('click', function(event) {
//     if(event.target.nodeName === 'SPAN') {
//         console.log('span pr click kia hai' + event.target.textContent);
//     }
// });

// Adding 100 Paragraphs ---- ->

// const t1 = performance.now();

// for(let i = 0; i<100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = "This is my para " + i;
//     document.body.appendChild(newElement);
// }

// const t2 = performance.now();

// console.log("time elapsed is :" + (t2-t1) + "ms");

// Optimizing more ------>

// const t3 = performance.now();

// let myDiv = document.createElement('div');

// for(let i = 0; i<100; i++){

//     let newContent = document.createElement('p');
//     newContent.textContent = "This is my para " + i;
//     myDiv.appendChild(newContent);

// }

// document.body.appendChild(myDiv);


// const t4 = performance.now();

// console.log("time elapsed is :" + (t4-t3) + "ms");


// More Optimization using document fragmentation ---->

// const t1 = performance.now();

// let fragment = document.createDocumentFragment();

// for(let i = 0; i< 100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is my Para ' + i;
    
//     fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment); // 1 reflow, 1 repaint

// const t2 = performance.now();

// console.log("Elapsed time : " + (t2-t1) + "ms");

// set

// setTimeout() --- >

// setTimeout(function(){
//     console.log('third');
// }, 3000);

// function sync(){
//     console.log('second');
// }
// sync();

// console.log('first');


// Discussion on Promise ---> important

// let myPromise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('i am inside the promise1');
//     }, 5000);
    
//     resolve(300);

//     //reject(new Error('An error is caught !!'));
// });

// let myPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('i am inside promise2');
//     },3000);

//     resolve(200);
// });

// console.log('prothom');

// Deep drive into promises --- then() and catch() method ---->


// let promise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside a Promise.');
//     }, 5000);

//     // resolve(500);

//     reject(new error('An error is triggered !!'));
// });

// // // promise1.then((value) => {console.log(value)}); ----> After successful execution of promise we can use then for further work upon it's return value.

// // promise1.catch( (error) => {console.log('Received an error')}); ---> If the promise failed, we use catch to get the error MessageChannel.

// promise1.then( (value) => {console.log(value);} , (error) => {console.log('received an error')} ); // we can combine then  and catch by then method.


// Cascading promises together --- >

let waadaa1 = new Promise(function(resolve,reject){

setTimeout(() => {console.log("settimeout1 started");

},2000);

resolve(true);
});

let output = waadaa1.then( () => {

    let waadaa2 = new Promise(function(resolve,reject){

       resolve("waadaa 2 resolved");

        });

        setTimeout(() => {console.log("settimeout2 started");
    
        },3000);

        return waadaa2;
    });

    output.then( (value) => console.log(value));
