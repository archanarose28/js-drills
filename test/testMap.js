const datatArr = require("../item.js").items;
const res=require("../map.js").f1
const res2=require("../map.js").f2


let computedValue=[];
computedValue=res(datatArr,res2);
//printing resultant array to console
console.log("Output Map")
console.log(computedValue)

