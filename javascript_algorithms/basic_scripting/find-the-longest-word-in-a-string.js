function findLongestWordLength(str) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      console.log('max = ' + max);
      if (count > max) {
        max = count;
      }
      count = 0;
    } else {
      console.log(str[i]);
      count++;
    }
  }
  if (count > max) {
    max = count;
  }
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");