//var c=300;

let a =300;
// {} <---- This is known as scope
if (true) {

    let a = 10;
    const b =20;
    var c =30; //be it var c=30 or c=30, it will create the same issue, as the console.log(c) outside of the scope should not be printed in the 
    //first place still it is working which means it's an issue, that's why people don't use this in most of the times
    //console.log("Inner :" , a);

}





//console.log(a)
//console.log(b)
//console.log(c)


//******************Nested Scope************************/

function one(){
    const username ="Ishan"

    function two(){
        const website="grrn"
        console.log(username)
    }
    //console.log(website);

    two()
}

//one() // here the output is coming ,which means even function two() is getting executed

if (true){
    const username = "Ishan"
    if(username==="Ishan"){
        const website = " grrn."
       // console.log(username + website)
    }
    //console.log(website) // This will give error as the scope is not correct
}

//console.log(username) // This will give error as the scope is not correct


//+++++++++++++++++++++++++++++++Intresting+++++++++++++++++++++++++++

// you can write the addone(5) above the function also
function addone(num){
    return answer =num + 1;

}

addone(5)

// but you cannot write addtwo(5) here as it will not work and will give error, This is known as hoisiting , we will discuss in detail in the future
const addtwo = function(num){
    return num+2
}

addtwo(5)