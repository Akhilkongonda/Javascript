// let score="33abc";

let score =true
console.log(typeof score)
console.log(typeof(score))

let valueInNumber=Number(score); // converts in to number 
console.log(typeof valueInNumber) // number

console.log(valueInNumber) //NaN


//"33" =>33
//"33abc"=>NaN

console.log(+true) // converts to number 


console.log("2"===2); // checks for datatype false  Performs type coercion, meaning it converts the operands to the same type before comparing.
console.log("2"==2); // simply checks for values true  Does not perform type coercion. It compares both the value and the type.


//________________________________________________________________________________________________________________________________________________________


// stack and heap memory 
// stack => primitive
// heap=>non primitive


//stack 

let myname="akhil"
let anothername=myname
anothername="kongonda"



console.log(myname);//akhil
console.log(anothername); // kongonda




// heap
let userone={
    email:"user@gmail.com"

}
let usertwo=userone;
usertwo.email="akhil@gmail.com"

console.log(userone.email); //akhil@email.com
console.log(usertwo.email);  //akhil@email.com

// referces 

//----------------------------------------------------------

//methods in strings
let value="akhil-kongonda"
console.log(value.length);
console.log(value.toUpperCase());

const nvalue=value.substring(0,4);
console.log(nvalue)



const newvalue=value.slice(-4,3);
console.log(newvalue)


const email="   akhil@gmail.com  "
console.log(email)
console.log(email.trim())

//replace
const url="http://local-host:3000"
console.log(url.replace('-',''));

//includes check to check substring/ keyword is present in mainstring or not 


// split  converts string to array  based on given one
let m="hello-akhil-kongonda"
arr=(m.split('-'));
console.log(arr)














 




