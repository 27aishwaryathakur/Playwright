//LOOPS- It will execute same block of code multiple times
//FOR LOOPS
// 1.For Loop- Traditional for loop - Used when number of iterations are known
//Below will be discussed later
//2.For ..of loop= Used to iterate an iterable oject. eg Array, string 
//3.For..in loop= Used to iterate through the properties of an object

//WHILE Loop= Used in place of for loop and iterations are not known,
//  however not a good practice, used for loading pages where records are not known

//Do.. While Loop used to run the loop atleast once before checking the condition

//For Loop
//1) For loop- traditional syntax
//for (initialization;condition;increment/decrement){}
//initialization= the variable to start the execution, eg. let i=0 or let i=1
//condition= the condition to check if the loop should continue or not, when the loop should be terminated 
//eg. i<=10, when the loop reaches 11 , the loop will terminate
//increment/decrement= how many times should it be repeated eg. --i or i++ or ++i or i--
//TO PRINT 1 to 5
console.log("for loop to print 1 to 5")
let i=0
for (i;i<=5;i++)
{console.log(i)}

//infinite loop when no condition is given, it will give infinite value
//for (let i=0;;i++)
 //   {console.log(i)}

//2.While loop-initialize, while(condition), incre/dec
console.log("While loop to print 10 to 0")
let y=10
while(y>=0)
{
    console.log( y)
y--
}

//3.Do while= Initialize, do -increment/dec, while(condition), irrespective of condition it will print even if condition does not meet
console.log("Do while loop to print 15 to 30 ")
let j=15
do{
    console.log(j)
    j++
}while(j<=30)





    //Now lets check what happens when condition does not meet in above cases
//For loop
console.log("for loop to print 1 to 5 when condition does not meet")

let p=0
for (p;p<=-2;p++)
{console.log(p)}

//infinite loop when no condition is given, it will give infinite value
//for (let p=0;;p++)
 //   {console.log(p)}

//2.While loop-initialize, while(condition), incre/dec
console.log("While loop to print 10 to 0 when condition does not meet")
let t=10
while(t<=0)
{
console.log( t)
y--
}

//3.Do while= Initialize, do -increment/dec, while(condition), irrespective of condition it will print even if condition does not meet
console.log("Do while loop to print 15 to 30 when condition does not meet")
let s=15
do{
    console.log(s)
    s++
}while(s<=2)
    