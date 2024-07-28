const coding =["js", "ruby", "java", "python",'cpp']
//for each
//coding.forEach(function(val){
//    console.log(val);
//})

// using arrow function
//coding.forEach((item)=>{
//    console.log(item);
//})

//function printMe(item){
//    console.log(item)
//}

//coding.forEach(printMe)

//above is all just different methods of for each loop

//coding.forEach( function(item,index,arr){
//    console.log(item,index,arr);
//})

//for seeing different parameters of the for each

const myCoding =[
    {
        languageName :"JavaScript",
        languageFileName: "js"
    },
    {
        languageName :"Python",
        languageFileName: "py"
    },
    {
        languageName :"Ruby",
        languageFileName: "rb"
    }
]

// this is the most common you should know and practice this

myCoding.forEach( (item)=>{
    console.log(item.languageName);

})
