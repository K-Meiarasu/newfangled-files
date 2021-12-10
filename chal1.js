const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll']; 
var start=1,end=4;
console.log(slice(foods,start,end))
function slice(foods,start,end){
    const modifiedArray=[];
    for(let i=start,j=0;i<end;i++,j++)
    {
        modifiedArray[j]=foods[i];
    }
    return modifiedArray
}