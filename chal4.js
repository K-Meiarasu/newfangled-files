const numberArray = [12,324,213,4,2,3,45,4234]; 
console.log(isNonPrime(numberArray))
function isNonPrime(numberArray){
    var i,j;
    const modified=[]
    for(i=0,pos=0;i<numberArray.length;i++)
    {
        var count=1
        for(j=2;j<=numberArray[i];j++){
            if(numberArray[i]%j==0){
                count++;
            }
        }
        if(count!=2){
            modified[pos]=numberArray[i];
            pos++
        }
    }
    return modified
}