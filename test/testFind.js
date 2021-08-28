const datatArr = require("../item.js").items;
const res=require("../find.js").f1
const res2=require("../find.js").f2


let computedValue;
computedValue=res(datatArr,res2);
//printing resultant array to console
console.log("Output Find")
console.log(computedValue)


