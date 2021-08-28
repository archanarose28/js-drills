const res=require("../flatten.js").f1;
const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

let computedValue=[];
computedValue=res(nestedArray);
//printing resultant array to console
console.log("Output Flatten")
console.log(computedValue);

