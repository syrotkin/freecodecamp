function mutation(arr) {
    let string2 = arr[1].toUpperCase();
    let string1 = arr[0].toUpperCase();
    for (let i = 0; i < string2.length; i++) {
      if (string1.indexOf(string2[i]) === -1) {
        return false;
      }
    }
  
    return true;
  }
  
  mutation(["hello", "hey"]);