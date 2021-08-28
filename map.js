let f1=function map(elements, cb) {
    // Do NOT use .map, to complete this function.
    // How map works: Map calls a provided callback function once for each element in an array,
    // in order, and functionructs a new array from the res .
    // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
    // Return the new array.

resMapped=cb(elements);
return resMapped;
}

let f2=function callbackmap(elem)
{
    const res=[];

    for (let k = 0; k < elem.length; k++) {
        
      res.push(elem[k]*2);  //iterating through each element and doubles it and create it in new array maintaining order.
    }
    return res;
}

module.exports = {
  f1:f1,
  f2:f2};
 
 