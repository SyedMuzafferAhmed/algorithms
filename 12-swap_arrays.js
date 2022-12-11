var arr1 = [1,2,3,4,5,6,7,8]
var arr2 = [-1,-2,-3,-4,-5,-6,-7]
var arr1Len = arr1.length
var arr2Len = arr2.length
var maxLen = arr1Len > arr2Len ?   arr1Len: arr2Len
for(var i =0 ;i < maxLen ;i++){
    var temp
    temp = arr1[i]
    arr1[i] = arr2[i]
    arr2[i] = temp
}
arr1.splice(arr2Len)
arr2.splice(arr1Len)
console.log(arr1)
console.log(arr2)