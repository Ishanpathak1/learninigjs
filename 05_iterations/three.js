// for of
// ["", "", ""] <-- Many strings in an array
// [{},{},{}] <-- Many objects in an array

const arr =[1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
    
}

const greetings ="Hello World!"
for (const greet of greetings) {
    //console.log(`Each call is a ${greet}`);
}

//Maps --> An object that holds the key -value pairs, it has unique values

const map = new Map()
map.set('IN',"India")
map.set('USA', "United States of America")
map.set ('FR',"France")

//console.log(map)

for (const [key, value] of map) {
    console.log(key, "-", value);
   
    
}

const myObject ={
    'game1' :"GTA vice city",
    'game2' : "NFS most wanted"
}

//for (const  [key,value] of myObject) {
//    console.log(key , "-", value);
    
//}