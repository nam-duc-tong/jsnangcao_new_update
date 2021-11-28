// function hello(){
//     return new Promise((resolve,reject)=>{
//         // resolve("Hello");
//         reject('Error');
//     })
// }
// tuong duong
// async function hello(){
//     // return ("Hello");
//     throw "Error"
// }
// hello()
// .then(resp=>console.log(resp))
// .catch(err=>console.log(err))
// console.log(hello())

// async function wait(){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Success");
//             // reject("Error");
//         },100);
//     })
//     try{
//         let resp = await promise
//         console.log(resp);
//         return resp;
//     }
//     catch(err){
//         console.log(err);
//     }
//     console.log("Done");
// }
// async function run(){
//     let data = await wait();
//     console.log(data);
// }
// run()