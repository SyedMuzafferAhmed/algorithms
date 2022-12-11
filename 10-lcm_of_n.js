var arr = [5,6,8,10,12]
var temp = lcm(arr[0],arr[1])
for(var i = 2;i<arr.length;i++){
    temp = lcm(temp,arr[i])
}
console.log(temp)

function lcm(a,b){
    var min = a > b ? b : a
    var max = a < b ? b : a
    for(var i = 1;i<=max;i++){
        if((max * i)%min == 0)
            return max * i
    }
}