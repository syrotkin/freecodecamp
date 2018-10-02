function truncateString(str, num) {
  if (num < str.length) {
    return str.substr(0, num) + "..."
  }

  return str;
}

let truncated = truncateString("Peter Piper picked a peck of pickled peppers", 11);
console.log(truncated);