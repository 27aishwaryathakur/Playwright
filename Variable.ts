//variable- a temp storage where a single or multiple value can be stored
//1----------------------------VAR------------------------------------------------

var i= 10
let j = 50
const k=90
//here constant cant be used twice, below error is shown if you uncomment below line
//k=100
function add()
{
    var i= 20
    
    var i= 90  //why Var is not used -1)It allows to redeclare same variable creating chances of unexpected result
    let j = 30 // redeclaration is not allowed in let,below error is shown if you uncomment below line
    //let j = 80
    let r = 900
    const k = 40
    const t = 800
    //here constant cant be used twice, below error is shown if you uncomment below line
    //k= 50
   
    var s = 90
//console.log(i,j,k)
}
add()
console.log(i)//Here answer is 10 which is global variable is correct. see below case
//-----------------------var true cond
var answer= "Typescript"

if(true){
    var answer = "Javascript"
}

console.log(answer) //why Var is not used -2)//here expecetd answer was Typescript, however on execution Javascript is given

//2--------------------------------------------LET--------------------------------
let num1=10
function sub()
    {
        let num1= 20
        console.log(num1);//local
    }
    sub()
    console.log(num1)//global
   // ----------------------------------------let true cond
    let num2=400
    
    if(true)
    { let num2= 20
        console.log(num2);//local
        }
        console.log(num2)// now this is global and hence num2=400 should be shown which is shown

//3--------------------------------------------CONST--------------------------------
const hello1=10
function sub1()
    {
        const hello1= 20
        console.log(num1);//local
    }
    sub1()
    console.log(num1)//global
   // ----------------------------------------let true cond
   const hello2=400
    
    if(true)
    { const hello2= 20
        console.log(num2);//local
        }
        console.log(num2)// now this is global and hence num2=400 should be shown which is shown



