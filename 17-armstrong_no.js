var num = 371
var temp = num 
var sum = 0
while(temp > 0){
    var digit = temp%10
    sum += digit**3
    temp = Math.trunc(temp/10)
}
if(sum == num)
    console.log("number is armstrong")
else
    console.log("number is not armstrong")