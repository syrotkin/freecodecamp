function reverseString(str) {
  let output = [];
  for (let i = str.length - 1; i >= 0; i--) {
    output.push(str[i]);
  }
  str = output.join('');
  return str;
}

reverseString("hello");