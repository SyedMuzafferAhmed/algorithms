var read = require('readline-sync')
var num = read.questionInt("enter a number ")
var flag = false
for (var i = 2; i<=num/2; i++)
{
    if(num%i==0)
    {
        flag= true
        break
    }
}
if(flag)
console.log("number is not prime")
else
console.log("number is prime")