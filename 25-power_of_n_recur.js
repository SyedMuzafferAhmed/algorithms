function power(num,pwr){
    if(pwr==0)return 1
    return num * power(num,pwr-1)
}
console.log(power(5,4))