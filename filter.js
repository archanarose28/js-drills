let f1=function filter(elements, cb) {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
resFiter=cb(elements);
return resFiter;
}

//test even elements or not
let f2=function callback(elem)
{
 let  res=[];
 
 for (let k = 0; k < elem.length; k++) 
      {
        if(elem[k]%2==0)  //find if every element is even
              res.push(elem[k]);
      } //for
    //console.log(res);
    return res;
  }
module.exports = {
  f1:f1,
  f2:f2};
 
 

