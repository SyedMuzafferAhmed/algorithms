var str = "Denned"
str = str.toLocaleLowerCase()
var len = str.length
var j = len-1
for(var i = 0;i<len/2;i++){
    if(str.charAt(i)!=str.charAt(j--))
        break
}
if(i>=len/2)
    console.log("string is palindrome")
else
    console.log("not palindrome")