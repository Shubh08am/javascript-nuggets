function makeUpperCase(value){
    console.log(value.toUpperCase()) 
}
function reverseString(values){
    console.log(values.split('').reverse().join(''));
}
function handleName(name,cb){
    const fullName = `${name} smith` 
    cb(fullName) 
}
//handleName('peter',makeUpperCase)  
//handleName('peter',reverseString)  

handleName('susan',function(values){console.log(values) }) 

//arrow operator used
handleName('susan',(values)=>{console.log(values)}) 

const btn = document.querySelector('.btn') ; 

btn.addEventListener('click',function(){
    console.log('Hello World')
})