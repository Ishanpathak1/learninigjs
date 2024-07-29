const myNums =[1, 2, 3 ]

const myTotal=myNums.reduce(function (acc,currval ){
    //console.log(`Value of accumulator ${acc} and value of current value is ${currval}`)
    return acc+currval

}, 0)

// will write the same in arrow function
const newNums =[10, 20, 30]
const totalNums = newNums.reduce((acc,currval)=>{
    return acc+currval

},0)

//console.log(myTotal);
//console.log(totalNums)

const shoppingCart =[
    {
        itemname :"JS course",
        price : 2999
    },
    {
        itemname :"Py course",
        price : 999
    },
    {
        itemname :"DSA ",
        price : 4999
    },
    {
        itemname :"Web3",
        price : 9999
    },
]

const totalValue = shoppingCart.reduce( function (acc,item){
    return acc +item.price
},0)

console.log(totalValue)



//accumulator is an empty value
// The initial value which you set , will go into the the accumulator for the first time
// and then accumulator will have the sum of accumulator and current value