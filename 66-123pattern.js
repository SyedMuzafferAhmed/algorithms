/*
11111
2222
333
44
5
*/
var n = 5
for(i = 0;i < n;i++){
    var ptn = ""
    for(j = 1;j <= n-i;j++){
        ptn += i +1
    }
    console.log(ptn)
}