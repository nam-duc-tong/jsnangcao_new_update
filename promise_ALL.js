// let promise1 = new Promise(function(resolve,reject){
//     setTimeout(()=>resolve("OK 1"),100);
//     // setTimeout(()=>reject("Error 1"),100);
// });
// let promise2 = new Promise(function(resolve,reject){
//     setTimeout(()=>resolve("OK 2"),200);
//     // setTimeout(()=>reject("Error 2"),200);
// });
// let promise3 = new Promise(function(resolve,reject){
//     // setTimeout(()=>resolve("OK 3"),300);
//     setTimeout(()=>reject("Error 3"),300);
// })
// Promise.all([promise1, promise2, promise3]).then(
//     (resp)=>{
//         console.log(resp);
//     }
// ).catch((err)=>{
//     console.log(err);
// });