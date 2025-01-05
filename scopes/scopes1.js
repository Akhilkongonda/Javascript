
// var c=300; // global scope 
{ } // scope


let a=300;
if (true) {

    let a = 10;
    const b = 20;
    var c = 30;
    console.log("inner ",a)// 10
}


// console.log(a); // block scope 
// console.log(b); // block scope 
console.log(c); // 30 confusion in 30 and 300 
console.log("outer ",a) // 300









