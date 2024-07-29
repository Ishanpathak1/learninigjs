const myNumbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// similar rules as filter
//const newNums=myNumbers.map ((num)=>num+ 10)
//console.log(newNums);

//chaining method

const newNums= myNumbers
                .map((num)=>num *10)
                .map((num)=>num+1) // this will return everything, therefore after "=>" there is an operation 
                .filter((num)=> num>=40) // this will only return true values, therefore after "=>" there is a condition

console.log(newNums)