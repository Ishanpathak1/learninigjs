function multiplyBy5 (num) {
    return num*5
}

multiplyBy5.power = 2
//Yes, function is also an object

//console.log(multiplyBy5(5));
//console.log(multiplyBy5.power);
//console.log(multiplyBy5.prototype); // output will be {}

//Anything and everything is an object

function createUser(username,score){
    this.username = username;
    this.score= score
    
}

createUser.prototype.increment =function() {
    this.score++
}

createUser.prototype.printMe = function (){
    console.log(`Price is ${this.score}`);
}

//const chai = createUser("Chai", 25)
//const tea = createUser("Tea",30)
//chai.printMe() //this will throw an error ->Cannot read properties of undefined(reading 'printMe'), because we have not used the new keyword

const chai = new createUser("Chai", 25)
const tea = new createUser("Tea",30)

chai.printMe()

/* Here is what happened behind the scene when the new keyword is used:
A new object is created: The "new" keyword initiates the creation of a new javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specification arguments and this is bound to 
newly created object. If no explicit return value is specified from the constructor, Javascript assumes this the
newly created object, to the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive
value(Object, array, function, etc.), the newly created object is returned.

*/



