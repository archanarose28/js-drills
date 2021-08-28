let f1=function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.
    resFind=cb(elements);
    return resFind;
}
//The find() method returns the value of the first element
// in the provided array that satisfies the provided testing function. 
//If no values satisfy the testing function, undefined is returned

let f2=function callback(elem)
{
    let count=0;
    let flag=0;
    let res;
    for (let k = 0; k < elem.length; k++) 
        {
            if(elem[k]%2==0)  //find if every element is even
            {
                count+=1;
                res=elem[k];
                flag=1;
                break;

            }
        } //for
    if(flag==1)
    return res;
    if(count==0) //every odd
    {
    console.log('Undefined value!')
     return Undefined;
    }

}
module.exports = {
    f1:f1,
    f2:f2};
   
   
