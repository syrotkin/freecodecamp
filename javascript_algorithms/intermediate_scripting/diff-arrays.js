/**
 * 
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, 
 * but not both. In other words, return the symmetric difference of the two arrays.
 * 
 * @param {Array<Object>} arr1 
 * @param {Array<Object>} arr2 
 */
function diffArray(arr1, arr2) {
    arr1.sort(comparator);
    arr2.sort(comparator);
    
    let result = [];
    result = result.concat(filterArray(arr1, arr2));
    result = result.concat(filterArray(arr2, arr1));
  
    
    return result;
  }
  
  function filterArray(inputArray, checkArray) {
    return inputArray.filter(item => checkArray.indexOf(item) === -1);
  }
  
  function comparator(a, b) {
    return a - b;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));