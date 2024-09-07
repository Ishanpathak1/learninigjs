//prop is short for properties, which we will be using much in the React

class User {
    constructor(username){
        this.username  = username
    }

    logMe(){
        console.log(`${this.username} is Logged in`);
        
    }

    static createUniqueID(){ // this will stop the access, as the access of creating unique ID should not be with all
        return `123`
    }
}

const Ishan = new User("Ishan")
console.log(Ishan.createUniqueID())

class Teacher extends User {
    constructor (username,email){
        super(username) // here keyword "this" is not needed
        this.email = email 
    }
}

const iPhone = new Teacher ("iphone", "iphone@apple.com")
console.log(iPhone.createUniqueID()); // see not able to access because of the kewyord "Static"
//Javascript ended with a story, let's make a project now.
