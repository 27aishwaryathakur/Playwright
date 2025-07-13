//7)Increment- (++) will increase the value by 1
// Pre increment ++A= action will be performed after the value will be incremented
let nu=10
console.log("num= ",nu)
console.log("++10 1st time= " ,++nu)
console.log("++10 2nd time= " ,++nu)
console.log("++10 3rd time= " ,++nu)


// Post increment A++= action will be performed first and then the value will be  incremented
let num2=10
console.log("num2= ", num2)
console.log("10++ 1st time= " ,num2++) //10++= 10, temp 11
console.log("10++ 2nd time= " ,num2++)//10++=11,temp 12
console.log("10++ 3rd time= " ,num2++)//10++=12,temp 13
console.log("10++ 4th time= " ,num2++)//10++=13,temp 14

console.log("++10= " ,++num2)//++10=14+1=15
console.log("++10= " ,++num2)//++10=15+1=16
console.log("++10= " ,++num2)//16+1=17

console.log("10++", num2++)//17, temp 18

//similarly for decrement --10,10--
console.log("--10",--num2)//value of num2 now is 18, hence 18-1=17
console.log("--10",--num2)//16
console.log("10--",num2--)//16
console.log("10--",num2--)//15