var arr = [ 15,2,15,19,21,6,58]
var sum = arr.reduce((total,value) => {
    return total + value
})
var mean = sum/arr.length
console.log(mean)