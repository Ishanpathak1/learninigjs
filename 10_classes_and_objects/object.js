function multiplyBy5 (num) {
    return num*5
}

multiplyBy5.power = 2
//Yes, function is also an object

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // output will be {}

//Anything and everything is an object