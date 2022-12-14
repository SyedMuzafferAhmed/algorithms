/*
54321
4321
321
21
1
*/
var n =5
for(i = 0;i < n;i++){
    var ptn = ""
    for(j = n-i ;j >= 1;j--){
        ptn += j
    }
    console.log(ptn)
}