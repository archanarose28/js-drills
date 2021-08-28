# **JS Drills: Higher Order Functions**

## **Instructions to run the project**

1. Copy the repository link.
2. Open the VS Code editor.
3. Using clone "repo-link" command clone the repository.
4. Running the following files inside a folder called **test** will give the ouput of each problem respectively:<br><br>
    testEach.js<br>
    testFilter.js<br>
    testFind.js<br>
    testFlatten.js<br>
    testMap.js<br>
    testReduce.js<br>


Input Data : Open the file item.js for Problem 1 to Problem 5.

## **Problems in Details:**

### **Complete the following functions by recreating as per the specified condition in the question.**

* Problem 1:

function each(elements, cb) {<br>
    // Do NOT use forEach to complete this function.<br>
    // Iterates over a list of elements, yielding each in turn to the `cb` function.<br>
    // This only needs to work with arrays.<br>
    // You should also pass the index into `cb` as the second argument<br>
    // based off http://underscorejs.org/#each<br>
}
* Problem 2:

function map(elements, cb) {<br>
    // Do NOT use .map, to complete this function.<br>
    // How map works: Map calls a provided callback function once <br>//for each element in an array, in order, and functionructs <br>//a new array from the res .<br>//
    // Produces a new array of values by mapping each value in list through<br>// a transformation function (iteratee).<br>
    // Return the new array.<br>
}
* Problem 3:

function reduce(elements, cb, startingValue) {<br>
    // Do NOT use .reduce to complete this function.<br>
    // How reduce works: A reduce function combines all elements<br>// into a single value going from left to right.<br>
    // Elements will be passed one by one into `cb` along with the `startingValue`.<br>
    // `startingValue` should be the first argument passed to `cb` and the array element <br>// should be the second argument.
    `startingValue` is the starting value.<br>//  If `startingValue` is undefined then make `elements[0]` the initial value.<br>
}
* Problem 4:

function find(elements, cb) {<br>
    // Do NOT use .includes, to complete this function.<br>
    // Look through each value in `elements` and pass each element to `cb`.<br>
    // If `cb` returns `true` then return that element.<br>
    // Return `undefined` if no elements pass the truth test.<br>
}
* Problem 5:

function filter(elements, cb) {<br>
    // Do NOT use .filter, to complete this function.<br>
    // Similar to `find` but you will return an array of all elements that passed the truth test
    // Return an empty array if no elements pass the truth test<br>
}
* Problem 6:

Input Data :
const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

  function flatten(elements) {<br>
    // Flattens a nested array (the nesting can be to any depth).<br>
    // Hint: You can solve this using recursion.<br>
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];<br>
  }
