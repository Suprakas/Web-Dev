// here we learn about inheritance


class User2 {

    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME IS : ${this.username}`);
    }
}

class Teacher extends User2{

    constructor(username, email, password){

        super(username); // Super keyword child class theke parent class er kono property access korar jnno use hy.
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai2 = new Teacher("Hitesh","hiteshchow23@gmail.com","123");

console.log(chai2);
chai2.addCourse();

const masalaChai = new User2("masalaChai");

masalaChai.logMe();
chai2.logMe();

console.log(chai2 === masalaChai); // false

console.log(chai2 === Teacher); // false 

console.log(chai2 instanceof Teacher); // true
