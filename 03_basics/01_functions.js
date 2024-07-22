
function sayMyName(){
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
}

//sayMyName // this is reference

//if you want to call/execute this
//sayMyName()

function addTwoNumbers(number1,number2){
    console.log(number1 + number2 );
}

//const result = addTwoNumbers(3,4)
// console.log(result); //output will be undefined
// let's see how to solve this

function addTwoNumbers1(number3, number4 ){
    let result =number3 +number4
    return result 
  

}
// after returning the value , you can then store this into a variable 
const result=addTwoNumbers1(5,8)
//console.log(result)

function logInUser(username="sam"){
    if(username===undefined){ // you can use !username instead of username ===undefined also
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

const result1 = logInUser("Ishan Pathak")
console.log(result1)

