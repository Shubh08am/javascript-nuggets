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
handleName('peter',makeUpperCase)  
handleName('peter',reverseString)  

