
// async await
// consume/use promises

// Pending, Rejected, FulFilled 

const value = 2 

const promise = new Promise( (resolve,reject)=>{
    const random = Math.floor(Math.random*3);
    if(value===random) {
        resolve('correct')
    }
    else{{
        reject('wrong')
    }}
   // resolve('hello world')
  // reject('there was an error')
})

console.log(promise) 

// promise.then((data)=>{console.log(data)}) //for resolve 

 promise.then((data)=>console.log(data)).catch((err)=>console.log(err))//for reject  
