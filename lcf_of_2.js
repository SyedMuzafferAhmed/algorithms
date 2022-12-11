var a = 20, b = 25
var lcf = lcf(a,b)
console.log(lcf)

function lcf(a,b){
    var min = a > b ? b : a
    for(var i = 2;i<=min;i++){
        if(a%i==0&&b%i==0)
            return i
    }
    return 1
}