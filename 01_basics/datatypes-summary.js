// Primitve Data type
// There are 7 categories: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn=false
const outsideTemp= null
let userEmail;

const id= Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

const bigNumber=345634343434343438n
// Reference (Non Primitive
// Array, Objects, Functions

const heros=['shaktiman', 'naagraj','doga'];

let myObj={
    name:"Ishan",
    age:23,
}

const myFunction=function(){
    console.log("Hello World");
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// How does memory works in Java Script
// Two types of memory : Stack and Heap
// Stack (Primitve), Heap (Non-Primitive)

let myYoutubename="ishanpathak96"
let anotherName= "IshanPathak2711"
console.log(anotherName)
console.log(myYoutubename)

//above is the example of stack memory

let userOne = {
    email:"user@google.com",
    upi:"ishanpathak@okaxis"
}

let userTwo = userOne

userTwo.email = "ishan@google.com"

console.log(userOne.email)
console.log(userTwo.email)
//above is the example of heap memory
