
//Using temporary variable
var a = 10
var b = 15
console.log("before swap a = "+a + " b = "+b)
var temp
temp = a
a = b
b = temp
console.log("after swap a = " + a + " b = " + b)


//Using + and -
var a = 10
var b = 15
console.log("before swap a = "+a + " b = "+b)
a = b - a // b = (a = b) - (b - a)
b = b - a
a = b + a  
console.log("after swap a = " + a + " b = " + b)

//Using * and /
var a = 10
var b = 15
console.log("before swap a = "+a + " b = "+b)
a = a * b
b = a / b
a = a / b
console.log("after swap a = " + a + " b = " + b)

//Using ^
var a = 10
var b = 15
console.log("before swap a = "+a + " b = "+b)
a = a ^ b
b = a ^ b
a = a ^ b
console.log("after swap a = " + a + " b = " + b)

//Using * and / in oneline

var a = 10
var b = 15
console.log("before swap a = "+a + " b = "+b)
a = (a * b) / (b = a)
console.log("after swap a = " + a + " b = " + b)