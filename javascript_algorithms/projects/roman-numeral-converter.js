function convertToRoman(num) {
  let str = num.toString();
  let length = str.length;
  let powerOfTenCounter = length - 1;
  let result = "";
      
  for (let i = 0; i < length; i++) {
    let digit = parseInt(str[i]);
    let character = convertDigit(digit, powerOfTenCounter);
    result += character;
    powerOfTenCounter--;
  }
  
  console.log(result);
  return result;
}

// assumes that 3999 is the largest number.
function convertDigit(digit, powerOfTenCounter) {
   switch (digit) {
     case 0: 
        return "";
     case 1:
        switch (powerOfTenCounter) {
          case 0:
            return "I";
          case 1:
            return "X";
          case 2: 
            return "C";
          case 3:
            return "M";
          default:
            return "";
        }
      case 2:
        return convert(1, powerOfTenCounter) + convert(1, powerOfTenCounter);
      case 3:
        return convert(1, powerOfTenCounter) + convert(1, powerOfTenCounter) + convert(1, powerOfTenCounter);
      case 4:
        switch (powerOfTenCounter) {
          case 0:
            return "IV";
          case 1:
            return "XL";
          case 2: 
            return "CD";
          case 3:
            return "MMMM";
          default:
            return "";
        }
      case 5:
      switch (powerOfTenCounter) {
        case 0:
          return "V";
        case 1:
          return "L";
        case 2: 
          return "D";
        case 3:
          return "MMMMM";
        default:
          return "";
      }
      case 6:
      switch (powerOfTenCounter) {
        case 0:
          return "VI";
        case 1:
          return "LX";
        case 2: 
          return "DC";
        case 3:
          return "MMMMMM";
        default:
          return "";
      }
      case 7:
      switch (powerOfTenCounter) {
        case 0:
          return "VII";
        case 1:
          return "LXX";
        case 2: 
          return "DCC";
        case 3:
          return "MMMMMMM";
        default:
          return "";
      }
      case 8:
      switch (powerOfTenCounter) {
        case 0:
          return "VIII";
        case 1:
          return "LXXX";
        case 2: 
          return "DCCC";
        case 3:
          return "MMMMMMMM";
        default:
          return "";
      }
      case 9:
      switch (powerOfTenCounter) {
        case 0:
          return "IX";
        case 1:
          return "XC";
        case 2: 
          return "CM";
        case 3:
          return "MMMMMMMMM";
        default:
          return "";
      }
   }
}

convertToRoman(36);