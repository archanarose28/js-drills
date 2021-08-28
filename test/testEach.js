const datatArr = require("../item.js").items;
const res=require("../each.js").f1
const res2=require("../each.js").f2

let computedValue=[];
computedValue=res(datatArr,res2);
//printing resultant array to console
console.log("Output Each")
console.log(computedValue)


