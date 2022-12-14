/*
5
45
345
2345
12345
*/
var n = 5
for(i = 0;i < n;i++){
    var ptn = ""
    for(j = n-i;j <=n;j++){
        ptn += j
    }
    console.log(ptn)
}