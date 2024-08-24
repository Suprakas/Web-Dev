// here we learn about Static keyword

class User3 {
    
    constructor(username){

        this.username = username;
    
}

logMe2(){
console.log(`Username : ${username}`);
}

static createId(){ // static keyword use korle ota local class er jnnoi accessible hbe, oi class er object er jnno ny.
    return `123`;
}

}

const me = new User3("Babai");

console.log(me.createId());


class Teacher2 extends User3 {

    constructor(username, email){
        super(username);
        this.email=email;
    }

}

const iPhone = new Teacher2("iPhone 13 Max pro", "ip234@gmail.com");

console.log(iPhone.createId()); // will throw an error since we are trying to access a Static Function.




