/*
        1 
      2 3 4 
    5 6 7 8 9 

*/
let i, space, rows, k = 0;
rows = 4
let x = 0
for (i = 1; i <= rows; ++i, k = 0) {
    let ptn = ""
   for (space = 1; space <= rows - i; ++space) {
      ptn += "  "
   }
   while (k != 2 * i - 1) {
      ptn += ++x + " "
      ++k;
   }
   console.log(ptn)
}
  