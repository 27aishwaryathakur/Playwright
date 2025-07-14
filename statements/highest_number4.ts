let abc=1
let xyz=9
let pqr = 0
let lmn=-8
console.log("Below is the Highest number")
if (abc > xyz && abc > pqr && abc > pqr && abc > lmn) {
    console.log(abc);
} else if (xyz > abc && xyz > pqr && xyz > lmn) {
    console.log(xyz);
} else if (pqr > abc && pqr > xyz && pqr > lmn) {
    console.log(pqr);
} else if (lmn > abc && lmn > xyz && lmn > pqr) {
    console.log(lmn);
} else {
    console.log("Fail/error occured");
} 

