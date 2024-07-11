// 7 kyu Pull your words together, man!

//Your function should:
// Capitalise the first letter of the first word.
// Add a period (.) to the end of the sentence.
// Join the words into a complete string, with spaces.
// Do no other manipulation on the words.

function sentencify(words) {

    const firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    const sentence = words.slice(1).reduce((sentence, word) => sentence + " " + word, firstWord);
    return sentence + ".";
}

const words = ['this', 'is', 'a', 'sentence'];
console.log(sentencify(words)); 