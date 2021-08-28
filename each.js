let f1= function each( elements, cb) {
console.log("function each entered")

    // Do NOT use forEach to complete this function.
    // Iterates over a list of elements, yielding each in turn to the `cb` function.
    // This only needs to work with arrays.
    // You should also pass the index into `cb` as the second argument
    // based off http://underscorejs.org/#each
   cb(elements);
   return elements;

} //2


let f2=function callback(elem)
{
  console.log("entered the callback")
  for(let k = 0; k < elem.length; k++) 
  {
    elem[k]=elem[k]*3; //iterating through array and returning tripled values
  }
}

module.exports = {
 f1:f1,
 f2:f2};

