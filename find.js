function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.
    for (let k = 0; k < elements.length; k++) 
    {
    resFind=cb(elements[k]);
    if(resFind==true)
       return elements[k];
    }
    return undefined;
}
//The find() method returns the value of the first element
// in the provided array that satisfies the provided testing function. 
//If no values satisfy the testing function, undefined is returned
function callback(elem)
{
      if(elem%2==0)  //find if every element is even
            {
                return true;
            } 
}
module.exports = {
    f1:find,
    f2:callback};
   
   
