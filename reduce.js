let f1=function reduce(elements, cb, startingValue) {
    // Do NOT use .reduce to complete this function.
    // How reduce works: A reduce function combines all elements into a single value going from left to right.
    // Elements will be passed one by one into `cb` along with the `startingValue`.
    // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
    // `startingValue` is the starting value. 
    // If `startingValue` is undefined then make `elements[0]` the initial value.
   resReduce= cb( elements ,startingValue);
   return resReduce;
} 

//function to add all elements from left to right.....
let f2=function callback(elem,startingV)
{
  let  addRes=startingV;
  for (let k = 1;k< elem.length;k++) {
       addRes  = addRes+ elem[k];
  }
  //console.log(addRes);
  return addRes;
}

module.exports = {
  f1:f1,
  f2:f2};
 
