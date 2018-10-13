/**
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 * @param {string} str 
 */

function spinalCase(str) {
    let result = "";
    let uppercase = /[A-Z]/;
    let separators = /[ _-]/;
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(uppercase) !== null) {
            if (result.length !== 0 && result[result.length - 1] !== "-") {
                result += "-";
            }
            result += str[i].toLowerCase();
        } else if (str[i].match(separators) !== null) {
            result += "-";
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));