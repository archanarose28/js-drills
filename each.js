function each( elements, cb) {
    // Do NOT use forEach to complete this function.
    // Iterates over a list of elements, yielding each in turn to the `cb` function.
    // This only needs to work with arrays.
    // You should also pass the index into `cb` as the second argument
    // based off http://underscorejs.org/#each
    for(let k = 0; k < elements.length; k++) 
    {
      elements[k]= cb(elements[k]);
    }
    return elements;
} 
function callback(elem)
{
  //console.log("entered the callback",elem)
  return elem;
}

module.exports = {
 f1:each ,
 f2:callback
};

