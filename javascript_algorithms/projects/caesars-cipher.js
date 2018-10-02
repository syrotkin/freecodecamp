function rot13(str) { // LBH QVQ VG! 
  let result = "";
  for (let i = 0; i< str.length; i++) {
      result += convert(str[i]);
  }

  return result;
}

function convert(character) {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let index = letters.indexOf(character);
    if (index !== -1) {
        return letters[(index + 13) % 26];
    }

    return character;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");


