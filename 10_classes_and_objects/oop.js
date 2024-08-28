const user = {
    username:"Ishan",
    loginCount:9,
    signedIn : true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username :${username}`); // this will show the error, because no context is defined, so you have to use the this keyword
        console.log(this)
    }
} //it's a literal object

//constructor function

//const promiseOne = new Promise() // new keyword is a constructor function
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn =isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this //object gets passed on
}

const userOne = new User ("IshanPathak",27,true)
const userTwo =new User ("Dushyant",30,true) // value got overwritten right?, that's why we have to use the "new" keyword
console.log(userOne);
console.log(userTwo);

//Prototype is a difficult topic, should be done at a good time, still theory is done today, will be uploading the code tomorrow