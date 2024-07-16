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