//Using eucledins formula
// a = b*q + r
var arr = [ 9,18,81,27]
var temp = gcd(arr[0],arr[1])
for(var i =2;i<arr.length;i++){
   temp = gcd(temp,arr[i])
}
console.log(temp)

function gcd(a,b){
   var r;
   while(r!=0)
   {     
       r = a%b;
       a = b;
       b = r;
   }
   return a
}