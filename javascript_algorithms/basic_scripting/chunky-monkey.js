/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  let result = [];
  let counter = 0;
  let subArray = [];
  for (let i = 0; i < arr.length; i++) {
     subArray.push(arr[i]);
     counter++;
     if (counter == size) {
       result.push(subArray);
       counter = 0;
       subArray = [];
     }
  }

  if (subArray.length !== 0) {
    result.push(subArray);
  }

  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));