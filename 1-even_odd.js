var readLineSync = require('readline-sync')
var num =  readLineSync.questionInt('enter number ')
if(num%2 == 0)
console.log("number is even")
else 
console.log("number is odd")