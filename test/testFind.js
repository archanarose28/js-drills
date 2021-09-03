const datatArr = require("../item.js").items;
const res = require("../find.js").f1;
let computedValue;
computedValue = res(datatArr, callback);
//printing resultant array to console
console.log("Output Find");
console.log(computedValue);
function callback(elem) {
  if (elem % 2 == 0) {
    //find if every element is even
    return true;
  }
}
