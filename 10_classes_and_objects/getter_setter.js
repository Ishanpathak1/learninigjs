class user {
    constructor(email, password) {
        this.email =email,
        this.password =password
        
    }
    get email (){
        return `${this._email.toUpperCase()}@gmail.com`
    }
    set email(value){
        this._email =value
    }
    get password(){
        return `${this._password}hitesh`
    }
    set password (value){
        this._password = value
    } // there will be a RangeError(if you use "password" instead of "_password") as the Maximum call stack size exceeds, this happens because setter is also setting the password, and constructor too.
}

const Ishan = new user ("I@google.com", "abc")
console.log(Ishan.password);
console.log(Ishan.email);

