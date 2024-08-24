// fetch('https://www.google.com').then().catch().finally();

const promiseOne = new Promise(function(resolve, reject){
    //Do an Async task

    // DB calls, cryptography, network call

    setTimeout(function(){
        console.log('Asyn task is complete.');
        resolve(); 
    }, 1000);
});
   
promiseOne.then(function(){ // related to resolve parameter, since promise is resolved, so then() is used.
    console.log("promise consumed")
})

new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved."); 
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve( {username : "Chai", email : "chai@example.com"});
    },1000);
})
  

promiseThree.then(function(user){  // promise resolve hyeche tai then use korchi
console.log(user);
});

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Babai", password : "123"});
        } else {
            reject('ERROR : Something went wrong ');
        }
        },1000);
    });

    /* interview question => Callback hell : multiple callback functions use korle mane aktar o/p onno callback er i/p hisabe niye chaining korle
     code complex hy, atake handle korar jnno amra promise/ async await use kori. multiple callback er jnno code complex
     hoa ke Callback hell bole. */

    promiseFour.then((user) => {
        console.log(user);
        return user.username; 
    }).then((username) => {
        console.log(username); // to print the data if promise is resolved.
    }).catch(function(error){
        console.log(error); // to catch the error if promise is rejected
    }).finally( () => console.log("The promise is either resolveed or rejected."));
    // Promise unlimited chole na, finally() akta update dey promise complete hyeche bole.
    // either seta resolved hok ba rejected.



    const promiseFive = new Promise(function(resolve, reject) {

        setTimeout(function(){

            let error = false;

            if(!error){
                resolve ({username :"javascript", password: "12345"});
            }
            else{
                reject('Error : JS went wrong !!');
            }
        }, 1000);
    });

    // ekhane amra async await function use korbo ->

     async function consumePromiseFive (){
        try {
            const response = await promiseFive;
        console.log(response);
        } catch (error) {
            console.log(error);
        }
     }

     consumePromiseFive();

// directly async await diye promise capturing hyna try catch block use kore, handle korte hy
// try er moddhe resolved statement r catch a error ta gracefully handle hy.
// Async await akta promise return kore always jetake try catch format a capture korte hy.

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);

//     } catch (error){
//         console.log("E : ", error);
//     }
// }

// getAllUsers(); // try catch er syntax o jana gelo ata API theke json format a user er dummy data debe r sobar aage execute hbe.

 fetch('https://jsonplaceholder.typicode.com/users') // fetch always promise return kore.
 .then((response)=>{
    return response.json();
 }).then((data)=>{
    console.log(data);
 }) // thenable bole ai then laddering ke, akta then er o/p porer tar i/p hisabe use hy.
 .catch((error)=> console.log(error));

 

 


 






    
 







 
     