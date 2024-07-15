let score = "33abc" //if the value is "null" here ,output will be 0, if the value is "undefined", output will be NaN
console.log(typeof score);
console.log(typeof(score));
/*These both lines 3 and 4 means the same */

let valueInNumber=Number(score)
console.log(typeof valueInNumber) //output will be number
console.log(valueInNumber) //output will be NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1=> true; 0=> false
//"" => false
//"Ishan" =>true

let someNumber= 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
