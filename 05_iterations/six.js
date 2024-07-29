const coding =["js", "ruby", "java", "python", "cpp"]

const values =coding.forEach((item)=>{
    //console.log(item);
    return item
})

//console.log(values);

//for each does not return anything, that's why it is showing undefined

// how to use filters

const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums= myNums.filter((num)=>{
    return num > 4 //You have to write return here , as we have opened the scope with curly braces, so it becomes an object
})
//console.log(newNums);

const newNums1=[]
myNums.forEach((num)=>{
    if (num > 5) {
        newNums1.push(num);
    }
})

console.log(newNums1);

const books = [
    {title : "Book 1", genre : "Fiction", publish : 1981, edition:2004},
    {title : "Book 2", genre : "Non Fiction", publish : 1982, edition:2005},
    {title : "Book 3", genre : "History", publish : 1985, edition:2006},
    {title : "Book 4", genre : "Science", publish : 1961, edition:2014},
    {title : "Book 5", genre : "Non Fiction", publish : 1986, edition:2024},
    {title : "Book 6", genre : "Fiction", publish : 1991, edition:2002},
    {title : "Book 7", genre : "Science Fiction", publish : 1965, edition:2009},
    {title : "Book 8", genre : "History", publish : 1987, edition:2011},
    {title : "Book 9", genre : "Science", publish : 1979, edition:2007},
]

const userbooks = books.filter((bk)=>{
    return bk.genre === "History"
})
//console.log(userbooks)

const userbooks1 =books.filter((bk)=> bk.publish>1960 && bk.genre ==="History")
console.log(userbooks1)






