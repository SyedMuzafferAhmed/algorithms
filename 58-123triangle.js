/*
12345
2345
345
45
5
*/
var n = 5
for(i = 0; i < n;i++){
    var ptn = ""
    for(j=i+1;j<=n;j++){
        ptn += j
    }
    console.log(ptn)
}