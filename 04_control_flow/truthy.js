const userEmail = "i@ishan.ai"

if (userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email")
}

//falsy values
//false, 0, -0, BigInt 0n, ""(empty string),null, undefined, NaN

//Other then that all are truthy values
//Some of them are
//true,"0"(keep in mind this in a string), 'false'(Important for interview), " "(empty string but with a space), [](Empty error)
//{}(empty object), function(){} (empty function)

const namesInCompany =[]

if (namesInCompany.length === 0){
    console.log("Array is Empty");
}

const emptyObj ={}

if (Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null undefined

let val1;
//val1 = 5 ?? 10 // Output is 5 
//val1 = null??10 // Output is 10
// in this case it is 10,but in production it will be something like a complex function which will return a value
// but if there is no value it will pass the null

//val1 = undefined ?? 15

val1 = null??10??15 //Output will be 10, so it will always print the first value


console.log(val1); 

// Terniary Operator

//condition ? true : false

const coldCoffeePrice =70
coldCoffeePrice >=80 ? console.log("less than 80") : console.log("greater than 80");