function palindrome(str) {
  str = str.toUpperCase();
  let regex = /[\W_]/g;
  
  str = str.replace(regex, "");
  
  let half = Math.floor(str.length / 2);
  for (let i = 0, j = str.length - 1; i < half, j >= half; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }

  return true;
}


palindrome("eye");