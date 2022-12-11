var arr = [5,7,9,10,15,18,20]
var len = arr.length - 1
var med
if(len%2==0)
{
    med = arr[len/2]
}
else
{
    var mid = Math.trunc(len/2)
    med = (arr[mid] + arr[mid+1])/2
}
console.log(med)