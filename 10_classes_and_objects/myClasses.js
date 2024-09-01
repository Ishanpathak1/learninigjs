//ES6
class User {
    constructor( username, email, password){ // this "constructor" will get called as soon as as "new" keyword will be used.
    this.username = username;
    this.email = email;
    this.password = password;
    }
    encryptPassword(){ // encryptPassword is used as function only just not mentioned, and it is possible here so no issues.
        return `${this.password}abc`

    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const coffee = new User("Ishan", "Ishan@google.com", "pathakIshan!@#")
console.log(coffee.changeUsername())

//behind the scene

function User1(username, email, password){
    this.username =username;
    this.email=email;
    this.password =password
}

User1.prototype.encryptPassword1= function(){
    return `${this.password}abc`
}
User1.prototype.changeUsername2= function(){
    return `${this.username.toUpperCase()}`
}

const chai = new User1("Badal", "Badal@meta.com", "2345")

console.log(chai.encryptPassword1());
console.log(chai.changeUsername2());

