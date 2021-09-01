function filter(elements, cb) {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  let resultFilter = [];
  for (let k = 0; k < elements.length; k++) {
    if(cb(elements[k])!=undefined)  
       resultFilter.push(elements[k]);
  }
  return resultFilter;
}
//test even elements or not
function callback(elem) {
  if (elem % 2 == 0)
    return elem;
  else
  return undefined;
}
module.exports = {
  f1: filter,
  f2: callback,
};
