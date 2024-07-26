//Immediately Invoked Function Expressions (IIFE)
// Line 4 is a known as named IIFE

(function coffee(){
    console.log("DB connected");
})(); //if you miss ";" then this function will not end , and this will create a issue, you wont be able to run
      // the next function


// This is same as
// function coffee(){
//     console.log("DB connected")
//}

//coffee()

// arrow function example
((name)=>{
    console.log(`Hi ${name}`);
})("Ishan");


