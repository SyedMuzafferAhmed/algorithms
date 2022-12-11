var ch = 'z'
var chToDec = ch.charCodeAt(0)
if( (chToDec >= 65 && chToDec <= 90) || (chToDec >= 97 && chToDec <= 122) )
    console.log("character is alphabet")
else 
    console.log("character is not alphabet")