//Recursion
var a=0,b=1,c
function fibSeries(n){
    if(n>0)
    {
         c = a + b
         a = b
         b = c
         console.log(c)
         fibSeries(n-1)
    }
}
console.log(0+"\n"+1)
fibSeries(6)
//Loop
console.log("with Loop")
var a =0,b=1,c
console.log(0+"\n"+1)
for(var i = 0;i<6;i++){
    c = a + b
    a = b
    b = c
    console.log(c)
}
//It's obvious, Iterative method is the fastest as well as memory efficient as we store only the last two values