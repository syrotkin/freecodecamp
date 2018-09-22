function telephoneCheck(str) {
    var regex = /^1? ?(\(\d\d\d\)|\d\d\d-?) ?\d\d\d[\- ]?\d\d\d\d$/;
  return str.match(regex) !== null; 
}


// running tests
//telephoneCheck("1 555)555-5555") should return false.
//telephoneCheck("(555-555-5555") should return false.
// tests completed