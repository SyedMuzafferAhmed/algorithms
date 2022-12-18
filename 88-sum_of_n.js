let n = 5
let sum = 0
for(let i = 1;i <= n;i++){
    sum += i
}
console.log(sum)
//Recursion
function sumOfN(n){
    if(n == 0)
        return 0
    return sumOfN(n-1) + n
}
console.log(sumOfN(10))