var divident = -100 , divisor = 101
var quotient
var res = 0
if(divident<0)
    divident = -divident
if(divisor<0)
    divisor = -divisor
for(var i = 0; res<=divident; i++)
{
    res = i * divisor
    if(res <= divident)
        quotient = i
}
var remainder = divident - (quotient * divisor)
console.log(remainder)