let n = 6
let totalSum = 0
for(let i = 1;i <= n;i++){
    let sum = 0
    for(let j = 1; j <= i; j++ ){
        sum += j
    }
    totalSum += sum
}
console.log(totalSum)