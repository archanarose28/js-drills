const datatArr = require("../item.js").items;
const res=require("../map.js").f1
let computedValue;
computedValue=res(datatArr,callbackmap);
//printing resultant array to console
console.log("Output Map")
console.log(computedValue)
//callback function
function callbackmap(elem)
{
    return elem*2;  
}

