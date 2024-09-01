class User {
    constructor(username){
        this.username =username
    }
    logMe(){
        console.log(`${this.username} is Logged in `);
        
    }
}

class Teacher extends User {
    //overwriting the constructor
    constructor(username,email, password){
        super(username) // this will refer to the extended class, and will also take the username form that class and also take the access
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`New course is added by ${this.username}`);
        
    }
}

const teacher1 = new Teacher("Xin Li", "XinLi@albany.edu", "123") // Please make sure to use the "new" keyword
teacher1.addCourse()
teacher1.logMe()

const user1 = new User ("IshanPathak")
user1.logMe()

console.log(teacher1 === Teacher); // this will come as false, as it is not the exact same thing
console.log(teacher1 instanceof Teacher);// this will come as true as it is an instance of 

