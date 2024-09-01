function setUsername(username) {
    //complex db calls
    this.username =username
}

function createUser(username, email , password) {
    setUsername(username) //many think that this will give the access in this function too, but is not called here, so you have to do this
    setUsername.call(this, username) // this is little bit tricky so please refer the video 44 

    this.email = email
    this.password = password
}

const coffee= new createUser("coffee" , "coffee@google.com", "123")
console.log(coffee);

// refer video 44 this 