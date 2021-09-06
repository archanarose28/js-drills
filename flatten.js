function flatten(elements) {
  // Flattens a nested array (the nesting can be to any depth).
  // Hint: You can solve this using recursion.
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let flatenarray = [];
  function flatteningNested(elements)
  {
  for (let i = 0; i < elements.length; i++) {
    let elem=elements[i];
    if (Array.isArray(elem)) {
    //  console.log(elem);
      flatteningNested(elem);
    } else {
      flatenarray.push(elem);
    }
  } //for
}  
flatteningNested(elements);
 // console.log(flatenarray);
  return flatenarray;
}

module.exports = {
  f1: flatten,
};
