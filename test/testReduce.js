const datatArr = require("../item.js").items;
const res3=datatArr[0];
const res=require("../reduce.js").f1;
let computedValue;
computedValue=res(datatArr,callback,res3);
//printing resultant array to console
console.log("Output Reduce");
console.log(computedValue);
//function to add all elements from left to right.....
function callback(startingV,elem) {
    return elem + startingV;
  }

