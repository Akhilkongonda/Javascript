function one(){
    const username="akhil";

    function two(){

        const website ="youtube";
        console.log(username); //akhil
    }


    // console.log(website);// unable to access  due to block  scope 
    two();

}
one();



//************************interesting ************************************************************ */



// console.log(addone(5));
// function addone(num){
//     return num+1;
// }

 





// //expressional function

// console.log(addtwo(5));//ReferenceError: Cannot access 'addtwo' before initialization 
// const addtwo=function(num){ // function holding in variable 
//     return num+2;
// }


// functions without calling

(function first(){
console.log("first")
})();



((num)=>{
    console.log("second",num);
})(2)











