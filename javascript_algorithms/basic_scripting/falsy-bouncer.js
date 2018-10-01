function bouncer(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (!arr[i]) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));