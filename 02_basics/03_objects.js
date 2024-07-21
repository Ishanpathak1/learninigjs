// singleton - when you make it as a literal it will not be a singleton, but if as a constructor then as a singleton

//object literals
// Object.create //constructor method

const mySymbol = Symbol("key1") // how to access this in the jsUser?
const jsUser ={
    name:"Ishan",//key:value
    "full name":"Ishan Pathak", // you won't be able to access this with jsUser.full name , you have to use the console.log(jsUser["full name"])
    [mySymbol] : "myKey1",
    age:23,
    location: "Ahemdabad",
    email: "ishan.pathak2711@gmail.com",
    isLoggedIn :false,
    lastLoginDays : ["Monday", "Saturday"]
} // object literal method




console.log(jsUser.email)
//console.log(jsUser[email]) // this will not work
console.log(jsUser["email"])
console.log(typeof mySymbol) // if you would have declared this as simple mySymbol : "myKey1" the output would have been string
console.log(jsUser[mySymbol])
console.log(typeof jsUser[mySymbol])

jsUser.email = "pathakishan11@gmail.com" // this how you can make the changes
//Object.freeze(jsUser) // it will lock the value now you cannot change it 
console.log(jsUser["email"])
jsUser.email = "ishanpathak11@gmail.com"
console.log(jsUser["email"])
console.log(jsUser)

jsUser.greeting = function() {
    console.log (` Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting())