let promise = new Promise(function(resolve,reject) {
    // setTimeout(function() {
    //     resolve("OK")
    // },1000)

    // setTimeout(()=>resolve('Chay duoc roi'),100);
    setTimeout(()=>reject('ERROR'),200);
})
promise.then(function(resp){
    console.log(resp);
},(err)=>{
    console.log(err);
})

promise.then((resp)=>{
    console.log(resp);
    return resp;
}).catch((err)=>{
    console.log(err);
    throw err;
}).then((data)=>{
    console.log("Data "+data);
}).catch((e)=>{
    console.log("Error "+e);
})