var arr = [ 5,25,10,3,55,15]
var minMax = max(arr)
console.log(minMax)

function max(arr){
    var max = arr[0]
    var min = arr[0]
    for(var i = 1;i < arr.length; i++){
        if(max < arr[i])
            max = arr[i]
        if(min > arr[i])
            min = arr[i]
    }
    return [min,max]
}