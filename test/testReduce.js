const datatArr = require("../item.js").items;
const res3=datatArr[0];
const res=require("../reduce.js").f1;
const res2=require("../reduce.js").f2;

let computedValue;
computedValue=res(datatArr,res2,res3);
//printing resultant array to console
console.log("Output Reduce")
console.log(computedValue)

