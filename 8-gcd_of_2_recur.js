function gcd(a,b){
    if(b==0)return a
    r = a % b
   return gcd(b,r)
}
console.log(gcd(30,45))