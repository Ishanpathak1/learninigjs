const user ={
    username :"Ishan",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username} Welcome to website`)
        console.log(this)
    }
}

//user.welcomeMessage()
//user.username = "Sam"
//user.welcomeMessage() /* this will give the updated output, because we didn't hardcoded, we just gave the current context in the function 
                        /*but we changed the context in line user.username="Sam"*/
                     
//user.welcomeMessage()
//console.log(this) // it will come empty, because we are in node environment, and there is no context in global 

//function coffee(){
//    let username = "Ishan"
//    console.log(this.username) //this will not work, it will give output as undefined , this keyword only works in objects
//}

//coffee()

//It will be same for the below scenario
//const coffee1 = function(){
//    let username ="Ishan"
//    console.log(this.username)
//}

//coffee1()

// Arrow Functions

const coffee = () =>{
    let username="Ishan"
    console.log(this)
}

//coffee()

const addTwo = (num1,num2) => {
    return num1+num2
}

console.log(addTwo(3,4))

//Implicit return

const addTwonum = (num3,num4) => num3 + num4 // no need to write word run
// if the above line is consfusing for you
const addTwoint =(num5,num6) => (num5+num6) 

const addingTwo = (num7,num8)=> ({num7:13, num8:17}) // This is how you can return the object
console.log(addTwonum(5,6))
console.log(addTwoint(9,10))
console.log(addingTwo())



