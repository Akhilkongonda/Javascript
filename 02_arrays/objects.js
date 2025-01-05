//single ton

//object literals
const user={
    name:"akhil",
    age:19,
    email:"akhil@gmail.com",
    isloggedin:false,
    lastlogindays:["mon","tue"]

}
console.log(user);
console.log(user.lastlogindays);

// Object.freeze(user)// freezes the user  doesnt the propogate the changes


user.age=21;
console.log(user)


user.greeting=function(){
    console.log("hello js user ");  

} 
console.log(user.greeting)// gets function ka references
console.log(user.greeting())// undefined

user.greetingtwo=function(){
    console.log(`hello user ,${this.name}`)

}

console.log(user.greetingtwo());











