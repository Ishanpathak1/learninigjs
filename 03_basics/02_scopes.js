//var c=300;

let a =300;
// {} <---- This is known as scope
if (true) {

    let a = 10;
    const b =20;
    var c =30; //be it var c=30 or c=30, it will create the same issue, as the console.log(c) outside of the scope should not be printed in the 
    //first place still it is working which means it's an issue, that's why people don't use this in most of the times
    console.log("Inner :" , a);

}

for (let i = 0; i < array.length; i++){
    const element = array[i]
}



console.log(a)
//console.log(b)
//console.log(c)