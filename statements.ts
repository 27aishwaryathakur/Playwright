//STATEMENTS
let xy= 10
//1.IF 
if (xy<100)
    {console.log("1xy is lesser than 100")}
//2.If else- Only one block of code wil be executed
if(xy<100)
    {console.log("2xy is lessser than 100")}
else
    {console.log("2xy is greater than 100")}

//3. IF else if-- Only one block of code wil be executed
if(xy<100)//true
    {console.log("3xy is lesser than 100")}
else if (xy==10) //-- this is true but already above is true hence wont be executed
    {console.log("3xy is equal to 10")}
else 
{(console.log("false"))}


//4.switch- - will check simple condition, the case value is checked only ,
//  only same data type is supported, cant support ranges, logical operators
//Case: The case should be followed by only one constant and then a semicolon. It cannot accept another variable or expression.
//Break: The break should be written at the end of the block to come out from the switch statement after executing a case block. If we do not write break, the execution continues with the matching value to the subsequent case block.
//Default: The default block should be written at the end of the switch statement. It executes when there are no case will be matched.
let grade= "B+"// B+ case will be only searched

switch (grade)  
{   
    case'A+':  
      console.log("Marks >= 90"+"\n"+"Excellent");  
      break;  //terminates the loop
  
    case'A':  
      console.log("Marks [ >= 80 and <90 ]"+"\n"+"Good");  
     break;  
  
    case'B+':  
      console.log("Marks [ >= 70 and <80 ]"+"\n"+"Above Average");  
      break;  
  
    case'B':  
      console.log("Marks [ >= 60 and <70 ]"+"\n"+"Average");  
      break;  
  
    case'C':  
      console.log("Marks < 60"+"\n"+"Below Average");  
      break;  
  
    default:  
        console.log("Invalid Grade.");  
}  
//5.Nested If