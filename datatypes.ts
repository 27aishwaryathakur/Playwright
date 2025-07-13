//the type of data that is stored inside a variable is stated as datatype of a variable

//2 types of datatypes

//1. Primitive data type - Only 1 value

// 1.Number: INTeger or Flaoting i.e 12, 12.5,-13 etc-------syntax below----
let data5: number = 10 ;//type annotation-- here data type is mentioned
let data1: String = "Rahul" 
let data3= 10 ;// type inference-- here data type is not mentioned and if you hover you will see number


// 2.string,  //combination or sequence of characters
//single quote - ''
let alphabet= 'A'
let sentence='hello miss'

//double quote- ""
let name1 = "aishwarya"
//backtick---when we want to call a variable inside a strng eg. ${variable}
let backtick= `hello`
console.log(typeof alphabet,typeof sentence,typeof name1, typeof backtick); // this will show type of datatype
//below will fail to print when quotes are used
// let greet= "The sentence used here is : ${backtick}"
let greet= `The sentence used here is : ${backtick}`
console.log(greet)




//3. boolean i.e true/false 1/0
let result = true //on hovering you will see datatype as boolean selected
console.log(10>5)

// 4.null- No value
let a = null // can be used to verify is some value is null 
if (a ==null)
{
 
    console.log("True")
}



//5. undefined , no defined
let jet
console.log(jet) //undefined


//Below are also for TS but not JS
// 6. any(TS) ,- its a special keyword used to redeclare a variable while migrating for JS to TS
let value1 : any =10 // if any is removed, value1=90 will throw error
value1=90 // error is thrown

value1="True"

// 7.union(TS) allows a variable to hold multiple datat types

let namenumber : number | String
namenumber= 10
namenumber="Aishwarya"
//If you see here this wont work if u uncomment below 2 lines , union helps 
//let value00=10
//value00="True"

//2. NonPrimitive data type- Multiple values. Eg. Array, objects and functions