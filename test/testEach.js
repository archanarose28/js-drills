const datatArr = require("../item.js").items;
const res = require("../each.js").f1;
console.log("Output Each");
res(datatArr, callback);
//printing resultant array to console
function callback(elem, index) {
  console.log(elem, "at index", index);
}
