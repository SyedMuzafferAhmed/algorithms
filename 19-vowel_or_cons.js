var ch = 'o'
var ascii = ch.charCodeAt(0)
var vowels = ['A','a','E','e','I','i','O','o','U','u']
var consonant = vowels.some((value) => {
    return value == ch
})
if(consonant)
    console.log("character is vowel")
else
    console.log("character is consonant")