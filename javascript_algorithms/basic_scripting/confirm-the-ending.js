function confirmEnding(str, target) {

  for (let i = 0; i < str.length; i++) {
    if (str.substr(i) === target) {
      return true;
    }
  }

  return false;
}

confirmEnding("Bastian", "n");