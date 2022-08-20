let  leapyear = (curryear) => (curryear % 100 === 0) ? (curryear % 400 === 0) : (curryear % 4 === 0);

let ans = leapyear(2016);

if(ans)
{
    console.log("Yes");
}
else
{
    console.log("No");
}
// console.log(leapyear(1987));
// console.log(leapyear(2008));
// console.log(leapyear(2005));
// console.log(leapyear(1999));