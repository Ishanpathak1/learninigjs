//for
//after selecting the i use cmd+ d for selecting multipe i here for mac, and for windows it is a ctrl +d , this is 
// known as duplication

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is the best number");
    }
    //console.log(element);
 
    
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop ${i}`)
    //for (let j = 1; j <= 10; j++) {
        //console.log(i + '*' + j + "=" + i*j);   
    //}
    
}

let myArray =["Iron Man", "Hulk", "Captain America"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element)
    
}

// break and continue
// Break will stop the loop

for (let index = 1; index <= 20; index++) {
     if (index == 5){
        //console.log("Detected 5");
        break
     }
    //console.log(`Value of i is ${index}`)
    
}

//continue will skip the value, but continue the loop
for (let index = 1; index <= 20; index++) {
     if (index == 5){
        console.log("Detected 5");
        continue
     }
    console.log(`Value of i is ${index}`)
    
}