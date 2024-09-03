//related to concepts of objects in JS
//console.log(Math.PI) //output will be 3.141592653589793
//Math.PI=5
//console.log(Math.PI) //still output will be the same , as you can see below in the output(note run the code)
const descriptor=Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

const chai ={
    name : 'ginger chai',
    price : 250,
    isAvailable : true
}
console.log(chai);
const descriptor1 =Object.getOwnPropertyDescriptor(chai, "name")
console.log(descriptor1);// it will show undefined, because it is a property not an object(Only when "name" is not written)

Object.defineProperty(chai, 'name', {
    writable: false,
   //enumerable: false, // if this is false, it won't enumerate
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//after this no one can change the value, and also there will be no looping possible

 //for (const [key, value] of chai) { // this will give an error
 //   console.log(`${key} : ${value}`);
    
 //}

 for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function'){ // it will only enumarate when it is function otherwise not
        console.log(`${key} : ${value}`);

    }
    
 }


