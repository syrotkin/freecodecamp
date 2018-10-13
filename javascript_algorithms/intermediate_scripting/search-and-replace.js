/**
 * @param {string} str Sentence
 * @param {string} before Word to search for
 * @param {string} after Word to replace it with
 */
function myReplace(str, before, after) {
    let array = str.split(/[ ]/);
    let upper = /[A-Z]/;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === before) {
            array[i] = before[0].match(upper) ? capitalizeFirstLetter(after) : after;
        }
    }

    return array.join(" ");
}

function capitalizeFirstLetter(input) {
    let result = input[0].toUpperCase();
    for (let i = 1; i < input.length; i++) {
        result += input[i];
    }
    return result;
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));