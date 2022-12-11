var a = 1, b = -7, c = 10
//r = (-b ± √ (b*b - 4ac) )/2a
var r1 = (-b + ((b**2 - 4 * a * c)**(1/2)))/ (2 * a)
var r2 = (-b - ((b**2 - 4 * a * c)**(1/2)))/ (2 * a)
console.log(r1,r2)