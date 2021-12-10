const arr=[2, 3, 5, 10];
console.log(multiply(arr))
function multiply(arr){
    var pdt=1;
    for(let i=0;i<arr.length;i++)
    {
        pdt=pdt*arr[i]
    }
    return pdt
}