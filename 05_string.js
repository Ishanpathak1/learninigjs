const name = "Ishan"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //This is a better way to write a code

const gameName = new String ('IshanPathak11-Nov-Securr')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'))

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-12, 4)
console.log(anotherString)

const newStringOne="         Ishan         "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://ishan.com/ishan%20pathak"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'))
