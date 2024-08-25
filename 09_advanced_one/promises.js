//Most of the times we will be consuming the Promises
const promiseOne = new Promise( function(resolve, reject){
    //Do an async task
    //Database calls
    //Cryptography
    //network calls
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000);
})

promiseOne.then(function () {
    console.log("Promise Consumed");
})

new Promise( function (resolve, reject){
    setTimeout(() => {
        console.log("Async Task 2 ");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})

//Video 40- 19:26
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
       resolve({username:"Ishan", email:"ishan.pathak2711@gmail.com"}) 
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if (!error) {
            resolve({username:"Ishan", password:"123"})
        } else {
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{console.log("The promise is either resolved or rejected");})// this is known as chaining

const promiseFive =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error) {
            resolve({username:"Javascript", password:"123"})
        } else {
            reject('Error: JS went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error){
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);

    } catch {
        console.log("E: ", error);

    }
}
//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data)=>{console.log(data);})
.catch((error)=> console.log(error))

//will start learning about fetch