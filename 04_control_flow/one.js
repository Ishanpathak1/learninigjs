//if
const isUserLoggedIn = true

// "=" is a assignment operator
// "==" is a comparison operator
// "===" this will also check the type , for example 2 ==="2" this will come as false

const temperature = 52

if (temperature < 50){
    //console.log("Temperature is less then 50")
} else {
    //console.log("Temperature is greater then 50")
}

const score = 200

if (score >100){
    const power = "fly"
    //console.log(`User power: ${power}`)
}

//shorthand notation

const balance = 1000

//if (balance > 500) console.log("Greater then 500") ; // it will be executed in one line only

// Multiple line code can be written then this

//if (balance > 500) console.log("Greater then 500"),
//console.log ("Test2");

// The baove mentioned method is not good so please avoid this

if (balance < 500) {
    console.log("Less than 500")
} else if(balance < 750) {
    console.log("Less than 750")
} else if (balance < 900) {
    console.log("Less than 900")
} else {
    console.log("Less then 1200")
}

// checking mutliple condition

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail=true

if (userLoggedIn && debitcard){
    console.log("Allowed to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("This is allowed to buy course")
}