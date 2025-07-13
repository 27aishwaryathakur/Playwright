
let abcd=100
let pqrs=-10
let xyzo=0
console.log("Below is the desc order")

if ((abcd > xyzo) && (abcd > pqrs)) 
    {
    if (xyzo > pqrs)
        {
        console.log(abcd + "," + xyzo + "," + pqrs)
        }
    else 
    {
        console.log(abcd + "," + pqrs + "," + xyzo)

    }
}
else if ((xyzo > abcd) && (xyzo > pqrs)) {
    if (abcd > pqrs) {
        console.log(xyzo + "," + abcd + "," + pqrs)
    }
    else {
        console.log(xyzo + "," + pqrs + "," + abcd)

    }
}
else if ((pqrs > abcd) && (pqrs > xyzo)) {
    if ((abcd > xyzo)) {
        console.log(pqrs + "," + abcd + "," + xyzo)
    }
    else {
        console.log(pqrs + "," + xyzo + "," + abcd)

    }
}
    
  
else { console.log("Fail") }