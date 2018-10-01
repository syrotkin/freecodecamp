function frankenSplice(arr1, arr2, n) {
    let result = arr2.slice(0, n);
    result = result.concat(arr1);
    result = result.concat(arr2.slice(n));
    return result;
  }
  
  let output= frankenSplice([1, 2, 3], [4, 5], 1);
  console.log(output);