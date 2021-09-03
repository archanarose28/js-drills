function flatten(elements) {
  // Flattens a nested array (the nesting can be to any depth).
  // Hint: You can solve this using recursion.
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let flatenarray = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      flatenarray = flatenarray.concat(flatten(elements[i]));
    } else {
      flatenarray.push(elements[i]);
    }
  } //for
  return flatenarray;
}

module.exports = {
  f1: flatten,
};
