const promiseOne=new Promise((resolve,reject)=>{
    // do any async task example db calls

    setTimeout(()=>{
        console.log('executing promiseOne');
        resolve('promiseOne resolved');
    },2000);
});

//consume the promise 
//.then is  a function that takes a callback function as an argument
// the callback function will be called when the promise is resolved
// the callback function will receive the resolved value as an argument
//it is directly bined with resolve function of the promise object  
// the callback function will be called only once
// the callback function will be called only when the promise is resolved
// the callback function will not be called when the promise is rejected
// the callback function will be called only once

promiseOne.then((value)=>{
    console.log(value)
});

//--------------------------------------------------------------------------------------------
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('executing promiseTwo');
        resolve('promiseTwo resolved');
    },2000);

}).then((value)=>{
    console.log(value);
}
);

//--------------------------------------------------------------------------------------------
const promiseThree=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log('executing promiseThree');
        resolve({name:'akhil',age:25});
    }
    ,2000);
}
);

promiseThree.then((value)=>{
    console.log(value);
}   
);

//--------------------------------------------------------------------------------------------
const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       let error=false;
         if(!error){
              resolve('promiseFour resolved');
            }
            else{
                reject('promiseFour rejected');
            }
    },2000);
});

promiseFour.then(function(value){
    return value;
}
).then((value)=>{
    console.log(value);
}
).catch((error)=>{
    console.log(error);
}

).finally(()=>{
    console.log('finally block');
}
);


//--------------------------------------------------------------------------------------------
//using async and await
//async function always returns a promise
//await keyword can only be used inside async function
//await keyword can be used to wait for the promise to be resolved
//await keyword can be used to wait for the promise to be rejected
//await keyword can be used to wait for the promise to be pending
//await keyword can be used to wait for the promise to be settled
//await keyword can be used to wait for the promise to be fulfilled
//await keyword can be used to wait for the promise to be settled
//await keyword can be used to wait for the promise to be rejected
//await keyword can be used to wait for the promise to be pending
//similar to .then() method in promises but more readable and easy to understand
//similar to .catch() method in promises but more readable and easy to understand
//similar to .finally() method in promises but more readable and easy to understand
//similar to try catch block in synchronous code

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('executing promiseFive');
        resolve ('promiseFive resolved');
    }
    ,2000);
}
);



async function consumePromiseFive(){
    try{
        const response=await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log('finally block');
    }
}

consumePromiseFive();


//--------------------------------------------------------------------------------------------
async function gettAllPosts(params) {
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts');

        const data=await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log('finally block');
    }
}
gettAllPosts();
//fetch api is used to make http requests
//fetch api is used to get data from the server
//fetch api is used to post data to the server
//fetch api is used to put data to the server
//fetch api is used to delete data from the server
//fetch api is used to make http requests
//here fetch is a simple promise based api that is used to make http requests

//--------------------------------------------------------------------------------------------



fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json();
}
).then((data)=>{
    console.log(data);
}
).catch((error)=>{
    console.log(error);
}
).finally(()=>{
    console.log('got finally block');
}
);

