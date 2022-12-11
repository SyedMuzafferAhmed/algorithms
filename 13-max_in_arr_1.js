var arr = [ 5,25,10,3,55,15]
var max = max(arr)
console.log(max)

function max(arr){
    var max = arr[0]
    for(var i = 1;i < arr.length; i++){
        if(max < arr[i])
            max = arr[i]
    }
    return max
}