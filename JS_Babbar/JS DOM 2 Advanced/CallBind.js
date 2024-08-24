// Here we discuss about Call and Bind --- >

function setUserName(username){
    //Complex DB Calls
    this.username = username;
}

function createUser(username, email, password){

    // setUserName(username);
    /*/* 
createUser
email: "chai@fb.com"
password: "123"
[[Prototype]]: Object
*/


    setUserName.call(this, username); // akhane this createUser function er reference 
    //setUserName ke pass korche fole, execution context remove holeo, local variable er reference poa jacce.

    /*createUser {username: 'chai', email: 'chai@fb.com', password: '123'}
email: "chai@fb.com"
password: "123"
username: "chai"
[[Prototype]]: Object
*/
    this.email =  email;
    this.password = password;
}

const chai = new createUser( "chai", "chai@fb.com","123");
console.log(chai);

/* Akhane username function ta kaj korche na karon createUser function theke setUserName function call
hocce thik e r callstack a theke er execution context o sore jacce jehutu call hye geche
, sei sathe er local variable gulo remove hye jacce fole username access kora jacce na...

ekhetre amra call r bind use kore thaki ... ( ata fun call er poreo, execution context remobve holeo, local variable er reference hold kore rakhe. )

*/




