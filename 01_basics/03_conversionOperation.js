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

//**********************Operations********************** */
let value = 3
let negValue= -value
console.log(negValue)

let str1="Hello"
let str2=" Ishan"
let str3= str1 + str2
console.log(str3)

//console.log("1"+ 2);
//console.log(1 +"2");
//console.log("1"+2+2);
//console.log(1+2+"2");

console.log(true);
let num1,num2,num3
num1=num2=num3=2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter)