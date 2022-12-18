let n = 5
let sum = 0
for(i = 1;i<=n;i++){
    var fact = 1
    for(j = 1;j<=i;j++){
        fact *= j
    }
    sum += fact/i
}
console.log(sum)