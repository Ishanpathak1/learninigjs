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