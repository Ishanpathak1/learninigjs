const myObject ={
    js : 'Javascript',
    cpp : "C++",
    rb : "ruby",
    py : "python"
}

//for in loops

for (const key in myObject) {
    //console.log(`${key} 's extension is for ${myObject[key]}`);
    
}

const programming = ["js", "ruby", "python", "java", "cpp"]

for (const key in programming) {
    //console.log(key);

}
// In the above code snippet the output will be 0,1,2,3,4.... because this is a for in loop, where keys matter
for (const key in programming) {
    //console.log(programming[key]);

}
// In the above code snippet the output will be js,ruby,python,java...... 

const map = new Map()
map.set('IN',"India")
map.set('USA', "United States of America")
map.set ('FR',"France")

for (const key in map) {
    console.log(key);
    
}// map is not iterable , that's why there will not be any output
