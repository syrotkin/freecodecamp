/**
 * Translate the provided string to pig latin. 
 * Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
 * If a word begins with a vowel you just add "way" to the end.
 */
function translatePigLatin(str) {
    let vowel = /[aeiou]/; // y doesn't count?
    let result = "";
    let initialCluster = "";

    if (str[0].match(vowel) !== null) {
        return str + "way";
    }

    let i;
    for (i = 0; i < str.length; i++) {
        if (str[i].match(vowel) !== null) {
            result += str[i];
        } else {
            if (result.length == 0) {
                initialCluster += str[i];
            } else {
                result += str[i];
            }
        }
    }

    return result + initialCluster + "ay";
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("ccc"));
console.log(translatePigLatin("ccci"));
