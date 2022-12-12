var year = 2404
if(year%4==0)
{
    if(year%100==0)
        if(year%400==0)
            console.log("It is a Leap year")
         else
             console.log("Not a leap year")
    else
        console.log("It is a Leap year")
}
else
    console.log("Not a leap year")