function filter(elements, cb) {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  let resultFilter = [];
  for (let k = 0; k < elements.length; k++) {
    if (cb(elements[k]) != false) resultFilter.push(elements[k]);
  }
  return resultFilter;
}

module.exports = {
  f1: filter,
};
