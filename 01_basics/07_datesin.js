//Dates

const { Long } = require("mongodb");

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString())
console.log(typeof myDate); //important for interviews

let myCreatedDate = new Date (2024, 0, 23);
let myCreatedDate1 = new Date (2024, 0 ,23, 5, 3)
let myCreatedDate2 = new Date ("2024-01-14")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(Math.floor(Date.now()/1000)) // to convert milliseconds to seconds

let newDate = new Date();
console.log(newDate);

newDate.toLocaleString('default',{
    weekday : "long",

})

