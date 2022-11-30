var read = require('readline-sync')
var num = read.questionInt("enter a number ")
for(var i = 2; i<=num; i++){
var flag = false
for (var j = 2; j<=i/2; j++)
{
    if(i%j==0)
    {
        flag= true
        break
    }
}
if(!flag)
console.log(i)
}