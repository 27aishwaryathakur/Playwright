//operators are mathematical symbols 
//1.Arithmetic operators- mathematical operators
//2.Comparison operator- greater than, equal - this will return either true or false values
//3.Logical operators -2 diff conditions
//4.Assignment operators - == eual to or != 


//1.Arithmetic operators- mathematical operators
//1. Addition- Used to Add numbers as well as concatinate a string i.e join a string
let add1=20
console.log("add1=",add1)
let add2=80
console.log("add2=" ,add2)
console.log("add1+add2= "+(add1+add2))
console.log("The answer is "+(add1+add2) )
//2. Subtraction
console.log ("add1-add2="+(add1-add2))
//3)Multiply
console.log ("add1*add2= "+ (add1*add2))
//4)Division
console.log ("add1/add2="+(add1/add2))
//5)Modulus- returns the remainder of division operation
console.log ("add2%add1="+(add2%add1))
//6)Exponential-5**2==5^2
console.log("2**3="+(2**3) )//2^3== 2*2*2


//7)Increment- (++) will increase the value by 1
// Pre increment ++A= action will be performed after the value will be incremented
let num=10
console.log("num= ",num)
console.log("++10 1st time= " ,++num)
console.log("++10 2nd time= " ,++num)
console.log("++10 3rd time= " ,++num)


// Post increment A++= action will be performed first and then the value will be  incremented
let nums2=10
console.log("num2= ", nums2)
console.log("10++ 1st time= " ,nums2++) //10++= 10, temp 11
console.log("10++ 2nd time= " ,nums2++)//10++=11,temp 12
console.log("10++ 3rd time= " ,nums2++)//10++=12,temp 13
console.log("10++ 4th time= " ,nums2++)//10++=13,temp 14

console.log("++10= " ,++nums2)//++10=14+1=15
console.log("++10= " ,++nums2)//++10=16
console.log("++10= " ,++nums2)//17

console.log("10++", nums2++)//17, temp 18

//similarly for decrement --10,10--
console.log("--10",--nums2)//17
console.log("--10",--nums2)//16
console.log("10--",nums2--)//16
console.log("10--",nums2--)//15

//==============================================================
//2.Comparison operators- compares and returns value as a boolena result i.e true or false
//==, 
// !=, 
// >,
// <,
// >=,
// <=,
//=== strictly equal and inequal- it will check values and data types are same or not
let b="15"
let ab =15
let char="fifteen"

if (ab==b)
{console.log("TRUE ab==b")} //here even when data type is different still it compares type coercion

if (ab===b)
{console.log("ab===b")}

if(ab==char)
{
    console.log("ab==char")

}
else
{console.log("ab!==char")}

if (nums2==10)
    {
        console.log("nums2==10 equal")
    }
    else
        {console.log("nums2==10 not equal")}


        //=============================================================
//3. Logical Operator
//And &&- Both should be true then true or False
//T&F=F
//F&T=F
//T&T=T
//F&F=F
    /////////////////////////////////////////////////////
//OR || Either of the value is true then true or fals
//T|F=T
//F|T=T
//T|T=T
//F|F=F
////////////////////////////////////////////////////
//NOT !

console.log((10>5) && (1>5)) //T&&F = F
console.log((10>5) || (1>5)) //T||F=T
console.log(!(10>5) || (1>5))//NOT= F
///////////////////////////////////////////
//4.Assignment Operator =, +=,-=,*=,/= this will add/sub/multiply/divide and assign at the same time

let x=80
console.log("x =",x) 
console.log("x+= 10",x+=10 )//x+10=90
console.log("x/=",x/=10)//x/10=9 as 90 is latest value of x
