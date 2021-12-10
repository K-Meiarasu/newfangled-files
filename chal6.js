const myArray = [11, 34, 20, 5, 53, 16]; 
console.log(square(myArray))
function square(myArray){
    for(let i=0;i<myArray.length;i++){
        myArray[i]=myArray[i]*myArray[i]
    }
    return myArray
}