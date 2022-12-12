var arr = ['a','b','c','d','e','f','g']
var len = arr.length
var j = len - 1
for(var i = 0;i < len/2;i++){
    var temp
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    j--
}
console.log(arr)