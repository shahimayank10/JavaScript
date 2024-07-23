// -------------1st method-------------------
// const promiseone=new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log("1st promise");
// resolve();
// },2000)
// });

// promiseone.then(function(){
//     console.log("promise 1 resolve");
// })


// -------------2nd method-------------------

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("2nd promise");
//         resolve();
//     },3000)
// }).then(()=>{
//     console.log("promise 2 resolve");
// })

// -------------3rd method-------------------

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("3rd promise");
//         resolve({name:"Mayank" , email:"shahimayank10@gmail.com"});
//     },3000)
// }).then((res)=>{
//     console.log(res);
//     console.log(res.name);
//     console.log("3rd promise done");
// })

// -------------4th method-------------------

// Chaining

// const promisefour= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const error=true;
//         if(!error){
//             console.log("4th promise");
//             resolve({name:"Mayank" , email:"shahimayank10@gmail.com"});
//         }   
//         else{
//             reject("ERROR:somthing went wrong");
//         }   
//     },3000);
// })

// promisefour
// .then((res)=>{
//     console.log(res);
//     return res.email;
// })
// .then((res)=>{
//     console.log(res);           //mail as it is return in above function
// })
// .catch((rej)=>{
//    console.log(rej);
// })
// .finally(()=>{
//     console.log("promise either resolved or rejected");
// })

// =================================================
// -------------async-await method-------------------
// =================================================

// const promisefive= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const error=false;
//         if(!error){
//             console.log("5th promise");
//             resolve({name:"Mayank" , email:"shahimayank10@gmail.com"});
//         }   
//         else{
//             reject("ERROR:somthing went wrong");
//         }   
//     },3000);
// });

// async function consumepromisefive(){
//     try {
//         const response= await promisefive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
//     }
    
//     consumepromisefive();

// ------------------------------------------

// async function apifetch(){
// try {
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json();
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }
// }

// apifetch();

// ---------------------------------------

fetch('https://jsonplaceholder.typicode.com/users')
.then((respone)=>{
    const data=respone.json();
    return data;
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})


