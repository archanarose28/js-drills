const datatArr = require("../item.js").items;
const res=require("../filter.js").f1
const res2=require("../filter.js").f2


let computedValue=[];
computedValue=res(datatArr,res2);
//printing resultant array to console
console.log("Output Filter")
console.log(computedValue)

