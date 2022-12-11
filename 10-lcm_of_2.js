var a = 9,b = 15
var lcm = lcm(a,b)
console.log(lcm)

function lcm(a,b){
    var min = a > b ? b : a
    var max = a < b ? b : a
    for(var i = 1;i<=max;i++){
        if((max * i)%min == 0)
            return max * i
    }
}