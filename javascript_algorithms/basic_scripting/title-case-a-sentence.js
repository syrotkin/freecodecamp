function titleCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }

  return result;
}

let result = titleCase("sHoRt AnD sToUt");
console.log(result);