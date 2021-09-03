const datatArr = require("../item.js").items;
const res = require("../filter.js").f1;
let computedValue;
computedValue = res(datatArr, callback);
//printing resultant array to console
console.log("Output Filter");
console.log(computedValue);
//test even elements or not
function callback(elem) {
  if (elem % 2 == 0) return elem;
  else return false;
}
