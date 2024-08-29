//Lets undertsand Prototype
let myName = "Ishan     "
console.log(myName.trim().length);

let myHeros = ['Thor', 'spiderman']

let heroPower ={
    Thor :"hammer",
    spiderman :"sling",

    getSpiderFunction(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.ishan= function(){
    console.log("Ishan is present in all objects");
} // We accessed the top level hierarchy, like we gave power to our array and function, because we injected in the object

Array.prototype.heyIshan = function(){
    console.log("Ishan welcomes you");
}
//heroPower.ishan()
//heroPower.heyIshan() This will not work, and also it shouldn't have at the first place

//Let's see how to share the access between the objects
//Inheritance
const user ={
    name:"Ishan",
    email:"ishan@google.com"
}

const teacher = {
    makeVideo: true,

}

const TeachingSupport ={
    isAvailable: false,
}

const TASupport ={
    makeAssignment : "JS assignment",
    fullTime: true,
    __proto__ : TeachingSupport,
}

teacher.__proto__ = user //this is outdated practice

//let's see new practice
Object.setPrototypeOf(TeachingSupport,teacher)

let anotherUsername = "IshanAndCoffee       "
String.prototype.trueLength = function() {
    console.log(`${this}`); //to see the access of this
    console.log(`True lenght of the name is ${this.trim().length}`);
}

anotherUsername.trueLength()
"Coffee          ".trueLength()