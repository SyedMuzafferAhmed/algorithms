//Using eucledins formula
// a = b*q + r
var a = 102, b = 32;
   var r;
   while(r!=0)
   {     
       r = a%b;
       a = b;
       b = r;
   }
   console.log(a)