function getIndexToIns(arr, num) {
    // need this if you want to sort numerically in an ascending order
    // the default sorting order is alphabetical
    arr.sort((a, b) => a - b); 
    console.log(arr);
    let i = 0;
    while (num > arr[i]) {
      i++;
    }
    return i;
  }
  
  console.log(getIndexToIns([5, 3, 20, 3], 5));