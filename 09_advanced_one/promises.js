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