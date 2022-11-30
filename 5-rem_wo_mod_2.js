var divident = -100 , divisor = -101
if(divident<0)
    divident = -divident
if(divisor<0)
    divisor = -divisor
var mod = divident
while(mod>=divisor){
    mod = mod - divisor
}
console.log(mod)