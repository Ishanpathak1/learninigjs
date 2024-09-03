const user ={
    _email: 'i@google.com',
    _password: 'ishanabcd',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(user)
console.log(tea.email); // it should not have worked right, but working- because _ "underscore", is like a private property when it is set in getter and setter
console.log
