const score = 400
console.log(score)

const balance= new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber=11.0027
console.log(otherNumber.toPrecision(3))

const hundreds=1000000
console.log(hundreds.toLocaleString());
//this gave the output as per US standards

console.log(hundreds.toLocaleString('en-IN'))
//this gave the output as per Indian Standards

// ++++++++++++++++++ Maths +++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4)) //converts everything to POSITIVE
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2))
console.log(Math.round(4.2))
console.log(Math.min(4,5,6,8,9))
console.log(Math.max(3,4,7,9,1))

console.log(Math.random())
console.log(Math.round(Math.random()* 10) +1)

const min =10
const max =20

console.log(Math.floor(Math.random() * (max-min + 1)) + min)