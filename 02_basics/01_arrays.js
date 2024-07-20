//array
const myArr1=[0,1,2,3,4,5,true, "Ishan"] // This is also correct
const myArr =[0,1,2,3,4,5] 
const myHeros =["Iron Man" , "Captain America", "Hulk", "Thor"]

//console.log(myArr[1])
//Arrays are resizable
// Shallow Copy of an object is a copy whose properties share the same reference(point to the same underlying values) as those
//of the source object from which the copy was made

// Deep copy of an object is a copy whose properties do not share the same reference (point to the same underlying values) as those
// of the source object from which the copy was made.

// When array is copied it makes the shallow copy

//+++++++++++++++++++++ Array Methods+++++++++++++++++++++

//myArr.push(6)
//myArr.pop()
//console.log(myArr);

//myArr.unshift(9) // it will add the unshift in the first place
//myArr.shift() // it will remove from the first place
//console.log(myArr.includes(9));
// console.log(myArr.indexOf(3))

//const newArr =myArr.join() // it will type the change, it will convert it to string
//console.log(myArr)
//console.log(newArr)

//slice and Splice method

console.log("A ",myArr);
const myn1 =myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3) // Splice will manipulate the original value
console.log("C ", myArr);
console.log(myn2)

