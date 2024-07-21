//const tinderUser =new Object()

const tinderUser = {

}

tinderUser.id="123abc"
tinderUser.name = "Ishan"
tinderUser.isLoggedIn = false

const regularUser = {
    email :"Ishan.pathak2711@gmail.com",
    fullname :{
        userfullname :{
            firstname: "Ishan",
            lastname:"Pathak"

        }
    }
}

//console.log(tinderUser);
//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1:"a",
    2:"b",
}

const obj2 = {
    3: "c",
    4: "d",
}

const obj4 = {
    5: "e",
    6: "f"
}

//const obj3 =  {obj1 , obj2} // if you will use this it will just give two objects 
//const obj3=Object.assign({},obj1, obj2, obj4) 
const obj3 ={...obj1, ...obj2, ...obj4}
//console.log(obj3);

const users = [
    {
        id:1,
        email: "i@gmail.com"
    },
    {
        id:2,
        email: "s@gmail.com"
    },
    {
        id:3,
        email: "h@gmail.com"
    },
    {
        id:4,
        email: "a@gmail.com"
    },
]

//console.log(users[1].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"))
console.log(tinderUser.hasOwnProperty("isLoggedn"))