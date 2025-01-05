const accountid=12345;
let accountemail="akil@gmail.com"
var accountpassword="akil@123"
accountcity="hyd";


// accountid=3;   // gives error assignement to constant variable  

console.log(accountid);

accountemail="hari@gmail.com";
accountpassword="harish@123";
accountcity="repaka";

console.table([accountid,accountemail,accountpassword,accountcity]);


/*
prefer not to use var
because of isuue in block scope and functional scope 
*/


let accounstate;   
console.log(accounstate) // prints undefined



