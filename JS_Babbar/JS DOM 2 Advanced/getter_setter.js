
// by using class ----->

class Usr {
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

        get password(){
           return `${this._password}babai`
        };

        set password(value){
            this._password=value
        };
    };

const babai = new Usr("abc@gmail.com", "abc");
console.log(babai);
console.log(babai.password);

// by using function -->

/*

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);

*/

// by using object --->

/*

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

*/
